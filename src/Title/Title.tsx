import React from 'react';
import s from './Title.module.css'

type TitlePropsType = {
    value: "h2" | "h3"
    title: string
}
export const Title = (props: TitlePropsType) => {
    return (
        <>
            {
                props.value === "h2" ? <h2 className={s.levelTwo}>{props.title}</h2>
                    : props.value === "h3" ? <h3 className={s.levelThree}>{props.title}</h3> : ""
            }
        </>
    );
};