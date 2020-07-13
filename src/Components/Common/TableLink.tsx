import React from "react";
import { Link, makeStyles } from "@material-ui/core";

export type TableLinkProps = {
  href: string;
  children: any;
};

const useStyles = makeStyles((theme) => ({
  textGreen: {
    color: theme.palette.primary.main,
    fontSize: 14,
    fontWeight: "bold",
  },
}));

const TableLink = ({ href, children }: TableLinkProps) => {
  const classes = useStyles();

  return (
    <Link
      href={href}
      underline={"none"}
      variant="h6"
      className={classes.textGreen}
      data-testid="TableLink-test"
    >
      {children}
    </Link>
  );
};

export default TableLink;
