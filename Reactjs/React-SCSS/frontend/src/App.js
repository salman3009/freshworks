import './App.css';
import { useState,useEffect} from 'react';
import axios from 'axios';
import {payloadCreation} from './helpers';

function App() {

  const[getList,setList] = useState(null);

  useEffect(()=>{
       axios.get('http://localhost:8080/api/v1/tasks').then((response)=>{
           // console.log(response.data.data);
            setList(response && response.data && response.data.data[0]);
       }).catch((err)=>{
             console.log(err);
       })
  },[])

  useEffect(()=>{
    //  console.log(getList);
     if(getList){
      console.log(payloadCreation(getList));
     }
  },[getList])

  return (
    <div className="App">
         
    </div>
  );
}

export default App;
