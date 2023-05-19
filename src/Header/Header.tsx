import React from "react";
import s from './Header.module.css'
// import {Link} from "react-router-dom";
import {Link, animateScroll as scroll} from "react-scroll";

export const Header = () => {
    return (
        <header className={s.mainBlock}>
            {/*<div className={s.linkBlock}>*/}
            {/*    <a className={s.link}  href={"#about"}>About me</a>*/}
            {/*    <a className={s.link} href={"#skills"}>Skills</a>*/}
            {/*    <a className={s.link}  href={"#works"}>My works</a>*/}
            {/*    <a className={s.link}  href={"#contacts"}>Contacts</a>*/}
            {/*</div>*/}

            <div className={s.linkBlock}>
                <Link
                    className={s.link}
                      to={"about"}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                    About me
                </Link>

                <Link className={s.link} to={"skills"}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-65}
                      duration={500}>
                    Skills
                </Link>

                <Link className={s.link} to={"works"}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                    My works
                </Link>
                <Link className={s.link} to={"contacts"}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      // offset={-70}
                    offset={-60}
                      duration={500}>
                    Contacts
                </Link>
            </div>

        </header>
    );
};