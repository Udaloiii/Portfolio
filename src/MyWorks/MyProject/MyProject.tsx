import React from 'react';
import s from './MyProject.module.css'

export const MyProject = () => {
    return (
        <div className={s.mainProjectBlock}>
            <div className={s.imageBlock}>Image block</div>
            <div className={s.title}>
                <h3>Title</h3>
            </div>
            <div className={s.description}>
                Description
            </div>
        </div>
    );
};