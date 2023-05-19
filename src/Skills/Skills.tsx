import React from 'react';
import {Skill} from "./Skill/Skill";
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div  className={s.mainSkillsBlock} id={'skills'}>
            <div className={s.container}>
                <div className={s.titleBlock}>
                    <h2>My skills</h2>
                </div>
                <div className={s.skillsBlock}>
                    <Skill title="HTML/CSS"/>
                    <Skill title="JS/TS"/>
                    <Skill title="React"/>
                    <Skill title="Redux"/>
                    <Skill title="Git"/>
                    <Skill title="Unit-test"/>
                </div>
            </div>
    </div>

    );
};