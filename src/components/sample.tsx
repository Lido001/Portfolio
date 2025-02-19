// import { useState } from "react";


// const Sample = () => {
//     const [count, setCount] = useState(0);
//     //      useEffect(() => {
//     //         if (count > 2) {
//     //             console.log("Count is greater than 2");
                   
//     //         }
//     //         else{
//     //             console.log("Count is less than 2");
//     //         }
//     // },[count]);
//   return (
//     <div>
//         <div>
//             <h1>Count: {count}</h1>
//             <h1>Count2: {count}</h1>
//             <button onClick={()=> {setCount((count) => count+1); setCount((count) => count+1); setCount((count) => count+1);}}>Increment</button>
//             <button onClick={()=> {setCount(count+1); setCount(count+1);}}>Increment</button>
//             {/* <button onClick={()=>SetCount(count-1)}>Decrement</button> */}

//         </div>
//     </div>
//   )
// }

// export default Sample;



// import { useState } from "react";

// const InputDisplay = () => {
//   // State to store the input text
//   const [text, setText] = useState("");
//   const [displayText, setDisplayText] = useState("");

//   // Function to update input text state
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//   };

//   // Function to update displayText when clicking "Add"
//   const handleAdd = () => {
//     setDisplayText(text); // Set displayText to input text
//     setText(""); // Clear input field after adding
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Enter text"
//         className="border p-2 rounded"
//       />
//       <button
//         onClick={handleAdd}
//         className="bg-green-500 text-white px-4 py-2 rounded"
//       >
//         Add
//       </button>
//       <p className="text-lg font-semibold">Output: {displayText}</p>
//     </div>
//   );
// };

// export default InputDisplay;

