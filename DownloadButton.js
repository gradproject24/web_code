import React from "react";
import "./style.css";

export const DownloadButton = ({ className }) => {
    return (
        <button className={`button ${className}`}>
            <div className="text-wrapper">DOWNLOAD NOW</div>
        </button>
    );
};
