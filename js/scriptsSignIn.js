function checkSign() {
    if (localStorage.getItem('is_active') === 'active'){
        window.location.href = "../cabinet";
    }
    else {
        console.log('sign')
    }
}
checkSign()


document.querySelector('.signin').onclick = () => {
    document.querySelector('.black_screan').style.display = "block";
    document.querySelector('.signin_window').style.display = "block";
}

document.querySelector('.black_screan').onclick = () => {
    document.querySelector('.black_screan').style.display = "none";
    document.querySelector('.signin_window').style.display = "none";
    document.querySelector('.signup_window').style.display = "none";
}

document.querySelector('.signup').onclick = () => {
    document.querySelector('.black_screan').style.display = "block";
    document.querySelector('.signup_window').style.display = "block";
}

const users = [
    "admin",
    "admin"
];

let arrUser = {}


document.querySelector('.sub_signin').onclick = () => {
    if(document.querySelector('#email_signin').value === users[0] && document.querySelector('#email_password').value === users[1]) {
        localStorage.clear()
        localStorage.setItem('name', 'admin')
        localStorage.setItem('surname', 'admin')
        localStorage.setItem('patra', 'admin')
        localStorage.setItem('email', 'admin')
        localStorage.setItem('tel', 'admin')
        localStorage.setItem('inn', 'admin')
        localStorage.setItem('bank_info', 'admin')
        localStorage.setItem('address', 'admin')
        localStorage.setItem('pass', 'admin')
        localStorage.setItem('is_active', 'active')
        window.location.href = "../cabinet.php";
        document.querySelector('.black_screan').style.display = "none";
        document.querySelector('.signin_window').style.display = "none";
        document.querySelector('.signup_window').style.display = "none";
    }
    else if(document.querySelector('#email_signin').value === arrUser['email'] && document.querySelector('#email_password').value === arrUser['pass']) {
        localStorage.clear()
        localStorage.setItem('name', arrUser['name'])
        localStorage.setItem('surname', arrUser['surname'])
        localStorage.setItem('patra', arrUser['patra'])
        localStorage.setItem('email', arrUser['email'])
        localStorage.setItem('tel', arrUser['tel'])
        localStorage.setItem('inn', arrUser['inn'])
        localStorage.setItem('bank_info', arrUser['bank_info'])
        localStorage.setItem('address', arrUser['address'])
        localStorage.setItem('pass', arrUser['pass'])
        localStorage.setItem('is_active', 'active')

        window.location.href = "../cabinet.php";
        document.querySelector('.black_screan').style.display = "none";
        document.querySelector('.signin_window').style.display = "none";
        document.querySelector('.signup_window').style.display = "none";
    }
    else {
        document.querySelector('.non-right').style.display = "block"
    }
}



document.querySelector('.sub_signup').onclick = () => {
    let name_user_reg = document.querySelector('#name_signup').value;
    let suname_user_reg = document.querySelector('#surname_signup').value;
    let patra_user_reg = document.querySelector('#patra_signup').value;
    let email_user_reg = document.querySelector('#email_signup').value;
    let tel_user_reg = document.querySelector('#tel_signup').value;
    let inn_user_reg = document.querySelector('#inn_signup').value;
    let data_bank_user_reg = document.querySelector('#data_bank_signup').value;
    let address_user_reg = document.querySelector('#address_signup').value;
    let pass_signup = document.querySelector('#pass_signup').value;
    let conf_pass_signup = document.querySelector('#conf_pass_signup').value;
    if (pass_signup === conf_pass_signup) {
         arrUser = {
            name: name_user_reg,
            surname: suname_user_reg,
            patra: patra_user_reg,
            email: email_user_reg,
            tel: tel_user_reg,
            inn: inn_user_reg,
            bank_info: data_bank_user_reg,
            address: address_user_reg,
            pass: pass_signup
        };
        document.querySelector('.black_screan').style.display = "none";
        document.querySelector('.signin_window').style.display = "none";
        document.querySelector('.signup_window').style.display = "none";
    }
    else{
        document.querySelector('.conf_pass').style.display = 'block'
    }
    console.log(arrUser)
}

