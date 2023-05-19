<?php require_once "head.php"; ?>
<?php require_once "header.php"; ?>

    <main>

        <section class="main_about">
            <div>
                <h2 style="margin: 200px 0 100px">About</h2>
            </div>
            <article>
                <div>
                    <p>Мы сервис, что поможет вам стать лучше</p>
                    <p>Цель нашей работы помочь вам решить ваши проблемы в короткие сроки
                        И сделать для вас рутинные или непонятные вещи чуть проще и удобнее </p>
                    <p>Также мы стараемся делать все открыто для пользователей,
                        чтобы вы не волновались о безопасности своих данных и могли смело
                        и уверенно работать</p>
                    <a data-hover="false" onmouseleave="but_svg_dis(this)" onmouseover="but_svg_appear(this)" class="button"
                       href="">Попробовать
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="button_arrow"
                                  d="M12.9703 0.656879V11.9706L10.9728 11.9883L10.9728 4.06867L2.36373 12.6777L0.949516 11.2635L9.55854 2.65446L1.63894 2.65446L1.65662 0.656879H12.9703Z"
                                  fill="white"/>
                        </svg>
                    </a>
                </div>
                <div>
                    <img src="img/alex-perez-pEgsWN0kwbQ-unsplash%201.png" alt="">
                </div>
            </article>
        </section>

        <section class="main_news">
            <div>
                <h2>Последние новости</h2>
                <a class="button_underline" href="">Прочитать все новые новости</a>
            </div>
            <div>
                <a href="">
                    <img src="img/Rectangle%2015.png" alt="">
                    <h3>Был добавлен API</h3>
                    <p>19.02.2023</p>
                </a>
                <a href="">
                    <img src="img/Rectangle%2016.png" alt="">
                    <h3>Был добавлен API</h3>
                    <p>19.02.2023</p>
                </a>
                <a href="">
                    <img src="img/Rectangle%2017.png" alt="">
                    <h3>Был добавлен API</h3>
                    <p>19.02.2023</p>
                </a>
                <a href="">
                    <img src="img/Rectangle%2018.png" alt="">
                    <h3>Был добавлен API</h3>
                    <p>19.02.2023</p>
                </a>
            </div>
        </section>

    </main>


    <script src="js/script_button.js"></script>
    <script src="js/script_header.js"></script>

<?php require_once "footer.php"; ?>