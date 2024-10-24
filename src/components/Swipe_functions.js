const swipe=(index)=>{
    const first_slide=document.getElementById("register_form");

    first_slide.style.transform=`translateX(-${index*100}vw)`;

}

export default swipe;