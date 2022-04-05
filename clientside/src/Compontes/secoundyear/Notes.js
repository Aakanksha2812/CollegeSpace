import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import { useState, useRef } from "react";
import "./Notes.css";
import axios from "axios";
import { Navbar, Container } from "react-bootstrap";
import { API_URL } from "../../utlis/constants";
const Notes = (props) => {
  const [previewSrc, setPreviewSrc] = useState("");
  const [file, setFile] = useState(null);
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [state, setState] = useState({
    title: "",
    description: "",
  });
  const handleinputchange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const dropRef = useRef();
  const onDrop = (notesfiles) => {
    const [uploadedFile] = notesfiles;
    setFile(uploadedFile);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = "2px dashed #e9ebeb";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { title, description } = state;
      if (title.trim() !== "" && description.trim() !== "") {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("title", title);
          formData.append("description", description);
          setErrorMsg("");
          await axios.post(`${API_URL}/upload2`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          props.history.push("./noteslist");
        } else {
          setErrorMsg("please add file");
        }
      } else {
        setErrorMsg("Please enter all the field values.");
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };
  return (
    <div>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/notes">Upload Notes</Navbar.Brand>
            <Navbar.Brand href="/noteslist">Download Notes</Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      <h1>Here you can upload notes</h1>

      <Form className="search-form Notesform" onSubmit={handlesubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                name="title"
                value={state.title || ""}
                onChange={handleinputchange}
                placeholder="enter title"
              />
            </Form.Group>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ""}
                onChange={handleinputchange}
                placeholder="enter description"
              />
            </Form.Group>
          </Col>
        </Row>
        <br />
        <div className="uploadsection">
          <Dropzone
            onDrop={onDrop}
            onDragEnter={() => updateBorder("over")}
            onDragLeave={() => updateBorder("leave")}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
                <input {...getInputProps()} />
                <p>Drag and Drop file here</p>
                {file && (
                  <div>
                    <strong>Selected file:</strong>
                    {file.name}
                  </div>
                )}
              </div>
            )}
          </Dropzone>
          {previewSrc ? (
            isPreviewAvailable ? (
              <div className="image-preview">
                <img className="preview-image" src={previewSrc} alt="Preview" />
              </div>
            ) : (
              <div className="preview-message">
                <p>No Preview available for this</p>
              </div>
            )
          ) : (
            <div className="preview-message">
              <p>Image preview will be shown here after selection</p>
            </div>
          )}
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Notes;
