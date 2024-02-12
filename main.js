const $yes = document.querySelector(".yes");
const $no = document.querySelector(".no");
const $img = document.querySelector(".image");
const $header = document.querySelector("h1");
const $buttons = document.querySelector(".buttons");
let sound = new Audio();
$yes.style.height = "2em";
$yes.style.width = "5em";
$yes.style.fontSize = "30px";

function yes(event) {
  $img.src = "img-sounds/happy-cat-happy-happy-cat.gif"
  sound.src = "img-sounds/happy-happy-happy-song.mp3"
  sound.play()
  $header.textContent = "YAY!";
  $buttons.className = "display-none"
}

function no(event) {
  console.log($yes.style.fontSize);
  $img.src = "img-sounds/dog.png"
  sound.pause()
  const font = parseInt($yes.style.fontSize.slice(0, $yes.style.fontSize.length - 2)) + 10;
  $yes.style.fontSize = font.toString() + "px";
  sound.src = "img-sounds/among-us-role-reveal-sound.mp3"
  sound.play()
}

$yes.addEventListener('click', yes)
$no.addEventListener('click', no)
