import React, { useState, useRef } from "react";
import classnames from "classnames";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import { SupplierOverview, SupplierSummary } from "./MicroFrontEnd";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  section: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: `1px solid #e2e2e2`,
  },
  h1: {
    fontWeight: "bold",
    fontSize: "2em",
  },
  h2: {
    fontWeight: "bold",
    fontSize: "1.5em",
  },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography variant="h1" className={classes.h1}>
        Buyer's MicroFrontEnd Sandbox
      </Typography>
      <section className={classnames("SupplierOverview", classes.section)}>
        <Typography variant="h2" className={classes.h2}>
          Suppliers Overview Component
        </Typography>
        <SupplierOverview buyerId="5F97272F90D54473A5988166A39F1DD2" />
      </section>
      <section className={classnames("SupplierSummary", classes.section)}>
        <Typography variant="h2" className={classes.h2}>
          Supplier Summary Component
        </Typography>
        <SupplierSummary
          buyerId="5F97272F90D54473A5988166A39F1DD2"
          viewBy="crop"
        />
      </section>
    </Paper>
  );
};
