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
            <div className="cabinet_info">
                <div className="document_cabinet">
                    {/*<div className="saved_docu">*/}
                    {/*    <p className="non_create_notify">Вы не создали еще ни одного документа</p>*/}
                    {/*    <img className="saved_img_docu" src="/img/saved_document.png" alt=""/>*/}
                    {/*    <p className="saved_time"></p>*/}
                    {/*</div>*/}
                    {/*<a data-hover="false"*/}
                    {/*   className="button"*/}
                    {/*   href="create_choose">Создать новый документ*/}
                    {/*    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*        <path className="button_arrow"*/}
                    {/*              d="M12.9703 0.656879V11.9706L10.9728 11.9883L10.9728 4.06867L2.36373 12.6777L0.949516 11.2635L9.55854 2.65446L1.63894 2.65446L1.65662 0.656879H12.9703Z"*/}
                    {/*              fill="white"/>*/}
                    {/*    </svg>*/}
                    {/*</a>*/}
                </div>
            </div>
        </>
    );
}

export default Cabinet


