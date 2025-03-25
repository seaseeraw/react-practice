// import React from 'react';
// import Abouts from './pages/About'; // Ensure this matches your file name
// import Uplift from './components/uplift';


// function App() {
//   return (
//     <div>
//       <Abouts />
//       <Uplift />
//     </div>
//   );
// }

// export default App;


// App.js


// import React from "react";
// import Card from "./components/card"; // Import the Card component

// const App = () => {
//   return (
//     <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
//       <h1>Card Component Example</h1>
      
//       {/* First Card with text */}
//       <Card>
//         <h2>Card 1</h2>
//         <p>This is the content inside the first card. You can put anything here.</p>
//       </Card>

//       {/* Second Card with an image */}
//       <Card>
//         <h2>Card 2</h2>
//         <img 
//           src="https://via.placeholder.com/150" 
//           alt="Placeholder"
//           style={{ width: "100%", borderRadius: "8px" }}
//         />
//       </Card>

//       {/* Third Card with another heading and paragraph */}
//       <Card>
//         <h2>Card 3</h2>
//         <p>This is a third card. You can even put other components inside the card!</p>
//       </Card>
//       <Card>
//         THIS IS FINAL
//       </Card>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import Learn from './components/learn'
const App = () => {
  return (
    <div style={ {background:"blue", margin:"20px"}}>
      <Learn>
        <h1>This is first</h1>hello</Learn>
      <Learn><button>This is second</button>hello 2</Learn>
      <Learn><h3>This is third</h3>hello 3</Learn>
    </div>
  )
}

export default App