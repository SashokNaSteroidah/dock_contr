import React from 'react';
import CabinetPost from "./components/cabinet/cabinetPost";
import CabinetDocuPosts from "./components/cabinet/cabinetDocuPosts";

function Cabinet() {

    // useEffect(() => {
    //     fetch('/api/data')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.error(error));
    // }, []);


    return (
        <>
            <div className="statusBarCabinet">
                <div className="statusBarCabinetRow">
                    <div className="statusBarBlock">
                        <h2>Активность аккаунта</h2>
                        <p className="acive_ac"></p>
                    </div>
                    <div className="statusBarBlock">
                        <h2>Имя</h2>
                        <p className="name"></p>
                    </div>
                    <div className="statusBarBlock">
                        <h2>Фамилия</h2>
                        <p className="surname"></p>
                    </div>
                    <div className="statusBarBlock">
                        <h2>Отчество</h2>
                        <p className="patronymic"></p>
                    </div>
                    <div className="statusBarBlock">
                        <h2>Данные банка</h2>
                        <p className="bank_info"></p>
                    </div>
                </div>
                <div className="statusBarCabinetRow">
                    <div className="statusBarBlock">
                        <h2>Электронная почта</h2>
                        <p className="email"></p>
                    </div>
                    <div className="statusBarBlock">
                        <h2>Телефон</h2>
                        <p className="tel"></p>
                    </div>
                    <div className="statusBarBlock">
                        <h2>ИНН</h2>
                        <p className="inn"></p>
                    </div>
                    <div className="statusBarBlock">
                        <h2>Адрес</h2>
                        <p className="address"></p>
                    </div>
                    <a data-hover="false" className="button" id="exit_but"
                       href="/">Выйти
                    </a>
                </div>
            </div>
            <CabinetPost name={"организации"} />
            <CabinetPost name={"контрагенты"} />
            <CabinetDocuPosts />
        </>
    );
}

export default Cabinet


