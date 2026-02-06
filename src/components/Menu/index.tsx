//css
import styles from './styles.module.css'

//react
import { useState, useEffect } from 'react'

//icons
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon} from 'lucide-react'
import { Link } from 'react-router'

type availableThemes = 'dark' | 'light'

const Menu = () => {
    const [theme, setTheme] = useState<availableThemes>(() => {
        const storedTheme = localStorage.getItem('theme')

        if (storedTheme === 'dark' || storedTheme === 'light') {
            return storedTheme
        }
        return 'dark'

    })

    const handleThemeChange = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()

        setTheme(theme => theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)

    }, [theme])

 return (
    <nav className={styles.menu}>
        <Link to="/" className={styles.menuLink} aria-label='Ir para a Home' title='Ir para a Home'>
            <HouseIcon/>
        </Link>
        <Link to="#" className={styles.menuLink} aria-label='Ver Historico' title='Ver Historico'>
            <HistoryIcon/>
        </Link>
        <Link to="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
            <SettingsIcon/>
        </Link>
        <Link to="#" className={styles.menuLink} aria-label='Mudar Tema' title='Mudar Tema' onClick={handleThemeChange}>
            {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
        </Link>
    </nav>
  )
}

export default Menu