import { useTheme } from '../context/ThemeContext'

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="themeSwitcher" style={{ position: 'absolute', top: 10, left: 10 }}>
       <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="themeDesert">Desert</option>
        <option value="themeNoir">Noir</option>
      </select>
    </div>
  )
}

export default ThemeSwitcher