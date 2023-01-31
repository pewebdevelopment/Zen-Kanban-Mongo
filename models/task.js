const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  iconURL: {
    type: String,
    required: false,
  },

  assignedTo: {},

  progress: {},

  tags: {
    type: String,
    enum: [
      "EduCare",
      "ClientAcq",
      "WebDev",
      "HR",
      "DigitalMarketing",
      "Archived",
      "Default",
    ],
    default: "Default",
  },

  createdAt: {
    type: Date,
    default: Date.now,
    unique: true,
    required: true,
  },

  updatedAt: {
    type: Array[{ Date }],
    default: Date.now,
    unique: true,
    required: true,
  },

  dueAt: {
    type: Array[{ Date }],
    default: Date.now,
    unique: true,
    required: false,
  },

  comments: {
    type: Array[{ Object }],
    required: false,
  },

  status: {
    type: String,
    enum: [
      "Planned",
      "Created",
      "Assigned",
      "InProgress",
      "Completed",
      "Archived",
    ],
    default: "Planned",
  },
});

module.exports = mongoose.model("Task", taskSchema);

// naming like this is a convention
