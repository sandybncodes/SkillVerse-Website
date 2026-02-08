export const courses = {
  'manual-qa': {
    id: 'manual-qa',
    name: 'Manual QA Engineering',
    period: '8 weeks',
    price: '€299',
    shortDesc:
      "Learn testing fundamentals, test design, bug reporting, and how to use AI to speed up manual testing and documentation.",
    details: [
      'Testing fundamentals: types of testing, test levels, and lifecycle.',
      'Test design techniques: equivalence partitioning, boundary value analysis, and use cases.',
      'Bug reporting and defect lifecycle in real project tools.',
      'Documentation: test cases, checklists, and test plans.',
      'AI in manual QA: using AI to generate test ideas, draft cases, and improve documentation.',
      'Hands-on practice on real-style projects and team workflows.',
    ],
  },
  'automation-qa': {
    id: 'automation-qa',
    name: 'Automation QA Engineering',
    period: '12 weeks',
    price: '€449',
    shortDesc:
      'Build automated test frameworks, write maintainable scripts, and integrate AI into your automation and debugging workflow.',
    details: [
      'Programming basics for test automation (e.g. Python or JavaScript).',
      'UI and API test automation with industry-standard tools.',
      'Design of maintainable frameworks and best practices.',
      'CI/CD and running tests in pipelines.',
      'AI for automation: generating and refactoring test code, analyzing failures, and improving coverage.',
      'Real project practice: automation in a team context.',
    ],
  },
  'sql-databases': {
    id: 'sql-databases',
    name: 'SQL & Databases for Beginners',
    period: '6 weeks',
    price: '€199',
    shortDesc:
      'From basics to writing queries and understanding data models. Use AI to write and optimize SQL and explore databases.',
    details: [
      'Database concepts: tables, relations, and data types.',
      'SQL: SELECT, filtering, joins, aggregations, and subqueries.',
      'Data modification: INSERT, UPDATE, DELETE, and transactions.',
      'Basic schema design and normalization.',
      'Using AI to write, explain, and optimize SQL queries.',
      'Practical exercises on real-world style datasets.',
    ],
  },
  "web-development": {
          name: "Web Development for Beginners",
          period: "10 weeks",
          price: "€349",
          shortDesc: "Learn HTML, CSS, JavaScript and modern workflows to build responsive web apps and portfolios.",
          details: [
            "Foundations: HTML structure, semantic tags and accessibility.",
            "Styling with CSS: layouts, responsive design and Flexbox/Grid.",
            "JavaScript fundamentals: DOM, events, and asynchronous code.",
            "Modern tooling: package managers, bundlers, and version control.",
            "Building a small project and deploying a portfolio site.",
            "Using AI for productivity: code snippets, explanations, and debugging help."
          ]
        },
        "project-management": {
          name: "Project Management",
          period: "8 weeks",
          price: "€329",
          shortDesc: "Fundamentals of project management, agile practices, stakeholder communication and delivery.",
          details: [
            "Project lifecycle and planning: scope, timeline and budgeting.",
            "Agile frameworks: Scrum basics, roles, and ceremonies.",
            "Communication and stakeholder management.",
            "Risk management and quality assurance basics.",
            "Tools and documentation: roadmaps, backlogs, and reporting.",
            "Practical exercises with case studies and real scenarios."
          ]
        }
}

export const courseList = Object.values(courses)
