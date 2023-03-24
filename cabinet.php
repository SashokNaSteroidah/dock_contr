<?php require_once 'head.php' ?>
<?php require_once 'header.php' ?>


<div class="header_cab">
    <h1>Личный кабинет</h1>
    <h1>Созданные документы</h1>
</div>

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
        <a class="exit_but" href="">Выйти из аккаунта</a>
    </div>

    <div class="document_cabinet">
        <div class="saved_docu">
            <p class="non_create_notify">Вы не создали еще ни одного документа</p>
            <img class="saved_img_docu" src="../img/saved_document.png" alt="">
            <p class="saved_time"></p>
        </div>
        <a href="index.php" class="creat_new_docu" type="button" value="">Создать новый</a>
    </div>

</div>

<script src="../js/sripts_cab.js"></script>


<?php require_once 'footer.php' ?>


