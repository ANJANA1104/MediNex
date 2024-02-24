var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");




admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/0/project/medinex-eb239/database' // Replace with your Firebase project URL
});

// Reference to the database
const db = admin.database();

// Function to add patient details
function addPatientDetails(patientId, details) {
  const patientRef = db.ref(`/patients/${patientId}`);
  return patientRef.set(details);
}

// Function to update patient details
function updatePatientDetails(patientId, details) {
  const patientRef = db.ref(`/patients/${patientId}`);
  return patientRef.update(details);
}

// Function to get patient details
function getPatientDetails(patientId) {
  const patientRef = db.ref(`/patients/${patientId}`);
  return patientRef.once('value').then(snapshot => snapshot.val());
}

module.exports = {
  addPatientDetails,
  updatePatientDetails,
  getPatientDetails
};
