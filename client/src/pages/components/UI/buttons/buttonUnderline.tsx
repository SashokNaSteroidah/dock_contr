import React from 'react';
import {Link} from "react-router-dom";

interface Props {
    message: string,
    href: string
}

function Button_under(props: Props) {

    return (
        <Link className="button_underline" to={props.href}>{props.message}</Link>
    );
}

export default Button_under