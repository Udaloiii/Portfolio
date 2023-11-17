import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {UserInfo} from "./UserInfo/UserInfo";
import {Skills} from "./Skills/Skills";
import {Contacts} from "./Contacts/Contacts";
import {MyWorks} from "./MyWorks/MyWorks";
import {CustomScrollToTop} from "./ScrollToTop/CustomScrollToTop";
import {Particle} from "./components/particle/Particle";

function App() {
    return (
        <div className="App">
            <Particle/>
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

