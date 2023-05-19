import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
}
export const Skill = (props: SkillPropsType) => {
    const {title, ...otherProps} = props
    return (
        <div className={s.mainSkillBlock}>
            <h3 className={s.skillTitle}>
                {title}
            </h3>

            <div className={s.imageBlock}>
                <div className={s.image}>IMAGE</div>
            </div>
            <div className={s.description}>
                Description
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi debitis, delectus dicta
                doloribus earum eum expedita explicabo ipsa libero modi possimus quisquam, recusandae sit soluta sunt
                suscipit, temporibus!
            </div>
        </div>
    );
};