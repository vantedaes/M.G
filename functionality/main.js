

//swapping of themes.

document.querySelector('.light-mode').addEventListener('click', () => {
    document.body.classList.toggle('light-theme')
})

// Form Values 

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

  $('.no-upper-text').addEventListener('input', (e) => {
    if(e.target.checked){
    $('.top-text').style.visibility = "hidden"
   }else{
    $('.top-text').style.visibility = 'visible'
   }
})


$('.no-bottom-text').addEventListener('click', (e) => {
    if(e.target.checked){
    $('.bottom-text').style.visibility = "hidden"
    }else{
        $('.bottom-text').style.visibility = 'visible'
    }
})



// Fonts options

$('.drop-down-fonts-menu').addEventListener('input', (e) => {
    $('.top-text').style.fontFamily = e.target.value
    $('.bottom-text').style.fontFamily = e.target.value
    })


    // Fonts sizes 

     $('.font-sizes').addEventListener('input', (e) => {
         $('.top-text').style.fontSize = `${e.target.value}px`
         $('.bottom-text').style.fontSize = `${e.target.value}px`
     })

    // Font color and font background color

    $('.font-color').addEventListener('input', (e) => {
        $('.top-text').style.color = e.target.value
        $('.bottom-text').style.color = e.target.value
    })


    // Text alignment =>  left-align-button, justify-align-button, 
    //right-align-button

    $('.left-align-button').addEventListener('click', (e) => {
        $('.top-text').style.textAlign = 'left'
        $('.bottom-text').style.textAlign = 'left'
    })

    $('.justify-align-button').addEventListener('click', (e) => {
        $('.top-text').style.textAlign = 'center'
        $('.bottom-text').style.textAlign = 'center'
    })

    $('.right-align-button').addEventListener('click', (e) => {
        $('.top-text').style.textAlign = 'right'
        $('.bottom-text').style.textAlign = 'right'
    })



    // font backgrounColor

    $('.background-text-color').addEventListener('input', (e) => {
        $('.top-text').style.backgroundColor = e.target.value
        $('.bottom-text').style.backgroundColor = e.target.value
    })

    // no background checkbox

    $('.clear-background').addEventListener('input', (e) => {
        if(e.target.checked){
        $('.top-text').style.backgroundColor = "transparent"
        $('.bottom-text').style.backgroundColor = "transparent"
      }else{
        $('.top-text').style.backgroundColor = "white"
        $('.bottom-text').style.backgroundColor = "white"
      }
    })


    // Fonts outline => light

    $('.light-outline-button').addEventListener('click', (e) => {
        $('.bottom-text').style.webkitTextStroke = '1px white'
        $('.top-text').style.webkitTextStroke = '1px white'
    })

    // Font outline => Dark

    $('.dark-outline-button').addEventListener('click', (e) => {
        $('.bottom-text').style.webkitTextStroke = '1px black'
        $('.top-text').style.webkitTextStroke = '1px black'
    })

    // None outline

     $('.None-outline-button').addEventListener('click', (e) => {
        $('.top-text').style.webkitTextStroke = '0'
        $('.bottom-text').style.webkitTextStroke = '0'
    })

    // Fonts padding 

     $('.padding-input').addEventListener('input', (e) => {
         $('.top-text').style.padding = `${e.target.value}px`
         $('.bottom-text').style.padding = `${e.target.value}px`
     })

   // Line Height

   $('.line-spacing').addEventListener('input', (e) => {
    $('.top-text').style.lineHeight = e.target.value
    $('.bottom-text').style.lineHeight = e.target.value
   })



// swapping of responsive menu text to image 

// // inser-text
//insert-picture
// picture-pannel
//text-pannel


// swapping of responsive menu text to image 

// // inser-text
//insert-picture
// picture-pannel
//text-pannel

$('.inser-text').addEventListener('click', (e) => {
    $('.responsive-menu').style.display = 'block'
    if ($('.picture-pannel.style.display') !== 'none'){
        $('.picture-pannel').style.display ='none'
        $('.text-pannel').style.display ='block'
    }else {
        $('.picture-panel').style.display ='block'
        $('.text-pannel').style.display ='none'
    }
})


$('.insert-picture').addEventListener('click', (e) => {
    $('.responsive-menu').style.display = 'block'
    if ($('.text-pannel.style.display') !== 'none') {
        $('.text-pannel').style.display ='none'
        $('.picture-pannel').style.display ='block'
    }
})


//MQ 320, 480, 768 Responsive Menu



//CLOSE BUTTON 

$('.close-icon').addEventListener('click', (e) => {
    if ($('.text-pannel.style.display') !== 'none' || $('.picture-pannel.style.display') !== 'none') {
     
        $('.responsive-menu').style.display ='none'
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


 const filtersMix = () => {
     $(".meme-picture").style.filter = `brightness(${$(".brightness").value}) opacity(${$(".opacity").value}) contrast(${$('.contrast').value}%) blur(${$('.blur').value}px) grayscale(${$('.grayscale').value}%) sepia(${$('.sepia').value}%) hue-rotate(${$('.hue-rotation').value}deg) saturate(${$('.saturation').value}%) invert(${$('.negative').value})`
 }


 $(".brightness").addEventListener("input", filtersMix)
 $(".opacity").addEventListener("input", filtersMix)
 $(".contrast").addEventListener("input", filtersMix)
 $(".blur").addEventListener("input", filtersMix)
 $(".grayscale").addEventListener("input", filtersMix)
 $(".sepia").addEventListener("input", filtersMix)
 $(".hue-rotation").addEventListener("input", filtersMix)
 $(".saturation").addEventListener("input", filtersMix)
 $(".negative").addEventListener("input", filtersMix)



 // RESET BUTTON

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

 //  Download Meme 

 const downloadMeme = () => {
    domtoimage.toBlob($(".meme-gen")).then((blob) => {
        saveAs(blob, "my-meme.png")
  })
  }

 $('.download').addEventListener('click', downloadMeme)