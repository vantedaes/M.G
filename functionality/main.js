

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


//Checkboxes
//no-upper-text  = > no upper text checkbox
//no-bottom-text = > no-bottom-text

  $('.no-upper-text').addEventListener('click', () => {
    $('.top-text').style.visibility = "hidden"
})

$('.no-bottom-text').addEventListener('click', () => {
    $('.bottom-text').style.visibility = "hidden"
})


// Fonts options

$('.drop-down-fonts-menu').addEventListener('input', (e) => {
    $('.top-text').style.fontFamily = e.target.value
    })

    $('.drop-down-fonts-menu').addEventListener('input', (e) => {
        $('.bottom-text').style.fontFamily = e.target.value
    })


    // Fonts sizes 

     $('.font-sizes').addEventListener('input', (e) => {
         $('.top-text').style.fontSize = `${e.target.value}px`
     })

     $('.font-sizes').addEventListener('input', (e) => {
        $('.bottom-text').style.fontSize = `${e.target.value}px`
    })

    // Font color and font background color

    $('.font-color').addEventListener('input', (e) => {
        $('.top-text').style.color = e.target.value
    })

    $('.font-color').addEventListener('input', (e) => {
        $('.bottom-text').style.color = e.target.value
    })


    // Text alignment =>  left-align-button, justify-align-button, 
    //right-align-button

    $('.left-align-button').addEventListener('click', (e) => {
        $('.top-text').style.textAlign = 'left'
    })

    $('.left-align-button').addEventListener('click', (e) => {
        $('.bottom-text').style.textAlign = 'left'
    })

    $('.justify-align-button').addEventListener('click', (e) => {
        $('.top-text').style.textAlign = 'center'
    })

    $('.justify-align-button').addEventListener('click', (e) => {
        $('.bottom-text').style.textAlign = 'center'
    })

    $('.right-align-button').addEventListener('click', (e) => {
        $('.top-text').style.textAlign = 'right'
    })

    $('.right-align-button').addEventListener('click', (e) => {
        $('.bottom-text').style.textAlign = 'right'
    })


    // font backgrounColor

    $('.background-text-color').addEventListener('input', (e) => {
        $('.top-text').style.backgroundColor = e.target.value
    })

    $('.background-text-color').addEventListener('input', (e) => {
        $('.bottom-text').style.backgroundColor = e.target.value
    })

    // no background checkbox

    $('.clear-background').addEventListener('click', (e) => {
        $('.top-text').style.backgroundColor = "transparent"
    })

    $('.clear-background').addEventListener('click', (e) => {
        $('.bottom-text').style.backgroundColor = "transparent"
    })

    // Fonts outline => light

    $('.light-outline-button').addEventListener('click', (e) => {
        $('.bottom-text').style.webkitTextStroke = '1px white'
    })

    $('.light-outline-button').addEventListener('click', (e) => {
        $('.top-text').style.webkitTextStroke = '1px white'
    })

    // Font outline => Dark

    $('.dark-outline-button').addEventListener('click', (e) => {
        $('.bottom-text').style.webkitTextStroke = '1px black'
    })

    $('.dark-outline-button').addEventListener('click', (e) => {
        $('.top-text').style.webkitTextStroke = '1px black'
    })

    // None outline

     $('.None-outline-button').addEventListener('click', (e) => {
        $('.top-text').style.webkitTextStroke = '0'
    })

    $('.None-outline-button').addEventListener('click', (e) => {
        $('.bottom-text').style.webkitTextStroke = '0'
    })


    // Fonts padding 

     $('.padding-input').addEventListener('input', (e) => {
         $('.top-text').style.padding = `${e.target.value}px`
     })

     $('.padding-input').addEventListener('input', (e) => {
        $('.bottom-text').style.padding = `${e.target.value}px`
    })

   // Line Height

   $('.line-spacing').addEventListener('input', (e) => {
    $('.top-text').style.lineHeight = e.target.value
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


// drop down menu, blend modes 

 $('.drop-down-options-menu').addEventListener('input', (e) => {
 $('.meme-picture').style.backgroundBlendMode = e.target.value
 })

 // Filters, sliders 

 $('.brightness').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `brightness(${e.target.value})`
 })

 $('.opacity').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `opacity(${e.target.value})`
 })

 $('.contrast').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `contrast(${e.target.value}%)`
 })

 $('.blur').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `blur(${e.target.value}px)`
 })

 $('.grayscale').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `grayscale(${e.target.value}%)`
 })

 $('.sepia').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `sepia(${e.target.value}%)`
 })

 $('.hue-rotation').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `hue-rotate(${e.target.value}deg)`
 })

 $('.saturation').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `saturate(${e.target.value}%)`
 })

 $('.negative').addEventListener('input', (e) => {
    $('.meme-picture').style.filter = `invert(${e.target.value})`
 })

 $(`.reset-button`).addEventListener('click', (e) => {
    $('.meme-picture').style.filter = 'none'
    $('.brightness').value = '1'
    $('.opacity').value = '1'
    $('.contrast').value = '100%'
    $('.blur').value = '0px'
    $('.grayscale').value = '0%'
    $('.sepia').value ='0%'
    $('.hue-rotation').value = '0deg'
    $('.saturation').value = '100%'
    $('.negative').value = '1'
 })