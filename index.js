// function submit(){
//   const something = document.getElementById("uage");
//   const ahh1 = something.value;
//   console.log(ahh1);
//   if (ahh1 < 18){
//     console.log("huh")
//      document.getElementById("myParagraph").textContent = sorry "ur not old enough to drive";
//   }
// }
function submit() {
  const something = document.getElementById("uage");
  const age = something.value;
  console.log(age);

  if (age < 18) {
    console.log("huh");
    document.getElementById("myParagraph").textContent =
      "Sorry, you're not old enough to drive.";
      const num1 = 18;
      const something = document.getElementById("uage");
      const age = something.value;
      const num2 = age;
      let togonum = 18 - age;
      document.getElementById("myParagraph1").textContent =  "u still have  " + togonum + " years till u can drive";
  } else {
    document.getElementById("myParagraph").textContent =
      "u are old enough to drive.";
  }
}
