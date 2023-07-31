import React from 'react';
import ButtonSqr from "./components/UI/buttons/buttonSqr";
import ButtonUnder from "./components/UI/buttons/buttonUnderline";
import PostItem from "./components/post/postItem";

function About() {

    return (
        <main>
            <section className="main_about">
                <h2>About</h2>
                <article>
                    <div>
                        <p>Мы сервис, что поможет вам стать лучше</p>
                        <p>Цель нашей работы помочь вам решить ваши проблемы в короткие сроки
                            И сделать для вас рутинные или непонятные вещи чуть проще и удобнее </p>
                        <p>Также мы стараемся делать все открыто для пользователей,
                            чтобы вы не волновались о безопасности своих данных и могли смело
                            и уверенно работать</p>
                        <ButtonSqr href="/signin" message="Попробовать" />
                    </div>
                    <div>
                        <img src="/img/alex-perez-pEgsWN0kwbQ-unsplash%201.png" alt="" />
                    </div>
                </article>
            </section>

            <section className="main_news">
                <div>
                    <h2>Последние новости</h2>
                    <ButtonUnder message="Посмотреть последние новости" href="/news" />
                </div>
                <div>
                    <PostItem src={"/img/Rectangle%2015.png"} title={"Был добавлен API"} date={"19.02.2023"} />
                </div>
            </section>
        </main>
    );
}

export default About