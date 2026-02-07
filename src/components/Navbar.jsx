import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-skillverse sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          SkillVerse Community
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <i className={theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill'} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
