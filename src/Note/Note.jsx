import { useEffect, useRef , useState } from "react";
import NoteUI from "../NoteUI/NoteUI";


const Note = ({firstColor , firstValue , index , updateColor , updateValue}) => {

    const [color , setColor] = useState(firstColor)

    const [value , setValue] = useState(firstValue)

    const [depColor , setDepColor] = useState(color)

    const [depValue , setDepValue] = useState(value)

    function handleColor(C) {
        setColor(C)
    }

    function handleValue(V) {
        setValue(V)
    }

    useEffect(() => {
        setDepColor(color)
        if(depColor !== color) {
            const Tx = setTimeout(() => {
                updateColor(color , index)
            },0)
            return(() => {clearTimeout(Tx)})
        }
    },[color])

    useEffect(() => {
        setDepValue(value)
        if(depValue !== value) {
            const Time = setTimeout(() => {
                updateValue(value , index)
            },0)
            return(() => {clearTimeout(Time)})
        }
    },[value])


    return(
        <NoteUI color={color} value={value} handleColor={handleColor} handleValue={handleValue}/>
    );

}

export default Note

