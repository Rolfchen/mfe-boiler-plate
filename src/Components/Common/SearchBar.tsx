import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    width: "100%",
    marginBottom: 15,
    position: "relative",
  },
  iconSearch: {
    color: theme.palette.grey[300],
    position: "absolute",
    left: 18,
    top: 15,
  },
  inputSearch: {
    paddingLeft: 58,
    height: 46,
    padding: 10,
    fontSize: 17,
    border: "none",
    borderRadius: 4,
    float: "left",
    width: "100%",
    "&::placeholder": {
      color: theme.palette.grey[300],
      fontStyle: "normal",
    },
    "&:focus": {
      outline: "none",
    },
  },
  inputButton: {
    border: "none",
    borderLeft: "1px solid #DEDEDE",
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    color: theme.palette.primary.main,
    backgroundColor: "white",
    position: "absolute",
    fontSize: 17,
    cursor: "pointer",
    height: 36,
    top: 16,
    right: 62,
    width: 84,
  },
  inputButtonIcon: {
    paddingRight: 10,
  },
  inputButtonText: {
    fontWeight: "bold",
    position: "absolute",
    bottom: 8,
  },
}));

export type SearchBarProps = {
  placeholder?: string;
  label?: string;
  onSearch: (searchText: string) => void;
};

const SearchBar = ({
  placeholder = "Search for business name, ABN, email or contact person ...",
  label = "Search",
  onSearch,
}: SearchBarProps) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleClickAndEnter = () => {
    onSearch(searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClickAndEnter();
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={classes.inputContainer} data-testid={"SearchBar-test"}>
      <div className={classes.iconSearch}>
        <SearchIcon fontSize={"large"} />
      </div>
      <input
        className={classes.inputSearch}
        type="text"
        placeholder={placeholder}
        value={searchInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        data-testid={"SearchBar-input"}
      />
      <button
        type="submit"
        className={classes.inputButton}
        onClick={handleClickAndEnter}
      >
        <span className={classes.inputButtonIcon}>
          <SearchIcon fontSize={"large"} />
        </span>
        <span className={classes.inputButtonText}>{label}</span>
      </button>
    </div>
  );
};

export default SearchBar;
