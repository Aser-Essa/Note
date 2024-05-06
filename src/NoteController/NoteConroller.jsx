import styles from "./NoteConroller.module.css"
import Note from "../Note/Note";
import { useState } from "react";

const NoteConroller = ({children, note , updateColor , updateValue , handledelete}) => {

    const [index , setIndex]  = useState(0)

    function getIndex(index) {
        setIndex(index)
    }

    const data = note.map((e , idx) => {
        return(
            <div className={styles.cardContainer}  key={idx} onClick={() => getIndex(idx)}>
                <Note note={note} firstColor={e.color} firstValue={e.value} updateColor={updateColor} updateValue={updateValue} index={index}/>
                <button className={styles.deleteBtn} onClick={() => handledelete(idx)}>Delete</button>
            </div>
        );

    });
    return(
        <div className={styles.cardController}>
                {data}
                {children}
        </div>
    );

}

export default  NoteConroller