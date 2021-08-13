/* References
 *
 * 1. xem's 280b 2020 JS13k Framework - https://gist.github.com/xem/a7ff7215375520d89b73beeabd7b16bd
 *
*/

let c
let g = [
    new IntroEngine(),
    new MainMenuEngine(),
    new FlightEngine(),
    new OutdoorEngine(),
    new IndoorEngine(),
    new GameOverEngine(),
]

window.addEventListener('load', () => {
    c = a.getContext`2d`, k = [u = r = d = l = s = 0]

    onkeydown = onkeyup = e => k[e.which] = self['lld*rlurdu'[e.which %32 %17]] = e.type[5]

    setInterval(e => {
        a.width = innerWidth
        a.height = innerHeight
        g[s].render()
    }, 16)

    onclick = e => {
        x = e.pageX
        y = e.pageY
        g[s].handleClick(x, y)
    }

    console.log('loaded.', c)
})
