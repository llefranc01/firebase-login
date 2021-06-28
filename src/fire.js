import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBIVvlfwA95K0H5X85FVbGPeaVrKDM5EIU",
    authDomain: "auth-development-63348.firebaseapp.com",
    projectId: "auth-development-63348",
    storageBucket: "auth-development-63348.appspot.com",
    messagingSenderId: "1002049427678",
    appId: "1:1002049427678:web:8c1f46fc01e391d3ff0a4f"
  };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;