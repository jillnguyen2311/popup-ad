import { useState } from "react";
import styles from './Ad.module.css'

export default function Ad(){

    const [popup, setPopup] = useState(true);

    return(
        <>
            {
                popup ?
                    <div className={styles.container}>
                        <div className={styles.popup__area}> 
                            <div onClick={() => setPopup(false)}>Close</div>
                            welcome
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}

/*
import { useState } from "react";
import styles from './Ad.module.css'

export default function Ad(){

    const [popup, setPopup] = useState(false);

    return(
        <>
        
            <Image onClick={setPopup(true)}/>
            {
                popup ?
                    <div className={styles.container}>
                        <div className={styles.popup__area}> 
                            <div onClick={() => setPopup(false)}>X</div>
                            welcome
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}
*/
