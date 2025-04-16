class Background extends Phaser.Scene {
    constructor() {
        super({ key: 'Background' });
        this.layers = [];
    }

    preload() {
        for (let i = 1; i <= 4; i++) {
            this.load.image(`plx_${i}`, `assets/images/background/plx-${i}.png`);
        }
    }

    create() {
        const screenHeight = this.scale.height;
        const screenWidth = this.scale.width;

        // Apply nearest-neighbor filtering to all textures
        for (let i = 1; i <= 4; i++) {
            const texture = this.textures.get(`plx_${i}`);
            if (texture) {
                texture.setFilter(Phaser.Textures.FilterMode.NEAREST);
            }
        }

        // Add parallax layers scaled to canvas height
        for (let i = 1; i <= 4; i++) {
            const tex = this.textures.get(`plx_${i}`).getSourceImage();
            const scale = screenHeight / tex.height;

            const layer = this.add.tileSprite(0, 0, tex.width * scale, screenHeight, `plx_${i}`)
                .setOrigin(0)
                .setScale(scale)
                .setScrollFactor(0)
                .setDepth(i);

            this.layers.push({
                sprite: layer,
                speed: i * 0.14,
            });
        }
    }

    update() {
        for (const { sprite, speed } of this.layers) {
            sprite.tilePositionX += speed;
        }
    }
}

// Setup game
const config = {
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    canvas: document.getElementById('background'),
    scene: Background,
    render: {
        pixelArt: true // nearest-neighbor filtering
    }
};

const game = new Phaser.Game(config);