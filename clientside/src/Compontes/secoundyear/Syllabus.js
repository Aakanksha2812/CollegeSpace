import React, { useState } from "react";

import { Document, Page } from "react-pdf";
import { Button } from "react-bootstrap";
import pdf from "../../asstes/tt.pdf";
import "./Syllabus.css";

import axios from "axios";
export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <h1>This is Syullubus Copy</h1>
      <Button /*onClick={(e) => downloadpdf(e)}*/>Download</Button>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
