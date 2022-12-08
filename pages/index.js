import { useState } from "react"
import bg from "../assets/joaninha.png"
import ClickedPoint from "../src/components/ClickedPoints"

export default function Home() {
    const [clickedPoint, setClickedPoint] = useState([])
    const [poppedPoint, setPoppedPoint] = useState([])

    function getCordenates(e) {
        const { clientX, clientY } = e
        setClickedPoint([...clickedPoint, { clientX, clientY }])
        setPoppedPoint([])
    }

    function handleUndo() {
        const newClickedPoint = [...clickedPoint]
        const popped = newClickedPoint.pop()
        setClickedPoint(newClickedPoint)
        if(!popped) return
        setPoppedPoint([...poppedPoint, popped])
    }

    function handleRedo() { 
        const newPoppedPoint = [...poppedPoint]
        const redo = newPoppedPoint.pop()
        setPoppedPoint(newPoppedPoint)
        if(!redo) return
        setClickedPoint([...clickedPoint, redo])
    }

    return (
        <div className="conteiner">
            <button onClick={handleUndo} disabled={clickedPoint==0?true:false}>Undo</button>
            <button onClick={handleRedo} disabled={poppedPoint==0?true:false}>Redo</button>
            <div className="line"></div>
            <div onClick={getCordenates} className="pointsConteiner">
                {clickedPoint.map((clicked, idx) => {
                    console.log()
                    return <ClickedPoint clicked={clicked} bg={bg} key={idx} />
                })}
            </div>
        </div>
    )
}

