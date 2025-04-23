var tl = gsap.timeline();

tl.from('.heading h1',{
    delay: 1,
    duration: 1,
    y: -30,
    opacity: 0,
    ease: 'Cubic.easeOut'
})
.from('.heading p',{
    // duration: .5,
    y:-15,
    opacity:0,
    ease: 'Cubic.easeOut'
})
.from('.box',{
    duration: .7,
    x: "-100%",
    height: 0,
    opacity: 0,
    ease: 'Expo.easeOut'
})
.from('.nav h2',{
    opacity:0,
    duration:1
})