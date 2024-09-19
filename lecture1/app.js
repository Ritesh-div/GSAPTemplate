// LECTURE1
gsap.from("h2",{
    opacity:0,
    duration:2,
    y:30,
    delay:1,
    stagger:0.3,
})
gsap.to("#box",{
    x:500,
    duration:2,
    delay:1,
    rotate:360,
  
})
gsap.to("#box1",{
    x:500,
    duration:2,
    delay:3,
    rotate:360,
})
gsap.to("#box2",{
    x:500,
    duration:2,
    delay:5,
    rotate:360,
})