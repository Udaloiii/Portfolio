import React from 'react';
import s from './UserInfo.module.css'
import {Photo} from "./Photo/Photo";
import {Description} from "./Description/Description";

export const UserInfo = () => {
    return (
        <section className={s.mainBlock} id={"about"}>
            <div className={s.container}>
                <Photo/>
                <Description/>
            </div>
        </section>
    );
};