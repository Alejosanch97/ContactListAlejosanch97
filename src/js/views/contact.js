import React, { Component, useContext, useEffect, useState, useSyncExternalStore } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalDelete } from "../component/modalDelete";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const [state, setState] = useState({
    view: "none",
  });
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    actions.createAgenda();
    actions.getAllContacts();
  }, []);

  function showModal() {
    setState({ view: "block" });
  }

  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-end"> {/* Changed justify-content-end */}
          <div className="col-12">
            <Link className="btn btn-success btn-sm" to="/add-contact">
              Add new contact
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex-wrap">
          {store.contacts?.map((contact) => (
            <div className="col" key={contact.id}>
              <div className="card shadow-sm h-90 mb-3">
                <div className="row g-0">
                  <div className="col-2">
                    <img
                      src="https://i.pinimg.com/564x/57/71/23/57712343579fc7b5e42a839f4a8f339d.jpg"
                      className="img-fluid rounded-circle p-3"
                      alt="..."
                    />
                  </div>
                  <div className="col-10 d-flex">
                  <div className="card-body p-1 d-flex flex-column justify-content-center">
                    <h5 className="card-title text-capitalize font-weight-bold">
                      {contact?.name}
                    </h5>
                    <p className="card-text mb-1"><i className="fa fa-map-marker"></i> {contact?.address}</p>
                    <p className="card-text mb-1"><i className="fa fa-phone"></i> {contact?.phone}</p>
                    <p className="card-text mb-0"><i className="fa fa-envelope"></i> {contact?.email}</p>
                  </div>
                  <div className="justify-content-end mt-5 me-4">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary me-2 rounded-pill"
                      onClick={() => {
                        actions.seeContact(contact);
                        navigate("/edit-contact");
                      }}
                    >
                      <i className="fa fa-pen"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger rounded-pill"
                      onClick={() => {
                        showModal();
                        actions.setContactToDelete(contact);
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalDelete stateModal={state} setModal={setState} />
    </>
  );
};