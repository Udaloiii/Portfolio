import React from 'react';
import s from './Contacts.module.css'
import {Title} from "../Title/Title";


export const Contacts = () => {
    return (
        <footer className={s.mainFooter} id="contacts" >

            <div className={s.contacts}>
                <Title value={"h2"} title={"Contacts"}/>
            </div>

            <div className={s.inpTextArBlock}>
                <input className={s.inputName} type="text" placeholder={"name"} />
                <input className={s.inputEmail} type="email" placeholder={"e-mail"}/>
                <textarea className={s.textArea} name="" id="" rows={7} placeholder={"your message"}></textarea>
                <button className={s.buttonSend}>Send message</button>
            </div>

        </footer>
    );
};