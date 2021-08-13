class Rect {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
}

class GameEngine {
    constructor() {
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
}
