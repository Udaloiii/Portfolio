import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {UserInfo} from "./UserInfo/UserInfo";
import {Skills} from "./Skills/Skills";
import {Footer} from "./Footer/Footer";
import {MyWorks} from "./MyWorks/MyWorks";
import {CustomScrollToTop} from "./ScrollToTop/CustomScrollToTop";

function App() {
    return (
        <div className="App">
            <CustomScrollToTop/>
            <Header/>
            <UserInfo/>
            <Skills/>
            <MyWorks/>
            <Footer/>
        </div>
    );
}

export default App;

