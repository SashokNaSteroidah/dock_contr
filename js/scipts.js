let change_input_ot_kogo = document.querySelector('#company');
let change_but_ot_kogo = document.querySelector('#company_but');
let change_allOtkogo = document.querySelectorAll(".otKogo");
function fun_fill() {
    if (localStorage.getItem('is_active') === 'active') {
        let address = localStorage.getItem('address')
        let elements = change_allOtkogo;
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = address;
            elements[i].style.backgroundColor = 'Green'
            elements[i].style.color = 'white'
        }
    } else {
        window.location.href = "../no_auto.php";
    }
}
    fun_fill()


change_but_ot_kogo.onclick = function () {
    if (change_input_ot_kogo.value == 0) {
        document.querySelector('.checker').style.opacity = 1
    } else {
        var elements = change_allOtkogo;
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = change_input_ot_kogo.value;
            elements[i].style.backgroundColor = 'Green'
            elements[i].style.color = 'white'
        }
    }
};

let changes1 = document.querySelector('.change1');
let change1_input = document.querySelector('#change1_input');
let change1_but = document.querySelector('#change1_but');

change1_but.onclick = function () {
    if (change1_input.value == 0) {
        document.querySelector('.checker1').style.opacity = 1
    } else {
        changes1.innerHTML = change1_input.value
        changes1.style.backgroundColor = 'Green'
        changes1.style.color = 'white'
    }
}


let changes2 = document.querySelector('.change2');
let change2_input = document.querySelector('#change2_input');
let change2_but = document.querySelector('#change2_but');

change2_but.onclick = function () {
    if (change2_input.value == 0) {
        document.querySelector('.checker2').style.opacity = 1
    } else {
        changes2.innerHTML = change2_input.value
        changes2.style.backgroundColor = 'Green'
        changes2.style.color = 'white'
    }
}

let changes3 = document.querySelector('.change3');
let change3_input = document.querySelector('#change3_input');
let change3_but = document.querySelector('#change3_but');

change3_but.onclick = function () {
    if (change3_input.value == 0) {
        document.querySelector('.checker3').style.opacity = 1
    } else {
        changes3.innerHTML = change3_input.value
        changes3.style.backgroundColor = 'Green'
        changes3.style.color = 'white'
    }
}

let changes4 = document.querySelector('.change4');
let change4_input = document.querySelector('#change4_input');
let change4_but = document.querySelector('#change4_but');

change4_but.onclick = function () {
    if (change4_input.value == 0) {
        document.querySelector('.checker4').style.opacity = 1
    } else {
        changes4.innerHTML = change4_input.value
        changes4.style.backgroundColor = 'Green'
        changes4.style.color = 'white'
    }
}

let change5 = document.querySelector('.change5');
let change5_input = document.querySelector('#change5_input');
let change5_but = document.querySelector('#change5_but');

change5_but.onclick = function () {
    if (change5_input.value == 0) {
        document.querySelector('.checker5').style.opacity = 1
    } else {
        change5.innerHTML = change1_input.value
        change5.style.backgroundColor = 'Green'
        change5.style.color = 'white'
    }
}

let change6 = document.querySelector('.change6');
let change6_input = document.querySelector('#change6_input');
let change6_but = document.querySelector('#change6_but');

change6_but.onclick = function () {
    if (change6_input.value == 0) {
        document.querySelector('.checker6').style.opacity = 1
    } else {
        change6.innerHTML = change6_input.value
        change6.style.backgroundColor = 'Green'
        change6.style.color = 'white'
    }
}

document.querySelector('#save').onclick = () => {
    localStorage.setItem('docu', 'saved')
    document.querySelector('.saved_notify').style.opacity = '1'
    setTimeout(function(){
        document.querySelector('.saved_notify').style.opacity = '0';
    }, 3000);
    // var Date = new Date();
    let date = new Date(Date.now() + 86400000);
    // date = date.toUTCString();
    localStorage.setItem('save_time', date)
}



