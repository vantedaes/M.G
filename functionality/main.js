

//swapping of themes.

document.querySelector('.light-mode').addEventListener('click', () => {
    document.body.classList.toggle('light-theme')
})

// Form Values pratices :p 

const $ = (selector) => document.querySelector(selector) 

$('#upper-text-input-id').addEventListener("input", (e) =>{
    $('.top-text').innerText = e.target.value
})

$('#bottom-text-input-id').addEventListener('input', (e) => {
    $('.bottom-text').innerText = e.target.value
})

// swapping of responsive menu text to image 

// // inser-text
//insert-picture
// picture-pannel
//text-pannel

$('.inser-text').addEventListener('click', (e) => {
    if ($('.picture-pannel.style.display') !== 'none'){
        $('.picture-pannel').style.display ='none'
        $('.text-pannel').style.display ='block'
    }else {
        $('.picture-panel').style.display ='block'
        $('.text-pannel').style.display ='none'
    }
})

$('.insert-picture').addEventListener('click', (e) => {
    if ($('.text-pannel.style.display') !== 'none'){
        $('.text-pannel').style.display ='none'
        $('.picture-pannel').style.display ='block'
    }else {
        $('.text-pannel').style.display ='block'
        $('.picture-pannel').style.display ='none'
    }
})


// Input url 

$('.url-input').addEventListener('input', (e) => {
$('.meme-picture').style.backgroundImage = `url(${e.target.value})`
})

// background of picture 

$('.picture-background-color-input').addEventListener('input', (e) =>{
    $('.meme-picture').style.backgroundColor = e.target.value
})