<?php require_once "head.php"; ?>
<?php require_once "header.php"; ?>

<div>
    <div class="signin">
        <h1>Войти</h1>
        <label for="">
            <input placeholder="Email" id="email_signin" name="email_signup" type="text">
        </label>
        <label for="">
            <input placeholder="Password" id="email_password" name="passwd_signup" type="password">
        </label>
        <input style="display: none" type="submit">
        <label for="submin">
            <div id="signin" data-hover="false" onmouseleave="but_svg_dis(this)" onmouseover="but_svg_appear(this)"
               class="button">Войти
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class="button_arrow"
                          d="M12.9703 0.656879V11.9706L10.9728 11.9883L10.9728 4.06867L2.36373 12.6777L0.949516 11.2635L9.55854 2.65446L1.63894 2.65446L1.65662 0.656879H12.9703Z"
                          fill="white"/>
                </svg>
            </div>
        </label>
        <p class="non-right" style="display: none">Проверьте еще раз введеные данные</p>
        <article>
            <p>У вас еще нет аккаунта? Вы можете <a href="signup.php">зарегистрироваться</a></p>
        </article>
    </div>


    <script src="js/script_button.js"></script>
    <script src="js/users_info.js"></script>
    <script src="js/scriptsSignIn.js"></script>

</div>