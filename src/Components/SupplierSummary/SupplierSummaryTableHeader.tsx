import React from "react";
import { TableRow, TableCell, Typography, makeStyles } from "@material-ui/core";

export type SupplierSummaryTableHeaderProps = { viewBy: string };

const useStyles = makeStyles((theme) => ({
  tableHeadText: {
    color: theme.palette.grey[800],
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  tableHeadStyle: {
    borderBottom: "none",
  },
}));

const SupplierSummaryTableHeader = ({
  viewBy,
}: SupplierSummaryTableHeaderProps) => {
  const classes = useStyles();

  switch (viewBy) {
    case "business":
      return (
        <TableRow data-testid={"business-detail-header"}>
          <TableCell classes={{ head: classes.tableHeadStyle }}>
            <Typography variant="h6" className={classes.tableHeadText}>
              Business Name
            </Typography>
          </TableCell>
          <TableCell classes={{ head: classes.tableHeadStyle }}>
            <Typography variant="h6" className={classes.tableHeadText}>
              Supplier Type
            </Typography>
          </TableCell>
          <TableCell classes={{ head: classes.tableHeadStyle }}>
            <Typography variant="h6" className={classes.tableHeadText}>
              Contact Person
            </Typography>
          </TableCell>
          <TableCell classes={{ head: classes.tableHeadStyle }}>
            <Typography variant="h6" className={classes.tableHeadText}>
              Contact Email
            </Typography>
          </TableCell>
          <TableCell classes={{ head: classes.tableHeadStyle }}>
            <Typography variant="h6" className={classes.tableHeadText}>
              Contact Number
            </Typography>
          </TableCell>
        </TableRow>
      );
    case "certification":
    case "crop":
    case "sites":
      break;
    default:
      break;
  }
  return <React.Fragment></React.Fragment>;
};

export default SupplierSummaryTableHeader;
