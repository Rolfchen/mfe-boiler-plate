import React from "react";
import { TableRow, TableCell, Typography, makeStyles } from "@material-ui/core";

import SupplierDetailType from "./Types/SupplierDetailType";
import { ContactPerson, BusinessName, TableLink } from "../Common";

export type SupplierSummaryBusinessDetailsProps = {
  detail: SupplierDetailType;
};

const useStyles = makeStyles((theme) => ({
  tableContentText: {
    color: theme.palette.grey[900],
    fontSize: 14,
    fontWeight: "bold",
  },
  tableContentCell: {
    verticalAlign: "top",
  },
}));

const SupplierSummaryBusinessDetails = ({
  detail,
}: SupplierSummaryBusinessDetailsProps) => {
  const classes = useStyles();

  const {
    id,
    name,
    abn,
    supplyType,
    contact: { contactName, contactRole, contactEmail, contactNumber },
  } = detail;

  return (
    <TableRow
      key={`business-detail-${id}`}
      data-testid={`business-detail-data-item-${id}`}
    >
      <TableCell
        component="th"
        scope="row"
        className={classes.tableContentCell}
      >
        <BusinessName id={id} name={name} abn={abn} />
      </TableCell>
      <TableCell className={classes.tableContentCell}>
        <Typography variant="h6" className={classes.tableContentText}>
          {supplyType === "direct" ? "Direct" : "Indirect"}
        </Typography>
      </TableCell>
      <TableCell className={classes.tableContentCell}>
        <ContactPerson name={contactName} role={contactRole} />
      </TableCell>
      <TableCell className={classes.tableContentCell}>
        <TableLink href={`mailto:${contactEmail}`}>{contactEmail}</TableLink>
      </TableCell>
      <TableCell className={classes.tableContentCell}>
        <Typography variant="h6" className={classes.tableContentText}>
          {contactNumber}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default SupplierSummaryBusinessDetails;
