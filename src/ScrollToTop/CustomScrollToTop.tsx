import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import s from './ScrollToTop.module.css'

export const CustomScrollToTop = () => {
    return (
        <div>
            <ScrollToTop smooth className={s.scrollToTop}/>
        </div>
    );
};