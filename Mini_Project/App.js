function page1Animation(){
    var tl=gsap.timeline();

tl.from("nav h2, nav h4, nav button",{
    y:-30,
    opacity:0,
    duration:0.4,
    delay:1,
    stagger:0.15,
})

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5,
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.5,
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.5,
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:50,
},"-=0.7")

tl.from(".sectionBottom img",{
    opacity:0,
    y:30,
    duration:1,
    stagger:0.2
})
}

page1Animation();


function page1Animation2 () { 
    var tl1=gsap.timeline( {
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top -60%",
            scrub:2,
        }
    });
       
    tl1.from(".services",{
        y:30,
        opacity:0,
    })
    
    tl1.from(".element.left",{
        x:-200,
        opacity:0,
        duration:1,
    },"anim")
    tl1.from(".element.right",{
        x:200,
        opacity:0,
        duration:1,
    },"anim")
    
    
    
    tl1.from(".element.left2",{
        x:-200,
        opacity:0,
        duration:1,
    },"ani1")
    tl1.from(".element.right2",{
        x:200,
        opacity:0,
        duration:1,
    },"ani1")

    tl1.from(".element.left3",{
        x:-200,
        opacity:0,
        duration:1,
    },"anim1")
    tl1.from(".element.right3",{
        x:200,
        opacity:0,
        duration:1,
    },"anim1")
 }

 page1Animation2();

function page1Animation3(){
    var tl2=gsap.timeline( {
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 50%",
            end:"top -60%",
            scrub:2,
        }
    });
    tl2.from(".benefits",{
        x:-60,
        opacity:0,
    })
    tl2.from(".sec4 #part1,.sec4 #part2,.sec4 #part3",{
        y:50,
        duration:1,
        opacity:0,
        stagger:0.2,
    })
}

page1Animation3();