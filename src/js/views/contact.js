import React, { Component, useContext, useEffect, useState, useSyncExternalStore } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalDelete } from "../component/modalDelete";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const [state, setState] = useState ({
        view: "none"
    })
    const {store, actions}= useContext(Context)

    const navigate = useNavigate()

    useEffect(()=>{
        actions.createAgenda()
		actions.getAllContacts()
	},[]);

    function showModal() {
        setState({view: "block"})
    }


    // console.log(store.contacts);
    return(        
    <><div className="container">        
    <div className="d-flex justify-content-end">
        <Link className="btn btn-success " to="/add-contact">Add new contact</Link>
    </div>

    {store.contacts?.map((contact)=>{

return ( 
    <div className="card shadow mb-2" key={contact.id}>
    <div className="row g-0">
      <div className="col-3">
        <img src="https://i.pinimg.com/564x/57/71/23/57712343579fc7b5e42a839f4a8f339d.jpg" className="img-fluid rounded-circle p-2" alt="..."/>
      </div>
      <div className="col-9">
        <div className="card-body p-2">
          <h5 className="card-title text-capitalize">{contact?.name}</h5>
          <p className="card-text mb-1">{contact?.address}</p>
          <p className="card-text mb-1">{contact?.phone}</p>
          <p className="card-text mb-0">{contact?.email}</p>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-sm btn-outline-primary me-1" onClick={() => {
            actions.seeContact(contact);
            navigate("/edit-contact");
          }}>
            <i className="fa fa-pen"></i>
          </button>
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => {
            showModal();
            actions.setContactToDelete(contact);
          }}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
    // <Card full_name={contact.full_name} id={contact.id} address={contact.address} phone={contact.phone} email={contact.email}/>
)

})}
<ModalDelete stateModal={state} setModal={setState} />


</div>


</>
    )

};