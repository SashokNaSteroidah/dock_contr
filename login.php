<?php require_once "header.php"; ?>
<header>
    <div class="auth">
        <div class="signin">Войти</div>
        <div class="signup">Регистрация</div>
    </div>
    <div style="display: none" class="signin_window">
        <label for="">
            <input placeholder="Email" id="email_signin" name="email_signup" type="text">
            <input placeholder="Password" id="email_password" name="passwd_signup" type="password">
            <input class="sub_signin" type="submit" name="submit_signup" value="Войти">
            <p class="non-right" style="display: none">Проверьте еще раз введеные данные</p>
        </label>
    </div>
    <div style="display: none" class="signup_window">
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
            <p style="color: white; display: none" class="conf_pass">Проверьте совпадение паролей</p>
            <input class="sub_signup" type="submit" name="submit_signup" value="Зарегистироваться">
        </label>
    </div>
    <div class="black_screan"></div>

    <script src="js/users_info.js"></script>
    <script src="js/scriptsSignIn.js"></script>

</header>