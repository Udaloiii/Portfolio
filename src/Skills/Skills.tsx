import React from 'react';
import {Skill} from "./Skill/Skill";
import s from './Skills.module.css'
import reduxLogo from '../Image/icons/redux.svg';
import cssLogo from '../Image/icons/css.svg';
import typescriptLogo from '../Image/icons/typescript.svg';
import gitLogo from '../Image/icons/git.svg';
import apiLogo from '../Image/icons/api-outlined.svg';
import reactLogo from '../Image/icons/react-dark.svg';
import axiosLogo from '../Image/icons/axios (1).svg';
import sassLogo from '../Image/icons/sass.svg';
import reduxToolkitLogo from '../Image/icons/redux (1).svg';
import styledComponents from '../Image/icons/styledcomponents.svg';
import storyBook from '../Image/icons/storybook (1).svg';
import {Title} from "../Title/Title";

type ScillsType = {
    id: number
    name: string
    icon: string
}
export const Skills = () => {
    const scills: ScillsType[] = [
        {id: 1, name: "TypeScript", icon: typescriptLogo},
        {id: 2, name: "Redux", icon: reduxLogo},
        {id: 3, name: "Redux Toolkit", icon: reduxToolkitLogo},
        {id: 4, name: "React", icon: reactLogo},
        {id: 5, name: "CSS", icon: cssLogo},
        {id: 6, name: "SASS", icon: sassLogo},
        {id: 7, name: "GIT", icon: gitLogo},
        {id: 8, name: "REST-API", icon: apiLogo},
        {id: 9, name: "Axios", icon: axiosLogo},
        {id: 10, name: "Styled Components", icon: styledComponents},
        {id: 11, name: "Storybook", icon: storyBook},
    ]
    return (
        <section className={s.mainSkillsBlock}
                 id="skills">
            <div className={s.container}>
                <div className={s.titleBlock}>
                    {/*<h2>My skills</h2>*/}
                    <Title value={"h2"} title={"My skills"}/>
                </div>
                <div className={s.skillsBlock}>
                    {scills.map(el => <Skill key={el.id} title={el.name} icon={el.icon}/>)}
                </div>
            </div>
        </section>
    );
};