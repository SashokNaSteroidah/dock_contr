
window.onscroll = function() {
    let svg_logo_header = document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[1]
    let profile_icon_header = document.querySelector("header").childNodes[1].childNodes[3].childNodes[1]
    let logo_name_header = document.querySelector("header").childNodes[1].childNodes[1].childNodes[1].childNodes[3]
    let nav_name_header = document.querySelector("header").childNodes[1].childNodes[1].childNodes[3]
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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
};

