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
function saved_check() {
    if (localStorage.getItem('docu') === 'saved') {
        document.querySelector('.saved_img_docu').style.display = 'block'
        document.querySelector('.non_create_notify').style.display = 'none'
        document.querySelector('.saved_time').innerHTML = localStorage.getItem('save_time')
    }
    else{
        document.querySelector('.saved_img_docu').style.display = 'none'
        document.querySelector('.non_create_notify').style.display = 'block'
    }
}

saved_check()
add_info()

document.querySelector('.saved_img_docu').onclick = () => {
    window.location.href = "../document_change.php";
}

document.querySelector('.exit_but').onclick = () => {
    localStorage.clear()
    window.location.href = "../login";
}
document.querySelector('.creat_new_docu').onclick = () => {
    window.location.href = "../document_change.php";
}
