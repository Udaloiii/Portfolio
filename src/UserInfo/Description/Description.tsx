import React from 'react';
import s from './Description.module.css'

export const Description = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.title}>
                <h2>
                    Hi!
                    <br/>
                    I'm Eugene Udalykh
                    <br/>
                    and
                    <br/>
                    I'm frontend-developer :)
                </h2>
            </div>
            <div className={s.description}>
                Hello, I am frontend developer. I have experience in React, Redux/RTK Query, TypeScript development. Now
                I am improving my skills in this direction and expanding them with new technologies, and also i spend my
                free time on Codewars and learning English.


            </div>
        </div>
    );
};