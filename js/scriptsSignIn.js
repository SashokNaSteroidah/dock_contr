function checkSign() {
    if (localStorage.getItem('is_active') === 'active'){
        window.location.href = "../cabinet";
    }
    else {
        console.log('sign')
    }
}
checkSign()

const users = [
    "admin",
    "admin"
];

let arrUser = {}


document.querySelector('#signin').onclick = () => {
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

