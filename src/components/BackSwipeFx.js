const back_screen=(index)=>{
    const first_slide=document.getElementById("register_form");
  
    first_slide.style.transform=`translateX(-${index*100}vw)`;
}

export default back_screen;