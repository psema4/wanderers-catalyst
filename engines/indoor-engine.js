class IndoorEngine extends GameEngine {
    constructor() {
        super()
    }

    render() {
        this.clearScreen()

        this.drawText('Indoor Engine', {
            center: {
                x: a.width/2,
                y: 40
            },
            owidth: 0.25,
            ocolor: { r: 63, g: 63, b: 255 },
            color: { r:63, g: 63, b: 255 },
            fontsize: 32
        })
    }

    handleClick(x=-1, y=-1) {
        s += 1
    }
}
