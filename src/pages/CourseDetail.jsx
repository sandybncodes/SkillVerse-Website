import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'

export default function CourseDetail() {
  const { courseId } = useParams()
  const course = courseId ? courses[courseId] : null

  if (!course) {
    return (
      <div className="container py-4">
        <div className="alert alert-warning">
          Course not found. <Link to="/courses">Back to courses</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <Link
        to="/courses"
        className="d-inline-flex align-items-center text-muted-custom text-decoration-none small mb-3"
      >
        <i className="bi bi-arrow-left me-1" /> Back to courses
      </Link>

      <div className="course-detail-hero">
        <div className="px-3">
          <span className="badge bg-light text-dark mb-2">{course.period}</span>
          <h1 className="h2 mb-2">{course.name}</h1>
          <p className="mb-2 opacity-90">{course.shortDesc}</p>
          <p className="mb-0 h5">{course.price}</p>
        </div>
      </div>

      <div className="card card-skillverse">
        <div className="card-body p-4 p-lg-5">
          <h2 className="h5 section-title mb-3">What you&apos;ll learn</h2>
          <ul className="list-group list-group-flush border-0">
            {course.details.map((item, i) => (
              <li key={i} className="list-group-item px-0 ps-0">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 mb-0 text-muted-custom small">
            All our courses include AI as a core tool. You will learn to use it effectively and
            efficiently in your day-to-day work.
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/contact" className="btn btn-skillverse">
          Enquire about this course
        </Link>
      </div>
    </div>
  )
}
