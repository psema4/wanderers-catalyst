/* References
 *
 * 1. xem's 280b 2020 JS13k Framework - https://gist.github.com/xem/a7ff7215375520d89b73beeabd7b16bd
 *
*/

let c

window.addEventListener('load', () => {
    c = a.getContext`2d`, k = [u=r=d=l=s=0]

    onkeydown=onkeyup=e=>k[e.which]=self['lld*rlurdu'[e.which%32%17]]=e.type[5]

    setInterval(e => {
        a.width=innerWidth
        a.height=innerHeight

        switch(s) {
            case 0: // ex: draw title screen
            case 1: // ex: draw menu screen
            case 2: // ex: draw game board
            case 3: // ex: draw game over screen
        }
    }, 16)

    onclick = e => {
        x=e.pageX
        y=e.pageY

        switch(s) {
            case 0: // react to clicks on screen 0
            case 1: // react to clicks on screen 1
            case 2: // react to clicks on screen 2
            case 3: // react to clicks on screen 3
        }
    }

    console.log('loaded.', c)
})
