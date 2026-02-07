import { Link } from 'react-router-dom'

const deliverCards = [
  {
    title: 'Real experience',
    text: 'Learn in contexts that mirror real IT teams and projects.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=320&fit=crop',
    alt: 'Team collaborating on a project in a modern workspace',
  },
  {
    title: 'Industry truth',
    text: 'Understand how the IT industry really works and what employers expect.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=320&fit=crop',
    alt: 'Professional workspace representing industry standards and expectations',
  },
  {
    title: 'AI in practice',
    text: 'Use AI effectively and efficiently as part of your daily workflow.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=320&fit=crop',
    alt: 'AI and technology as a tool in modern work',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero-section text-center">
        <div className="container position-relative">
          <p className="hero-motto">We don&apos;t guarantee the job, we guarantee real experience</p>
          <h1 className="display-4 fw-bold mb-3">SkillVerse Community</h1>
          <p className="lead mb-4">
            A new initiative in the IT domain. We deliver real experience and knowledge about
            different roles in IT—through theory, practice, and AI as your everyday tool.
          </p>
          <Link to="/courses" className="btn btn-light btn-lg px-4 rounded-pill fw-semibold">
            Explore courses
          </Link>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">What We Deliver</h2>
          <p className="text-center text-muted-custom mx-auto" style={{ maxWidth: '720px' }}>
            SkillVerse Community focuses on what matters: real experience from real IT teams and
            projects, the truth about the industry, and a clear view of product and project
            lifecycle. Our courses combine theory with hands-on practice so you gain skills you can
            use from day one.
          </p>
          <div className="row g-4 mt-2">
            {deliverCards.map((card) => (
              <div key={card.title} className="col-md-4">
                <div className="card card-skillverse card-deliver h-100 overflow-hidden">
                  <div className="card-deliver-img-wrap">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="card-deliver-img"
                      width="600"
                      height="320"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body text-center p-4">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text text-muted-custom small mb-0">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
