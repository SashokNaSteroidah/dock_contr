import React from 'react';
import {Link} from "react-router-dom";

function Not_found() {

    return (
        <>
            <div className="blind_text">
                Извините, такой страницы не существует
                <Link to="signin">Авторизоваться</Link>
            </div>
            <div className="blind"></div>
        </>
    );
}

export default Not_found
