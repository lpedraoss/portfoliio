import './App.css'
import { getStorage } from "firebase/storage";
import introduction from './data/introduction.json'
import HeaderPort from './component/pure/header_portfolio';
import GoToDown from './component/pure/gotodown';
import CardProject from './component/pure/card_project';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrXjIhoQxOkveF3KlM41lnWEhngvxgTwE",
  authDomain: "portfolio-3ce56.firebaseapp.com",
  projectId: "portfolio-3ce56",
  storageBucket: "portfolio-3ce56.appspot.com",
  messagingSenderId: "759721011526",
  appId: "1:759721011526:web:68f66fe7ea86332e0bdd47",
  measurementId: "G-9GGCMSGJEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
function App() {
  return (
    <>
      <HeaderPort></HeaderPort>
      <p className="intro-paragraph">
        {introduction.introText}
      </p>
      <section id="content">
        <h1>Contenido del portfolio</h1>
        {/* Resto del contenido */}
        <CardProject></CardProject>
       
      </section>
      <GoToDown></GoToDown>

    </>
  );
}

export default App;
