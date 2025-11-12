import { useEffect, useState } from 'react'
import Modal from './Modal'
import Projects from './Projects'

const Hero = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  useEffect(() => {
    // Bootstrap carousel يعمل تلقائياً من خلال data-bs-ride="carousel"
  }, [])

  const openModal = (type: string) => {
    setActiveModal(type)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      <section className="hero">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/images/_image.webp" className="d-block w-100" alt="Image-Slider One" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/_image (2).webp" className="d-block w-100" alt="Image-Slider Two" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/_image (3).webp" className="d-block w-100" alt="Image-Slider Three" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/download (10).jfif" className="d-block w-100" alt="Image-Slider Four" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/1370159.png" className="d-block w-100" alt="Image-Slider Five" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/image(4).jpg" className="d-block w-100" alt="Image-Slider Six" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/image(5).webp" className="d-block w-100" alt="Image-Slider Seven" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/image(6).jpg" className="d-block w-100" alt="Image-Slider Eight" />
            </div>
          </div>

          <div className="links">
            <div className="icons-links">
              <img src="/assets/icons/github-6980894_640.webp" alt="github" 
                   className="github-icon svg-one" onClick={() => openModal('projects')} />

              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                   className="text-white svg-two" height="35" width="35" onClick={() => openModal('files')}>
                <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"></path>
              </svg>

              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                   className="text-white svg-thre" height="35" width="35" onClick={() => openModal('latex')}>
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"></path>
                <path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.6 11.6 0 0 0-1.997.406 11.3 11.3 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.8.8 0 0 1-.58.029"></path>
              </svg>

              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                   className="text-white svg-four" height="30" width="30" onClick={() => openModal('calendar')}>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"></path>
              </svg>

              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                   className="text-white svg-five" height="35" width="35" onClick={() => openModal('spotify')}>
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"></path>
              </svg>

              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                   className="text-white svg-six" height="40" width="40" onClick={() => openModal('email')}>
                <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* الصفحات المنبثقة */}
      <Modal isOpen={activeModal === 'projects'} onClose={closeModal} title="المشاريع" size="big">
        <Projects />
      </Modal>

      <Modal isOpen={activeModal === 'files'} onClose={closeModal} title="الملفات">
        <div>
          <h4>الملفات</h4>
          <p>هنا يمكنك إضافة محتوى الملفات</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'latex'} onClose={closeModal} title="LaTeX Editor">
        <div>
          <h4>محرر LaTeX</h4>
          <p>هنا يمكنك إضافة محرر LaTeX</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'calendar'} onClose={closeModal} title="التقويم" size="small">
        <div>
          <h4>التقويم</h4>
          <p>التاريخ الحالي: {new Date().toLocaleDateString('ar-EG')}</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'spotify'} onClose={closeModal} title="Spotify">
        <div>
          <h4>Spotify</h4>
          <iframe 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" 
            width="100%" 
            height="400" 
            frameBorder="0" 
            allow="encrypted-media">
          </iframe>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'email'} onClose={closeModal} title="البريد الإلكتروني">
        <div>
          <h4>البريد الإلكتروني</h4>
          <p>nouribrahem207@gmail.com</p>
          <button className="btn btn-primary" onClick={() => window.open('mailto:nouribrahem207@gmail.com')}>
            إرسال إيميل
          </button>
        </div>
      </Modal>
    </>
  )
}

export default Hero