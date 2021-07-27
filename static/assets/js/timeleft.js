progressday = document.querySelector('#progressday')
progressmon = document.querySelector('#progressmonth')
year = document.querySelector('#year')
dom = [ 31,28,31,30,31,30,31,31,30,31,30,31 ]

dayv = document.querySelector('#dayv')
hourv = document.querySelector('#hourv')
minv = document.querySelector('#minv')
secv = document.querySelector('#secv')
over = document.querySelector('#over')
dayt = document.querySelector('#dayt')
hourt = document.querySelector('#hourt')
mint = document.querySelector('#mint')
sect = document.querySelector('#sect')
hr = document.querySelector('#hr')


function updateDay() {
    timenow = new Date()
    widthday = timenow.getHours() * 60*60 + timenow.getMinutes()*60 + timenow.getSeconds()
    widthday /= 60*60*24
    widthday *= 100
    progressday.style.width = widthday + '%'
    hr.innerHTML = 24 - timenow.getHours()

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

function settime(){
    timenow = new Date()
    hourv.innerHTML = timenow.getHours().toString().padStart(2,'0')
    minv.innerHTML = timenow.getMinutes().toString().padStart(2,'0')
    secv.innerHTML = timenow.getSeconds().toString().padStart(2,'0')
}

function isleap(year) {
    return year % 400 == 0 || ( year % 100 != 0 && year % 4 == 0 );
}

updateDay()
updateMon()
initYear()
updateYear()
settime()
setInterval(updateDay, 1000)
setInterval(updateMon, 1000)
setInterval(updateYear, 1000)
setInterval(settime,1000)
