import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to = '/todo'>
                TODO LIST
            </Link>
            <Link to ='/shop'>
                SHOPPING LIST
            </Link>
        </div>
    )
};
export default Home;