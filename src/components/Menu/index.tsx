//css
import styles from './styles.module.css'

//react
import { useState, useEffect, useEffectEvent } from 'react'

//icons
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon} from 'lucide-react'

type availableThemes = 'dark' | 'light'

const Menu = () => {
    const [theme, setTheme] = useState<availableThemes>('dark')

    const handleThemeChenge = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()

        console.log('clicado', Date.now())

        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        console.log('tema', theme)

        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

 return (
    <nav className={styles.menu}>
        <a href="#" className={styles.menuLink} aria-label='Ir para a Home' title='Ir para a Home'>
            <HouseIcon/>
        </a>
        <a href="#" className={styles.menuLink} aria-label='Ver Historico' title='Ver Historico'>
            <HistoryIcon/>
        </a>
        <a href="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
            <SettingsIcon/>
        </a>
        <a href="#" className={styles.menuLink} aria-label='Mudar Tema' title='Mudar Tema' onClick={handleThemeChenge}>
            {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
        </a>
    </nav>
  )
}

export default Menu