// LECTURE 7


 function scrollAnimation(){
    window.addEventListener("wheel",function (event) {
        if(event.deltaY>0){
            gsap.to("#markq",{
                transform:"translateX(-200%)",
                duration:4,
                repeat:-1,
                ease:"none",
            })
            gsap.to("#markq img",{
                rotate:180,
            })
        }else{
            gsap.to("#markq",{
                transform:"translateX(0%)",
                duration:4,
                repeat:-1,
                ease:"none",
            })
            gsap.to("#markq img",{
                rotate:0,
            })
        }
      })
 }

 scrollAnimation();