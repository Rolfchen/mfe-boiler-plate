import React, { useState } from "react";
import {
  Button,
  Popover,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

export type FilterButtonProps = {
  label: string;
  children?: any;
};

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "capitalize",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    padding: "18px 50px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  buttonIcon: {},
  buttonLabel: {
    paddingLeft: 8,
  },
  popoverCustom: {
    marginTop: 20,
    overflow: "visible",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 35,
      right: 35,
      borderBottom: "20px solid white",
      borderRight: "20px solid transparent",
      borderLeft: "20px solid transparent",
      borderTop: "20px solid transparent",
    },
  },
  popoverEmptyContent: {
    padding: "0px 100px",
  },
}));

const FilterButton = ({ label, children }: FilterButtonProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const [buttonEl, setButtonEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setButtonEl(event.currentTarget);
  };

  const handleClose = () => {
    setButtonEl(null);
  };

  const isOpen = Boolean(buttonEl);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        className={classes.buttonRoot}
        onClick={handleClick}
      >
        <FilterListIcon />
        {!isSmallScreen && <span className={classes.buttonLabel}>{label}</span>}
      </Button>
      <Popover
        id={"filter-button"}
        open={isOpen}
        anchorEl={buttonEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          root: classes.popoverCustom,
        }}
      >
        {children ? (
          <div data-testid={"filter-button-content"}>{children}</div>
        ) : (
          <div className={classes.popoverEmptyContent} />
        )}
      </Popover>
    </React.Fragment>
  );
};

export default FilterButton;
