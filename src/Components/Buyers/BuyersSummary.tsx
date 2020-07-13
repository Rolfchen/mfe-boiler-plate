import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  makeStyles,
} from "@material-ui/core";
import classnames from "classnames";
import HelpIcon from "@material-ui/icons/Help";
import BuyersSummaryItemType from "./Types/BuyersSummaryItemType";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tablePaper: {
    boxShadow: "none",
  },
  tableCell: {
    border: "none",
  },
  dataTitle: {
    fontSize: 12,
  },
  dataText: {
    fontSize: 16,
  },
  tooltipIcon: {
    marginLeft: 10,
    color: "#B3B3B3",
    verticalAlign: "bottom",
  },
}));

export type BuyersSummaryProps = {
  summaryItems: Array<BuyersSummaryItemType>;
  [propName: string]: any;
};

const BuyersSummary = ({ summaryItems }: BuyersSummaryProps) => {
  const classes = useStyles();

  type TableCellSimpleProps = {
    children?: any;
    isTitle?: boolean;
    [propName: string]: any;
  };

  const TableCellSimple = ({
    children,
    isTitle = false,
    ...restProps
  }: TableCellSimpleProps) => {
    return (
      <TableCell
        classes={{
          root: classnames(
            classes.tableCell,
            isTitle ? classes.dataTitle : classes.dataText
          ),
        }}
        {...restProps}
      >
        {children}
      </TableCell>
    );
  };

  return (
    <TableContainer component={Paper} className={classes.tablePaper}>
      {summaryItems || summaryItems.length > 0 ? (
        <Table
          className={classes.table}
          size="small"
          aria-label="simple dense table"
        >
          <TableHead>
            <TableRow>
              <TableCellSimple></TableCellSimple>
              <TableCellSimple isTitle align="right">
                Today
              </TableCellSimple>
              <TableCellSimple isTitle align="right">
                6 months ago
              </TableCellSimple>
              <TableCellSimple isTitle align="right">
                1 year ago
              </TableCellSimple>
            </TableRow>
          </TableHead>
          <TableBody>
            {summaryItems.map((row) => (
              <TableRow key={row.title}>
                <TableCellSimple component="th" scope="row">
                  {row.title}
                  <Tooltip title={row.tooltipText} aria-label="add">
                    <HelpIcon className={classes.tooltipIcon} />
                  </Tooltip>
                </TableCellSimple>
                <TableCellSimple align="right">{row.todayData}</TableCellSimple>
                <TableCellSimple align="right">
                  {row.sixMonthsData}
                </TableCellSimple>
                <TableCellSimple align="right">
                  {row.oneYearData}
                </TableCellSimple>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>Data loading...</p>
      )}
    </TableContainer>
  );
};

export default BuyersSummary;
