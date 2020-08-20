var diceDom = document.querySelector(".dice");
var Onoo;
var onoonuud;
var idewhteiToglogch;
var togloomDuussanEseh;
function ShineerEhluuleh() {
  // o bol negdugeer toglogch 1 bol 2 dugaar toglogch
  idewhteiToglogch = 0;
  // toglogch onoonuud
  onoonuud = [0, 0];
  // toglogch onoonud;
  Onoo = 0;
  togloomDuussanEseh = false;
  // 1-6 hurtelh sanamsargui toonud
  window.document.getElementById("score-0").textContent = "0";
  window.document.getElementById("current-0").textContent = "0";
  window.document.getElementById("score-1").textContent = "0";
  window.document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
document
  .querySelector(".btn-roll")
  .addEventListener("click", function shooShideh() {
    if (togloomDuussanEseh !== true) {
      var buusanToo = Math.floor(Math.random() * 6) + 1;
      diceDom.style.display = "block";
      diceDom.src = "dice-" + buusanToo + ".png";

      if (buusanToo !== 1) {
        Onoo = Onoo + buusanToo;
        document.getElementById(
          "current-" + idewhteiToglogch
        ).textContent = Onoo;
      } else {
        ToglogchEeljSoligdoh();
      }
    } else {
      alert("Тоглоом шинээр эхлүүлнэ үү");
    }
  });
document
  .querySelector(".btn-hold")
  .addEventListener("click", function shooShideh() {
    if (togloomDuussanEseh !== true) {
      onoonuud[idewhteiToglogch] = onoonuud[idewhteiToglogch] + Onoo;
      document.getElementById("score-" + idewhteiToglogch).textContent =
        onoonuud[idewhteiToglogch];
      if (onoonuud[idewhteiToglogch] > 100) {
        document.getElementById("name-" + idewhteiToglogch).textContent =
          "Winner !!!";
        document
          .querySelector(".player-" + idewhteiToglogch + "-panel")
          .classList.add("winner");
        document
          .querySelector(".player-" + idewhteiToglogch + "-panel")
          .classList.remove("active");
        togloomDuussanEseh = true;
      } else {
        ToglogchEeljSoligdoh();
      }
    } else {
      alert("Тоглоом шинээр эхлүүлнэ үү");
    }
  });

function ToglogchEeljSoligdoh() {
  Onoo = 0;
  document.getElementById("current-" + idewhteiToglogch).textCont;
  ent = 0;
  idewhteiToglogch === 0 ? (idewhteiToglogch = 1) : (idewhteiToglogch = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
document
  .querySelector(".btn-new")
  .addEventListener("click", function InitGame() {
    ShineerEhluuleh();
  });

ShineerEhluuleh();
