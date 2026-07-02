// Kleine Animation: Events erscheinen beim Laden
const events = document.querySelectorAll(".event");

window.addEventListener("load", () => {
  events.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, i * 150);
  });
});
// Scroll Effekt für Sections
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});
// =========================
// 🌙 DARK MODE TOGGLE
// =========================

// Button erstellen
const darkBtn = document.createElement("button");
darkBtn.innerText = "🌙 Dark Mode";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "10px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "10px";
darkBtn.style.cursor = "pointer";
darkBtn.style.zIndex = "999";

document.body.appendChild(darkBtn);

let dark = true;

darkBtn.addEventListener("click", () => {
  dark = !dark;

  if(dark){
    document.body.style.background = "#0f0f0f";
    document.body.style.color = "#eaeaea";
  } else {
    document.body.style.background = "#ffffff";
    document.body.style.color = "#111";
  }
});


// =========================
// ❓ QUIZ SYSTEM
// =========================

// Quiz erstellen (wird automatisch unten eingefügt)
const quizSection = document.createElement("section");
quizSection.id = "quiz";

quizSection.innerHTML = `
<h2>❓ Quiz: Zweiter Weltkrieg</h2>

<div class="quiz-box">

<p>1. Wann begann der Zweite Weltkrieg?</p>
<button onclick="q1(true)">1939</button>
<button onclick="q1(false)">1945</button>

<p id="r1"></p>

<hr>

<p>2. Welches Land wurde zuerst angegriffen?</p>
<button onclick="q2(true)">Polen</button>
<button onclick="q2(false)">Frankreich</button>

<p id="r2"></p>

<hr>

<p>3. Wann endete der Krieg in Europa?</p>
<button onclick="q3(true)">1945</button>
<button onclick="q3(false)">1940</button>

<p id="r3"></p>

</div>
`;

document.body.appendChild(quizSection);

let score = 0;

function q1(ans){
  if(ans){
    document.getElementById("r1").innerText = "✔ Richtig!";
    score++;
  } else {
    document.getElementById("r1").innerText = "✖ Falsch";
  }
}

function q2(ans){
  if(ans){
    document.getElementById("r2").innerText = "✔ Richtig!";
    score++;
  } else {
    document.getElementById("r2").innerText = "✖ Falsch";
  }
}

function q3(ans){
  if(ans){
    document.getElementById("r3").innerText = "✔ Richtig!";
    score++;
  } else {
    document.getElementById("r3").innerText = "✖ Falsch";
  }

  setTimeout(() => {
    alert("Dein Ergebnis: " + score + "/3");
  }, 300);
}


// =========================
// 🔝 SCROLL TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");
topBtn.innerText = "⬆ Top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "70px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "10px";
topBtn.style.cursor = "pointer";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// =========================
// ✨ SCROLL ANIMATION FIX
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
      sec.style.transition = "0.6s";
    }
  });
});
