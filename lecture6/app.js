
// LECTURE 6 TEXT
function breakTheText () {
    var h1=document.querySelector("h1");
    var h1Text=h1.textContent;
    var splitedText=h1Text.split("");
    var clutter="";

    var halfValue=splitedText.length/2;
    splitedText.forEach(function(event,ind){
        if(ind<halfValue){
            clutter+= `<span class="firstHalf">${event}</span>`;
        }else{
            clutter+= `<span class="secondHalf">${event}</span>`;
        }
        
    })

    h1.innerHTML=clutter;
}
breakTheText();

gsap.from("h1 .firstHalf",{
    y:50,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.15
})

gsap.from("h1 .secondHalf",{
    y:50,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:-0.15
})