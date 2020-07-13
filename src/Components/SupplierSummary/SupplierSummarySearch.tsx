import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import classnames from "classnames";
import { SearchBar, FilterButton } from "../Common";

const useStyles = makeStyles((theme) => ({
  resetFlexPadding: {
    padding: 0,
  },
  searchBarButton: {
    paddingRight: 20,
  },
  filterContent: {
    padding: 50,
  },
}));

type Props = {
  onSearch: (searchText: string) => void;
};

const SupplierSummarySearch = ({ onSearch }: Props) => {
  const classes = useStyles();

  const handleOnSearch = (search: string) => {
    onSearch(search);
  };

  return (
    <Box display={"flex"} p={1} className={classes.resetFlexPadding}>
      <Box
        p={1}
        flexGrow={1}
        className={classnames(
          classes.resetFlexPadding,
          classes.searchBarButton
        )}
      >
        <SearchBar onSearch={handleOnSearch} />
      </Box>
      <Box p={1} className={classes.resetFlexPadding}>
        <FilterButton label="Filter">
          <div className={classes.filterContent}>this is the children</div>
        </FilterButton>
      </Box>
    </Box>
  );
};

export default SupplierSummarySearch;
