import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import classnames from "classnames";
import SupplierSummaryTable from "./SupplierSummaryTable";
import { ViewTypeButtons } from "../Common";
import { ViewTypeItem } from "../Common/Types";
import { SupplierDetailType } from "./Types";

const useStyles = makeStyles((theme) => ({
  boxTable: {
    backgroundColor: "white",
    borderRadius: 4,
    marginTop: 20,
  },
  resetFlexPadding: {
    padding: 0,
  },
  searchBarButton: {
    paddingRight: 20,
  },
  viewByText: {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 25,
    paddingRight: 16,
  },
  viewBySection: {
    borderBottom: "1px solid #DEDEDE",
    paddingTop: 16,
    paddingBottom: 16,
  },
  contentSection: {
    padding: 24,
  },
}));

type Props = {
  selectedViewBy: string;
  viewTypes: Array<ViewTypeItem>;
  supplierDetails: Array<SupplierDetailType>;
  onViewBySelection?: (selected: string) => void;
};
const SupplierSummaryList = ({
  selectedViewBy,
  viewTypes,
  supplierDetails,
  onViewBySelection,
}: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.boxTable}>
      <Box
        display={"flex"}
        alignItems="center"
        p={1}
        className={classnames(classes.resetFlexPadding, classes.viewBySection)}
      >
        <Box p={1}>
          <Typography variant="h5" className={classes.viewByText}>
            View by
          </Typography>
        </Box>
        <Box p={1} className={classes.resetFlexPadding}>
          <ViewTypeButtons
            selected={selectedViewBy}
            viewTypes={viewTypes}
            onClick={onViewBySelection}
          />
        </Box>
      </Box>
      <Box className={classes.contentSection}>
        <SupplierSummaryTable
          viewBy={"business"}
          supplierDetails={supplierDetails}
        />
      </Box>
    </Box>
  );
};

export default SupplierSummaryList;
