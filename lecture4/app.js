//lecture4 CURSER

var main=document.querySelector("#main");

var cursor=document.querySelector("#cursor");
var image=document.querySelector("#image");

main.addEventListener("mousemove",function(event){
    gsap.to(cursor,{
        x:event.x,
        y:event.y,
        duration:0.6,
        ease:"back.out",
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML="View More";
    gsap.to(cursor,{
        scale:2,
        opacity:0.5,

    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale:1,
        opacity:1,

    })
})