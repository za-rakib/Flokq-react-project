import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhk4Gxw_MEsSmXNTQPMXX0pOF1gBcdDYY",
  authDomain: "flokq-project.firebaseapp.com",
  projectId: "flokq-project",
  storageBucket: "flokq-project.appspot.com",
  messagingSenderId: "587490747525",
  appId: "1:587490747525:web:f4bd173ce7d5518acbb5ec",
  measurementId: "G-PYLS6ERHY2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);