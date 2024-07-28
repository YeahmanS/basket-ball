let one_html =document.getElementById("team1-point")
let one_count=0
let two_html =document.getElementById("team2-point")
let two_count=0

console.log(one_html)


function oneadd1(){
    one_count+=1
    one_html.textContent =one_count
}
function oneadd2(){
    one_count+=2
    one_html.textContent = one_count
}
function oneadd3(){
    one_count+=3
    one_html.textContent = one_count
}
function twoadd1(){
    two_count+=1
    two_html.textContent = two_count
}

function twoadd2(){
    two_count+=2
    two_html.textContent = two_count
}

function twoadd3(){
    two_count+=3
    two_html.textContent = two_count
}

