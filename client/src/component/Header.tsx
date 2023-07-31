import React from 'react';
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <div>
                <article>
                    <Link to="/">
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="55" height="55" fill="white"/>
                            <path
                                d="M12 15.1724H16.3164C19.0987 15.1724 21.1659 15.5162 22.518 16.2039C23.8701 16.8829 24.9839 17.9917 25.8593 19.5302C26.7347 21.0688 27.1724 22.8652 27.1724 24.9195C27.1724 26.3807 26.9254 27.7259 26.4313 28.955C25.946 30.1755 25.2699 31.1898 24.4032 31.9977C23.5451 32.8057 22.6133 33.3644 21.6079 33.6738C20.6025 33.9832 18.8603 34.1379 16.3814 34.1379H12V15.1724ZM15.6273 18.6535V30.6053H17.3175C18.9817 30.6053 20.1864 30.4162 20.9318 30.038C21.6859 29.6598 22.3013 29.0237 22.778 28.1298C23.2547 27.2359 23.4931 26.1357 23.4931 24.8292C23.4931 22.8179 22.9254 21.2579 21.7899 20.1491C20.7672 19.152 19.1247 18.6535 16.8625 18.6535H15.6273Z"
                                fill="#1C1C1C"/>
                            <path d="M29.1724 16H43.6724V19.5649H38.3759V35H34.8827V19.5649L29.1724 19.5649V16Z"
                                  fill="#1C1C1C"/>
                            <path d="M12 37H30.9655V40.319H12V37Z" fill="#1C1C1C"/>
                        </svg>
                        <h1>
                            Debetorum
                        </h1>
                    </Link>
                    <nav>
                        <Link to="about">О нас</Link>
                        <Link to="news">Новости</Link>
                        <Link to="dev-blog">Dev - блог</Link>
                    </nav>
                </article>
                <article>
                    <Link style={{marginRight: "20px"}} to="construct">Редактировать документ</Link>
                    <Link to="sign-in">Профиль</Link>
                </article>
            </div>
        </header>
    );
}

export default Header