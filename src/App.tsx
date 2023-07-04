import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {UserInfo} from "./UserInfo/UserInfo";
import {Skills} from "./Skills/Skills";
import {Contacts} from "./Contacts/Contacts";
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
            <Contacts/>
        </div>
    );
}

export default App;

