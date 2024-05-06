import styles from "./Counter.module.css"

const Counter = ({notes}) => {

    const gray = notes.filter((e) => e.color === "#607d8b")
    const yellow = notes.filter((e) => e.color === "#ffc107")
    const orange = notes.filter((e) => e.color === "#ff5722")
    const pink = notes.filter((e) => e.color === "#e91e63")
    const violate = notes.filter((e) => e.color === "#673ab7")
    const blue = notes.filter((e) => e.color === "#2196f3")


    
    return(
        <div className={styles.counterContainer}>
            {gray.length > 0 ? 
            <div className="oneCount">
                <span className={styles.row}>
                    <span className={styles.color} style={{backgroundColor:`${gray[0].color}`}}></span>
                    <p>{gray.length} Note</p>
                </span>
            </div> :""}

            {yellow.length > 0 ? 
            <div className="oneCount">
                <span className={styles.row}>
                    <span className={styles.color} style={{backgroundColor:`${yellow[0].color}`}}></span>
                    <p>{yellow.length} Note</p>
                </span>
            </div> :""}

            {orange.length > 0 ? 
            <div className="oneCount">
                <span className={styles.row}>
                    <span className={styles.color} style={{backgroundColor:`${orange[0].color}`}}></span>
                    <p>{orange.length} Note</p>
                </span>
            </div> :""}

            {pink.length > 0 ? 
            <div className="oneCount">
                <span className={styles.row}>
                    <span className={styles.color} style={{backgroundColor:`${pink[0].color}`}}></span>
                    <p>{pink.length} Note</p>
                </span>
            </div> :""}

            {violate.length > 0 ? 
            <div className="oneCount">
                <span className={styles.row}>
                    <span className={styles.color} style={{backgroundColor:`${violate[0].color}`}}></span>
                    <p>{violate.length} Note</p>
                </span>
            </div> :""}

            {blue.length > 0 ? 
            <div className="oneCount">
                <span className={styles.row}>
                    <span className={styles.color} style={{backgroundColor:`${blue[0].color}`}}></span>
                    <p>{blue.length} Note</p>
                </span>
            </div> :""}
        </div>
    );
}

export default Counter