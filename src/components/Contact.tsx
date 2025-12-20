import React, { useState, useRef } from 'react'
import { contactData } from '../data'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')
  const [showToast, setShowToast] = useState(false)
  const formRef = useRef<HTMLFormElement | null>(null)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 1400)
    } catch (e) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 1500)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 1200)
      return
    }
    const subject = encodeURIComponent(`Contact from ${name || 'Website'}`)
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`)
    const mailto = `mailto:${contactData.email}?subject=${subject}&body=${body}`
    window.location.href = mailto
    setStatus('sent')
    setShowToast(true)
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => { setStatus('idle'); setShowToast(false) }, 1800)
  }

  return (
    <div className="contact-shell" style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div>
          <h3 style={{ color: 'white', margin: 0 }}>Get in touch</h3>
          <p style={{ color: '#aaa', margin: '6px 0 0' }}>{contactData.location}</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href={contactData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
            <i className="fa-brands fa-github" aria-hidden></i>
          </a>
          <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
            <i className="fa-brands fa-linkedin" aria-hidden></i>
          </a>
        </div>
      </div>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 18 }}>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form" aria-label="Contact form" style={{ background: '#1f1f22', padding: 18, borderRadius: 12, border: '1px solid #333' }}>
          <label className="label">Your name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required className="input" />

          <label className="label">Your email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input" />

          <label className="label">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} className="input textarea" />

          <div style={{ display: 'flex', gap: 10, marginTop: 12, alignItems: 'center' }}>
            <button type="submit" className="btn-primary">Send</button>
            <button type="button" onClick={() => { setName(''); setEmail(''); setMessage('') }} className="btn-ghost">Clear</button>
            <div aria-live="polite" style={{ color: status === 'sent' ? '#7ee787' : '#f55', minWidth: 60 }}>{status === 'sent' ? 'Sent' : status === 'error' ? 'Fill fields' : ''}</div>
          </div>
        </form>

        <aside className="contact-aside" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="card">
            <h4>Email</h4>
            <p className="muted">{contactData.email}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => window.open(`mailto:${contactData.email}`)} className="btn-primary outline">Email</button>
              <button onClick={() => copyToClipboard(contactData.email)} aria-label="Copy email" className="btn-ghost">Copy</button>
            </div>
          </div>

          <div className="card">
            <h4>WhatsApp</h4>
            <p className="muted">{contactData.phone}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => window.open(`https://wa.me/${contactData.phone.replace(/[^0-9]/g, '')}`, '_blank')} className="btn-primary outline">Chat</button>
              <button onClick={() => copyToClipboard(contactData.phone)} aria-label="Copy phone" className="btn-ghost">Copy</button>
            </div>
          </div>

          <div className="card">
            <h4>Social</h4>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <a href={contactData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-pill">GitHub</a>
              <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-pill">LinkedIn</a>
            </div>
          </div>
        </aside>
      </div>

      {showToast && (
        <div className="toast" role="status" aria-live="polite">Copied to clipboard</div>
      )}
    </div>
  )
}

export default Contact
