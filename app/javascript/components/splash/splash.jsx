import React from 'react';
import Article from '../news/article'

function Signs() {

    const STRIKE_SVG = <svg viewBox="0 0 700.000000 762.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,762.000000) scale(0.100000,-0.100000)">
                <path d="M4515 7004 c-462 -51 -1333 -148 -1935 -214 -1480 -163 -1463 -161
                -1478 -172 -6 -6 -12 -23 -12 -37 0 -35 298 -2748 305 -2778 11 -48 -77 -55
                1325 101 217 24 398 41 402 37 3 -3 9 -123 13 -266 l7 -260 -72 -49 c-81 -56
                -131 -111 -237 -258 -230 -324 -250 -368 -282 -634 -5 -45 -49 -256 -96 -470
                -191 -862 -278 -1287 -273 -1337 2 -24 9 -34 31 -41 43 -16 62 13 81 124 28
                156 199 959 294 1375 24 105 30 120 48 123 12 2 29 11 39 22 15 17 15 24 1 94
                -39 188 4 355 139 541 32 44 87 121 123 172 60 86 169 203 190 203 5 0 12 -64
                15 -142 7 -161 30 -332 53 -395 28 -76 98 -114 180 -98 28 5 59 28 128 95 51
                49 118 105 150 124 82 49 238 97 250 77 3 -4 -51 -59 -120 -121 -69 -61 -211
                -206 -315 -321 -207 -227 -278 -286 -387 -325 -101 -35 -159 -39 -248 -18 -85
                20 -107 14 -112 -28 -2 -18 5 -32 22 -45 34 -27 132 -46 205 -41 68 5 68 5 45
                -62 -9 -25 -24 -94 -34 -153 -34 -194 -43 -378 -38 -783 4 -379 4 -385 26
                -406 18 -18 26 -20 49 -12 l28 9 0 465 c0 479 5 559 46 760 11 55 32 122 51
                160 27 53 42 70 83 93 28 16 71 46 96 67 44 37 48 39 85 28 22 -6 85 -8 144
                -6 118 5 185 28 253 88 64 56 67 69 67 267 l0 179 66 64 c107 105 120 156 59
                217 -31 31 -39 34 -82 32 l-48 -3 -7 179 c-3 99 -14 316 -23 483 -8 166 -13
                307 -10 312 3 6 20 10 37 10 17 0 443 45 947 101 771 85 919 103 934 118 20
                19 24 -27 -243 2381 -52 474 -52 472 -104 469 -12 -1 -399 -43 -861 -95z m820
                -26 c3 -7 50 -422 105 -923 55 -500 121 -1092 145 -1314 25 -221 42 -407 39
                -412 -3 -5 -21 -9 -40 -9 -19 0 -173 -16 -342 -35 -277 -31 -966 -107 -2997
                -330 -838 -92 -748 -86 -757 -55 -4 14 -28 214 -52 445 -25 231 -88 809 -141
                1284 -52 476 -95 874 -95 885 0 20 17 23 398 64 218 24 638 70 932 102 294 33
                947 105 1450 160 503 55 1005 111 1115 124 246 29 235 29 240 14z m-1640
                -2980 c5 -17 45 -825 45 -910 l0 -66 -66 -31 c-92 -43 -178 -107 -250 -185
                -90 -98 -124 -86 -150 51 -22 121 -50 1080 -32 1099 6 5 356 49 426 53 12 0
                24 -5 27 -11z m55 -1482 l0 -114 -39 -35 c-23 -21 -62 -43 -92 -51 -50 -15
                -179 -22 -179 -10 0 12 294 333 302 328 4 -3 8 -56 8 -118z"></path>
                </g>
                </svg>

    let strikeSigns = [];

    for (let i = 0; i < 10; i++) {
        strikeSigns.push(
            <li className="col s1" key={`key-${i}`}>
                <div style={{ position: 'relative' }}>
                    <div className="the_trick" onClick={() => openArticle(`Strike-${i}`)}></div>
                <div className="forground">
                    {STRIKE_SVG}
                    <div className="portal" style={{
                        position: 'absolute',
                        top: '29%',
                        left: '-1px',
                        width: '117px',
                        transform: 'translate(40px, -50%) rotateZ(-6.5deg)'
                    }} >
                        <div className="card hoverable entangle">
                            <div className="card-content">
                                <p className="blue-text">STRIKE!!!!!</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </li>
        )
    }
    const [ title, setTitle ] = React.useState('');

    const openArticle = (title) => {
        setTitle(title);
    }

    return (
        <footer>
            {/* <p>Welcome to UnionBase::Jobs! A Rails/React/Redux job board. This site uses encryption and unique session tokens to keep users' credentials secure. When logged in, users can browse, read, and save potential jobs. Job postings would be handled by an internal team to ensure quality and legitimacy. Thank you.</p> */}
            <Article title={title}/>
            <div style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                <ul className="collective row">{strikeSigns}</ul>
            </div>
        </footer>
    )
}

export default Signs;

// const SVG = "m120 408h16v16h-16zm0 0"
//     const SVG2 = "m120 448h16v16h-16zm0 0"
//     const SVG4 = "M4515 7004 c-462 -51 -1333 -148 -1935 -214 -1480 -163 -1463 -161 -1478 -172 -6 -6 -12 -23 -12 -37 0 -35 298 -2748 305 -2778 11 -48 -77 -55 1325 101 217 24 398 41 402 37 3 -3 9 -123 13 -266 l7 -260 -72 -49 c-81 -56 -131 -111 -237 -258 -230 -324 -250 -368 -282 -634 -5 -45 -49 -256 -96 -470 -191 -862 -278 -1287 -273 -1337 2 -24 9 -34 31 -41 43 -16 62 13 81 124 28 156 199 959 294 1375 24 105 30 120 48 123 12 2 29 11 39 22 15 17 15 24 1 94 -39 188 4 355 139 541 32 44 87 121 123 172 60 86 169 203 190 203 5 0 12 -64 15 -142 7 -161 30 -332 53 -395 28 -76 98 -114 180 -98 28 5 59 28 128 95 51 49 118 105 150 124 82 49 238 97 250 77 3 -4 -51 -59 -120 -121 -69 -61 -211 -206 -315 -321 -207 -227 -278 -286 -387 -325 -101 -35 -159 -39 -248 -18 -85 20 -107 14 -112 -28 -2 -18 5 -32 22 -45 34 -27 132 -46 205 -41 68 5 68 5 45 -62 -9 -25 -24 -94 -34 -153 -34 -194 -43 -378 -38 -783 4 -379 4 -385 26 -406 18 -18 26 -20 49 -12 l28 9 0 465 c0 479 5 559 46 760 11 55 32 122 51 160 27 53 42 70 83 93 28 16 71 46 96 67 44 37 48 39 85 28 22 -6 85 -8 144 -6 118 5 185 28 253 88 64 56 67 69 67 267 l0 179 66 64 c107 105 120 156 59 217 -31 31 -39 34 -82 32 l-48 -3 -7 179 c-3 99 -14 316 -23 483 -8 166 -13 307 -10 312 3 6 20 10 37 10 17 0 443 45 947 101 771 85 919 103 934 118 20 19 24 -27 -243 2381 -52 474 -52 472 -104 469 -12 -1 -399 -43 -861 -95z m820 -26 c3 -7 50 -422 105 -923 55 -500 121 -1092 145 -1314 25 -221 42 -407 39 -412 -3 -5 -21 -9 -40 -9 -19 0 -173 -16 -342 -35 -277 -31 -966 -107 -2997 -330 -838 -92 -748 -86 -757 -55 -4 14 -28 214 -52 445 -25 231 -88 809 -141 1284 -52 476 -95 874 -95 885 0 20 17 23 398 64 218 24 638 70 932 102 294 33 947 105 1450 160 503 55 1005 111 1115 124 246 29 235 29 240 14z m-1640 -2980 c5 -17 45 -825 45 -910 l0 -66 -66 -31 c-92 -43 -178 -107 -250 -185 -90 -98 -124 -86 -150 51 -22 121 -50 1080 -32 1099 6 5 356 49 426 53 12 0 24 -5 27 -11z m55 -1482 l0 -114 -39 -35 c-23 -21 -62 -43 -92 -51 -50 -15 -179 -22 -179 -10 0 12 294 333 302 328 4 -3 8 -56 8 -118z"
//     const PATH = new Path2D(SVG)
//     const PATH2 = new Path2D(SVG2)
//     const PATH4 = new Path2D(SVG4)
//     const SCALE = 0.05
//     const OFFSET = 80
//     function draw(ctx) {
//         ctx.fillStyle = 'deepskyblue'
//         ctx.scale(SCALE, SCALE)
//         // ctx.rotate(Math.PI); 
//         ctx.translate(-900, 0)
//         // ctx.transform(1, 1, 1, 1, 1, 1)
//         ctx.fill(PATH4)
//         ctx.fillText('Test', 10, 100)

//         ctx.restore()
//     }

//     const [locations, setLocations] = React.useState([])
//     const canvasRef = React.useRef(null)
//     React.useEffect(() => {
//         const canvas = canvasRef.current
//         const ctx = canvas.getContext('2d')
//         ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
//         draw(ctx)
//     })

{/* <canvas
    ref={canvasRef}
    width={window.innerWidth}
    height={window.innerHeight}
/> */}