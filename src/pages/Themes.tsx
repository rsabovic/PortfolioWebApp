import pullThemes from '../utils/ThemeBackend.tsx'
import { useTheme } from '../context/ThemeContext'

function Themes() {
    const themes = pullThemes();
    const { theme, setTheme } = useTheme();

    return (
        <div className="main">
            <h1>Themes</h1>
            {Object.entries(themes).map(([name, vars]) => (
                <div
                    className="themeCard"
                    key={name}
                    onClick={() => setTheme(`themes${name}`)}
                    style={{
                        backgroundColor: vars['--bg'],
                        color: vars['--textColor'],
                        cursor: 'pointer',
                        border: theme === `themes${name}` ? '3px solid black' : '3px solid transparent',
                    }}
                >
                    <h1 style={{ fontFamily: vars['--titleFont'], fontSize: vars['--h1Size']}}>{name}</h1>
                    <p style={{ fontFamily: vars['--infoFont'] }}>
                        This is how the info text looks!
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Themes