<?php require_once 'header.php' ?>

<div class="cabinet_info">
    <div>
        <h1>Личный кабинет</h1>
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
        <input class="exit_but" type="button" value="Выйти из аккаунта">
    </div>

    <div class="document_cabinet">
        <h1>Созданные документы</h1>
        <div class="saved_docu">
            <p class="non_create_notify">Вы не создали еще ни одного документа</p>
            <img class="saved_img_docu" src="../img/saved_document.png" alt="">
        </div>
        <input class="creat_new_docu" type="button" value="Создать новый">
    </div>

</div>

<script src="../js/sripts_cab.js"></script>


<?php require_once 'footer.php' ?>


