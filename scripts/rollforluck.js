const magicNumber = 14;
const randomValue = Math.floor(Math.random() * magicNumber);
// const randomValue = 14;

(function setRandomEasterEggs() {

    if (randomValue === 0) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://store.steampowered.com/app/105600/Terraria" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/forest-pylon.webp" alt="Easter Egg" class="w-8 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 1) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=3HokMPJXF1s" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/congratulations.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 2) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=JLKgXy4HXoc" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/penguin.gif" alt="Easter Egg" class="w-16 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 3) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://youtu.be/XFr0dk6Ca7o?feature=shared" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/jaiden.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 4) {
        document.getElementById("music").innerHTML = `
        <audio src="assets/sound/hakuna-matata.mp3" autoplay></audio>
      `;
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=kaOIxll4LCA" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/hakuna.gif" alt="Easter Egg" class="w-64 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 5) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=BLzxuIfD9rU" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/cha-cha-cha.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 6) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://falsepositivecomic.com/comic/newtons-apple-page-1-2" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/newtons-apple.jpg" alt="Easter Egg" class="w-32 h-auto" />
        </a>
      `;
    }
    else if (randomValue === 7) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="http://www.murderousmaths.co.uk/mysstart.htm" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/tour-sign-left.gif" alt="Easter Egg" class="w-4 h-auto" />
        <img src="assets/images/easter-eggs/tour-sign-right.gif" alt="Easter Egg" class="w-4 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 8) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.bing.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/google.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 9) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=DoskJt_UVG8" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/tatsumaki.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 10) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.youtube.com/watch?v=9Zj0JOHJR-s" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/car.gif" alt="Easter Egg" class="w-64 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 11) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://www.whatbeatsrock.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/golem.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 12) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://en.wikipedia.org/wiki/Technoblade" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/technoblade.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 13) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="https://jspaint.app" target="_blank" rel="noopener noreferrer">
        <img src="assets/images/easter-eggs/painting.gif" alt="Easter Egg" class="w-32 h-auto" />
        </a>
        `;
    }
    else if (randomValue === 14) {

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
})();

(function setRandomSplashTitle() {
    const splashes = [
        "also try terraria!",
        "congratulations, you won an IPHONE!",
        "club penguin is kil :<",
        "pasta with no sauce",
        "hakuna matata!",
        "10,003,008,528^42",
        "visit falsepositivecomic.com today!",
        "mathemagicians love dis one",
        "google.com (ha ha jk)",
        "if we win...",
        "if i fall, i think i'll fly",
        "what beats rock?",
        "blood for the blood god",
        "you look tired",
        "please stop reloading the page...",
        "what is your favorite pokemon?",
        "also try vvvvvv!",
        "also try cuphead!",
        "also try super meat boy!",
        "waluigi time",
        "do a flip!",
        "every pokemon vs 10 billion lions",
        "coffee is overrated",
        "diet coke sucks",
        "to sql or nosql",
        "shakespeare is shaking in his grave",
        "house robber",
        "1337",
        "open the door!",
        "knock knock!",
        "who's there?",
        "your ex!",
        "your ex who?",
        "your existential crisis, wake up!",
        "i am in your walls :)",
        "self-implied oxymoron",
        "man, i don't know",
        "im a punkrocker, yes i am!",
        "nice.",
        "good heavens!",
        "by jove!",
        "mayday! mayday!",
        "AAAAAAAAAAAAAAAAAHHHHHHHHHH",
        "this page is haunted",
        "france",
        "this is open source!",
        "do you want to have a bad tom?",
        "setRandomSplashTitle!",
        "imagine using <title> for titles",
        "i am inevitable!",
        "hoo boy!",
        "your daily dose of uh this",
        "smooth jazz!",
        "aggressive jazz!",
        "THIS IS SPARTA!!!",
        "i can do this all day",
        "on your left!",
        "doorknob.",
        "CHOCOLATE?!?!?!",
        "i cast vicious mockery",
        "TACTICAL NUKE INCOMING",
        "da coconut nut is a big big nut",
        "swoooooord",
        "mmmm, monke",
        "wubba lubba dub dub!",
        "blackjack and hookers",
        "good news, everyone!",
        "also try super smash flash!",
        "death by glamour",
        "his face all red",
        "visit totaljerkface.com today!"
    ];

    const randomIndex = Math.floor(Math.random() * splashes.length);
    const randomSplash = (randomValue < splashes.length)? splashes[randomValue] : splashes[randomIndex];
    document.title = randomSplash;
})();
