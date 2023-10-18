import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
document.querySelectorAll("nav a").forEach((metin) => {
    metin.addEventListener("mouseenter", (event) => {
      metin.style.color = "red";
      metin.style.backgroundColor = "grey";
      metin.style.border = "1px solid black"
      metin.style.padding = "5px";
      metin.style.borderRadius = "10px"
      metin.style.transitionDuration = "0.5s"

    });
    metin.addEventListener("mouseleave", (callback) => {
      metin.style.backgroundColor = "unset";
      metin.style.border = "none";
      metin.style.padding = "0";
      metin.style.color = "black"

    })
  });

window.addEventListener("load", (e) => {
  alert("EĞLENCE OTOBÜSÜNE HOŞGELDİN!");
  alert("Karanlık mod için 2'ye basınız.");
});

window.addEventListener("wheel", (event) => {
console.log("You wheeled in div", event);
});

window.addEventListener("scroll", (event) => {
  console.log("You scrolled in div", event);
})

  let mode = "lightMode";
 const bodyLetters = document.querySelector("body");
 bodyLetters.addEventListener("keydown", (callback) => {
  if(callback.key == 2) {
    if(mode == "lightMode") {
      mode = "darkMode";
      bodyLetters.style.color = "white";
      bodyLetters.style.backgroundColor = "black";
    }
    else {     
        mode = "lightMode"
        bodyLetters.style.color = "black";
        bodyLetters.style.letterSpacing = "0px";
        bodyLetters.style.backgroundColor = "white"
      
    }
   
  }

 
 });
const headerLetters = document.querySelector("header .main-navigation");
headerLetters.addEventListener("keydown", (callback) => {
  if(callback.key == 2) {
    headerLetters.style.color = "white";
    headerLetters.style.backgroundColor = "black";
  }
})



 document.querySelectorAll(".btn").forEach((e) => {
  e.addEventListener("mouseenter", (event) => {
    e.style.backgroundColor = "red";
  });
});

document.querySelectorAll("img").forEach((resim) => {
        resim.addEventListener("dblclick", (event) => {
            if(resim.target.style.width === "100px"){
                resim.target.style.width = ""
            }else{
                resim.target.style.width = "100px";
            }
        })
    });
    


//   var randomColor = getRandomColor();
//   var element = document.getElementsByClassName('.logo-heading')[0];
//   originalColor = element.style.color;
//   element.style.color = randomColor;

//   var element = document.getElementsByClassName('.logo-heading')[0];
//   element.style.color = originalColor;


// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// const images = document.querySelectorAll(".drags img");

// images.forEach((img) => {
//     img.addEventListener("dragstart" ,(ev) => {
//     ev.dataTransfer.setData("text", ev.target.id);
// })

// })

// const mainImg =  document.querySelector("header img");

// mainImg.addEventListener("drop" , (ev) => {
//     ev.preventDefault();

//     const targetImg = document.getElementById(ev.target.id);
//     const targetImgSrc = targetImg.src;

//     const sourceImg = document.getElementById(ev.dataTransfer.getData("text"));
//     const sourceImgSrc = sourceImg.src;

//     targetImg.src= sourceImgSrc;
//     sourceImg.src = targetImgSrc;
// });

// mainImg.addEventListener("dragover" , (ev) => {
//     ev.stopPropagation();
// });

const img = document.getElementById("#img-1");
        function enlargeImg() {
            img.style.transform = "scale(1.5)";
            img.style.transition = "transform 0.25s ease";
        }
        function resetImg() {
            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.25s ease";
        }

document.querySelectorAll(".destination h4").forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    item.style.color = "red";
  })
})


