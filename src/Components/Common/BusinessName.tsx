import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import TableLink from "./TableLink";

export type BusinessNameProps = {
  id: string;
  name: string;
  abn?: string;
};

const useStyles = makeStyles((theme) => ({
  subText: {
    color: theme.palette.grey[400],
    fontSize: 12,
    fontWeight: "normal",
  },
}));

const BusinessName = ({ id, name, abn }: BusinessNameProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableLink href={`?id=${id}`} data-testid={"BusinessName-name"}>
        {name}
      </TableLink>
      {abn && (
        <Typography
          className={classes.subText}
          data-testid={"BusinessName-abn"}
        >
          ABN: {abn}
        </Typography>
      )}
    </React.Fragment>
  );
};

export default BusinessName;
