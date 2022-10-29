import React, { Component } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LogoutIcon from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Unstable_Grid2";
import Repo from "./Repo/Repo";
import Todo from "./Todo/Todo";
import TodoDetail from "./TodoDetail/TodoDetail";
import axios from "axios";
import Card from "@mui/material/Card";
import todoReducer from "../reducers/todos";
import todoDetailReducer from "../reducers/todosDetail";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  getTodosFromStorage,
  setTodosInStorage,
  getTodosDetailFromStorage,
  setTodosDetailInStorage,
} from "../services/localStorage";
class Home extends Component {
  constructor(props) {
    super(props);

    this.props.getUserData();
    this.state = {
      isActive: true,
      repos: [],
    };

    this.submitHandler = this.submitHandler.bind(this);

    this.buttonRef = React.createRef();
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.setState(this.props.getUserData());
    axios
      .get(this.props.userData.repos_url)
      .then((response) => {
        this.setState({
          repos: response.data,
        });

        //console.log(response);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.props.getUserData();
    setTimeout(() => {
      this.setState(this.buttonRef.current.click());
    }, 500);
  }

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  getTaskId(taskId) {
    this.setState({
      taskId: taskId,
    });
  }

  render() {

    const store1 = createStore(
      todoReducer,
      getTodosFromStorage() // Get persisted state from local storage
    );

    // Persist state in localStorage
    store1.subscribe(() => {
      setTodosInStorage(store1.getState());
    });

    const store2 = createStore(
      todoDetailReducer,
      getTodosDetailFromStorage() // Get persisted state from local storage
    );

    // Persist state in localStorage
    store2.subscribe(() => {
      setTodosDetailInStorage(store2.getState());
    });

    const isActive = this.state.isActive;
    return (
      <Container fixed>
        <button className="getReposBtn" ref={this.buttonRef} onClick={this.submitHandler}>
          
        </button>
        <Button
          onClick={() => {
            localStorage.removeItem("accessToken");
            this.props.setRerender(!this.props.rerender);
          }}
          className="btnSignOut"
          variant="contained"
          endIcon={<LogoutIcon />}
          style={{ marginBottom: 10 }}
        >
          Sign Out
        </Button>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar className="appBar" position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ListRepos
              </Typography>
              <GitHubIcon />
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={12}>
            <Grid xs={5}>
              <Card className="reposCard">
                <h3 style={{ fontSize: "24px" }}>My GitHub Repos</h3>
                {this.state.repos.map((r) => (
                  <Repo key={r.id} repo={r} />
                ))}
              </Card>
            </Grid>
            <Grid xs={7}>
                {isActive ? (
                  <Provider store={store1}>
                    <Todo
                      getTaskId={(taskId) => this.getTaskId(taskId)}
                      handleToggle={this.handleToggle}
                    />
                  </Provider>
                ) : (
                  <Provider store={store2}>
                    <TodoDetail
                      getTaskId={this.state.taskId}
                      handleToggle={this.handleToggle}
                    />
                  </Provider>
                )}
              </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}
export default Home;
