import React from 'react';
import s from './Footer.module.css'


export const Footer = () => {
    return (
        <footer className={s.mainFooter} id={"contacts"} >

            <div className={s.contacts}>
                <h2>Contacts</h2>
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