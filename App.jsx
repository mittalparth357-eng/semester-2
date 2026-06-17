import { useState } from "react"; 
import "./App.css"; 
function App() 
{ 
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [success, setSuccess] = useState(""); 
  const [users, setUsers] = useState([]); 

  const handleSubmit = (e) => 
  { 
    e.preventDefault(); 
    if(name === "" || email === "" || password === "") 
    { 
      setSuccess("Please fill all fields!"); 
      return; 
    } 
    const newUser = { 
      name, 
      email 

    }; 

    
    setUsers([...users, newUser]); 
    setSuccess("Registration Successful!"); 
 
    // clear fields 
 setName(""); 
    setEmail("");
    setPassword(""); 
  }; 
  return ( 
    <div className="main"> 
      <div className="container"> 
        <h1>Registration Form</h1> 
        <form onSubmit={handleSubmit}> 
          <input 
            type="text" 
            placeholder="Enter Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          /> 
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          /> 
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          /> 
          <button type="submit">Register</button> 
        </form> 
        <p className="success">{success}</p> 
        <div className="usersBox"> 
          <h2>Registered Users</h2> 
          <ul> 
            { 
              users.map((user, index) => ( 
                <li key={index}> 
                  {user.name} - {user.email} 
                </li> 
              )) 
            } 
          </ul> 
        </div> 
      </div> 
    </div> 
  ); 
} 
export default App; 