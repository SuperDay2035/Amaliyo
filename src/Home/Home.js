import React, { useState } from 'react'
import "./Home.scss"
import account from "./Icons/girl.jpg"

import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSearchParams} from "react-router-dom";
export default function Home() {


    const [modal, setmodal] = useState(false);

    const[value,setvalue] = useState("")

    const [pagevalue, setpagevalue] = useState("")

    const [Author, setAuthor] = useState("")

    const [isHovering, setHovering] = useState(false);
    
    const [SearParams, setSearchparams] = useSearchParams();


    const [tasks, settask] = useState(
      [
        {
          title: "",
          text: "",
          page: "",
          Author: "",
          completed: true,

        }

      ]
    )
     

    const added = tasks.filter((task) => task.completed)
     
    const addTask = () =>{
       settask([...tasks, {title: value, page: pagevalue, Author: Author, completed: true}])
    }

    const removeTask = (index) => {
        const copy = [...tasks]
        copy.splice(index, 1);
        settask(copy);
    }

    const togglemodal = () => {
        setmodal(!modal)
    }

  return (
    <div>

   
      <header>

         <div className="logo-side">

          {/*Logo Search*/}
          <div className="Logo-Search">
            <svg width="40" height="40" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.9135 3.5195C12.1623 1.5803 15.0305 0.509312 18 0.5C24.0525 0.5 29.0768 5 29.6235 10.8027C33.2055 11.309 36 14.3082 36 17.9893C36 22.0302 32.6295 25.25 28.5457 25.25H8.50725C3.843 25.25 0 21.5735 0 16.9655C0 12.9987 2.8485 9.71375 6.6195 8.88125C6.94125 6.9395 8.19 5.0045 9.9135 3.5195ZM11.3827 5.22275C9.6795 6.692 8.7885 8.46275 8.7885 9.84875V10.8568L7.78725 10.967C4.644 11.3112 2.25 13.892 2.25 16.9655C2.25 20.2663 5.0175 23 8.50725 23H28.5457C31.455 23 33.75 20.723 33.75 17.9893C33.75 15.2532 31.455 12.9762 28.5457 12.9762H27.4207V11.8512C27.423 6.85625 23.238 2.75 18 2.75C15.5697 2.75971 13.2229 3.63748 11.3827 5.225V5.22275Z" fill="#6200EE"/>
            </svg>

            <div className="logo-text">
                <h5><span>Book</span> List</h5>     
            </div>
           


            <div className="Search">
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 19L14.65 14.65M9 4C11.7614 4 14 6.23858 14 9M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <input type="text" placeholder="Search For Any Training you Want" />
             
            </div>
          </div>

          {/*Account Bell*/}
     
          <div className="Account-Bell">

            <div className="Notification">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.35419 20C8.05933 20.6224 8.98557 21 10 21C11.0145 21 11.9407 20.6224 12.6458 20M16 7C16 5.4087 15.3679 3.88258 14.2427 2.75736C13.1174 1.63214 11.5913 1 10 1C8.40872 1 6.8826 1.63214 5.75738 2.75736C4.63216 3.88258 4.00002 5.4087 4.00002 7C4.00002 10.0902 3.22049 12.206 2.34968 13.6054C1.61515 14.7859 1.24788 15.3761 1.26134 15.5408C1.27626 15.7231 1.31488 15.7926 1.46179 15.9016C1.59448 16 2.19261 16 3.38887 16H16.6112C17.8074 16 18.4056 16 18.5382 15.9016C18.6852 15.7926 18.7238 15.7231 18.7387 15.5408C18.7522 15.3761 18.3849 14.7859 17.6504 13.6054C16.7795 12.206 16 10.0902 16 7Z" stroke="#151515" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </div>

            <div className="Account">
                <img src={account} alt="" />
            </div>

          </div>
         
           
           

         </div>

      </header>
           

     <section className="home" >

       <div className="Got-text">

         <h2>You've Got <span>{added.length} Task</span></h2>
         <h5>Your Task Today</h5>
       </div>

       <div className="Make-book">

         <div className="form">
           <input type="text"
                  placeholder="Enter Your Name"
                  value={SearParams.get("filter")}

                  onChange={(e) =>{
                      const filter = e.target.value
                      if(filter) {
                          setSearchparams({filter: e.target.value})
                      }else{
                          setSearchparams({})
                      }

                  }
                  }
           />
         </div>

         <div className="creat-btn">
            <button onClick={togglemodal}>Creat A Book</button>
         </div>
       </div>


     </section>

     <section className="Cards">

      

        {tasks.filter(item => {
            const filter = SearParams.get("filter")
            if(!filter){
                return true;
            }else {
                return item.title.toLowerCase().includes(filter) || item.title.toUpperCase().includes(filter)
            }
        }).map((task, index) => (
              <div className="card"  onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                  <h4>{task.title}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure nostrum est.</p>        

          <div className="datas">

            <p>{task.Author}</p>

            <div className="page">
              <p>{task.page}</p>
            </div>
          </div>

                  <div className={`stuff ${(!isHovering && "d-none") || ""}`}>

                      <div className="btn btns btn-danger" onClick={() => removeTask(index)}>
                          <FontAwesomeIcon icon={faTrash}/>
                      </div>

                      <div className="btn btns btn-pink">
                          <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                      </div>


                  </div>
              </div>

        ))}


     </section>


        {modal && (
            <section className="modals">

            <div className="overlay"></div>
   
          <div className="modal-content">
    
             <div className="main-statement">
                
                <div className="creat-state">
                <h2>Creat a book</h2>
                </div>

                <div className="close-modal">
                   <button onClick={togglemodal}>X</button>
                </div>
             </div>
  

             <div className="forms">

              <label >Title</label>
              <input value={value} type="text" placeholder="Enter title" onChange={(e) => setvalue(e.target.value)} />

              <label >Author</label>
              <input value={Author} type="text" placeholder="Enter title" onChange={(e) => setAuthor(e.target.value)} />

              <label >Cover</label>
              <input type="text" placeholder="Enter title" />

              <label >Published</label>
              <input type="text" placeholder="Enter title" />
              
              <label >Pages</label>
              <input value={pagevalue} type="text" placeholder="Enter title" onChange={(e) => setpagevalue(e.target.value)} />
             </div>

             <div className="button">
                <button className="outlined" onClick={togglemodal}>Close</button>
                <button className="submit" onClick={addTask}>Submit</button>
             </div>
  
          </div>

       
       </section>
    )}

  


    </div>
  )
}
