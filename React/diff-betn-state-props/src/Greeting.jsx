import { Children, useState } from "react"
// import './Greeting.css'
// import './Greeting.module.css' // ❌
import styles from './Greeting.module.css' // css modules
console.log('style', styles)

export default function Greeting ({name, children}) {
    // console.log('Child Component')

    // console.log(children)

    const [clickCount, setClickCount] = useState(0)
    return(
        <div style={{border: '1px solid gray', padding: '10px', marginTop:'10px'}}>
            <h2 className={styles['text-xl']} >Hello, {name}</h2>
            <p>You Cicked thebutton {clickCount} times</p>
            <button className={styles.button} onClick={() => setClickCount((prev) => prev + 1)}>Child Click...</button>

            <div style={{marginTop: '10px', padding: '10px', backgroundColor: 'green'}}>
                {children}
            </div>
        </div>
    )
}