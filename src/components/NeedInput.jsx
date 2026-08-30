import { useState, useRef } from 'react'
import './NeedInput.css'

const examplePrompts = [
  'I need help paying my college fees',
  'I am looking for a scholarship',
  'I need support for my family',
  'I want to start a small business',
]

const MOCK_RESPONSE =
  "Thanks. I can help you find schemes that may be relevant to your situation. I'll ask a few questions to understand your profile before showing you suitable options."

function NeedInput() {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([])
  const [isThinking, setIsThinking] = useState(false)
  const textareaRef = useRef(null)

  const handleSubmit = () => {
    const trimmed = inputValue.trim()
    if (!trimmed || isThinking) return

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
    setInputValue('')
    setIsThinking(true)

    // Mock response only — no real AI/API call yet.
    // Swap this setTimeout block for a real API call later.
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'sahay', text: MOCK_RESPONSE }])
      setIsThinking(false)
    }, 900)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleChipClick = (prompt) => {
    setInputValue(prompt)
    textareaRef.current?.focus()
  }

  const hasConversation = messages.length > 0

  return (
    <section className="need-section" id="find-schemes">
      <div className="container">
        <div className="need-header">
          <h2 className="need-heading">Tell us what you need</h2>
          <p className="need-subheading">
            Describe your situation in your own words — no scheme names or
            government terms required. SAHAY will ask a few follow-up
            questions to understand your profile before matching you to
            relevant schemes.
          </p>
        </div>

        <div className="need-panel">
          {hasConversation && (
            <div className="need-messages" aria-live="polite">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`need-message need-message-${message.role}`}
                >
                  <span className="need-message-label">
                    {message.role === 'user' ? 'You' : 'SAHAY'}
                  </span>
                  <p className="need-message-text">{message.text}</p>
                </div>
              ))}

              {isThinking && (
                <div className="need-message need-message-sahay">
                  <span className="need-message-label">SAHAY</span>
                  <div className="need-thinking">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="need-input-row">
            <textarea
              ref={textareaRef}
              className="need-textarea"
              placeholder="e.g. I am a student looking for financial assistance for my education."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
            />
            <button
              className="btn btn-primary need-send-btn"
              onClick={handleSubmit}
              disabled={!inputValue.trim() || isThinking}
            >
              {hasConversation ? 'Send' : 'Continue'}
            </button>
          </div>

          <div className="need-chips">
            {examplePrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="need-chip"
                onClick={() => handleChipClick(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedInput