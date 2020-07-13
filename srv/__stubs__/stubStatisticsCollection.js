const batchIds = ["A000001", "A000002", "A000003"];

export const stubStatisticsCollection = [
  {
    orgId: "TEST1",
    abn: "10000000001",
    name: "Test Company",
    type: "SUPPLIER_STATS",
    supplierStats: [
      {
        pbuId: "PBU001",
        pbuName: "My PBU 1",
        osaPassed: true,
        trainingComplete: false,
        auditComplete: false,
        certified: false,
        openFindingAlerts: 2,
        controlledSites: [
          {
            siteId: "0001",
            publicSiteId: "P0001",
            name: "My Site",
            auditStatus: "COMPLETE",
            certStatus: "",
          },
          {
            siteId: "0002",
            publicSiteId: "P0002",
            name: "My Second Site",
            auditStatus: "PENDING",
            certStatus: "",
          },
        ],
      },
      {
        pbuId: "PBU002",
        pbuName: "My PBU 2",
        osaPassed: true,
        trainingComplete: true,
        auditComplete: true,
        certified: true,
        openFindingAlerts: 0,
        controlledSites: [
          {
            siteId: "0003",
            publicSiteId: "P0003",
            name: "Compeleted Site",
            auditStatus: "COMPLETE",
            certStatus: "CERTIFIED",
          },
        ],
      },
      {
        pbuId: "PBU0003",
        pbuName: "My PBU 3",
        osaPassed: false,
        trainingComplete: false,
        auditComplete: false,
        certified: false,
        openFindingAlerts: 0,
        controlledSites: [],
      },
      {
        pbuId: "PBU004",
        pbuName: "My PBU 4",
        osaPassed: true,
        trainingComplete: true,
        auditComplete: true,
        certified: false,
        openFindingAlerts: 4,
        controlledSites: [
          {
            siteId: "0005",
            publicSiteId: "P0005",
            name: "Compeleted Site",
            auditStatus: "COMPLETE",
            certStatus: "CERTIFIED",
          },
          {
            siteId: "0006",
            publicSiteId: "P0006",
            name: "Some site",
            auditStatus: "PENDING",
            certStatus: "",
          },
        ],
      },
    ],
    batchId: batchIds[0],
    addDate: new Date("2020-06-10"),
  },
  {
    orgId: "TEST2",
    abn: "1000000002",
    name: "Test Company 2",
    type: "SUPPLIER_STATS",
    supplierStats: [
      [
        {
          pbuId: "PBU0055",
          pbuName: "My PBU 1",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: false,
          certified: false,
          openFindingAlerts: 4,
          controlledSites: [
            {
              siteId: "0003",
              publicSiteId: "P0001",
              name: "My Site",
              auditStatus: "COMPLETE",
              certStatus: "",
            },
            {
              siteId: "0002",
              publicSiteId: "P0002",
              name: "My Second Site",
              auditStatus: "PENDING",
              certStatus: "",
            },
          ],
        },
        {
          pbuId: "PBU0056",
          pbuName: "My PBU 2",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: true,
          certified: true,
          openFindingAlerts: 0,
          controlledSites: [],
        },
        {
          pbuId: "PBU00057",
          pbuName: "My PBU 3",
          osaPassed: false,
          trainingComplete: false,
          auditComplete: false,
          certified: false,
          openFindingAlerts: 0,
          controlledSites: [],
        },
      ],
    ],
    batchId: batchIds[0],
    addDate: new Date("2020-06-10"),
  },
  {
    orgId: "TEST3",
    abn: "1000000003",
    name: "Test Company 3",
    type: "SUPPLIER_STATS",
    supplierStats: [
      [
        {
          pbuId: "PBU0025",
          pbuName: "My PBU 8",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: false,
          certified: false,
          openFindingAlerts: 4,
          controlledSites: [
            {
              siteId: "0003",
              publicSiteId: "P0001",
              name: "My Site",
              auditStatus: "COMPLETE",
              certStatus: "",
            },
            {
              siteId: "0002",
              publicSiteId: "P0002",
              name: "My Second Site",
              auditStatus: "PENDING",
              certStatus: "",
            },
          ],
        },
        {
          pbuId: "PBU0056",
          pbuName: "My PBU 2",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: true,
          certified: true,
          openFindingAlerts: 0,
          controlledSites: [],
        },
        {
          pbuId: "PBU00057",
          pbuName: "My PBU 3",
          osaPassed: true,
          trainingComplete: false,
          auditComplete: false,
          certified: false,
          openFindingAlerts: 0,
          controlledSites: [],
        },
        {
          pbuId: "PBU0075",
          pbuName: "My PBU 8",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: true,
          certified: false,
          openFindingAlerts: 3,
          controlledSites: [
            {
              siteId: "00012",
              publicSiteId: "P00015",
              name: "My Site 3",
              auditStatus: "COMPLETE",
              certStatus: "COMPLETE",
            },
            {
              siteId: "00024",
              publicSiteId: "P00024",
              name: "My Site 4",
              auditStatus: "PENDING",
              certStatus: "",
            },
            {
              siteId: "00044",
              publicSiteId: "P00028",
              name: "Completed Site",
              auditStatus: "COMPLETE",
              certStatus: "CERTIFIED",
            },
          ],
        },
        {
          pbuId: "PBU0059",
          pbuName: "My PBU 22",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: true,
          certified: true,
          openFindingAlerts: 0,
          controlledSites: [],
        },
        {
          pbuId: "PBU0056",
          pbuName: "My PBU 2",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: false,
          certified: false,
          openFindingAlerts: 3,
          controlledSites: [
            {
              siteId: "0000002",
              publicSiteId: "P000062",
              name: "More completed site",
              auditStatus: "INPROGRESS",
              certStatus: "",
            },
          ],
        },
      ],
    ],
    batchId: batchIds[0],
    addDate: new Date("2020-06-10"),
  },
  {
    orgId: "TEST4",
    abn: "1000000003",
    name: "Test Company 3",
    type: "SUPPLIER_STATS",
    supplierStats: [
      [
        {
          pbuId: "PBU0025",
          pbuName: "My PBU 8",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: false,
          certified: false,
          openFindingAlerts: 4,
          controlledSites: [
            {
              siteId: "0003",
              publicSiteId: "P0001",
              name: "My Site",
              auditStatus: "COMPLETE",
              certStatus: "",
            },
            {
              siteId: "0002",
              publicSiteId: "P0002",
              name: "My Second Site",
              auditStatus: "PENDING",
              certStatus: "",
            },
          ],
        },
        {
          pbuId: "PBU0056",
          pbuName: "My PBU 2",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: true,
          certified: true,
          openFindingAlerts: 0,
          controlledSites: [],
        },
        {
          pbuId: "PBU00057",
          pbuName: "My PBU 3",
          osaPassed: true,
          trainingComplete: false,
          auditComplete: false,
          certified: false,
          openFindingAlerts: 0,
          controlledSites: [],
        },
        {
          pbuId: "PBU0075",
          pbuName: "My PBU 8",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: true,
          certified: false,
          openFindingAlerts: 3,
          controlledSites: [
            {
              siteId: "00012",
              publicSiteId: "P00015",
              name: "My Site 3",
              auditStatus: "COMPLETE",
              certStatus: "COMPLETE",
            },
            {
              siteId: "00024",
              publicSiteId: "P00024",
              name: "My Site 4",
              auditStatus: "PENDING",
              certStatus: "",
            },
            {
              siteId: "00044",
              publicSiteId: "P00028",
              name: "Completed Site",
              auditStatus: "COMPLETE",
              certStatus: "CERTIFIED",
            },
          ],
        },
        {
          pbuId: "PBU0059",
          pbuName: "My PBU 22",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: true,
          certified: true,
          openFindingAlerts: 0,
          controlledSites: [],
        },
        {
          pbuId: "PBU0056",
          pbuName: "My PBU 2",
          osaPassed: true,
          trainingComplete: true,
          auditComplete: false,
          certified: false,
          openFindingAlerts: 3,
          controlledSites: [
            {
              siteId: "0000002",
              publicSiteId: "P000062",
              name: "More completed site",
              auditStatus: "INPROGRESS",
              certStatus: "",
            },
          ],
        },
      ],
    ],
    batchId: batchIds[1],
    addDate: new Date("2020-06-12"),
  },
];
