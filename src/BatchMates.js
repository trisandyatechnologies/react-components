import "./App.css";
import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function createBatchMate(name, address, qualification, dob, image) {
  return {
    name,
    address,
    qualification,
    dob,
    image,
  };
}

const BATCH_MATES = [
  createBatchMate(
    "Ganesh",
    "3-17, Pkpl, Mopidevi Mandal",
    "B-Com",
    "09-01-2002"
  ),
  createBatchMate(
    "Shiva",
    "3-12, Pkpl, Mopidevi Mandal",
    "B-Tech",
    "25-04-1997"
  ),
  createBatchMate(
    "Durga",
    "3-51, Pkpl, Mopidevi Mandal",
    "B-Tech",
    "16-09-1994"
  ),
  createBatchMate(
    "Tulasi",
    "3-34, Pkpl, Mopidevi Mandal",
    "B-Tech",
    "12-05-1994"
  ),
];

class BatchMates extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Grid container>
          <Grid item>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Batch Mates
                </ListSubheader>
              }
            >
              {BATCH_MATES.map((mate) => (
                <ListItemButton onClick={() => this.setState(mate)}>
                  <ListItemText
                    primary={mate.name}
                    secondary={mate.qualification}
                  />
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item>
            {this.state.name && (
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title={this.state.name}
                  subheader={this.state.dob}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://placehold.it/345x194"
                  alt={this.state.name}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {this.state.address}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BatchMates;

export function BatchMatesFn() {
  const [batchMate, setBatchMate] = useState(BATCH_MATES[0]);
  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Batch Mates
              </ListSubheader>
            }
          >
            {BATCH_MATES.map((mate) => (
              <ListItemButton onClick={() => setBatchMate(mate)}>
                <ListItemText
                  primary={mate.name}
                  secondary={mate.qualification}
                />
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item>
          {batchMate.name && (
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader title={batchMate.name} subheader={batchMate.dob} />
              <CardMedia
                component="img"
                height="194"
                image="https://placehold.it/345x194"
                alt={batchMate.name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {batchMate.address}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
