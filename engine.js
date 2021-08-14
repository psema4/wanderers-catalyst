class Vec2 {
    constructor(x=0, y=0) {
        this.x = x
        this.y = y
    }
}

class Vec3 {
    constructor(x=0, y=0, z=0) {
        this.x = x
        this.y = y
        this.z = z
    }
}

class Rect {
    constructor(x=0, y=0, w=0, h=0) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
}

class GameEngine {
    constructor() {
        this.hasStars = false
    }

    createStars() {
        this.bgstars = []
        let x, y, size
        for (let i=0; i < 100; i++) {
            x = Math.floor(Math.random() * a.width)
            y = Math.floor(Math.random() * a.height)
            size = Math.floor(Math.random() * 2) + 1
            this.bgstars.push(new Vec3(x, y, size))
        }
        this.hasStars = true
    }

    render() {
        this.clearScreen()
    }

    handleClick(x=-1, y=-1) {
        if (x<0 || y<0) {
            console.warn(`check inputs: got x=${x}, y=${y}`)
            return
        }

        // handle click at x,y
        console.log(`got click on screen ${s} at ${x},${y}`)
    }

    clearScreen() {
        const rect = new Rect(0, 0, a.width, a.height)
        this.drawFilledRect(rect, {r: 0, g: 0, b: 0})
    }

    drawFilledRect(rect, color) {
        c.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`
        c.fillRect(rect.x, rect.y, rect.w, rect.h)
    }

    drawText(message, options) {
        c.font = options.fontsize + 'px serif'
        c.fillStyle = `rgb(${options.color.r}, ${options.color.g}, ${options.color.b})`
        c.strokeStyle = `rgb(${options.ocolor.r}, ${options.ocolor.g}, ${options.ocolor.b})`

        let textWidth = parseInt(c.measureText(message).width, 10)
        let textX = options.center.x - (textWidth / 2)
        let textY = options.center.y - (options.fontsize / 2)

        c.fillText(message, textX, textY)
        c.strokeText(message, textX, textY)
    }

    drawBackground() {
        if (! this.hasStars)
            this.createStars()

        c.fillStyle = 'rgb(255,255,255)'
        this.bgstars.forEach(star => {
            c.fillRect(star.x, star.y, star.z, star.z)
        })
    }
}
