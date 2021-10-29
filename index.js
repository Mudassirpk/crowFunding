const radio = document.querySelectorAll('.edition-modal')
const Continue = document.querySelectorAll('.continue')
const selection = document.getElementById('selection')
const selected = document.getElementById('selected')
const gotit = document.getElementById('gotit')

radio.forEach((radio,index)=>{
    radio.addEventListener('click',()=>{
        const radioElement = radio.previousElementSibling
        if(radioElement.checked === true){
            Continue[index].style.display = 'flex'
        }
    })
})

Continue.forEach((con,index)=>{
    con.addEventListener('click',()=>{
        selected.style.display = 'flex'
        selection.style.display = 'none'
    })
})

gotit.addEventListener('click',()=>{
    selected.style.display = 'none'
    selection.style.display = 'block'
})
    
