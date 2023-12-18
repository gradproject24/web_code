import React from "react";
import "./style.css";

export const JoinButton = ({ className }) => {
    return (
        <div className={`group ${className}`}>
            <div className="text-wrapper">JOIN US</div>
        </div>
    );
};
