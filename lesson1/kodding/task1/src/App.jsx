import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

// input props (obj)
// output JSX

// algo
// 1 show login by defoult
// 2 after login click -hide login & show spiner for 2 sec
// 3 after 2 sec hide spinner and show Logout
// 4 after logout click hide logout & show login



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}
export default App;

//    REACT APPROACH
//  0 make a loyout
// 1 split on components
// 2 static version in react
// 3 declare state and props
// 4 write logic
