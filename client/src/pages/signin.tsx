import React from 'react';
import ButtonSqrSubmit from "./components/UI/buttons/buttonSqrSubmit";
import ButtonUnderline from "./components/UI/buttons/buttonUnderline";

function Signin() {

    return (
        <div>
            <div className="signin">
                <h1>Войти</h1>
                <form action="">
                    <label htmlFor="">
                        <input placeholder="Email" id="email_signin" name="email_signup" type="text" required={true}/>
                    </label>
                    <label htmlFor="">
                        <input placeholder="Пароль" id="email_password" name="passwd_signup" type="password"
                               required={true}/>
                    </label>
                    <ButtonSqrSubmit message={"Войти"}/>
                </form>
                <p style={{display: "none"}} className="non-right">Проверьте еще раз введенные данные</p>
                <article>
                    <p>У вас еще нет аккаунта? Вы можете <br/>
                        <ButtonUnderline href="/sign-up" message={"Зарегистрироваться"}/>
                    </p>
                </article>
            </div>
        </div>
    );
}

export default Signin
