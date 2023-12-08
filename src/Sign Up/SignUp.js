import React, { useState } from 'react'
import "./signUp.scss"

export default function SignUp() {
 


  {/*Formlar uchun State */}
  const [firstname, setfirstname] = useState("");
  const[email, setemail] = useState("");
  const[username, setusername] = useState("");
 
  
  const[errorfirstname, seterrorFirstname] = useState(false);
  const[erroremail, seterrorEmail] = useState(false);
  const[errorusername, seterrorUsername] = useState(false);


  // Function For Errorr

  const submit = (e) => {
    
    
    console.log(errorfirstname) 
    e.preventDefault();

    if(firstname.trim() == ""){
      seterrorFirstname(true)
      return;
    } else seterrorFirstname(false)

    if(email.trim() == ""){
      seterrorEmail(true)
      console.log("sa")
      return;
    } else seterrorEmail(false)

    
    if(username.trim() == ""){
      seterrorUsername(true)
      return;
    } else seterrorUsername(false)
 
   
    
    

  }
  

  return (
    <div className="apps">
     
     <div className="container py-5">

      <div className="row justify-content-center">

      <div className="form-wrapper">
        
        <h1>Sign Up</h1>
  
        {/*Social Links*/}
        <div className="Connect-Links">
          <div className="a-link">
            
            <a href="#">
              
              Connect With Google
            </a>
            <br />

            </div>
                    
          <div className="a-link">
          <a href="#">
            
            Connect With Facebook</a>
          </div>
        </div>

        {/*Forms*/}
        <div className="form">
        <form action="">  
 
        <div className="form-state">
          <h5>Your name</h5>
      
          <input errorfirstname={errorfirstname.toString()} value={firstname} onChange={e=>setfirstname(e.target.value)} type="text" name="firstname" placeholder="Your Email" />
          {errorfirstname?
            <label className="erorr-message" >Ismingizni Kiriting</label> : ""
          }
        
        </div>
      
        <div className="form-state">
          <h5>Your name</h5>
          <input erroremail={erroremail.toString()} value={email} onChange={e=>setemail(e.target.value)} type="text" name="email" placeholder="Your Email" />
          {erroremail?
            <label className="erorr-message" >Emailingizni Kiriting</label> : ""
          }
        </div>

        <div className="form-state">
          <h5>Your username</h5>
          <input errorusername={errorusername.toString()} value={username} onChange={e=>setusername(e.target.value)} type="text" name="email" placeholder="Your Username" />
          {errorusername?
            <label className="erorr-message" >Usernamingizni Kiriting</label> : ""
          }
        </div>

      
        </form>

        </div>


        {/*Confirm Button*/}

        <div className="confirm-button">
          <button className="btn" onClick={submit}>Button</button>
        </div>

        <div className="sign-in">
          <p>Already Signed up? <a href="#">Go to Sign in</a></p>
        </div>

      </div>

  
      </div>
     </div>



      </div>
      


  )
  
  
}