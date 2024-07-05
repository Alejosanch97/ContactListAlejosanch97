import React, { useState , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const AddContact = () => {
    const [fullName,setFullName]= useState("")
    const [email,setEmail]= useState("")
    const [address,setAddress]= useState("")
    const [phone,setPhone]= useState("")

    const {store, actions}= useContext(Context)
    
    const navigate = useNavigate()

    function handleSubmit() {
        
        actions.createContact(fullName,email,address,phone);
        navigate("/");
    }
    
    return(
    
   <><div className="d-flex justify-content-center"><h1>Add a new contact</h1></div>
   <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Full name</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Full name" onChange={e => setFullName(e.target.value)} value={fullName}  />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />
        </div>
        <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" id="exampleInputPhone" placeholder="Enter phone"  onChange={e => setPhone(e.target.value)} value={phone} />
        </div>
        <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter address" onChange={e => setAddress(e.target.value)} value={address} />
        </div>
        <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Save</button>
            <Link to="/">or get back to contacts</Link>
        </div>
    </form></>
);}