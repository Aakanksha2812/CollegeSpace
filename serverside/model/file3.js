const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    file_path: {
      type: String,
      required: true,
    },
    file_mimetype: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const File3 = mongoose.model("TimetableFile", fileSchema);

module.exports = File3;
