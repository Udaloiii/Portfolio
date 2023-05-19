import React from 'react';
import s from './MyWorks.module.css'
import {MyProject} from "./MyProject/MyProject";

export const MyWorks = () => {
    return (
        <div className={s.main} id={'works'}>
            <div className={s.block}>
                <div className={s.titleBlock}>
                    <h2>My works</h2>
                </div>
                <div className={s.mainBlock}>
                    <MyProject/>
                    <MyProject/>
                    <MyProject/>
                    <MyProject/>
                </div>
            </div>
        </div>
    );
};