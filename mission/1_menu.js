class Menu extends GameEngine {
    constructor() {
        super()
        this.buttons = []
        this.buttons[0] = { rect: new Rect(0,0,0,0), label: 'Play', bg: {r:127,g:127,b:127}, fg: {r:255,g:255,b:255}, cb: ()=>{ s = s+1 } }
        this.buttons[1] = { rect: new Rect(0,0,0,0), label: 'Options', bg: {r:127,g:127,b:127}, fg:{r:255,g:255,b:255}, cb: ()=>{ s = g.length-1 } }
    }

    render() {
        this.clearScreen()
        this.drawBackground()

        this.drawText('Wanderers:', {
            center: {
                x: a.width / 2,
                y: 100
            },

            owidth: 0.25,
                ocolor: { r: 255, g: 63, b: 63 },
                color: { r:255, g: 63, b: 63 },
                fontsize: 38
            })

            this.drawText('Catalyst', {
                center: {
                    x: a.width / 2,
                    y: 180
                },
                owidth: 0.25,
                ocolor: { r: 255, g: 255, b: 255 },
                color: { r:63, g: 63, b: 255 },
                fontsize: 84
            })

            this.drawText('Main Menu', {
                center: {
                    x: a.width / 2,
                    y: 240
                },
                owidth: 0.25,
                ocolor: { r: 63, g: 63, b: 255 },
                color: { r:63, g: 63, b: 255 },
                fontsize: 38
            })

            this.buttons[0].rect = new Rect(a.width/2-100, 300, 200, 40)
            this.buttons[1].rect = new Rect(a.width/2-100, 360, 200, 40)

            this.buttons.forEach(btn => {
                this.drawFilledRect(btn.rect, btn.bg)
                this.drawText(btn.label, { center:{ x: a.width/2, y: btn.rect.y + 42 }, owidth:0, ocolor:btn.fg, color: btn.fg, fontsize: 28 })
            })

        if (space) { space = !space; s += 1 }
    }

    handleClick(x=-1, y=-1) {
        this.buttons.forEach(btn => {
            if (x >= btn.rect.x && x <= btn.rect.x + btn.rect.w) {
                if (y >= btn.rect.y && y <= btn.rect.y + btn.rect.h) {
                    btn.cb()
                }
            }
        })
    }
}
