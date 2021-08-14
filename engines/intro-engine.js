class IntroEngine extends GameEngine {
    constructor() {
        super()
        this.done = false
    }

    render() {
        this.clearScreen()
        this.drawBackground()

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

        // draw the planet and moons for now
        c.strokeStyle = 'rgb(31,31,47)'
        c.fillStyle = 'rgb(31,31,47)'
        c.beginPath()
        c.arc(a.width - 180, a.height - 330, 30, 0, Math.PI*2, true)
        c.fill()

        c.strokeStyle = 'rgb(226,226,64)'
        c.fillStyle = 'rgb(226,226,96)'
        c.beginPath()
        c.arc(a.width, a.height - 100, 300, 0, Math.PI*2, true)
        c.fill()
        c.stroke()

        c.strokeStyle = 'rgb(63,63,63)'
        c.fillStyle = 'rgb(63,63,63)'
        c.beginPath()
        c.arc(a.width - 300, a.height - 300, 80, 0, Math.PI*2, true)
        c.fill()

        if (this.done) {
            this.drawText('Click or Press SPACE to Continue', {
                center: {
                    x: a.width/2,
                    y: a.height*0.8
                },
                owidth: 1,
                ocolor: { r: 0, g: 0, b: 0 },
                color: { r:63, g: 63, b: 255 },
                fontsize: 38
            })
        }

        if (this.done && space) { space = !space; s += 1 }

        // interaction delay for cutscene
        setTimeout(() => { this.done = true }, 3000)
    }

    handleClick(x=-1, y=-1) {
        if (this.done) s += 1
    }

    drawBackground() {
        c.fillStyle = 'rgb(255,255,255)'
        let x,y
        for (let i=0; i < 100; i++) {
            // fixme: stand-in for squirrel3
            x = Math.floor(Math.random() * a.width)
            y = Math.floor(Math.random() * a.height)
            c.fillRect(x, y, 1, 1)
        }
    }
}
