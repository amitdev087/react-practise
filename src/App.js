import React, { useState } from "react";

// function App() {
//   const list = ["Amit", "Achal", "Rahul", "Mohit", "Neeraj", "Dhanraj", "Smit"];

//   const [filteredList, setFilteredList] = useState(list);

//   const handleSearch = (event) => {
//     if (event.target.value == "") {
//       setFilteredList(list);
//       return list;
//     }

//     const filteredValues = list.filter(
//       (item) =>
//         item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
//     );
//     setFilteredList(filteredValues);
//   };

//   return (
//     <div>
//       <div>
//         Search:
//         <input name="query" type="text" onChange={handleSearch} />
//       </div>
//       <div>
//         {filteredList &&
//           filteredList.map((item, index) => <div key={index}>{item}</div>)}
//       </div>
//     </div>
//   );
// }

// export default App;
// import Home from "./Home";

// function App(){
//   return (
//     <div className="App">

//     </div>
//   )
// }

import Accordian from "./Components/Accordian";
import Slider from "./Components/Slider/Slider";

//import React, { Component } from "react";

// class App extends Component {
//   state = {
//     isCitizen: false,
//     isOver21: false,
//   };

//   render() {
//     const { isCitizen, isOver21 } = this.state;

//     this.onChange = (e) => {
//       if (e.target.type === "checkbox") {
//         this.setState({ [e.target.name]: e.target.checked });
//       }else{
//         this.setState({ [e.target.name]: e.target.value });
//       }
//     };
//     return (
//       <from>
//         <h1>Are you a citizen:{isCitizen ? "YEs" : "NO"}</h1>
//         <h1>Are you a over 21:{isOver21 ? "YEs" : "NO"}</h1>
//         <label>
//           Are you a citizen?
//           <input
//             type="checkbox"
//             checked={isCitizen}
//             name="isCitizen"
//             onChange={this.onChange}
//           ></input>
//         </label>
//         <br />
//         <label>
//           Are you a over 21?
//           <input
//             type="checkbox"
//             checked={this.state.isOver21}
//             name="isOver21"
//             onChange={this.onChange}
//           ></input>
//         </label>
//       </from>
//     );
//   }
// }

// function App(){
//   return(
// <>
// <Slider/>
// </>
//   )
// }
import LoginForm from "./Components/LoginForm";
// function App(){
//   const adminUser={
//     email:"admin@gmail.com",
//     password:"admin123"

//   }

//   const[user,setuser]=useState({name:"",email:''})
//   const[error,seterror]=useState("")

//   const  Login=details=>{
//     console.log(details,"details");
//     console.log(adminUser,"adminuser")
//     //console.log(adminUser.email,adminUser.passowrd)
//     console.log(details.email==adminUser.email)
//     console.log(details.password==adminUser.password)
//     //console.log((details.email===adminUser.email && details.passoword===adminUser.passowrd))
//     if(details.email==adminUser.email && details.password==adminUser.password){
//       console.log("logged in ");
//       setuser({
//         name:details.name,
//         email:details.email
//       });
//       seterror("")
//     }else{
//       console.log("user no tofund")
//       seterror("details do not match")
//     }
//   }

//   const Logout=() =>{
//     console.log("logout");
//     setuser({name:"",email:''})
//   }

//   return (
//     <div>
//       {(user.email!=="")?(<div className="welcome">
//         <h2>Welcome <span>{user.name}</span></h2>
//         <button onClick={Logout}>Logout</button>

//       </div>):
//       <LoginForm Login={Login} error={error}/>}
//     </div>
//   )
// }

import axios from "axios";
// function App() {
//   const [joke, setjoke] = useState("");
//   const getJoke = () => {
//     // axios
//     //   .get("https://official-joke-api.appspot.com/random_joke")
//     //   .then((response) => {
//     //     console.log(response);
//     //     setjoke(response.data.setup + "..." + response.data.punchline);
//     //   });

//     fetch("https://official-joke-api.appspot.com/random_joke")
//       .then((response) => response.json())
//       .then((data) => {
//         setjoke(data.setup + "..." + data.punchline);
//       });
//   };
//   return (
//     <div>
//       <button onClick={getJoke}>getJoke</button>
//       {joke}
//     </div>
//   );
// }

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Error  from "./Pages/Error";
function App() {
  return (
    <Router>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/profile/">Profile</Link>
        <Link to="/about">About</Link>
       </nav>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/profile/:username" element={<Profile />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
