import React, {useState} from "react";

interface butProps {
    message: string;
}

function ButtonSqrSubmit({message}: butProps) {
    const [hover, setHover] = useState(false);

    const styles = {
        svg: {
            display: "inline-block",
            verticalAlign: "middle",
        },
        path: {
            fill: hover ? "black" : "white",
        },
        input: {
            color: hover ? "black" : "white"
        }
    };

    return (
        <label
            className="button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span>
            <input
                className="no-style"
                type="submit"
                value={message}
                style={styles.input}
            />
                  <svg
                      style={styles.svg}
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        style={styles.path}
                        d="M12.9703 0.656879V11.9706L10.9728 11.9883L10.9728 4.06867L2.36373 12.6777L0.949516 11.2635L9.55854 2.65446L1.63894 2.65446L1.65662 0.656879H12.9703Z"
                        fill="white"
                    />
                  </svg>
            </span>
        </label>
    );
}

export default ButtonSqrSubmit;
