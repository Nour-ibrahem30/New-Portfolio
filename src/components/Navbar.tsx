import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('ar-EG', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('nouribrahem207@gmail.com')
      .then(() => alert('تم نسخ الإيميل بنجاح!'))
  }

  const copyPhone = () => {
    navigator.clipboard.writeText('+1234567890')
      .then(() => alert('تم نسخ رقم الهاتف بنجاح!'))
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="fa-brands fa-apple fs-4 me-2"></i>
          Nour Ibrahem
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse align-items-center" id="navbarTogglerDemo03">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="fileDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">File</a>
              <ul className="dropdown-menu text-start" aria-labelledby="fileDropdown">
                <li>
                  <a className="dropdown-item Resume" href="/assets/resume/Last Cv Editng Lts..pdf" target="_blank">
                    <i className="fa-solid fa-file me-2"></i>Resume
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://github.com/Nour-ibrahem30?tab=repositories" target="_blank">
                    <i className="fa-solid fa-folder-open me-2"></i>Projects
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="editDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">Edit</a>
              <ul className="dropdown-menu text-start" aria-labelledby="editDropdown">
                <li>
                  <a className="dropdown-item" href="#" onClick={copyEmail}>
                    <i className="fa-solid fa-envelope me-2"></i>Copy Email
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={copyPhone}>
                    <i className="fa-solid fa-phone me-2"></i>Copy Phone
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="goDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">Go</a>
              <ul className="dropdown-menu text-start" aria-labelledby="goDropdown">
                <li>
                  <a className="dropdown-item text-start" href="https://github.com/Nour-ibrahem30" target="_blank">
                    <i className="fa-brands fa-github me-2"></i>Github
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-start" href="https://www.linkedin.com/in/nour-ibrahem-499172346/" target="_blank">
                    <i className="fa-brands fa-linkedin me-2"></i>Linkedin
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-start" href="mailto:nouribrahem207@gmail.com">
                    <i className="fa-solid fa-envelope me-2"></i>Email
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="helpDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">Help</a>
              <ul className="dropdown-menu text-start" aria-labelledby="helpDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-circle-question me-2"></i>Show Help
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-chalkboard-user me-2"></i>Show Tutorial
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="icons">
          <i className="fa-solid fa-wifi fs-6 me-3" title="WiFi Connected"></i>
          <i className="fa-solid fa-magnifying-glass fs-6 me-3" title="Search"></i>
          <i className="fa-solid fa-code fs-6 vscode-icon" title="VS Code" style={{color: '#007ACC'}}></i>
          <span className="time fs-6 ms-2">{currentTime}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar