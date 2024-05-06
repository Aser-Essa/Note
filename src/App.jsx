import {useState , useEffect} from "react"
import ButtonAdd from "./ButtonAdd/ButtonAdd";
import NoteConroller from "./NoteController/NoteConroller";
import Counter from "./Counter/Counter";


const App = () => {

    // localStorage.clear()

    const savedData = JSON.parse(localStorage.getItem("saved"))

    if(!savedData) {
        localStorage.setItem("saved" , JSON.stringify([{color:"#607d8b" , value:""}]))
    }

    const [notes , setNotes] = useState(savedData)


    function addNote() {
        const newNote = {color:"#607d8b" , value:""}
        setNotes(prev => [...prev , newNote])
    }

    function updateColor(color , idx) {
        const selected = notes[idx]
        selected.color = color
        setNotes(prev => [...prev])
    }

    function updateValue(value , idx) {
        const selected = notes[idx]
        selected.value = value
        setNotes(prev => [...prev])
    }

    function handledelete(idx) {
        setNotes((prev) => [...prev.filter((e , i) => i !== idx)])
        window.location.reload()
    }

    useEffect(() => { 
        localStorage.setItem("saved" , JSON.stringify(notes))
    })


    return(
        <>
            <h1>Write Your Notes</h1>
            <NoteConroller note={notes}  handledelete={handledelete} updateColor={updateColor} updateValue={updateValue}>
                <ButtonAdd add={addNote}/>
            </NoteConroller>
            <Counter notes={notes}/>
        </>
    );
}

export default App