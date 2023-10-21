

//swapping of themes.

document.querySelector('.light-mode').addEventListener('click', () => {
    document.body.classList.toggle('light-theme')
})

// Form Values pratices :p 

const upperTexts = document.getElementById('upper-text-input-id')
const topTextmeme = document.getElementById('top-text-id')

const textValue = () => {
    topTextmeme.innerHTML = upperTexts.value 
}

upperTexts.addEventListener('input, texValue')

// document.querySelector('.upper-text-input').addEventListener("input", (e) => {
//      ('.top-text').innerText = e.target.value

