import React from 'react';
import CabinetItem from "./CabinetItem";

interface ICabPost {
    name: string
}

function CabinetPost(props: ICabPost) {

    return (
        <div className="statusBarCabinetAgent">
            <h1>
                Мои {props.name}
            </h1>
            <CabinetItem />
        </div>
    );
}

export default CabinetPost