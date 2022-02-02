import logo from './logo.svg';
import './App.css';
import Header from "./All component/header"
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import axios from "axios"
function App() {
  const [data, setDate] = useState();
  const handle = () => {
    

    axios
      .get(`http://40.114.7.55:8081`)
      .then((res) => {
        // history.push("http://localhost:3000/store");
        console.log(res.data);
        setDate(res.data)

       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Header/>
      <h1>Hello ahsan from React</h1>
      <Button variant='contained' onClick={()=>handle()}>Click here
      </Button>
      <Typography>
        {data}
      </Typography>
    </div>
  );
}

export default App;
