import styles from "./ButtonAdd.module.css"

const ButtonAdd = ({add}) => {


    return(
        <>
            <div className={styles.add} onClick={add}>
                +
            </div>
        </>
    );
}

export default ButtonAdd