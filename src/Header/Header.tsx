import React from "react";
import s from './Header.module.css'
import {Link} from "react-scroll";

export const Header = () => {
    return (
        <header className={s.mainBlock}>
            <div className={s.linkBlock}>
                <Link to="about"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={700}
                >
                    About me
                </Link>

                <Link to="skills"
                      activeClass={s.active}
                      className={s.link}
                      spy={true}
                      smooth={true}
                      offset={-69}
                      duration={700}
                >
                    Skills
                </Link>

                <Link to="works"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-68}
                      duration={700}
                >
                    My works
                </Link>
                <Link to="contacts"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-67}
                      duration={700}
                >
                    Contacts
                </Link>
            </div>
        </header>
    );
};
