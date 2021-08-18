class Flight1 extends GameEngine {
    constructor() {
        super()
        this.actors = []

        //this.actors.push(new ImageActor('ship', { center: { x: 32, y: 32 } }))

        this.actors.push(new Actor('ship', { center: { x: innerWidth/2, y: innerHeight - 32 }, draw: (me)=> {
            const midX = me.x + me.w/2
            const midY = me.y + me.h/2

            c.fillStyle = 'rgb(255,255,255)'
            c.beginPath()
            c.moveTo(midX, midY - me.h/2)
            c.lineTo(me.x + me.w, me.y + me.h)
            c.lineTo(me.x, me.y + me.h)
            c.closePath()
            c.fill()
        }}))

        this.actors.push(new Actor('adv001', { center: { x: innerWidth/2, y: 32 }, draw: (me) => {
            const midX = me.x + me.w/2
            const midY = me.y + me.h/2

            c.fillStyle = 'rgb(255,0,0)'
            c.beginPath()
            c.arc(midX, midY, me.w*0.5, 0, Math.PI * 2, true)
            c.closePath()
            c.fill()
        }}))
    }

    checkCollisions() {
        if (this.actors[1].isCollidingWith(this.actors[0])) {
            s += 1
        }
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

        // handle player input
        if (l && this.actors[0].x > 0)
            this.actors[0].x -= 1

        if (r && this.actors[0].x < a.width-this.actors[0].w)
            this.actors[0].x += 1

        if (u && this.actors[0].y > 0)
            this.actors[0].y -= 1

        if (d && this.actors[0].y < a.height-this.actors[0].h)
            this.actors[0].y += 1

        if (space) {
            // fire
        }

        this.actors.forEach(actor => {
            if (actor.name.match(/^adv/)) {
                actor.y += 1;
                if (actor.y > innerHeight) {
                    actor.y = -32
                    actor.x = Math.floor(Math.random() * innerWidth)
                }
            }

            actor.draw()
        })
    }

    handleClick(x=-1, y=-1) {
        s += 1
    }
}
