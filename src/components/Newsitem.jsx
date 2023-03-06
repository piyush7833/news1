import React, { Component } from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'
import '../modal.css'
const Newsitem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  let { title, description, image, newsurl, published, author, source,Modal,heading } = props;
  return (
    <div>
      <div className="card" style={{ height: "80vh", width: "20vw", marginBottom: "4vh", marginTop: "4vh" }}>
        <img src={image ? image : "https://www.niddk.nih.gov/-/media/Images/Components/Default-Social-Media-Images/News-Card.png"} style={{ height: "25vh" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: `80%`, zIndex: "1" }}>
            {source === null ? "Source : Unknown " : 'Source : ' + source}
            <span className="visually-hidden">Source</span>
          </span>
          <h5 className="card-title" style={{ height: "10vh" }}>{title} </h5>
          <p className="card-text" style={{ height: "20vh" }}>{description}</p>
          <a href={newsurl} target="blank" className="btn btn-primary btn-sm " onClick={openModal}>Read More</a>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="img"><img src={image ? image : "https://www.niddk.nih.gov/-/media/Images/Components/Default-Social-Media-Images/News-Card.png"} alt="" /></div>
                <div className="info">
                <h1>{heading}</h1>
                <p>{Modal}</p>
                </div>
              </div>
            </div>
          )}
          <p className="card-text my-2" style={{ textAlign: "center" }}><small className="text-muted">Published At : {published}</small></p>
          <p className="card-text my-2" style={{ textAlign: "center" }}><small className="text-muted">{author === null ? "Publisher : Unknown " : 'Publisher : ' + author}</small></p>
          {/* <p className="card-text my-2"><small className="text-muted"></small></p> */}
        </div>
      </div>
    </div>
  )
}

export default Newsitem
