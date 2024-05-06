import styles from "./NoteUI.module.css"

const NoteUI = ({color , value , handleColor , handleValue}) => {
    return(
        <>
            <div className={styles.card}>
        
                <div className={styles.colors}>

                    <span className={styles.gray}  onClick={() => {
                        handleColor("#607d8b")}}>
                    </span>

                    <span className={styles.yellow}  onClick={() => {
                        handleColor("#ffc107")}}>
                    </span>


                    <span className={styles.orange}  onClick={() => {
                        handleColor("#ff5722")}}>
                    </span>


                    <span className={styles.pink}  onClick={() => {
                        handleColor("#e91e63")}}>
                    </span>


                    <span className={styles.violate}  onClick={() => {
                        handleColor("#673ab7")}}>
                    </span>


                    <span className={styles.blue}  onClick={() => {
                        handleColor("#2196f3")}}>
                    </span>

                </div>

                <textarea style={{backgroundColor:`${color}`}} value={value} onChange={(e) => handleValue(e.target.value)}></textarea>

            </div>
        </>
    );
}

export default NoteUI