import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

export type ContactPersonProps = {
  name: string;
  role?: string;
};

const useStyles = makeStyles((theme) => ({
  contentText: {
    color: theme.palette.grey[900],
    fontSize: 14,
    fontWeight: "bold",
  },
  contentSubText: {
    color: theme.palette.grey[400],
    fontSize: 12,
    fontWeight: "normal",
  },
}));

const ContactPerson = ({ name, role }: ContactPersonProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        className={classes.contentText}
        data-testid="ContactPerson-name"
      >
        {name}
      </Typography>
      {role && (
        <Typography
          className={classes.contentSubText}
          data-testid="ContactPerson-role"
        >
          {role}
        </Typography>
      )}
    </React.Fragment>
  );
};

export default ContactPerson;
