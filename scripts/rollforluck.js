(async function setRandomEasterEggs() {
    try {
        const response = await fetch("data/easter-eggs.json");
        const easterEggs = await response.json();

        const randomValue = Math.floor(Math.random() * easterEggs.length);
        document.title = easterEggs[randomValue]["splash"];
        document.getElementById("egg").innerHTML = `
            <a class="flex flex-row z-50 cursor-pointer" 
               href="${easterEggs[randomValue]["link"]}" 
               target="_blank" rel="noopener noreferrer">
                <img src="assets/images/easter-eggs/${easterEggs[randomValue]["image"]}" 
                     alt="Easter Egg" 
                     class="w-${easterEggs[randomValue]["wval"]} h-auto" />
            </a>
        `;
    } catch (err) {
        console.error("Failed to load easter eggs:", err);
        document.title = "New phone, who dis?";
    }
})();