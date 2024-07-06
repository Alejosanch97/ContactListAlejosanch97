import React, { useState , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/editContact.css";



export const EditContact = () => {

    const {store, actions}= useContext(Context)
console.log(store.contact);
    const [fullName,setFullName]= useState(store.contact.name)
    const [email,setEmail]= useState(store.contact.email)
    const [address,setAddress]= useState(store.contact.address)
    const [phone,setPhone]= useState(store.contact.phone)
    const [id,setId]= useState(store.contact.id)
    

    const navigate = useNavigate()
    
    function handleSubmit(e) {
        // Validación de campos vacíos
        if (!fullName.trim() || !email.trim() || !phone.trim() || !address.trim()) {
            event.preventDefault(); // Prevenir la recarga de la página al aceptar la alerta
            alert("You have a blank space, please complete the required field(s)");
            return; // Prevenir la redirección si hay campos vacíos
        }
        
        actions.editContact(fullName,email,phone,address,id);
        actions.getAllContacts();
        navigate("/");
    }
    
    return(
    
   <>
   <div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-md-6 col-sm-8">
        <div className="form-container">
        <div class="d-flex justify-content-center">
        <h1>Edit a contact</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
            <label for="exampleInputName" class="form-label">Full name</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                placeholder="Full name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
            />
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail" class="form-label">Email</label>
            <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>
            <div class="mb-3">
            <label for="exampleInputPhone" class="form-label">Phone</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputPhone"
                placeholder="Enter phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
            />
            </div>
            <div class="mb-3">
            <label for="exampleInputAddress" class="form-label">Address</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputAddress"
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />
            </div>
            <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
                Save
            </button>
            <Link to="/" class="btn btn-link">
                or get back to contacts
            </Link>
            </div>
        </form>
        </div>
        </div>
    </div>
    </div>
    </>
);}