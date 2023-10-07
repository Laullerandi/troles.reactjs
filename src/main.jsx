import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwahLX_zPP0h0aMmqqDrd5c3hjX_O5aiU",
  authDomain: "troles-indumentaria.firebaseapp.com",
  projectId: "troles-indumentaria",
  storageBucket: "troles-indumentaria.appspot.com",
  messagingSenderId: "851278583045",
  appId: "1:851278583045:web:20ebc9940f5114ac26936c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)