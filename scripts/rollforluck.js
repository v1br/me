(function setRandomEasterEggs() {
    
    const magicNumber = 32;
    let randomSplash = "";
    const randomValue = Math.floor(Math.random() * magicNumber);

    // This line is for testing only
    // const randomValue = magicNumber;
    // END

    if (randomValue === 32) {

        randomSplash = "is it friday?";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://isitfridayyet.net" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/batmanthinks.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 31) {

        randomSplash = "towards a single folder filesystem";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.skytopia.com/project/articles/filesystem.html#intro" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/girloncomputer.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 30) {

        randomSplash = "who's your fav pokemon?";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://cajunavenger.github.io" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/pokepals.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 29) {

        randomSplash = "you have 0 candies";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://candybox2.github.io" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/candymouse.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 28) {

        randomSplash = "take a trip down memory lane";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.myretrotvs.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/cooldog.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 27) {

        randomSplash = "booting up...";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.windows93.net" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/win93.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 26) {

        randomSplash = "find that anime";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://trace.moe" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/nursejoy.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 25) {

        randomSplash = "gotta go fast";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://hedgehogcreek.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/hedgehog.webp" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 24) {

        randomSplash = "don't do drugs";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.csh.bz/line/05xp.html" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/psycha.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 23) {

        randomSplash = "right click here";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://xkcd.com/1975" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/rightclickhere.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 22) {

        randomSplash = "your browser has cholera";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://classicreload.com/oregon-trail.html" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/cleaningmygun.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 21) {

        randomSplash = "long pants long pants";

        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://homestarrunner.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/longpants.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 20) {

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
