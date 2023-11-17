import React, {ElementRef, FormEvent, useRef} from 'react';
import s from './Contacts.module.css'
import {Title} from "../Title/Title";
import emailjs from '@emailjs/browser';

export const Contacts = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return

        emailjs.sendForm('service_ui4gtul', 'template_l6zjclp', form.current, '69n7zQ3xC-JabiHJJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset()
    }
    return (
        <footer className={s.mainFooter} id="contacts">

            <div className={s.contacts}>
                <Title value={"h2"} title={"Contacts"}/>
            </div>

            <form className={s.inpTextArBlock} ref={form} onSubmit={sendEmail}>
                <input className={s.inputName} required name={"name"} type="text" placeholder={"name"} autoComplete={"off"}/>
                <input className={s.inputEmail} required name={"email"} type="email" placeholder={"e-mail"} autoComplete={"off"}/>
                <textarea className={s.textArea} required name={"message"} id="" rows={7}
                          placeholder={"your message"}></textarea>
                <button className={s.buttonSend} type={"submit"}>Send message</button>
            </form>

        </footer>
    )
}