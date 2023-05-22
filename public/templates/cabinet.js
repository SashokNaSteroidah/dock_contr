const cabinet = `

<div class="cabinet_info">
    <div>
        <h2>Активность аккаунта</h2>
        <p class="acive_ac"></p>
        <h2>Имя</h2>
        <p class="name"></p>
        <h2>Фамилия</h2>
        <p class="surname"></p>
        <h2>Отчество</h2>
        <p class="patronymic"></p>
        <h2>Данные банка</h2>
        <p class="bank_info"></p>
        <h2>Электронная почта</h2>
        <p class="email"></p>
        <h2>Телефон</h2>
        <p class="tel"></p>
        <h2>ИНН</h2>
        <p class="inn"></p>
        <h2>Адрес</h2>
        <p class="address"></p>
        <!--        <h2>Пароль</h2>-->
        <!--        <p class="pass"></p>-->
        <!--        <input type="button" value="Изменить пароль">-->
        <a data-hover="false" class="button" id="exit_but"
           href="/public">Выйти

        </a>
    </div>

    <div class="document_cabinet">
        <div class="saved_docu">
            <p class="non_create_notify">Вы не создали еще ни одного документа</p>
            <img class="saved_img_docu" src="/img/saved_document.png" alt="">
            <p class="saved_time"></p>
        </div>
        <a data-hover="false" onmouseleave="but_svg_dis(this)" onmouseover="but_svg_appear(this)" class="button"
           href="create_choose">Создать новый документ
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="button_arrow"
                      d="M12.9703 0.656879V11.9706L10.9728 11.9883L10.9728 4.06867L2.36373 12.6777L0.949516 11.2635L9.55854 2.65446L1.63894 2.65446L1.65662 0.656879H12.9703Z"
                      fill="white"/>
            </svg>
        </a>
    </div>

</div>

<script src="/js/sripts_cab.js"></script>
<script src="/js/script_button.js"></script>`

module.exports = cabinet

