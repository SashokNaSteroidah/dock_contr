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

function temp_check() {
        document.querySelector('.templates_author').innerHTML = 'Создатель: ' + localStorage.getItem("name");
}

saved_check()
temp_check()

document.querySelector('.saved_img_docu').onclick = () => {
    window.location.href = "../document_change.php";
}

document.querySelector('.templates_img_docu').onclick = () => {
    window.location.href = "../document_change.php";
}
