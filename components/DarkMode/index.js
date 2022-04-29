import React,{useState} from "react"
import Button from 'components/Button'


export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false)
    const handleClick = () =>{
        document.documentElement.classList.toggle('dark')
        setDarkMode(!darkMode)
    }
    const text = darkMode ? 'Modo claro': 'Modo oscuro'

    return(
        <>
            <Button onClick={handleClick}>
                {text}
            </Button>
        </>
    )
}
