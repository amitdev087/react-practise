// import react, { useState } from "react";

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
import Home from "./Home";

function App(){
  return (
    <div className="App">
      <div className="content">
        <Home/>
      </div>
    </div>
  )
}

export default App;