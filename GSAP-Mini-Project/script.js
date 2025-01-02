function page1Animation(){
    var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
    y:-15,
    opacity:0,
    duration:0.4,
    stagger:0.1
})

tl.from(".page1 h1",{
    x:-200,
    opacity:0,
    duration:0.4
},"-=0.3")

tl.from(".page1 p",{
    x:-150,
    opacity:0,
    duration:0.4
})

tl.from(".page1 button",{
    opacity:0,
    duration:0.4
})

tl.from(".page2 img",{
    x:200,
    opacity:0,
    duration:0.5
},"-=0.3")

tl.from(".bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
    stagger: 0.1
})



}
function page2Animation(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".sec2",
            scroller:"body",
            // markers: true,
            start:"top 50%",
            end: "top 25%",
            scrub:2
        }
    })
    
    tl.from(".services",{
        y:30,
        opacity:0,
        duration:0.5,
    })
    
    tl.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    
    tl.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    
    tl.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    
    tl.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
}

page1Animation()
page2Animation()