function but_svg_appear(f) {
    let el = f.getAttribute('data-hover')
    if (el === "false"){
        f.setAttribute('data-hover', "true")
        f.childNodes[1].childNodes[1].style.fill ='black'
    }
}


function but_svg_dis(f) {
    let el = f.getAttribute('data-hover')
    if (el === "true"){
        f.setAttribute('data-hover', "false")
        f.childNodes[1].childNodes[1].style.fill = 'white'
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector("header").style.background = "white";
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[3].style.color = '#1c1c1c'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[3].childNodes[1].style.color = "#1c1c1c"
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[3].childNodes[3].style.color = "#1c1c1c"
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[3].childNodes[5].style.color = "#1c1c1c"
        document.querySelector("header").childNodes[1].childNodes[3].childNodes[1].style.color = '#1c1c1c'
        document.querySelector("header").childNodes[1].childNodes[3].childNodes[1].style.color = '#1c1c1c'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.fill = '#1c1c1c'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].style.fill = 'white'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[5].style.fill = 'white'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[7].style.fill = 'white'
    } else {
        document.querySelector("header").style.background = "white";
        document.querySelector("header").style.background = "#1c1c1c";
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[3].style.color = 'white'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[3].childNodes[1].style.color = "white"
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[3].childNodes[3].style.color = "white"
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[3].childNodes[5].style.color = "white"
        document.querySelector("header").childNodes[1].childNodes[3].childNodes[1].style.color = 'white'
        document.querySelector("header").childNodes[1].childNodes[3].childNodes[1].style.color = 'white'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.fill = 'white'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].style.fill = '#1c1c1c'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[5].style.fill = '#1c1c1c'
        document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[7].style.fill = '#1c1c1c'
    }
}


let index = 0;

function writeText(text) {
    document.querySelector('.stic_el_span').innerText = text.slice(0, index);
    index++;
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 100 || window.scrollY < 1500) {
        document.querySelector('.stic_el').style.background = '#F3E700'
        document.querySelector('.blinking-cursor').style.color = 'black'
        document.querySelector('.stic_el_span').style.color = 'black'
        setInterval(writeText("Ваше изменения"), 1000)
    }
    if (window.scrollY > 1500){
        document.querySelector('.stic_el_span').style.color = 'white'
        document.querySelector('.blinking-cursor').style.color = 'white'
        setInterval(writeText("Ваше имя"), 1000)
        document.querySelector('.stic_el').style.background = '#008000'
    }
    if (window.scrollY > 2500){
        document.querySelector('.stic_el').style.background = '#F3E700'
        document.querySelector('.blinking-cursor').style.color = 'black'
        document.querySelector('.stic_el_span').style.color = 'black'
        setInterval(writeText("Ваш контрагент"), 1000)
    }
});

