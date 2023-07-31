import React, {useState} from 'react';
import ButtonSqrSubmit from "./components/UI/buttons/buttonSqrSubmit";
import ButtonUnderline from "./components/UI/buttons/buttonUnderline";

function Signup() {
    const [email, setEmail] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const filteredValue = value.replace(/[^a-zA-Z0-9.@-]/g, '');
        setEmail(filteredValue);
    };


    return (
        <div>
            <div className="signup">
                <h1>Зарегистрироваться</h1>
                <form action="">
                    <label form="">
                        <input required={true} minLength={2} id="name_signup" placeholder="Имя" name="email_signin"
                               type="text"/>
                        <input required={true} minLength={2} id="surname_signup" placeholder="Фамилия"
                               name="email_signin" type="text"/>
                        <input required={true} type="email" value={email} placeholder="Электронная почта"
                               onChange={handleChange}/>
                        <input required={true} id="inn_signup" placeholder="ИНН" name="email_signin" type="text"/>
                        <input required={true} id="pass_signup" placeholder="Пароль" minLength={6} maxLength={16}
                               name="passwd_signin"
                               type="password"/>
                        <input required={true} id="conf_pass_signup" minLength={6} maxLength={16}
                               placeholder="Повторите пароль"
                               name="passwd_conf_signin" type="password"/>
                    </label>
                    <ButtonSqrSubmit message={"Зарегистрироваться"}/>
                    <p style={{display: "none"}} className="conf_pass">Проверьте совпадение паролей</p>
                    <article>
                        <p>У вас уже есть аккаунт? Вы можете
                            <ButtonUnderline href="/sign-in" message={"Войти"}/>
                            и начать пользоваться
                            веб-приложением</p>
                    </article>
                </form>
            </div>
        </div>
    );
}

export default Signup