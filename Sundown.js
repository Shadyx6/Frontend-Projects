var box = document.querySelectorAll('.elem');
var img = document.querySelector('#fixed');
var video = img.querySelector('video');
var image = img.querySelector('img');
var gs = gsap.timeline()
document.querySelector('#page3').addEventListener('mouseenter', function(){
    img.style.display = 'block';
});

document.querySelector('#page3').addEventListener('mouseleave', function(){
    img.style.display = 'none';
});

box.forEach(function(ani){
    ani.addEventListener('mouseenter', function(){
        var videoSrc = ani.getAttribute('data-video');
        var imageSrc = ani.getAttribute('data-image'); 
        video.src = videoSrc;
        img.style.backgroundImage = `url(${imageSrc})`;
    });
});

var line = document.querySelector('.redl')
var gray = document.querySelectorAll('.gray')
var design = document.querySelector('.h3')
var pera = document.querySelector('.bot1 h4')
var pg = document.querySelector('.pg')
var eg = document.querySelector('.eg')
var image1 = document.querySelector('.img2')
var gs = gsap.timeline()
gs.from('.img2', {
    opacity: 0,
    duration: 3
})

gray.forEach(function(e){
    e.addEventListener('click', function(){
        
        if(e.outerText === 'Project'){
            line.style.marginTop = '90px'
            e.style.color = 'white'
            eg.style.color = 'rgb(138, 138, 138, 0.6)'
            pera.innerHTML = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.'
            design.style.color = 'rgb(138, 138, 138, 0.6)'
            image1.src = 'https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp'
            gs.from('.img2, .bot1 h4', {
                opacity: 0,
                duration: 2
                
            })

        }
        else if(e.outerText === 'Execution'){
            line.style.marginTop = '175px'
            e.style.color = 'white'
            pera.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
            pg.style.color = 'rgb(138, 138, 138, 0.6)'
            design.style.color = 'rgb(138, 138, 138, 0.6)'
            image1.src = 'https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg'
            gs.from('.img2, .bot1 h4', {
                opacity: 0,
                duration: 2
                
            })
        }
       
    })
})
design.addEventListener('click', function(){
    line.style.marginTop = '0'
    design.style.color = 'white'
    pera.innerHTML = 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.'
    eg.style.color = 'rgb(138, 138, 138, 0.6)'
    pg.style.color = 'rgb(138, 138, 138, 0.6)'
    image1.src = 'https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg'
    gs.from('.img2, .bot1 h4', {
        opacity: 0,
        duration: 2
        
    })
})

var crsr = document.querySelector('.cursor')
var cnt = document.querySelector('.container1')

cnt.addEventListener('mousemove', function(c){
    console.log(c)
    crsr.style.top = c.y + 'px'
    crsr.style.left = c.x + 'px'
    crsr.style.display = 'block'
})
cnt.addEventListener('mouseenter', function(){
    crsr.style.display = 'block'
    crsr.style.transform = 'scale(1)'
    crsr.style.animationName = 'schange'
    
})
cnt.addEventListener('mouseleave', function(){
    crsr.style.display = 'none'
    crsr.style.transform = 'scale(0)'
    crsr.style.animationName = 'change'

})
var loader = document.querySelector('.loadermain')
var innertext = document.querySelector('.loadermain h3')
var height = loader.offsetHeight

gs.to(loader, {
    top: -height,
    duration:1.4 
})
