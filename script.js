const body = document.body.firstChild.nextSibling
const heart1 = body.firstChild.nextSibling
const heart2 = body.firstChild.nextSibling.nextSibling.nextSibling
const heart3 = body.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling

setTimeout(() => {
    heart3.style.position = 'absolute'
    heart3.style.left = '51%'
    setTimeout(() => {
        heart3.classList.add('active')
        heart3.classList.add('active2')
        heart3.style.backgroundColor = 'red'
    }, 300);
}, 200);
setTimeout(() => {
    heart2.style.position = 'absolute'
    heart2.style.left = '41%'
    setTimeout(() => {
        heart2.classList.add('active')
        heart2.classList.add('active2')
        heart2.style.backgroundColor = 'red'
    }, 300);
}, 400);
setTimeout(() => {
    heart1.style.position = 'absolute'
    heart1.style.left = '31%'
    setTimeout(() => {
        heart1.classList.add('active')
        heart1.classList.add('active2')
        heart1.style.backgroundColor = 'red'
    }, 300);
}, 600);