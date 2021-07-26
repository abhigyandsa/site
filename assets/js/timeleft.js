progressday = document.querySelector('#progressday')
progressmon = document.querySelector('#progressmonth')
year = document.querySelector('#year')
dom = [ 31,28,31,30,31,30,31,31,30,31,30,31 ]

function updateDay() {
    timenow = new Date()
    widthday = timenow.getHours() * 60*60 + timenow.getMinutes()*60 + timenow.getSeconds()
    widthday /= 60*60*24
    widthday *= 100
    progressday.style.width = widthday + '%'

}

function updateMon() {
    timenow = new Date()
    widthday = timenow.getDate()
    if(isleap(timenow.getYear())) dom[1] = 29
    widthday /= dom[timenow.getMonth()]
    widthday *= 100
    progressmon.style.width = widthday + '%'
}

function initYear() {
    timenow = new Date()
    nod = isleap(timenow.getYear()) ? 366 : 365
    for(i = 0; i < nod; i++){
        box = document.createElement('div')
        box.classList.add('subbox')
        year.appendChild(box)
    }
}

function updateYear() {
    boxes = document.querySelectorAll('.subbox')
    timenow = new Date()
    if(isleap(timenow.getYear())) dom[1] = 29
    dayspassed = 0
    for(i = 0; i < timenow.getMonth(); i++) dayspassed += dom[i]
    dayspassed += timenow.getDate()

    for (i = 0; i < boxes.length; i++){
        if ( i < dayspassed ){
            boxes[i].classList.add('passed')
        }
    }

}

function isleap(year) {
    return year % 400 == 0 || ( year % 100 != 0 && year % 4 == 0 );
}

updateDay()
updateMon()
initYear()
updateYear()
setInterval(updateDay, 1000)
setInterval(updateMon, 1000)
setInterval(updateYear, 1000)