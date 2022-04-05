import React from "react";
import { useState, useEffect } from "react";
import download from "downloadjs";
import axios from "axios";
import { API_URL } from "../../utlis/constants";
import "./Noteslist.css";
const NotesList = () => {
  const [filelist, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/getAllFiles2`);
        setErrorMsg("");
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);
  const downloadfile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${API_URL}/download2/${id}`, {
        responseType: "blob",
      });
      const split = path.split("/");
      const filename = split[split.length - 1];
      setErrorMsg("");
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMsg("Error while downloading file. please try again");
      }
    }
  };

  return (
    <div className="notesfile-container">
      <h1>You can download notes from here</h1>
      <div className="notesname">
        <table className="files-name">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Download Fille</th>
            </tr>
          </thead>
          <tbody>
            {filelist.length > 0 ? (
              filelist.map(
                ({ _id, title, description, file_path, file_mimetype }) => (
                  <tr key={_id}>
                    <td className="file-title">{title}</td>
                    <td className="file-description">{description}</td>
                    <td>
                      <a
                        href="#/"
                        onClick={() =>
                          downloadfile(_id, file_path, file_mimetype)
                        }
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                {" "}
                <td colSpan={3} style={{ fontWeight: 300 }}>
                  No Files Found. Add more
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default NotesList;
