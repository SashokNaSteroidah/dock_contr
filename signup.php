<?php require_once "head.php"; ?>
<?php require_once "header.php"; ?>

<div>
    <div class="signup">
        <h1>Зарегистрироваться</h1>
        <label for="">
            <input id="name_signup" placeholder="Name" name="email_signin" type="text">
            <input id="surname_signup" placeholder="Surname" name="email_signin" type="text">
            <input id="patra_signup" placeholder="Patronymic" name="email_signin" type="text">
            <input id="email_signup" placeholder="Email" name="email_signin" type="text">
            <input id="tel_signup" placeholder="Telephone" name="email_signin" type="text">
            <input id="inn_signup" placeholder="INN" name="email_signin" type="text">
            <input id="data_bank_signup" placeholder="Bank details" name="email_signin" type="text">
            <input id="address_signup" placeholder="Adress" name="passwd_signin" type="text">
            <input id="pass_signup" placeholder="Password" name="passwd_signin" type="password">
            <input id="conf_pass_signup" placeholder="Confirm password" name="passwd_conf_signin" type="password">
        </label>
        <label for="submin">
            <div id="signup" data-hover="false" onmouseleave="but_svg_dis(this)" onmouseover="but_svg_appear(this)"
                 class="button">Зарегистрироваться
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class="button_arrow"
                          d="M12.9703 0.656879V11.9706L10.9728 11.9883L10.9728 4.06867L2.36373 12.6777L0.949516 11.2635L9.55854 2.65446L1.63894 2.65446L1.65662 0.656879H12.9703Z"
                          fill="white"/>
                </svg>
            </div>
        </label>
        <p style="color: white; display: none" class="conf_pass">Проверьте совпадение паролей</p>
        <article>
            <p>У вас уже есть аккаунт? Вы можете <a href="signup.php">войти</a> и начать пользоваться веб-приложением</p>
        </article>
    </div>

    <script src="js/script_button.js"></script>
    <script src="js/users_info.js"></script>
    <script src="js/scriptsSignUp.js"></script>

</div>