import React,{useState} from "react";

function LoginForm({Login,error}) {

    const[details,setdetails]=useState({name:"",email:"",password:''})

    const submitHandler=e=>{
        e.preventDefault()

        Login(details)
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
            {(error!=="")?(<div className="error">{error}</div>):""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={e=>setdetails({...details,name:e.target.value})} value={details.name}></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="eamil" name="email" id="email" onChange={e=>setdetails({...details,email:e.target.value})} value={details.email}></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e=>setdetails({...details,password:e.target.value})} value={details.password}></input>
        </div>
        <input type="submit" value="Login"></input>

      </div>
    </form>
  );
}

export default LoginForm;
