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
