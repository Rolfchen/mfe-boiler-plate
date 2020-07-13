import React, { useState } from "react";
import { Box } from "@material-ui/core";
import {
  SupplierSummaryList,
  SupplierSummarySearch,
} from "../Components/SupplierSummary";
import { SupplierDetailType } from "../Components/SupplierSummary/Types";

// along with viewByItems will moved to config
import ContactsIcon from "@material-ui/icons/Contacts";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import EcoIcon from "@material-ui/icons/Eco";
import BusinessIcon from "@material-ui/icons/Business";

type Props = {
  buyerId: string;
  viewBy: string;
  onSearch?: (searchText: string) => void;
  onViewBySelection?: (selected: string) => void;
};

const SupplierSummary = ({
  buyerId,
  viewBy = "business",
  onSearch,
  onViewBySelection,
}: Props) => {
  const viewByItems = [
    {
      name: "business",
      icon: <ContactsIcon />,
      label: "Business Details",
    },
    {
      name: "certificate",
      icon: <MenuBookIcon />,
      label: "Certificate Details",
    },
    {
      name: "crop",
      icon: <EcoIcon />,
      label: "Crop Details",
    },
    {
      name: "sites",
      icon: <BusinessIcon />,
      label: "Declared Sites",
    },
  ];

  const [selectedViewBy, setSelectedViewBy] = useState(viewBy);
  const [supplierDetails, setSupplierDetails] = useState<
    Array<SupplierDetailType>
  >([]);

  const handleViewByClick = (selected: string) => {
    // @NOTE: get active view by here
    setSelectedViewBy(selected);
    if (onViewBySelection) {
      onViewBySelection(selected); // to be used by dashboard
    }
  };

  const handleOnSearch = (searchText: string) => {
    // @NOTE: search request to database here
    // this is just an example
    setSupplierDetails([
      {
        id: "123",
        name: "Australia Fruit Co.",
        abn: "123 123 123 123",
        supplyType: "direct" as const,
        contact: {
          contactName: "John Smith",
          contactRole: "Program & Sales Manager",
          contactEmail: "john@australiafruit.com.au",
          contactNumber: "0425 000 000",
        },
      },
      {
        id: "456",
        name: "Joe & Liz Food Production Ltd.",
        abn: "123 123 123 123",
        supplyType: "indirect" as const,
        contact: {
          contactName: "Joe Murray",
          contactRole: "HR Manager",
          contactEmail: "j.murray@jornliz.com.au",
          contactNumber: "0425 000 000",
        },
      },
      {
        id: "789",
        name: "Heinz Co.",
        abn: "123 123 123 123",
        supplyType: "direct" as const,
        contact: {
          contactName: "Jane Smith",
          contactRole: "Sales Manager",
          contactEmail: "jane@heinz.com.au",
          contactNumber: "0425 000 000",
        },
      },
    ]);

    if (onSearch) {
      onSearch(searchText); // to be used by dashboard
    }
  };

  return (
    <Box>
      <SupplierSummarySearch onSearch={handleOnSearch} />
      <SupplierSummaryList
        selectedViewBy={selectedViewBy}
        viewTypes={viewByItems}
        supplierDetails={supplierDetails}
        onViewBySelection={handleViewByClick}
      />
    </Box>
  );
};

export default SupplierSummary;
