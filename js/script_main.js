function but_svg_appear(f) {
    let element = f.getAttribute('data-hover')

    if (element === "false"){
        f.setAttribute('data-hover', "true")
        f.childNodes[1].childNodes[1].style.fill ='black'
    }
}


function but_svg_dis(f) {
    let element = f.getAttribute('data-hover')

    if (element === "true"){
        f.setAttribute('data-hover', "false")
        f.childNodes[1].childNodes[1].style.fill = 'white'
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let svg_logo_header = document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1]
    let profile_icon_header = document.querySelector("header").childNodes[1].childNodes[3].childNodes[1]
    let logo_name_header = document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[3]
    let nav_name_header = document.querySelector("header").childNodes[1].childNodes[1].childNodes[3]

    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector("header").style.background = "white";
        logo_name_header.style.color = '#1c1c1c'
        nav_name_header.childNodes[1].style.color = "#1c1c1c"
        nav_name_header.childNodes[3].style.color = "#1c1c1c"
        nav_name_header.childNodes[5].style.color = "#1c1c1c"
        profile_icon_header.style.color = '#1c1c1c'
        svg_logo_header.childNodes[1].style.fill = '#1c1c1c'
        svg_logo_header.childNodes[3].style.fill = 'white'
        svg_logo_header.childNodes[5].style.fill = 'white'
        svg_logo_header.childNodes[7].style.fill = 'white'
    } else {
        document.querySelector("header").style.background = "#1c1c1c";
        logo_name_header.style.color = 'white'
        nav_name_header.childNodes[1].style.color = "white"
        nav_name_header.childNodes[3].style.color = "white"
        nav_name_header.childNodes[5].style.color = "white"
        profile_icon_header.style.color = 'white'
        svg_logo_header.childNodes[1].style.fill = 'white'
        svg_logo_header.childNodes[3].style.fill = '#1c1c1c'
        svg_logo_header.childNodes[5].style.fill = '#1c1c1c'
        svg_logo_header.childNodes[7].style.fill = '#1c1c1c'
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

