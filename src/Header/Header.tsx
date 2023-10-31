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
                >
                    About me
                </Link>

                <Link to="skills"
                      activeClass={s.active}
                      className={s.link}
                      spy={true}
                      smooth={true}
                      offset={-69}

                >
                    Skills
                </Link>

                <Link to="works"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-68}
                >
                    My works
                </Link>
                <Link to="contacts"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-67}
                >
                    Contacts
                </Link>
            </div>
        </header>
    );
};
