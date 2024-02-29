let newnotebtn = document.querySelector('.new')
let overlay = document.querySelector('.overlay')
let qry = document.querySelector('.field')
let init = document.querySelector('.empty')
var title = document.querySelector('.input-title')
let details = document.querySelector('.details')
let save = document.querySelector('.save')

if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]))
}


function newnote() {
    newnotebtn.addEventListener('click', function () {
        overlay.style.display = 'block'
        qry.style.display = 'block'
        init.style.display = 'none'
    })
}
newnote()
save.addEventListener('click', function () {
    const tit = title.value
    const dets = details.value

    const dataofinputs = {
        title: tit,
        details: dets
    }
    // Take previous tasks out:
    let previoustasks = localStorage.getItem('tasks')
    // Parse em all:
    let preparsedTasks = JSON.parse(previoustasks) || [];
    console.log(preparsedTasks)
    // Add more tasks in them through fetchdata function:
    preparsedTasks.push(dataofinputs)
    // Stringify em again:
    let strigifiedalltasks = JSON.stringify(preparsedTasks)
    // ADD THEM BACK TO LOCAL STORAGE 
    localStorage.setItem('tasks', strigifiedalltasks)
})

