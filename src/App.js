import React, { useState } from 'react';
import './App.css';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image.png';
import ListGroup from "react-bootstrap/ListGroup";
import { animals } from './animals';
const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    event.target.value = '';
  };
  
  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  function deleteAllHandler() {
    selectedImages.forEach((image) => URL.revokeObjectURL(image));
    setSelectedImages([]);
  }
  const [showSuccess, setShowSuccess] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setFullscreen(true);
    setShowSuccess(true);
    // You may want to reset the success message after a delay
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000); // 3000 milliseconds (3 seconds)
    };
    const [searchTerm, setSearchTerm] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const employees = [
    { id: 1, name: 'Employee 1' },
    { id: 2, name: 'Employee 2' },
    // Add more employees as needed
  ];

   const [searchTermNumber, setSearchTermNumber] = useState('');
  const [showOptionsNumber, setShowOptionsNumber] = useState(false);

  // Assuming you have a similar structure for employee numbers
  const employeeNumbers = [
    { id: 1, number: '1234' },
    { id: 2, number: '4567' },
    // Add more numbers as needed
  ];
   const filteredEmployeeNumbers = employeeNumbers.filter(number =>
    number.number.startsWith(searchTermNumber)
  );
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAnimals = animals.filter(animals =>
    animals.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section  style={{
        backgroundImage:`url(${image})`,
        width: '1528px',
        height: '742px'
      }} >
      <div className="Search" >
  
    </div>
      <img
        style={{
          width: 212,
          height: 199,
          left: 209,
          top: 150,
          position: "absolute",
          background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
          borderRadius: 143,
        }}
        src="https://media.discordapp.net/attachments/898169277436264450/1206773841473441792/image.png?ex=65dd3ab8&is=65cac5b8&hm=c1887033cd35c8308acdf64209f50508d970a70b9b0f97e822f9facc2f6bf9af&=&format=webp&quality=lossless&width=530&height=497"
        alt="Background"
      />
      <div className='button-group'>
        <label style={{ width: 174, height: 45, left: -70, top: 600, position: "absolute",textAlign: "center" }}>
          + Add Images
          <input
            type='file'
            name='images'
            onChange={onSelectFile}
            multiple
            accept='image/png, image/jpeg, image/webp'
          />
        </label>

        
          <button onClick={deleteAllHandler} style={{ width: 174, height: 45, left: 1000, top: 600, position: "absolute",textAlign: "center" }} className='delete-all-button'>
            Delete All Images
          </button>
        
      </div>

      <div className='images-container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        {selectedImages.length > 0 &&
          selectedImages.map((image, index) => (
            <div key={image} className='image-wrapper'>
              <button className='delete-button' onClick={() => deleteHandler(image)}>
                <img src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png"style={{ width: 30, height: 30, left: 10, position: "absolute" }} />
              </button>
              <img src={image} height={80} width={80} alt='upload' />
              
            </div>
          ))}
      </div>
      
      {/* Dropdown for Employee name */}
      <div className="searchable-dropdown"
        
        style={{ width: 362, height: 45, left: 134, top: 410, position: "absolute" }}>
      <Form.Control
        type="text"
        placeholder="Employee Name..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowOptions(true);
        }}
        onFocus={() => setShowOptions(true)}
        onBlur={() => {
          // Optionally hide options after a delay or on selection
          setTimeout(() => setShowOptions(false), 200);
        }}
      />
      {showOptions && (
        <ListGroup className="position-absolute w-100">
          {filteredAnimals.map(animals => (
            <ListGroup.Item
              key={animals.id}
              action
              onClick={() => {
                setSearchTerm(animals.name);
                setShowOptions(false);
              }}
            >
              {animals.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
      
    {/* Dropdown for Employee number */}
      <div className="searchable-dropdown" style={{ width: 362, height: 45, left: 134, top: 500, position: "absolute" }}>
        <Form.Control
          type="text"
          placeholder="Employee number..."
          value={searchTermNumber}
          onChange={(e) => {
            setSearchTermNumber(e.target.value);
            setShowOptionsNumber(true);
          }}
          onFocus={() => setShowOptionsNumber(true)}
          onBlur={() => {
            // Optionally hide options after a delay or on selection
            setTimeout(() => setShowOptionsNumber(false), 200);
          }}
        />
        {showOptionsNumber && (
          <ListGroup className="position-absolute w-100">
            {employeeNumbers.map((number) => (
              <ListGroup.Item
                key={number.id}
                action
                onClick={() => {
                  setSearchTermNumber(number.number);
                  setShowOptionsNumber(false);
                }}
              >
                {number.number}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
      
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
              <Button onClick={handleButtonClick} variant="primary" style={{
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
      
    </section>
  );
};

export default App;

