import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Corrected the import statement

function Appl() {
  const [data, setUserData] = useState([]);
  const [userid, setUserId] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateUserId = (event) => {
    setUserId(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const insertUsers = (event) => {
    event.preventDefault(); // Prevent form submission and page reload

    axios.post('http://localhost:9900/insert', { userid: userid, email: email, password: password })
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
        // Clear input fields
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  function fetchdata() {
    axios.get('http://localhost:9900/getAll')
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  function DelUser(event) {
    event.preventDefault();
    var userid = prompt("Enter the ID you want to delete");
    console.log(userid);

    // Send the user ID as data in the request body
    axios.delete('http://localhost:9900/delete', { data: { userid: userid } })
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
        // Clear input fields
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const modify = (event) => {
    event.preventDefault();
    axios.put('http://localhost:9901/update', { userid: userid, emailid: email, password: password })
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
        // Clear input fields
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  return (
    <div className="App">
      <form onSubmit={insertUsers}>
        <b>User ID</b>
        <input type="text" value={userid} onChange={updateUserId} /><br />
        <b>Email ID</b>
        <input type="text" value={email} onChange={updateEmail} /><br />
        <b>Password</b>
        <input type="text" value={password} onChange={updatePassword} /><br />
        <button type="button" onClick={modify}>Modify</button>&nbsp;&nbsp;
        <button type="submit">Add</button>&nbsp;&nbsp;
        <button type="reset">Reset</button>
      </form>
      <button type="button" onClick={DelUser}>Delete</button>
      <button onClick={fetchdata}>Show</button>
      <center>
        <ul>
          {data.map((item) => (
            <li key={item.userid}>ID: {item.userid},Password: {item.password}, email: {item.email}</li>
          ))}
        </ul>
      </center>
    </div>
  );
}
export default Appl;






/*
import './App.css';
import { useEffect, useState } from 'react';
import { Axios } from 'axios';


function App() {
    let [data, setdata] = useState([]);
    let [showData, setshowData] = useState(false);
    let [userData, setUserData] = useState([]);
    const [userid, setUserId] = userState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetch("http://localhost:9901/getAll")
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

    const updateUserId = (event) => {
        setUserId(event.target.value);
    }


    const updatePassword = (event) => {
        setPassword(event.target.value);
    }


    const updateEmail = (event) => {
        setEmail(event.target.value)
    }

    const insertUser = () => {
        axios.post('http://localhost:9901/insert' , [userid,email,password]);
    }


    return (
        <div className="App">
            <center>
                <form onSubmit={}>
                    <b>User ID</b><input type="text" value={userid}
                        onChange={updateUserId} /><br />
                    <b>Password</b><input type="password" value={password}
                        onChange={updatePassword} /><b />
                    <b>Email ID</b><input type="email" value={email}
                        onChange={updateEmail} /><br />
                    <input type="submit" value="Add" />&nbsp;&nbsp;
                    <input type="reset" value="Reset" />
                </form></center>
            <button onClick={nowshowData}>Show Data</button>
            {showData && (<ol>
                {data.map((item) => (
                    <li key={item.userid}>ID: {item.userid}, Password: {item.password}, Email: {item.email}</li>
                ))}
            </ol>)}

        </div>
    );
}

export default App;
*/