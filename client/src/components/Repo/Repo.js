import React, { Component } from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { Link } from "@mui/material";

export default class Repo extends Component {
  render() {
    const repo = this.props.repo;
    return (
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Link href={repo.html_url} style={{ textDecoration: "none" }}>
          <Card className="repoCard">
            <ListItem
              secondaryAction={
                
            
                <h5>{"</>"}{repo.language}</h5>

                
              }
            >
              <ListItemText
                primary={repo.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "outline" }}
                      component="span"
                      variant="body2"
                    >
                      {repo.description}
                    </Typography>
                    <br />
                  </React.Fragment>
                }
              />
            </ListItem>
          </Card>
        </Link>
        <Divider variant="fullWidth" component="li" />
      </List>
    );
  }
}
