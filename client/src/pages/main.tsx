import React, {useEffect, useState} from 'react';
import ButtonUnder from './components/UI/buttons/buttonUnderline'
import ButtonSqr from "./components/UI/buttons/buttonSqr";
import ButtonSqrSubmit from "./components/UI/buttons/buttonSqrSubmit";
import PostItem from "./components/post/postItem";


function Main() {


    const [scrollPos, setScrollPos] = useState(0);
    const [sticElContent, setSticElContent] = useState("Ваше изменения");
    const [sticElColor, setSticElColor] = useState("white");
    const handleScroll = () => {
        const currentPos = window.pageYOffset;
        setScrollPos(currentPos);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        // Проверяем, в каком диапазоне находится позиция скролла
        if (scrollPos >= 0 && scrollPos < 1000) {
            setSticElContent("Ваши изменения");
            setSticElColor("#F3E700");
        } else if (scrollPos >= 1500 && scrollPos < 2500) {
            setSticElContent("Ваше имя");
            setSticElColor("#008000");
        } else if (scrollPos >= 2500) {
            setSticElContent("Ваш контрагент");
            setSticElColor("#F3E700");
        }
    }, [scrollPos]);


    return (
        <main>
            <section className="main_1">
                <article>
                    <h1>Debetorum</h1>
                    <p>Инновационный конструктор для ваших документов
                        Где вы можете создавать и редактировать все возможные
                        бумаги, что вам нужны</p>
                    <ButtonSqr href="/" message="Попробовать"/>
                    <ButtonUnder href="/" message={"Прочитать подробнее о возможностях"}/>
                </article>
                <article>
                    <img src="/img/Group.png" alt=""/>
                    {/*жопа*/}
                </article>
            </section>

            <section className="main_2">
                <div>
                    <article>
                        <h2>Преимущества нашего сервиса</h2>
                        <ul>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Наш сервис быстрый и удобный в освоении
                                </p>
                            </li>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    С каждым днем мы развиваемся все больше и больше
                                </p>
                            </li>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Идеален для крупных корпораций
                                </p>
                            </li>
                        </ul>
                        <ButtonSqr href="/" message="Попробовать"/>
                    </article>
                    <article>
                        <h2>Что вас ждет после начала работы с нами?</h2>
                        <ul>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Вы получить доступ к огромной библиотеке документов
                                </p>
                            </li>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Сможете быстро и удобно выбрать нужного вам контрагента
                                </p>
                            </li>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Можете редактировать документ когда вам угодно и где угодно
                                </p>
                            </li>
                        </ul>
                        <ButtonSqr href="/" message="Попробовать"/>
                    </article>
                    <article>
                        <h2>Как происходит процесс работы?</h2>
                        <ul>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Вы регистрируетесь и заходите в ваш аккаунт
                                </p>
                            </li>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Выбираете нужный вам документ из нашей библиотеке или загружаете свой
                                </p>
                            </li>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Выбираете нужного контрагента из списка или добавляете своего
                                </p>
                            </li>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Редактируете документ
                                </p>
                            </li>
                            <li>
                                <svg width="16"
                                     height="16"
                                     viewBox="0 0 16 16"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8L8 16L6.575 14.6L12.175 9L-3.0598e-07 9L-3.93402e-07 7L12.175 7L6.575 1.4L8 -3.49691e-07L16 8Z"
                                        fill="white"/>
                                </svg>
                                <p>
                                    Сохраняете его или можете сразу распечатать
                                </p>
                            </li>
                        </ul>
                        <ButtonSqr href="/" message="Попробовать"/>
                    </article>
                </div>
                <div className="stic_el" style={{backgroundColor: sticElColor}}>
            <span className="stic_el_span">
                {sticElContent}
            </span>
                    <p className="blinking-cursor">|</p>
                </div>
            </section>

            <section className="main_news">
                <div>
                    <h2>Последние новости</h2>
                    <ButtonUnder message="Прочитать все новости" href="/"/>
                </div>
                <div>
                    <PostItem src={"/img/Rectangle%2015.png"} title={"Был добавлен API"} date={"19.02.2023"}/>
                </div>
            </section>

            <section className="main_feed">
                <div>
                    <h2>Остались вопросы?</h2>
                    <h3>Вы можете задать их нам</h3>
                    <form action="">
                        <label htmlFor="">
                            <input placeholder="Имя" type="text"/>
                        </label>
                        <label htmlFor="">
                            <input placeholder="Email" type="text"/>
                        </label>
                        <label htmlFor="">
                            <textarea placeholder="Сообщение" name="" id=""></textarea>
                        </label>
                        <ButtonSqrSubmit message="Оставить"/>
                    </form>
                </div>
                <div>
                    <img src="/img/efe-kurnaz-RnCPiXixooY-unsplash%201.png" alt=""/>
                </div>
            </section>
        </main>
    );
}

export default Main