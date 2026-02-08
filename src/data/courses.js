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
}

export const courseList = Object.values(courses)
