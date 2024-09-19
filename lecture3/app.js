//LECTURE3 WAVE

var initPath=`M 10 150 Q 350 100 680 100`;

var finalPath=`M 10 100 Q 350 100 680 100`;

var string=document.querySelector("#string");

string.addEventListener("mousemove",function (dets) { 
    initPath=`M 10 100 Q ${dets.x} ${dets.y} 680 100`;
    gsap.to("svg path",{
        attr:{d:initPath},
        duration:0.2,
        ease:"power3.out",
    }) 
})

string.addEventListener("mouseleave",function () { 
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,,0.2)"

    }) 
})