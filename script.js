let newnotebtn = document.querySelector('.new')
let overlay = document.querySelector('.overlay')
let qry = document.querySelector('.field')
let init = document.querySelector('.empty')

function newnote(){
newnotebtn.addEventListener('click', function(){
    overlay.style.display = 'block'
    qry.style.display = 'block'
    init.style.display = 'none'
})
}
newnote()