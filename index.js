function myTheme(){
    const toggle= document.getElementById("darkmode-Toggle")
    const body= document.getElementById("main")
    const second_row= document.getElementById("second_row")
    console.log("hi")
    if (toggle.checked == true){
        console.log("hi")
        body.style.background = "#4D4D4D";
        second_row.style.background = "#4D4D4D";
      }else{
        body.style.background = "white";
        second_row.style.background = "#F9F9F9";

      }
}

var typed = new Typed(".auto-type", {
  strings: ["Full Stack Web Developer", "Node.js Backend Developer"],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
});