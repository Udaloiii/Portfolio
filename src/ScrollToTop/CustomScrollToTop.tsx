import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import s from './CustomScrollToTop.module.css'


export const CustomScrollToTop = () => {
    return (
        <ScrollToTop smooth className={s.mainScrollBlock}/>
    );
};