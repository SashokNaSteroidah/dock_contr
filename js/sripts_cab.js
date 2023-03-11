function add_info() {
    if (localStorage.getItem('is_active') === 'active') {
        document.querySelector('.acive_ac').innerHTML = localStorage.getItem('is_active')
        document.querySelector('.name').innerHTML = localStorage.getItem('name')
        document.querySelector('.surname').innerHTML = localStorage.getItem('surname')
        document.querySelector('.patronymic').innerHTML = localStorage.getItem('patra')
        document.querySelector('.bank_info').innerHTML = localStorage.getItem('bank_info')
        document.querySelector('.email').innerHTML = localStorage.getItem('email')
        document.querySelector('.tel').innerHTML = localStorage.getItem('tel')
        document.querySelector('.inn').innerHTML = localStorage.getItem('inn')
        document.querySelector('.address').innerHTML = localStorage.getItem('address')
    }
    else {
        window.location.href = "../no_auto.php";
    }
}

add_info()

document.querySelector('.exit_but').onclick = () => {
    localStorage.clear()
    window.location.href = "../login";
}
