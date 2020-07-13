import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import SupplierDetailType from "./Types/SupplierDetailType";
import SupplierSummaryTableContent from "./SupplierSummaryTableContent";
import SupplierSummaryTableHeader from "./SupplierSummaryTableHeader";

const useStyles = makeStyles((theme) => ({
  table: {},
}));

export type SupplierSummaryTableProps = {
  viewBy: string;
  supplierDetails: Array<SupplierDetailType>;
};

const SupplierSummaryTable = ({
  viewBy = "business",
  supplierDetails,
}: SupplierSummaryTableProps) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <SupplierSummaryTableHeader viewBy={viewBy} />
        </TableHead>
        <TableBody>
          <SupplierSummaryTableContent
            viewBy={viewBy}
            supplierDetails={supplierDetails}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SupplierSummaryTable;
