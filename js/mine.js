// const modeBtn = document.querySelector("#mode-btn")

//     const element = document.querySelector("#all-site");
//       const imageLogo = document.querySelector(".dark-logo");
//   const imageLogo1 = document.querySelector(".light-logo");
//     const userImage = document.querySelector(".dark-image");
//   const userImage1 = document.querySelector(".light-image");


//     if(localStorage.getItem("theme")===null){
//        localStorage.setItem("theme","light-theme")
//     } else{
// const  myFunc = ()=>{
//       console.log("a")
//       if(element.classList.contains("dark-theme")){
//         element.classList.remove("dark-theme");
//         element.classList.add("light-theme");
//         imageLogo.style.display = "block";
//        imageLogo1.style.display = "none";
//          userImage.style.display = "block";
//      userImage1.style.display = "none";
//         localStorage.setItem("mode1", "block");
//        localStorage.setItem("mode2", "none");
//       localStorage.setItem("mode3","block");
//      localStorage.setItem("mode4","none");
        
//         localStorage.setItem("theme","light-theme")
//       } else{
// element.classList.remove("light-theme");
//         element.classList.add("dark-theme");
//        imageLogo.style.display = "none";
//        imageLogo1.style.display = "block";
//        userImage.style.display = "none";
//      userImage1.style.display = "block";
//          localStorage.setItem("mode1", "none");
//      localStorage.setItem("mode2", "block");
//        localStorage.setItem("mode3","none");
//      localStorage.setItem("mode4","block");
//         localStorage.setItem("theme","dark-theme")
//       }
//     }
    
// element.classList.add(localStorage.getItem("theme"));

// modeBtn.onclick = myFunc;
//     }
  

// imageLogo.style.display = localStorage.getItem("mode1");
// imageLogo1.style.display = localStorage.getItem("mode2");
// userImage.style.display = localStorage.getItem("mode3");
// userImage1.style.display = localStorage.getItem("mode4");

// const btn = document.querySelector(".btn-toggle");

// const currentTheme = localStorage.getItem("theme");
// if (currentTheme == "dark") {
//   document.body.classList.add("changeTheme");
  
// }

// btn.addEventListener("click", function () {
//   document.body.classList.toggle("changeTheme");
//   let theme = "light";
//   if (document.body.classList.contains("changeTheme")) {
//     theme = "dark";
//   }
//   else {
//   }
//   localStorage.setItem("theme", theme);
// });


const langdata = {
  az : ["Mən Colin Smith'əm","DİZAYNER & FRONTEND PROQRAMÇI"],
  en : ["I'm colin smith","DESIGNER & FRONTEND DEVELOPER"]
}

const langItem = document.querySelectorAll(".item");
const langBtn = document.querySelector("#langBtn");



if(localStorage.getItem("lang")===null && localStorage.getItem("langBtn")){
localStorage.setItem("lang",langdata.az);
localStorage.setItem("langBtn","AZ" )
} else{
langBtn.onclick = ()=>{
  if(langBtn.innerHTML === "AZ"){
         localStorage.setItem("lang", langdata.az);
         localStorage.setItem("langBtn", "EN")
         for(let i in langdata.az){
          langItem[i].innerHTML = langdata.az[i];
         } langBtn.innerHTML = "EN" 
          }
        else{
          localStorage.setItem("lang", langdata.en);
         localStorage.setItem("langBtn", "AZ")
         for(let i in langdata.en){
          langItem[i].innerHTML = langdata.en[i];
         } langBtn.innerHTML = "AZ"
        }


}
}
for (let i in langdata.az) {
  langItem[i].innerHTML = localStorage.getItem("lang").split(",")[i];
}

document.querySelector("#langbtn").innerHTML =
  localStorage.getItem("langbtn");


// if(localStorage.getItem("lang") === null &&
// localStorage.getItem("langbtn") === null){
//   localStorage.setItem("lang", langdata.az);
//   localStorage.setItem("langbtn", "AZ");
// }else{
//   const multilang = ()=>{
//     if(langbtn.innerHTML === "AZ") {
//       localStorage.setItem("langbtn", langdata.az);
//         for(let i in langdata.az){
//             langItem[i].innerHTML = langdata.az[i]
//         } langbtn.innerHTML = "EN"
//         localStorage.setItem("langbtn", "EN");

//     } else{
//       localStorage.setItem("langbtn", langdata.en);
//           for(let i in langdata.en){
//             langItem[i].innerHTML = langdata.en[i]
//         } langbtn.innerHTML = "AZ"
//         localStorage.setItem("langbtn", "AZ");
//     }
// }
// }

// for (let i in langdata.az) {
//   langItem[i].innerHTML = localStorage.getItem('langbtn').split('')[i]
  
// }
// langbtn.onclick = multilang;

// class ile eyni atmaq lazimdir

const modeBtn = document.querySelector("#mode-btn")

const element = document.querySelector("#all-site");
  const imageLogo = document.querySelector(".dark-logo");
const imageLogo1 = document.querySelector(".light-logo");
const userImage = document.querySelector(".dark-image");
const userImage1 = document.querySelector(".light-image");


if(localStorage.getItem("theme")===null){
   localStorage.setItem("theme","light-theme")
} else{
const  myFunc = ()=>{
  console.log("a")
  if(element.classList.contains("dark-theme")){
    element.classList.remove("dark-theme");
    element.classList.add("light-theme");
    imageLogo.style.display = "block";
   imageLogo1.style.display = "none";
     userImage.style.display = "block";
 userImage1.style.display = "none";
    localStorage.setItem("mode1", "block");
   localStorage.setItem("mode2", "none");
  localStorage.setItem("mode3","block");
 localStorage.setItem("mode4","none");
    
    localStorage.setItem("theme","light-theme")
  } else{
element.classList.remove("light-theme");
    element.classList.add("dark-theme");
   imageLogo.style.display = "none";
   imageLogo1.style.display = "block";
   userImage.style.display = "none";
 userImage1.style.display = "block";
     localStorage.setItem("mode1", "none");
 localStorage.setItem("mode2", "block");
   localStorage.setItem("mode3","none");
 localStorage.setItem("mode4","block");
    localStorage.setItem("theme","dark-theme")
  }
}

element.classList.add(localStorage.getItem("theme"));

modeBtn.onclick = myFunc;
}


imageLogo.style.display = localStorage.getItem("mode1");
imageLogo1.style.display = localStorage.getItem("mode2");
userImage.style.display = localStorage.getItem("mode3");
userImage1.style.display = localStorage.getItem("mode4");