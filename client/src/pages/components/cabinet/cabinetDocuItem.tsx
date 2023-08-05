import React from 'react';
import {Link} from "react-router-dom";

interface IDocu {
    name: string,
    date: string,
    from: string,
    to: string
}

const documents: Array<IDocu> = [
    {name: "Претензия", date: "21.12.2003", from: 'ООО "Санграс"', to: 'ООО "Пушок"'}
]

function CabinetDocuItem() {

    return (
        <>
            <div className="cabinetNameField">
                <span>Название</span>
                <span>Дата</span>
                <span>От</span>
                <span>Кому</span>
            </div>
            {documents.map((document: IDocu, index) =>
                <Link to={'/construct'} key={index} className="cabinetItem">
                    <h2>{document.name}</h2>
                    <h3>{document.date}</h3>
                    <span>{document.from}</span>
                    <span>{document.to}</span>
                </Link>
            )}
        </>
    );
}

export default CabinetDocuItem