import React, { useState } from 'react';
import './App.css';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Upload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = '';
  };

  

  
  const [showSuccess, setShowSuccess] = useState(false);
    ;

  const handleButtonClick = () => {
    // Perform any upload logic here
    // For demonstration purposes, just toggle the success message
    setShowSuccess(true);

    // You may want to reset the success message after a delay
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000); // 3000 milliseconds (3 seconds)
    };
    

  return (
    <div>
      {/* Upload */}
      <div style={{ width: 174, height: 45, left: 210, top: 600, position: "absolute" }}>
        <div
          style={{
            width: 174,
            height: 45,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#1C1C1C",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 0,
          }}
        />
              <Button onClick={handleButtonClick} variant="transparent" style={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer"
              }}>
          <div
            style={{
              width: 67,
              height: 10,
              left: 53,
              top: 12,
              position: "absolute",
              textAlign: "center",
              color: "white",
              fontSize: 14,
              fontFamily: "Kanit",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            ADD
          </div>
        </Button>
              {/* Success Modal */}
        <Modal show={showSuccess}  onHide={() => setShowSuccess(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your upload was successful.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSuccess(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Upload;

