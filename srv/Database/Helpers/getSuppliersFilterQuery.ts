import { ISuppliersFilter } from "../Interfaces/ISuppliersFilter";

/**
 * Target Collection: SearchIndex | PBUDetails
 */

const { ASSETS_DOMAIN = "" } = process.env;

type GetSuppliersFilterQuery = (filter?: ISuppliersFilter) => object[];

export const getSuppliersFilterQuery: GetSuppliersFilterQuery = (filter) => {
  const { search, size = 10, pg = 1 } = filter || {};

  // Conduct search from search index.
  const searchPipeline = search
    ? [
      {
        $match: {
          $text: {
            $search: search
          }
        }
      }
    ]
    : [];
  // Joins back to business details*
  // If no "search", then this query should target "PBUDetails" collection.
  const joinPBUDetailsPipeline = search
    ? [
      {
        $lookup: {
          from: "PBUDetails",
          foreignField: "pbuId",
          localField: "pbuId",
          as: "pbu"
        }
      },
      {
        $unwind: "$pbu"
      },
      {
        $replaceRoot: {
          newRoot: "$pbu"
        }
      }
    ]
    : [];

  // Slicing occurs here
  const skipPipeline = pg && pg > 1
    ? [
      {
        $skip: size * (pg - 1)
      }
    ]
    : [];
  const limitPipeline = [
    {
      $limit: size
    }
  ];

  // Joins with the business details collection
  const joinBusinessPipeline = [
    {
      $lookup: {
        from: "BusinessDetails",
        localField: "orgId",
        foreignField: "orgId",
        as: "business"
      }
    },
    {
      $unwind: {
        path: "$business",
        preserveNullAndEmptyArrays: true
      }
    }
  ];
  // Joins with the user collection
  const joinUsersPipeline = [
    {
      $lookup: {
        from: "Users",
        let: {
          pbuId: "$pbuId"
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$$pbuId", "$pbus.pbuId"]
              }
            }
          }
        ],
        as: "user"
      }
    },
    {
      $unwind: "$user"
    },
  ];

  const projection = [
    {
      $project: {
        _id: 0,
        businessId: "$orgId",
        businessName: "$business.name",
        abn: "$business.abn",
        supplierType: "N/A",
        user: {
          firstName: "$user.firstName",
          lastName: "$user.lastName",
          name: "$user.fullName",
          email: "$user.email",
          businessRole: "$user.businessRole",
          phone: "$user.phone",
          mobile: "$user.mobile"
        },
        joinDate: "$user.addTime",
        status: 1,
        osaStatus: 1,
        osaFeedback: {
          $concat: [
            `${ASSETS_DOMAIN}`,
            "$osaFeedback"
          ]
        },
        osaPassed: 1,
        trainingStatus: 1,
        auditStatus: 1,
        certStatus: 1,
        crops: 1,
        controlledSites: 1,
        physicalAddress: "$business.physicalAddress",
        postalAddress: "$business.postalAddress",
        subtypes: 1,
        employmentProfile: 1
      }
    }
  ];

  return [
    ...searchPipeline,
    ...joinPBUDetailsPipeline,
    ...skipPipeline,
    ...limitPipeline,
    ...joinBusinessPipeline,
    ...joinUsersPipeline,
    ...projection
  ];
}

export default getSuppliersFilterQuery;
