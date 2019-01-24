//document.addEventListener('contextmenu', event => event.preventDefault())
document.querySelector(
  '.grid-container'
).innerHTML = `<div class="champion-wrapper">
    <div class="champion">
        <div class="champion-ring"></div>
        <img class="champion-icon" src="http://ddragon.leagueoflegends.com/cdn/9.1.1/img/champion/Aatrox.png"/>
    </div>
</div>
`.repeat(100)
