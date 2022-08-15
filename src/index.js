import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

// Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBF7LixEPCn850NpjNflo8dgv-2ZWd1Gq8",
      authDomain: "vino-para-hablar.firebaseapp.com",
      projectId: "vino-para-hablar",
      storageBucket: "vino-para-hablar.appspot.com",
      messagingSenderId: "967986732722",
      appId: "1:967986732722:web:d1c1e8bb02a6c4788673ab"
    };
// Inicializacion de Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
