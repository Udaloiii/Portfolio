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
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque dolores eaque esse et, fuga
                laborum laudantium necessitatibus nesciunt sint, sunt suscipit totam voluptatibus. Consequuntur dolor
                fuga in incidunt porro.


            </div>
        </div>
    );
};