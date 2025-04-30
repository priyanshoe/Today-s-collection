var tl = gsap.timeline();
var tl2 = gsap.timeline();

tl.
from('.head span',{
    opacity:0,
    stagger:.1,
})
.from('.box',{
    height:0,
    opacity:0,
    stagger:.3,

})
.from('.box h2',{
    y:50,
    opacity:0,
    stagger:.3,
})
.from('.box h4',{
    y:50,
    opacity:0,
    stagger:.3,
})

tl2
.from('.para span',{
    delay:5,
    opacity:0,
    stagger:.1,
    duration:2
})
.from('nav',{
    x:-100,
    opacity:0,
    duration:1.5
})


let width = window.innerWidth;
window.addEventListener('resize',() => {
    
    if(window.innerWidth !== width){
        location.reload();
    }
});