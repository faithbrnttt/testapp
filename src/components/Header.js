import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderStyle.css";

const Header = () => {
    return (
        <div className="nav">
            <h1>Header Example</h1>
            <ul>
                <li>
                    <Link className="list_link" to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="list_link" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="list_link" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
