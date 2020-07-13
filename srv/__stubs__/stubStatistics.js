export const stubStatistics = {
  buyerId: "TESTBUYER",
  buyerName: "Test Buyer",
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
  addDate: new Date(),
};

export default stubStatistics;
