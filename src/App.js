import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate, PostIcon } from "./Components/Post";
import { UserList } from "./Components/User";
//import { AlertSuccess, AlertDanger } from "./Components/Alert";
// import Header from "./Components/Header";
// import { Route, Switch } from "react-router-dom";
// import Home from "./Components/Pages/Home";
// import About from "./Components/Pages/About";
// import Contact from "./Components/Pages/Contact";
// import NoMatch from "./Components/Pages/NoMatch";
// import Detail from "./Components/Pages/Detail";
// import Login from "./Components/Pages/Login";
// import PrivateRoute from "./Components/PrivateRoute";
// import UserPanel from "./Components/Pages/UserPanel";
// import Axios from "axios";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   isAuthenticate: true,
//     // };
//   }

// componentDidMount() {
//   let apiToken = localStorage.getItem("api_token");

//   if (apiToken !== null) {
//     Axios.get(`http://roocket.org/api/user?api_token=${apiToken}`)
//       .then((Response) => {
//         this.setState({ isAuthenticate: true });
//       })
//       .catch((error) => {
//         this.setState({ isAuthenticate: false });
//       });
//   } else {
//     this.setState({ isAuthenticate: false });
//   }
// }
// handlelogOut() {
//   localStorage.removeItem("api_token");
//   this.setState({ isAuthenticate: false });
//   console.log("APP: " + this.state.isAuthenticate);
// }
// handleLogin() {
//   this.setState({ isAuthenticate: true });
// }

// render() {
//   return (
// <React.Fragment>
//   <Header
//     auth={this.state.isAuthenticate}
//     logout={this.handlelogOut.bind(this)}
//   ></Header>

//   <div className="conatiner">
//     <Switch>
//       <Route path="/" exact={true} component={Home} />
//       <Route path="/About" component={About} />
//       <Route path="/NoMatch" component={NoMatch} />
//       <Route path="/Detail/:id" component={Detail} />
//       <Route path="/Contact" component={Contact} />
//       <Route
//         path="/Login"
//         render={(props) => (
//           <Login
//             auth={this.state.isAuthenticate}
//             Login={this.handleLogin.bind(this)}
//             {...props}
//           />
//         )}
//       />
//       <PrivateRoute
//         path="/UserPanel"
//         component={UserPanel}
//         auth={this.state.isAuthenticate}
//       />
//     </Switch>
//   </div>
// </React.Fragment>

//       <Admin
//         dataProvider={jsonServerProvider(
//           "https://jsonplaceholder.typicode.com "
//         )}
//       >
//         <Resource name="users" list={UserList} />
//       </Admin>
//     );
//   }
// }
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
);
/* <UserPanel></UserPanel> */

/* <AlertSuccess>Hello Alert!</AlertSuccess>
      <AlertDanger>Danger alert!</AlertDanger> */
export default App;
