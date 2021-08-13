class IntroEngine extends GameEngine {
    constructor() {
        super()
    }

    render() {
        this.clearScreen()

        this.drawText('Wanderers:', {
            center: {
                x: a.width/2,
                y: 100
            },
            owidth: 0.25,
            ocolor: { r: 255, g: 63, b: 63 },
            color: { r:255, g: 63, b: 63 },
            fontsize: 38
        })

        this.drawText('Catalyst', {
            center: {
                x: a.width/2,
                y: 180
            },
            owidth: 0.25,
            ocolor: { r: 255, g: 255, b: 255 },
            color: { r:63, g: 63, b: 255 },
            fontsize: 84
        })
    }

    handleClick(x=-1, y=-1) {
        s += 1
    }
}
