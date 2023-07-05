import React from "react";
import s from './Header.module.css'
import {Link} from "react-scroll";

export const Header = () => {
    return (
        <header className={s.mainBlock}>
            <div className={s.linkBlock}>
                {/*<Link*/}
                {/*    className={s.link}*/}
                {/*    to="about"*/}
                {/*    activeClass={s.active}*/}
                {/*    spy={true}*/}
                {/*    smooth={true}*/}
                {/*    offset={-70}*/}
                {/*    duration={500}*/}
                {/*    isDynamic={true}*/}
                {/*    ignoreCancelEvents={false}*/}
                {/*    spyThrottle={500}*/}
                {/*    hashSpy={true}*/}
                {/*>*/}
                {/*    About me*/}
                {/*</Link>*/}
                <Link to="about"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={true}
                      spyThrottle={150}
                >
                    About me
                </Link>

                <Link to="skills"
                      activeClass={s.active}
                      className={s.link}
                      spy={true}
                      smooth={true}
                    // offset={-60}
                      offset={-59}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={true}
                      spyThrottle={350}
                >
                    Skills
                </Link>

                <Link to="works"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      // offset={-65}
                      offset={-59}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={true}
                      spyThrottle={150}

                >
                    My works
                </Link>
                <Link to="contacts"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-59}
                      duration={500}
                      isDynamic={true}
                      ignoreCancelEvents={true}
                      spyThrottle={150}
                >
                    Contacts
                </Link>
            </div>
        </header>
    );
};
