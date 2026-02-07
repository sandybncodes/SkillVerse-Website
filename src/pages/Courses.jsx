import { Link } from 'react-router-dom'
import { courseList } from '../data/courses'

const iconMap = {
  'manual-qa': 'bi-clipboard2-check-fill',
  'automation-qa': 'bi-robot',
  'sql-databases': 'bi-database-fill-gear',
}

const iconClassMap = {
  'manual-qa': 'course-icon--manual',
  'automation-qa': 'course-icon--automation',
  'sql-databases': 'course-icon--sql',
}

export default function Courses() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="section-title mb-2">Our Courses</h1>
          <p className="text-muted-custom">
            Theory, real practice, and AI as your everyday tool. Start with one of our programs
            below.
          </p>
        </div>
      </div>

      <section className="py-4 pb-5">
        <div className="container">
          <div className="row g-4">
            {courseList.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4">
                <Link to={`/courses/${course.id}`} className="course-card">
                  <div className="card card-skillverse h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div
                          className={`course-icon ${iconClassMap[course.id] || ''}`}
                          aria-hidden
                        >
                          <i className={iconMap[course.id] || 'bi-book'} />
                        </div>
                        <span className="badge badge-duration">{course.period}</span>
                      </div>
                      <h3 className="card-title h5 mb-2">{course.name}</h3>
                      <p className="card-text text-muted-custom small mb-3">{course.shortDesc}</p>
                      <p className="mb-0 fw-semibold" style={{ color: 'var(--color-accent)' }}>
                        {course.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
