const firebaseConfig = {
  apiKey: "AIzaSyDGhHrcV5F93chxTeFXI0KkwgHeb0m_31g",
  authDomain: "nhmc9th.firebaseapp.com",
  projectId: "nhmc9th",
  appId: "1:95509517890:web:893a0d06c97bfe1cc53fdb"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
