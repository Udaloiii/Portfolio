import React from 'react';
import s from './MyWorks.module.css'
import {MyProject} from "./MyProject/MyProject";
import {Title} from "../Title/Title";

export const MyWorks = () => {
    return (
        <section className={s.main} id="works" >
            <div className={s.block}>
                <div className={s.titleBlock}>
                    <Title value={"h2"} title={"My works"}/>
                </div>
                <div className={s.mainBlock}>
                    <MyProject/>
                    <MyProject/>
                    <MyProject/>
                    <MyProject/>
                </div>
            </div>
        </section>
    );
};