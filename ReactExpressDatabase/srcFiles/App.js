import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [data, setdata] = useState([]);
  let [showData, setshowData] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9900/getAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      // .then((data)=>{setdata(data);});
      .then((data) => { setdata(data); })
      .then(data => console.log(data));

  }, []);

  const nowshowData = () => {
    setshowData(true);
  }

  return (
    <div className="App">
      <button onClick={nowshowData}>Show Data</button>

      {showData && (
        <ol>
          {data.map((item) => (<li key={item.userid}>ID: {item.userid}, Password: {item.password}, Email: {item.email}</li>))}
        </ol>)}
    </div>
  );
}

export default App;
