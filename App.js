import React from "react";
import ReactDOM from "react-dom";
import firebase from "./firebase";
import Inputs from "./inputs.js";
import Item from "./item";
export default class App extends React.Component {
  state = {
    posts: []
  };
  /*  componentDidMount() {
    firebase
      .database()
      .ref("users")
      .push() // id
      .set({
        hello: "world"
      });

    firebase
      .database()
      .ref("users")
      .on("value", snap => {
        this.setState({ users: snap.val() });
      });
    console.log(this.state.hello);
  }
          // <div>{Object.values(this.state.users).map(e => e)}</div>

*/
  addData(value) {
    this.setState({ posts: this.state.posts.concat({ value }) }, () =>
      console.log(this.state.posts)
    );
  }

  render() {
    return (
      <div className="App">
        <Inputs onClick={value => this.addData(value)} />
        <ul>
          {this.state.posts.map((e, i) => {
            firebase
              .database()
              .ref("posts")
              .push() // id
              .set({
                post: this.state.posts
              });

            return (
              <Item
                item={e.value}
                index={i}
                crossed={this.state.crossed}
                delete={() => {
                  this.setState({ index: i });
                  this.state.todolist.splice(i, 1);
                }}
                onClick={() => {
                  let cross = [];
                  this.state.todolist = true;
                  this.setState({
                    index: i,
                    todolist: cross
                  });
                  console.log(this.state.crossed);
                }}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




/*import React from "react";
import ReactDOM from "react-dom";
import firebase from "./firebase";
import Aloolooy from './Aloolooy.jpg'

export default class App extends React.Component {
  state = {
    users: [{}],
    pics: [{}]
  };
  componentDidMount() {
    firebase
      .database()
      .ref("pics")
      .push() // id
      .set({
        hello: Aloolooy
      });

    firebase
      .database()
      .ref("pics")
      .on("value", snap => {
        this.setState({ pics: snap.val() });
      });
    console.log(this.state.hello);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h1>{this.state.hello}</h1>
        <div>{Object.values(this.state.pics).map(e => e)}</div>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/