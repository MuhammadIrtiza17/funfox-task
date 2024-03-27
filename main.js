let querybtn = document.getElementById("modal");
let modal = document.getElementById("modalSect");
let closebtn = document.getElementById("close");
let area = document.getElementById("area")

querybtn.addEventListener('click',()=>{
     
     modal.style.display="flex"
     area.style.opacity="0.2"
     console.log("click")

})

closebtn.addEventListener('click',()=>{
     
    modal.style.display="none"
    area.style.opacity="1"
})