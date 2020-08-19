// o bol negdugeer toglogch 1 bol 2 dugaar toglogch
var idewhteiToglogch = 0;
// toglogch onoonuud
var onoonuud = [0, 0];
// toglogch onoonud;
var Onoo = 0;
// 1-6 hurtelh sanamsargui toonud
// window.document.querySelector("#score-0").textContent = buusanToo;
// window.document.querySelector("#score-1").textContent = buusanToo;

window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
document
  .querySelector(".btn-roll")
  .addEventListener("click", function shooShideh() {
    var buusanToo = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + buusanToo + ".png";

    if (buusanToo !== 1) {
      Onoo = Onoo + buusanToo;
      document.getElementById("current-" + idewhteiToglogch).textContent = Onoo;
    } else {
      Onoo = 0;
      document.getElementById("current-" + idewhteiToglogch).textCont;
      ent = 0;
      idewhteiToglogch === 0 ? (idewhteiToglogch = 1) : (idewhteiToglogch = 0);
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
      diceDom.style.display = "none";
    }
  });
