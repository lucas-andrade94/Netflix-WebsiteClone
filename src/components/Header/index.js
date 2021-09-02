import React from "react";
import "./Header.css";

export default ({ black }) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img
                        src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png"
                        alt="Netflix Logo"
                    />
                </a>
            </div>
            <div className="header--user">
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    alt="Profile"
                />
            </div>
        </header>
    );
};
