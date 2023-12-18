const hospital = require("../model/hospital.model");

// Create a Todo
const createhospital = async (req, res) => {
  const { patient_ID, surname, other_names, gender, phone_Number, emergency_Name, contact, relationship_with_patient } = req.body;

  console.log("Patient's ID ", patient_ID, " Surname", surname, "Other Names", other_names);
