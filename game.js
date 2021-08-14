/* References
 *
 * xem's 280b 2020 JS13k Framework
 *   https://gist.github.com/xem/a7ff7215375520d89b73beeabd7b16bd
 *
 * xerion-zero-js
 *   https://psema4.github.io/Wireframe-51/exerion-zero-js/
 *   https://github.com/psema4/Wireframe-51/tree/develop/exerion-zero-js
 *   https://twitter.com/psema4/status/1415824786631057409?s=19
 *
 *
*/

var space, c, g = [
    new IntroEngine(),
    new MainMenuEngine(),
    new FlightEngine(),
    new OutdoorEngine(),
    new IndoorEngine(),
    new GameOverEngine(),
], bel = document.body.addEventListener,
ac, tempo=120, seq

window.addEventListener('load', () => {
    c = a.getContext`2d`, k = [u = r = d = l = s = 0]

    // sound & music setup
    ac = new AudioContext()
    seq = new TinyMusic.Sequence( ac, tempo, [
          'G3 q',
          'E4 q',
          'C4 h'
    ])
    seq.gain.gain.value = 0.1
    seq.loop = false
    seq.play()

    // framwork keys
    //
    //      up:  w, up arrow, f, z, ;, 7
    //    down:  s, down arrow, b, h, y, 3
    //    left:  a, left arrow, q, v, e, 1, 2, 6, spAce, ctrl, alt
    //   right:  d, right arrow, g, x, r, 5
    //
    onkeydown = onkeyup = e => k[e.which] = self['lld*rlurdu'[e.which %32 %17]] = e.type[5]

    // custom keys
    bel('keyup', e => { space = !(e.which == 32) })
    bel('keydown', e => { space = e.which == 32; space && console.debug('. s p A c e .') })

    // call the current engines renderer on every tick
    setInterval(e => {
        a.width = innerWidth
        a.height = innerHeight
        if (s >= g.length) s = 0
        g[s].render()
    }, 16)

    onclick = e => {
        x = e.pageX
        y = e.pageY
        g[s].handleClick(x, y)
    }

    console.log('loaded.', c)
})
