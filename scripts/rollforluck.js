(function setRandomEasterEggs() {
    const magicNumber = 420;
    const randomValue = Math.floor(Math.random() * magicNumber);

    if (randomValue === 42) {
        document.getElementById("egg").innerHTML = `
        <a class="flex flex-row z-50 cursor-pointer" href="http://www.murderousmaths.co.uk/mysstart.htm" target="_blank" rel="noopener noreferrer">
            <img src="assets/images/easter-eggs/tour-sign-left.gif" alt="Easter Egg" class="w-4 h-auto" />
            <img src="assets/images/easter-eggs/tour-sign-right.gif" alt="Easter Egg" class="w-4 h-auto" />
        </a>
      `;
    }
})();