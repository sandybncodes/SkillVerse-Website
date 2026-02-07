import { useState } from 'react'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      e.target.reset()
    }, 600)
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="section-title mb-2">Contact Us</h1>
          <p className="text-muted-custom">Get in touch for course enquiries or general questions.</p>
        </div>
      </div>

      <section className="py-4 pb-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card card-skillverse h-100">
                <div className="card-body p-4">
                  <h2 className="h5 section-title mb-3">Contact information</h2>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-envelope me-2 mt-1" style={{ color: 'var(--color-accent)' }} />
                      <a href="mailto:info@skillverse-community.com">info@skillverse-community.com</a>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="bi bi-globe me-2 mt-1" style={{ color: 'var(--color-accent)' }} />
                      <span>www.skillverse-community.com</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="bi bi-chat-dots me-2 mt-1" style={{ color: 'var(--color-accent)' }} />
                      <span>Reach out via the form for a quick response.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card card-skillverse">
                <div className="card-body p-4 p-lg-5">
                  <h2 className="h5 section-title mb-3">Send a message</h2>
                  {submitted && (
                    <div className="alert alert-success mb-3">
                      Thank you for your message. We will get back to you soon!
                    </div>
                  )}
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          required
                          placeholder="Your first name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          required
                          placeholder="Your last name"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Comment or message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="4"
                          required
                          placeholder="Your message..."
                        />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-skillverse" disabled={sending}>
                          {sending ? 'Sending…' : 'Send message'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
