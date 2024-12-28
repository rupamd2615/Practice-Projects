var tl = gsap.timeline()

tl.from("#page1 h1",{
    opacity:0,
    duration:1,
    delay:1,
    y:-20
})

tl.from("#page1 h4",{
    opacity:0,
    duration:1,
    y:-40
})

gsap.to("#page2 h1",{
    transform: "translate(-150%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})