import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  const todos=[
    {
    id:1,title:"uplift",completed:false
   },
   {
    id:2,title:"consumer",completed:true
   }
]
  return (
    <div className="App">
      <Counter initialCount={0} />
      {todos.map((todo)=>{
        return <Todo todo={todo}/>
      })}
    </div>
  );
}

export default App;
