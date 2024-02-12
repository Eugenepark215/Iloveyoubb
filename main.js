const $yes = document.querySelector(".yes");
const $no = document.querySelector(".no");
const $img = document.querySelector(".image");
const $header = document.querySelector("h1");
const $buttons = document.querySelector(".buttons");
const $text = document.querySelector(".text");
$yes.style.fontSize = "30px";
$no.style.fontSize = "30px";
let counter = 0;

let sound = new Audio();
const noText = [
  "wow...",
  "no kissy",
  "pls 🥺",
  "y do this",
  "😡",
  "😭",
  "poopoo",
  "i fart in face"
]

function yes(event) {
  $img.src = "img-sounds/happy-cat-happy-happy-cat.gif"
  sound.src = "img-sounds/happy-happy-happy-song.mp3"
  sound.play()
  $header.textContent = "YAY!";
  $text.className = "text";
  $text.textContent = "I love you so much bebe! Very happy to be your VALENTINES!"
  $buttons.className = "display-none"

}

function no(event) {
  console.log($no.style);
  $img.src = "img-sounds/dog.png"
  sound.pause()
  const noFont = parseInt($no.style.fontSize.slice(0, $no.style.fontSize.length - 2)) - 3;
  const yesFont = parseInt($yes.style.fontSize.slice(0, $yes.style.fontSize.length - 2)) + 10;
  $yes.style.fontSize = yesFont.toString() + "px";
  $no.style.fontSize = noFont.toString() + "px";
  $no.textContent = noText[counter];
  sound.src = "img-sounds/among-us-role-reveal-sound.mp3"
  sound.play()
  counter++;
}

$yes.addEventListener('click', yes)
$no.addEventListener('click', no)
