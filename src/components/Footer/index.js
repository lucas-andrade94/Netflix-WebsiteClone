import React from "react";
import "./Footer.css";

export default () => {
    return (
        <footer>
            <p>
                Made during a class of ReactJS{" "}
                <span role="img" arial-label="heart">
                    ❤️
                </span>
            </p>
            <p>Copyrights: Netflix</p>
            <p>
                API from <a href="https://www.themoviedb.org/">The Movie DB</a>
            </p>
        </footer>
    );
};
