import React from 'react';
import s from './Skill.module.css'
import {Title} from "../../Title/Title";

type SkillPropsType = {
    title: string
    icon: string
}
export const Skill = (props: SkillPropsType) => {
    const {title,icon, ...otherProps} = props
    return (
        <div className={s.mainSkillBlock}>
            {/*<h3 className={s.skillTitle}>*/}
            {/*    {title}*/}
            {/*</h3>*/}
            <div className={s.skillTitle}>
                <Title value={"h3"} title={title}/>
            </div>


            <div className={s.imageBlock}>
                {/*<div className={s.image}>IMAGE</div>*/}
                <img src={icon} alt={title} className={s.image}/>
            </div>
        </div>
    );
};