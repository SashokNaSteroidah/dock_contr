import React, {useState} from 'react';
import {Link} from "react-router-dom";

interface Props {
    message: string,
    href: string
}

function ButtonSqr(props: Props) {

    const [hover, setHover] = useState(false);

    const styles = {
        path: {
            fill: hover ? "black" : "white"
        }
    };

    return (
        <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
              className="button"
              to={props.href}>{props.message}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={styles.path} className="button_arrow"
                      d="M12.9703 0.656879V11.9706L10.9728 11.9883L10.9728 4.06867L2.36373 12.6777L0.949516 11.2635L9.55854 2.65446L1.63894 2.65446L1.65662 0.656879H12.9703Z"
                      fill="white"/>
            </svg>
        </Link>
    );
}

export default ButtonSqr