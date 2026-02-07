import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-skillverse">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <strong>SkillVerse Community</strong>
            <br />
            <span className="small">We don&apos;t guarantee the job, we guarantee real experience.</span>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <Link to="/contact" className="me-3">
              Contact
            </Link>
            <Link to="/about" className="me-3">
              About
            </Link>
            <Link to="/courses">Courses</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
