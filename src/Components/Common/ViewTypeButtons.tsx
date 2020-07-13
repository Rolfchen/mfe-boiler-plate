import React from "react";
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import classnames from "classnames";
import ViewTypeItem from "./Types/ViewTypeItem";

export type ViewTypeButtonsProps = {
  selected: string;
  viewTypes: Array<ViewTypeItem>;
  onClick: (name: string) => void;
};

const useStyles = makeStyles((theme) => ({
  buttonItem: {
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "capitalize",
    padding: "3px 5px",
    border: "1px solid rgba(134, 177, 9, 1)",
    borderLeft: "none",
    borderRight: "none",
    "&:first-child": {
      borderLeft: "1px solid rgba(134, 177, 9, 1)",
    },
    "&:last-child": {
      borderRight: "1px solid rgba(134, 177, 9, 1)",
    },
    "&:first-child:hover": {
      borderLeft: "1px solid rgba(134, 177, 9, 1)",
      borderRight: "none",
    },
    "&:last-child:hover": {
      borderLeft: "none",
      borderRight: "1px solid rgba(134, 177, 9, 1)",
    },
    "&:hover": {
      borderLeft: "none",
      borderRight: "none",
    },
  },
  buttonItemActive: {
    backgroundColor: "#F3F7E6",
  },
  buttonIcon: {
    paddingLeft: 2,
    paddingRight: 7,
    marginTop: 5,
  },
}));

const ViewTypeButtons = ({
  selected = "business",
  viewTypes,
  onClick,
}: ViewTypeButtonsProps) => {
  const classes = useStyles();

  const handleClick = (name: string) => {
    onClick(name);
  };

  return (
    <ButtonGroup color="primary" aria-label="outlined secondary button group">
      {viewTypes.map((item) => {
        const { name, icon, label } = item;
        return (
          <Button
            key={`viewItem-${name}`}
            data-testid={`viewTypeButtons-${name}`}
            onClick={() => handleClick(name)}
            className={classnames(classes.buttonItem, {
              [classes.buttonItemActive]: selected === name,
            })}
          >
            <span className={classes.buttonIcon}>{icon}</span>
            <span>{label}</span>
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ViewTypeButtons;
