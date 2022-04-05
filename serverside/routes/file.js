const path = require("path");
const express = require("express");
const multer = require("multer");
const Router = express.Router();
const File = require("../model/file");
const File2 = require("../model/file2");
const File3 = require("../model/file3.js");
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./files");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
});
const upload2 = multer({
  storage: multer.diskStorage({
    destination(req, file2, cb) {
      cb(null, "./files2");
    },
    filename(req, file2, cb) {
      cb(null, `${new Date().getTime()}_${file2.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file2, cb) {
    if (!file2.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
});
Router.post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    try {
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype,
      });
      await file.save();
      res.send("file uploaded successfully.");
    } catch (error) {
      res.status(400).send("Error while uploading file. Try again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);
Router.post(
  "/upload2",
  upload2.single("file"),
  async (req, res) => {
    try {
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      const file2 = new File2({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype,
      });
      await file2.save();
      res.send("file uploaded sucessfully");
    } catch (error) {
      res.status(400).send("Error while uploading file. Try again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);
const upload3 = multer({
  storage: multer.diskStorage({
    destination(req, file3, cb) {
      cb(null, "./files3");
    },
    filename(req, file3, cb) {
      cb(null, `${new Date().getTime()}_${file3.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file3, cb) {
    if (!file3.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
});
Router.post(
  "/upload3",
  upload2.single("file"),
  async (req, res) => {
    try {
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      const file3 = new File3({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype,
      });
      await file3.save();
      res.send("file uploaded sucessfully");
    } catch (error) {
      res.status(400).send("Error while uploading file. Try again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);
Router.get("/getAllFiles", async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
});
Router.get("/getAllFiles2", async (req, res) => {
  try {
    const files2 = await File2.find({});
    const sortedByCreationDate = files2.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
});
Router.get("/getAllFiles3", async (req, res) => {
  try {
    const files3 = await File3.find({});
    const sortedByCreationDate = files3.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
});
Router.get("/download/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      "Content-Type": file.file_mimetype,
    });
    res.sendFile(path.join(__dirname, "..", file.file_path));
  } catch (error) {
    res.status(400).send("Error while downloading file. Try again later.");
  }
});
Router.get("/download2/:id", async (req, res) => {
  try {
    const file2 = await File2.findById(req.params.id);
    res.set({
      "Content-Type": file2.file_mimetype,
    });
    res.sendFile(path.join(__dirname, "..", file2.file_path));
  } catch (error) {
    res.status(400).send("Error while downloading file. Try again later.");
  }
});
Router.get("/download3/:id", async (req, res) => {
  try {
    const file3 = await File3.findById(req.params.id);
    res.set({
      "Content-Type": file3.file_mimetype,
    });
    res.sendFile(path.join(__dirname, "..", file3.file_path));
  } catch (error) {
    res.status(400).send("Error while downloading file. Try again later.");
  }
});
module.exports = Router;
