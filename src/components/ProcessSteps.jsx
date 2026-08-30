import './ProcessSteps.css'

const steps = [
  {
    number: '01',
    title: 'Tell us your need',
    description: 'Describe your situation in plain language — no scheme names needed.',
  },
  {
    number: '02',
    title: 'Understand your profile',
    description: 'We ask only the questions relevant to your situation.',
  },
  {
    number: '03',
    title: 'Match relevant schemes',
    description: 'See the central and state schemes that may apply to you.',
  },
  {
    number: '04',
    title: 'Explain eligibility',
    description: 'Understand exactly why a scheme matches your profile.',
  },
  {
    number: '05',
    title: 'Identify missing documents',
    description: 'Know what you still need before you apply.',
  },
  {
    number: '06',
    title: 'Guide the application',
    description: 'Get a clear, step-by-step plan to submit your application.',
  },
]

function ProcessSteps() {
  return (
    <section className="process" id="how-it-works">
      <div className="container">
        <h2 className="process-heading">How SAHAY works</h2>
        <div className="process-track">
          {steps.map((step, index) => (
            <div className="process-step" key={step.number}>
              <div className="process-node">
                <span className="process-number">{step.number}</span>
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
              {index < steps.length - 1 && <div className="process-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps