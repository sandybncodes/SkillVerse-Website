const objectives = [
  { bold: 'Real experience from an IT team and project', rest: 'Learn in contexts that reflect actual workflows and collaboration.' },
  { bold: 'The truth about the IT industry', rest: 'Honest insight into expectations, roles, and how teams really operate.' },
  { bold: 'Product and project lifecycle', rest: 'End-to-end understanding of how products and projects are built and delivered.' },
  { bold: 'Courses with theory and real practice', rest: 'Every course combines solid theory with hands-on practice so you gain usable skills.' },
]

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="section-title mb-2">About SkillVerse Community</h1>
          <p className="text-muted-custom lead">
            A new initiative in the IT domain focused on real experience and real skills.
          </p>
        </div>
      </div>

      <section className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="card card-skillverse card-skillverse-fit p-4 p-lg-5 mb-4">
                <h2 className="h5 section-title mb-3">What We Do</h2>
                <p className="text-muted-custom mb-0">
                  SkillVerse Community is a new initiative in the IT domain. Our main scope is to
                  deliver <strong>real experience and knowledge</strong> about different roles in
                  IT. We bridge the gap between theory and practice by putting you in scenarios that
                  mirror real teams and projects, so you learn not only what to do but how it works
                  in the industry.
                </p>
              </div>

              <div className="card card-skillverse card-skillverse-fit p-4 p-lg-5 mb-4">
                <h2 className="h5 section-title mb-3">Scope & Objectives</h2>
                <ul className="list-unstyled mb-0 card-text-theme">
                  {objectives.map((item, i) => (
                    <li key={i} className="d-flex align-items-start mb-3">
                      <i
                        className="bi bi-check2-circle text-success me-2 mt-1"
                        style={{ color: 'var(--color-accent)' }}
                        aria-hidden
                      />
                      <span>
                        <strong>{item.bold}</strong> – {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card card-skillverse card-skillverse-fit p-4 p-lg-5 mb-4">
                <h2 className="h5 section-title mb-3">What Makes Us Different</h2>
                <p className="text-muted-custom">
                  Unlike many academies, courses, or universities that focus mainly on certificates
                  and syllabus coverage, we focus on <strong>real experience</strong>. We don&apos;t
                  guarantee you a job—we guarantee that you will gain practical, industry-relevant
                  experience. Our motto reflects this:{' '}
                  <em>We don&apos;t guarantee the job, we guarantee real experience.</em> In
                  addition, we integrate <strong>AI as a valuable tool</strong> in all our courses,
                  teaching you how to use it effectively and efficiently in your future role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
