let btn=document.getElementById("contact_us");
btn.addEventListener("click", show_icons);

// setInterval(function(){ alert("starting"); }, 5000);

function show_icons() {
    let contact= document.getElementById("media_icons");
    contact.innerHTML= "email us at akshatahegde299@gmail.com";   
}
