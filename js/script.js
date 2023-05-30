// preloader
const loader = document.querySelector('.loader')
window.addEventListener('load', function(){
    loader.classList.add('loader-hidden')
    loader.addEventListener('transitionend',function(){
        document.body.removeChild(loader)
    })
})

// typing cursor
var typed = new Typed('.typing', {
  strings: ['Ola Mohamed', 'Web developer', 'Web designer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

// cursor
const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', (e)=>{
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + 'px'
    cursor.style.left = x + 'px'
    cursor.style.display = 'block'

    function mouseStopped() {
        cursor.style.display = 'none'
    }
    // clearTimeout(timeout)
    // var timeout = setTimeout(mouseStopped, 5000)
})

document.addEventListener('mouseout', (e)=>{
    cursor.style.display = 'none'
})

// project gallery
$(document).ready(function(){
    $(window).on('load',function(){
        var $container = $('.portfolioContainer')
        $container.isotope({
            filter: '*',
            animationOptions: {
                queue: true
            }
        })

        $('.portfolio-nav li').click(function(){
            $('.portfolio-nav .current').removeClass('current')
            $('.portfolio-nav .active').removeClass('active')
            $(this).addClass('current')
            $(this).addClass('active')
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true
                }
            })
            return false
        })
    })
    // $('#portfolio-item').mixItUp()
})

// top btn
let calcScrollValue = () =>{
    let scrollProgress = document.getElementById('top-btn')
    let progressValue = document.getElementById('top-value')
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100) / calcHeight)
    if (pos > 100){
        scrollProgress.style.display = 'grid';
    } else{
        scrollProgress.style.display = 'none';
    }
    scrollProgress.addEventListener("click",function(){
        document.documentElement.scrollTop = 0;
    });
    
    scrollProgress.style.background = `conic-gradient(#5271FF ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

let previewPortfolio = document.querySelector('.portfolio-preview')
let previewBox = document.querySelectorAll('.portfolio-preview .preview')

console.log(document.querySelectorAll('.portfolio figure figcaption::after'));

document.querySelectorAll('.portfolio figure').forEach(box => {
    box.onclick = () =>{
        let name = box.getAttribute('data-name')
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target')

            console.log(target);
            if(name == target){
                previewPortfolio.style.display = 'flex'
                preview.classList.add('active')
            }
        })
    }
})

previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () =>{
        close.classList.remove('active');
        previewPortfolio.style.display = 'none'
    }
})