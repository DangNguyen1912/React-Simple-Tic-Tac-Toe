export default function MoveCounter({ squares }) {
    const XMoveCount = squares.reduce((accumulate, square) => square === "X" ? accumulate + 1: accumulate,0)
    const OMoveCount = squares.reduce((accumulate, square) => square === "O" ? accumulate + 1: accumulate,0)
    return <>
    <div>X Move Count: {XMoveCount}</div>
    <div>O Move Count: {OMoveCount}</div>
    </>
}