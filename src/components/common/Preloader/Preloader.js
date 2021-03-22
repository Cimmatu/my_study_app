import preloader from "../../../assets/images/loading.gif";
import styles from "./Preloader.module.css";

let Preloader = () =>{
    return (
        <div>
            <img alt='' src={preloader} className={styles.preloader}/>
        </div>
    )
}

export default Preloader