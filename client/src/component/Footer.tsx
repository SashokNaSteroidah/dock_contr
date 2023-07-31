import React from 'react';

function Footer() {

    return (
        <footer>
            <article className="up_footer">
                <div>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="55" height="55" fill="#1C1C1C"/>
                        <path
                            d="M12 15.1724H16.3164C19.0987 15.1724 21.1659 15.5162 22.518 16.2038C23.8701 16.8828 24.9839 17.9916 25.8593 19.5302C26.7347 21.0687 27.1724 22.8652 27.1724 24.9194C27.1724 26.3806 26.9254 27.7258 26.4313 28.9549C25.946 30.1754 25.2699 31.1897 24.4032 31.9977C23.5451 32.8056 22.6133 33.3643 21.6079 33.6737C20.6025 33.9832 18.8603 34.1379 16.3814 34.1379H12V15.1724ZM15.6273 18.6535V30.6052H17.3175C18.9817 30.6052 20.1864 30.4161 20.9318 30.0379C21.6859 29.6597 22.3013 29.0237 22.778 28.1298C23.2547 27.2359 23.4931 26.1357 23.4931 24.8292C23.4931 22.8179 22.9254 21.2578 21.7899 20.149C20.7672 19.152 19.1247 18.6535 16.8625 18.6535H15.6273Z"
                            fill="white"/>
                        <path d="M29.1724 16H43.6724V19.5649H38.3759V35H34.8827V19.5649L29.1724 19.5649V16Z"
                              fill="white"/>
                        <path d="M12 37H30.9655V40.319H12V37Z" fill="white"/>
                    </svg>
                    <h1>
                        Debetorum
                    </h1>
                </div>
                <section>
                    <article>
                        <ul>
                            <li>
                                <h2>
                                    Информация
                                </h2>
                            </li>
                            <li>
                                <a href="src/component/Footer">
                                    Новости
                                </a>
                            </li>
                            <li>
                                <a href="src/component/Footer">
                                    Dev-блог
                                </a>
                            </li>
                            <li>
                                <a href="src/component/Footer">
                                    О нас
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <ul>
                            <li>
                                <h2>
                                    Защита
                                </h2>
                            </li>
                            <li>
                                <a href="src/component/Footer">
                                    О правах пользователя
                                </a>
                            </li>
                            <li>
                                <a href="src/component/Footer">
                                    Помочь в разработке
                                </a>
                            </li>
                        </ul>
                    </article>
                </section>
            </article>
            <article className="bot_footer">
                <h1>
                    by Nikita Pavlushin
                </h1>
                <h2>
                    Debetorum ©2023
                </h2>
                <a href="src/component/Footer">
                    Github
                </a>
                <a href="src/component/Footer">
                    Site
                </a>
            </article>
        </footer>
    );
}

export default Footer