const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  patient_ID: {
    type: Number,
  },
  surname: {
    type: String,
  },
  Other_names: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone_Number: {
    type: String,
  },
  emergency_name: {
    type: String,
  },
  contact: {
    type: String,
  },
  relationship_with_patient: {
    type: String,
  }
});

module.exports = mongoose.model("hospital", hospitalSchema);