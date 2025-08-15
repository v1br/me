(function setRandomEasterEggs() {
    
    const magicNumber = 20;
    const randomValue = Math.floor(Math.random() * magicNumber);
    let randomSplash = "";

    if (randomValue === 20) {

        randomSplash = "ham.";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://presidentialham.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/tomham.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 19) {

        randomSplash = "enter the discworld";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://discworld.starturtle.net/lpc" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/discworl.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 18) {

        randomSplash = "want a burger?";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.ninjaburger.com/index.shtml" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/neenja.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 17) {

        randomSplash = "his face all red";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://emcarroll.com/comics/faceallred/01.html" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/title.jpg" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 16) {

        randomSplash = "this is my kingdom come";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.kingdomofloathing.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/ohmygodthisisscary.webp" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 15) {

        randomSplash = "nat 20 on those shoes";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://rollforshoes.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/shoes.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 14) {

        randomSplash = "please stop reloading the page";

        const message = "You seem very bored... Maybe try this instead --> https://www.boredbutton.com 🙂✌🏼";

        document.getElementById("egg").innerHTML = `
            <button id="egg-btn" class="flex flex-row z-50 cursor-pointer">
                <img src="assets/images/easter-eggs/stop-it.gif" alt="Easter Egg" class="w-32 h-auto" />
            </button>
        `;
        
        document.getElementById("egg-btn").addEventListener("click", () => {
            window.alert(message);
        });
    }
    else if (randomValue === 13) {

        randomSplash = "take a break, you deserve it";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://jspaint.app" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/painting.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 12) {

        randomSplash = "blood for the blood god";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://en.wikipedia.org/wiki/Technoblade" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/technoblade.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 11) {

        randomSplash = "can you beat rock?";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.whatbeatsrock.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/golem.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 10) {

        randomSplash = "if i fall, i think i'll fly!";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=9Zj0JOHJR-s" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/car.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 9) {

        randomSplash = "if we win...";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=DoskJt_UVG8" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/tatsumaki.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 8) {

        randomSplash = "google.com";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.bing.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/google.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 7) {

        randomSplash = "mathemagicians love this one";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="http://www.murderousmaths.co.uk/mysstart.htm" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/tour-sign-left.gif" alt="Easter Egg" class="w-4 h-auto" />
        <img src="assets/images/easter-eggs/tour-sign-right.gif" alt="Easter Egg" class="w-4 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 6) {

        randomSplash = "how many apples is too much apples?";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://falsepositivecomic.com/comic/newtons-apple-page-1-2" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/newtons-apple.jpg" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 5) {

        randomSplash = "10,003,008,528^42";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=BLzxuIfD9rU" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/cha-cha-cha.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 4) {

        randomSplash = "hakuna matata!";

        document.getElementById("music").innerHTML = `
        <audio src="assets/sound/hakuna-matata.mp3" autoplay></audio>
      `;
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=kaOIxll4LCA" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/hakuna.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 3) {

        randomSplash = "pasta with no sauce";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://youtu.be/XFr0dk6Ca7o?feature=shared" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/jaiden.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 2) {

        randomSplash = "club penguin is kil :<";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=JLKgXy4HXoc" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/penguin.gif" alt="Easter Egg" class="w-16 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 1) {

        randomSplash = "congrats, you won an IPHONE!";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=3HokMPJXF1s" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/congratulations.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 0) {

        randomSplash = "also try terraria!";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://store.steampowered.com/app/105600/Terraria" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/forest-pylon.webp" alt="Easter Egg" class="w-8 h-auto" />
        </a>
      `;
    }

    document.title = randomSplash;
})();
