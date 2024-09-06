const bodyEl=document.querySelector("body")
bodyEl.addEventListener("mousemove",(event)=>{
   
    const xpos = event.offsetX;
    // console.log(xpos);
    const ypos = event.offsetY;
    // console.log(ypos);
    const spane1 = document.createElement("span");
    spane1.style.left=xpos + "px";
    spane1.style.top=ypos + "px";
const size = Math.random()*100;
spane1.style.width=size + "px";
spane1.style.height=size +"px";

    bodyEl.append(spane1)
   setTimeout(()=>{
    spane1.remove()
   },3000);
})