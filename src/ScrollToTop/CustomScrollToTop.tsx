import React from 'react';
import ScrollToTop from "react-scroll-to-top";

export const CustomScrollToTop = () => {
    return (
        <div>
            <ScrollToTop className="scrollToTop" style={{
                "backgroundColor": "#157acc",
                "borderRadius": "35px",
                "width": "70px",
                "height": "70px"
            }} smooth/>
        </div>
    );
};