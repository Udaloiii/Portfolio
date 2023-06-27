import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import s from './CustomScrollToTop.module.css'
// import './CustomScrollToTop.css'

export const CustomScrollToTop = () => {
    return (
        <ScrollToTop smooth
                     // style={{
                     //     "backgroundColor": "#157acc",
                     //     "borderRadius": "35px",
                     //     "width": "70px",
                     //     "height": "70px",
                     //     "right": "30px"
                     // }}
                     className={s.mainScrollBlock}/>
    );
};