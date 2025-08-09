import { useState } from 'react'
import Authentication from "./Authentication"
import Modal from "./Modal"


export default function Layout(props: any) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)

    const header = (
        <header>
            <div>
                <h1>CAFFIENE-TRACKER</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button onClick={() => { setShowModal(true) }}>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffeine-tracker</span> was made by <a target="_blank" href="https://github.com/Josephus-git">Josephus</a> <br />Using the <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a> design library<br/>Check out the project on <a target="_black" href="https://github.com/Josephus-git/caffeine-tracker.git">Github</a></p>
        </footer>
    )

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={() => { setShowModal(false)}}>
                    <Authentication />
                </Modal>)}
            {header}
            <main>
                {children}
            </main>           
            {footer}
        </>
    )
}