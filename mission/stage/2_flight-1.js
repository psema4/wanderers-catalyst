class Flight1 extends GameEngine {
    constructor() {
        super()
    }

    render() {
        this.clearScreen()
        this.drawBackground()

        this.drawText('Flight 1 Engine', {
            center: {
                x: a.width/2,
                y: 40
            },
            owidth: 0.25,
            ocolor: { r: 63, g: 63, b: 255 },
            color: { r:63, g: 63, b: 255 },
            fontsize: 32
        })

        /*
        if (u||d||l||r) {
            this.drawText('*', {
                center: {
                    x: a.width/2,
                    y: a.height - 100
                },
                owidth: 0,
                ocolor: { r:0, g:255, b:255 },
                color: { r:0, g:255, b:255 },
                fontsize: 32
            })

            // console.debug(`udlr: ${u||'-'}${d||'-'}${l||'-'}${r||'-'}`)
        }
        */
    }

    handleClick(x=-1, y=-1) {
        s += 1
    }
}
