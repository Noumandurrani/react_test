import logo from "./logo.svg";
// (webpack compiled with 1 warning)//error  wen declared but can't used
import "./App.css";
import Test from "./components/Test";
import Profile from "./components/Profile";
import Pist from "./components/Pist";

function App() {
  // let isLoggedIn = true;
  // let arr = [{ name: "MERN" }, { name: "MERN" }, { name: "MERN" }];

  let userObj = {
    name: "ALi",
    city: "Islamabad",
    phone: "04304808404",
  };

  // let comp = "";
  // if (isLoggedIn) {
  //   comp = <Pist list={arr} />;
  // }
  return (
    <div className="App">
      <img src={logo} height={200} alt="img" />
      <h1>My First React App</h1>
      <button className="btn btn-success">Bootstrap</button>
      <Test></Test>
      <Profile user={userObj}></Profile>
      {/* <Pist pist={arr}></Pist>
      {comp} */}
    </div>
  );
}

export default App;
