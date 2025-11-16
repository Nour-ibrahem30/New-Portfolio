import { useEffect, useState } from "react";
import Modal from "./Modal";
import Projects from "./Projects";
import {
  skillsData,
  experienceData,
  contactData,
  educationData,
  certificatesData,
  coursesData,
  extracurricularData,
} from "../data";

const Hero = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string>("main");
  const [previousSection, setPreviousSection] = useState<string>("main");

  useEffect(() => {
    // Bootstrap carousel works automatically through data-bs-ride="carousel"
  }, []);

  const openModal = (type: string) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const glow = e.currentTarget.querySelector(".mouse-glow") as HTMLElement;
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    }
  };

  return (
    <>
      <section className="hero">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="8000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/images/_image.webp"
                className="d-block w-100"
                alt="Image-Slider One"
                loading="eager"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/_image (2).webp"
                className="d-block w-100"
                alt="Image-Slider Two"
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/_image (3).webp"
                className="d-block w-100"
                alt="Image-Slider Three"
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/download (10).jfif"
                className="d-block w-100"
                alt="Image-Slider Four"
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/1370159.png"
                className="d-block w-100"
                alt="Image-Slider Five"
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/image(4).jpg"
                className="d-block w-100"
                alt="Image-Slider Six"
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/image(5).webp"
                className="d-block w-100"
                alt="Image-Slider Seven"
                loading="lazy"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/image(6).jpg"
                className="d-block w-100"
                alt="Image-Slider Eight"
                loading="lazy"
              />
            </div>
          </div>

          <div className="links">
            <div className="icons-links">
              <div
                className="icon-wrapper"
                onClick={() => openModal("projects")}
                title="Github Projects"
                style={{ cursor: "pointer", width:"50px", height:"50px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", border:"1px solid #ccc" }}
                
              >
                <img
                  src="/assets/icons/github-6980894_640.webp"
                  alt="github"
                  className="github-icon"
                  loading="lazy"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>

              <div
                className="icon-wrapper"
                onClick={() => openModal("files")}
                title="Files & Documents"
                style={{ cursor: "pointer", background: "#f59e0b", padding: "10px", borderRadius: "8px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg
                  stroke="currentColor"
                  fill="#ffffff"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="28"
                  width="28"
                >
                  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"></path>
                </svg>
              </div>

              <div
                className="icon-wrapper"
                onClick={() => openModal("latex")}
                title="Resume PDF"
                style={{ cursor: "pointer", background: "#ef4444", padding: "10px", borderRadius: "8px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg
                  stroke="currentColor"
                  fill="#ffffff"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="28"
                  width="28"
                >
                  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"></path>
                  <path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.6 11.6 0 0 0-1.997.406 11.3 11.3 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.8.8 0 0 1-.58.029"></path>
                </svg>
              </div>

              <div
                className="icon-wrapper"
                onClick={() => openModal("spotify")}
                title="Spotify Playlist"
                style={{ cursor: "pointer", background: "#1DB954", padding: "10px", borderRadius: "8px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg
                  stroke="currentColor"
                  fill="#ffffff"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="28"
                  width="28"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"></path>
                </svg>
              </div>

              <div
                className="icon-wrapper"
                onClick={() => openModal("email")}
                title="Contact Me"
                style={{ cursor: "pointer", background: "#3b82f6", padding: "10px", borderRadius: "8px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg
                  stroke="currentColor"
                  fill="#ffffff"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="28"
                  width="28"
                >
                  <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                  <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Pages */}
      <Modal
        isOpen={activeModal === "projects"}
        onClose={closeModal}
        title="projects"
        size="big"
      >
        <Projects />
      </Modal>

      <Modal
        isOpen={activeModal === "files"}
        onClose={closeModal}
        title="Files"
      >
        <div
          style={{
            padding: "30px",
            background: "linear-gradient(135deg, #1a1a1d 0%, #2b2b2e 100%)",
            minHeight: "400px",
          }}
        >
          {currentSection === "main" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                justifyItems: "center",
              }}
            >
              <div
                onClick={() => {
                  setPreviousSection("main");
                  setCurrentSection("certificates");
                }}
                onMouseMove={handleMouseMove}
                style={{
                  background: "#1f1f22",
                  width: "290px",
                  height: "170px",
                  padding: "25px 20px",
                  borderRadius: "12px",
                  border: "1px solid #333",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(102, 126, 234, 0.4)";
                  const glow = document.createElement("div");
                  glow.className = "mouse-glow";
                  glow.style.cssText =
                    "position: absolute; width: 150px; height: 150px; background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); transition: opacity 0.3s;";
                  e.currentTarget.appendChild(glow);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.2)";
                  const glow = e.currentTarget.querySelector(".mouse-glow");
                  if (glow) glow.remove();
                }}
              >
                <i
                  className="fas fa-certificate"
                  style={{
                    fontSize: "45px",
                    color: "#667eea",
                    marginBottom: "15px",
                    display: "block",
                  }}
                ></i>
                <h4
                  style={{
                    color: "white",
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Certificates
                </h4>
                <p
                  style={{
                    color: "#888",
                    fontSize: "13px",
                    marginTop: "8px",
                    marginBottom: 0,
                  }}
                >
                  View my certifications
                </p>
              </div>
              <div
                onClick={() => {
                  setPreviousSection("main");
                  setCurrentSection("courses");
                }}
                onMouseMove={handleMouseMove}
                style={{
                  background: "#1f1f22",
                  width: "290px",
                  height: "170px",
                  padding: "25px 20px",
                  borderRadius: "12px",
                  border: "1px solid #333",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(245, 87, 108, 0.4)";
                  const glow = document.createElement("div");
                  glow.className = "mouse-glow";
                  glow.style.cssText =
                    "position: absolute; width: 150px; height: 150px; background: radial-gradient(circle, rgba(245, 87, 108, 0.4) 0%, transparent 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); transition: opacity 0.3s;";
                  e.currentTarget.appendChild(glow);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.2)";
                  const glow = e.currentTarget.querySelector(".mouse-glow");
                  if (glow) glow.remove();
                }}
              >
                <i
                  className="fas fa-book"
                  style={{
                    fontSize: "45px",
                    color: "#f5576c",
                    marginBottom: "15px",
                    display: "block",
                  }}
                ></i>
                <h4
                  style={{
                    color: "white",
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Courses
                </h4>
                <p
                  style={{
                    color: "#888",
                    fontSize: "13px",
                    marginTop: "8px",
                    marginBottom: 0,
                  }}
                >
                  Completed courses
                </p>
              </div>
              <div
                onClick={() => {
                  setPreviousSection("main");
                  setCurrentSection("education");
                }}
                onMouseMove={handleMouseMove}
                style={{
                  background: "#1f1f22",
                  width: "290px",
                  height: "170px",
                  padding: "25px 20px",
                  borderRadius: "12px",
                  border: "1px solid #333",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(79, 172, 254, 0.4)";
                  const glow = document.createElement("div");
                  glow.className = "mouse-glow";
                  glow.style.cssText =
                    "position: absolute; width: 150px; height: 150px; background: radial-gradient(circle, rgba(79, 172, 254, 0.4) 0%, transparent 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); transition: opacity 0.3s;";
                  e.currentTarget.appendChild(glow);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.2)";
                  const glow = e.currentTarget.querySelector(".mouse-glow");
                  if (glow) glow.remove();
                }}
              >
                <i
                  className="fas fa-graduation-cap"
                  style={{
                    fontSize: "45px",
                    color: "#4facfe",
                    marginBottom: "15px",
                    display: "block",
                  }}
                ></i>
                <h4
                  style={{
                    color: "white",
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Education
                </h4>
                <p
                  style={{
                    color: "#888",
                    fontSize: "13px",
                    marginTop: "8px",
                    marginBottom: 0,
                  }}
                >
                  Academic background
                </p>
              </div>
              <div
                onClick={() => {
                  setPreviousSection("main");
                  setCurrentSection("skills");
                }}
                onMouseMove={handleMouseMove}
                style={{
                  background: "#1f1f22",
                  width: "290px",
                  height: "170px",
                  padding: "25px 20px",
                  borderRadius: "12px",
                  border: "1px solid #333",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(250, 112, 154, 0.4)";
                  const glow = document.createElement("div");
                  glow.className = "mouse-glow";
                  glow.style.cssText =
                    "position: absolute; width: 150px; height: 150px; background: radial-gradient(circle, rgba(250, 112, 154, 0.4) 0%, transparent 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); transition: opacity 0.3s;";
                  e.currentTarget.appendChild(glow);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.2)";
                  const glow = e.currentTarget.querySelector(".mouse-glow");
                  if (glow) glow.remove();
                }}
              >
                <i
                  className="fas fa-code"
                  style={{
                    fontSize: "45px",
                    color: "#fa709a",
                    marginBottom: "15px",
                    display: "block",
                  }}
                ></i>
                <h4
                  style={{
                    color: "white",
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Skills
                </h4>
                <p
                  style={{
                    color: "#888",
                    fontSize: "13px",
                    marginTop: "8px",
                    marginBottom: 0,
                  }}
                >
                  Technical abilities
                </p>
              </div>
              <div
                onClick={() => {
                  setPreviousSection("main");
                  setCurrentSection("experience");
                }}
                onMouseMove={handleMouseMove}
                style={{
                  background: "#1f1f22",
                  width: "290px",
                  height: "170px",
                  padding: "25px 20px",
                  borderRadius: "12px",
                  border: "1px solid #333",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(99, 179, 237, 0.4)";
                  const glow = document.createElement("div");
                  glow.className = "mouse-glow";
                  glow.style.cssText =
                    "position: absolute; width: 150px; height: 150px; background: radial-gradient(circle, rgba(99, 179, 237, 0.4) 0%, transparent 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); transition: opacity 0.3s;";
                  e.currentTarget.appendChild(glow);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.2)";
                  const glow = e.currentTarget.querySelector(".mouse-glow");
                  if (glow) glow.remove();
                }}
              >
                <i
                  className="fas fa-briefcase"
                  style={{
                    fontSize: "45px",
                    color: "#63b3ed",
                    marginBottom: "15px",
                    display: "block",
                  }}
                ></i>
                <h4
                  style={{
                    color: "white",
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Professional Experience
                </h4>
                <p
                  style={{
                    color: "#888",
                    fontSize: "13px",
                    marginTop: "8px",
                    marginBottom: 0,
                  }}
                >
                  Work history
                </p>
              </div>
              <div
                onClick={() => {
                  setPreviousSection("main");
                  setCurrentSection("extracurricular");
                }}
                onMouseMove={handleMouseMove}
                style={{
                  background: "#1f1f22",
                  width: "290px",
                  height: "170px",
                  padding: "25px 20px",
                  borderRadius: "12px",
                  border: "1px solid #333",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(159, 122, 234, 0.4)";
                  const glow = document.createElement("div");
                  glow.className = "mouse-glow";
                  glow.style.cssText =
                    "position: absolute; width: 150px; height: 150px; background: radial-gradient(circle, rgba(159, 122, 234, 0.4) 0%, transparent 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); transition: opacity 0.3s;";
                  e.currentTarget.appendChild(glow);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.2)";
                  const glow = e.currentTarget.querySelector(".mouse-glow");
                  if (glow) glow.remove();
                }}
              >
                <i
                  className="fas fa-users"
                  style={{
                    fontSize: "45px",
                    color: "#9f7aea",
                    marginBottom: "15px",
                    display: "block",
                  }}
                ></i>
                <h4
                  style={{
                    color: "white",
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Extracurricular Roles
                </h4>
                <p
                  style={{
                    color: "#888",
                    fontSize: "13px",
                    marginTop: "8px",
                    marginBottom: 0,
                  }}
                >
                  Activities & leadership
                </p>
              </div>
            </div>
          )}

          {currentSection === "certificates" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                  padding: "15px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <button
                  onClick={() => setCurrentSection(previousSection)}
                  style={{
                    background:
                      "linear-gradient(135deg, #2a2a2e 0%, #1f1f22 100%)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: "1px solid #444",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(102, 126, 234, 0.4)";
                    e.currentTarget.style.borderColor = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.2)";
                    e.currentTarget.style.borderColor = "#444";
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>
                    Back to{" "}
                    {previousSection === "main" ? "Main" : previousSection}
                  </span>
                </button>
                <h4 style={{ color: "white", margin: 0, fontSize: "20px" }}>
                  <i
                    className="fas fa-certificate"
                    style={{ marginRight: "10px", color: "#667eea" }}
                  ></i>
                  Certificates
                </h4>
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {certificatesData.map((cert, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#2a2a2e",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid #444",
                      }}
                    >
                      <h4
                        style={{
                          color: "white",
                          margin: "0 0 10px",
                          fontSize: "18px",
                        }}
                      >
                        {cert.name}
                      </h4>
                      <p
                        style={{
                          color: "#667eea",
                          margin: "0 0 5px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {cert.issuer}
                      </p>
                      <p
                        style={{
                          color: "#aaa",
                          margin: "0 0 10px",
                          fontSize: "12px",
                        }}
                      >
                        {cert.date}
                      </p>
                      <p
                        style={{
                          color: "#ccc",
                          lineHeight: "1.6",
                          margin: "0",
                        }}
                      >
                        {cert.description}
                      </p>
                      {cert.credentialId && (
                        <p
                          style={{
                            color: "#888",
                            fontSize: "11px",
                            marginTop: "10px",
                          }}
                        >
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentSection === "courses" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                  padding: "15px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <button
                  onClick={() => setCurrentSection(previousSection)}
                  style={{
                    background:
                      "linear-gradient(135deg, #2a2a2e 0%, #1f1f22 100%)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: "1px solid #444",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(245, 87, 108, 0.4)";
                    e.currentTarget.style.borderColor = "#f5576c";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.2)";
                    e.currentTarget.style.borderColor = "#444";
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>
                    Back to{" "}
                    {previousSection === "main" ? "Main" : previousSection}
                  </span>
                </button>
                <h4 style={{ color: "white", margin: 0, fontSize: "20px" }}>
                  <i
                    className="fas fa-book"
                    style={{ marginRight: "10px", color: "#f5576c" }}
                  ></i>
                  Courses
                </h4>
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {coursesData.map((course, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#2a2a2e",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid #444",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                          marginBottom: "10px",
                        }}
                      >
                        <h4
                          style={{
                            color: "white",
                            margin: 0,
                            fontSize: "18px",
                          }}
                        >
                          {course.title}
                        </h4>
                        {course.completed && (
                          <span
                            style={{
                              background:
                                "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                              color: "white",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontSize: "11px",
                              fontWeight: "500",
                            }}
                          >
                            Completed
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          color: "#f5576c",
                          margin: "0 0 5px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {course.provider}
                      </p>
                      <p
                        style={{
                          color: "#aaa",
                          margin: "0 0 10px",
                          fontSize: "12px",
                        }}
                      >
                        {course.duration}
                      </p>
                      <p
                        style={{
                          color: "#ccc",
                          lineHeight: "1.6",
                          marginBottom: "15px",
                        }}
                      >
                        {course.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {course.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            style={{
                              background:
                                "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                              color: "white",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontSize: "11px",
                              fontWeight: "500",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentSection === "education" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                  padding: "15px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <button
                  onClick={() => setCurrentSection(previousSection)}
                  style={{
                    background:
                      "linear-gradient(135deg, #2a2a2e 0%, #1f1f22 100%)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: "1px solid #444",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(79, 172, 254, 0.4)";
                    e.currentTarget.style.borderColor = "#4facfe";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.2)";
                    e.currentTarget.style.borderColor = "#444";
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>
                    Back to{" "}
                    {previousSection === "main" ? "Main" : previousSection}
                  </span>
                </button>
                <h4 style={{ color: "white", margin: 0, fontSize: "20px" }}>
                  <i
                    className="fas fa-graduation-cap"
                    style={{ marginRight: "10px", color: "#4facfe" }}
                  ></i>
                  Education
                </h4>
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {educationData.map((edu, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#2a2a2e",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid #444",
                      }}
                    >
                      <h4
                        style={{
                          color: "white",
                          margin: "0 0 10px",
                          fontSize: "18px",
                        }}
                      >
                        {edu.degree}
                      </h4>
                      <p
                        style={{
                          color: "#4facfe",
                          margin: "0 0 5px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {edu.institution}
                      </p>
                      <p
                        style={{
                          color: "#aaa",
                          margin: "0 0 10px",
                          fontSize: "12px",
                        }}
                      >
                        {edu.period}
                      </p>
                      <p
                        style={{
                          color: "#ccc",
                          lineHeight: "1.6",
                          marginBottom: edu.gpa ? "10px" : "0",
                        }}
                      >
                        {edu.description}
                      </p>
                      {edu.gpa && (
                        <p
                          style={{
                            color: "#10b981",
                            fontSize: "13px",
                            fontWeight: "500",
                            margin: 0,
                          }}
                        >
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentSection === "skills" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                  padding: "15px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <button
                  onClick={() => setCurrentSection(previousSection)}
                  style={{
                    background:
                      "linear-gradient(135deg, #2a2a2e 0%, #1f1f22 100%)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: "1px solid #444",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(250, 112, 154, 0.4)";
                    e.currentTarget.style.borderColor = "#fa709a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.2)";
                    e.currentTarget.style.borderColor = "#444";
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>
                    Back to{" "}
                    {previousSection === "main" ? "Main" : previousSection}
                  </span>
                </button>
                <h4 style={{ color: "white", margin: 0, fontSize: "20px" }}>
                  <i
                    className="fas fa-code"
                    style={{ marginRight: "10px", color: "#fa709a" }}
                  ></i>
                  Skills
                </h4>
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "15px",
                  }}
                >
                  {skillsData.map((skill, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#2a2a2e",
                        padding: "15px",
                        borderRadius: "8px",
                        border: "1px solid #444",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        {skill.icon && (
                          <i
                            className={skill.icon}
                            style={{
                              fontSize: "20px",
                              color: "#667eea",
                              marginRight: "10px",
                            }}
                          ></i>
                        )}
                        <h5
                          style={{
                            color: "white",
                            margin: 0,
                            fontSize: "16px",
                          }}
                        >
                          {skill.name}
                        </h5>
                      </div>
                      <div
                        style={{
                          background: "#1a1a1d",
                          borderRadius: "10px",
                          height: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            height: "100%",
                            width: `${skill.level}%`,
                            borderRadius: "10px",
                            transition: "width 0.3s ease",
                          }}
                        ></div>
                      </div>
                      <p
                        style={{
                          color: "#aaa",
                          fontSize: "12px",
                          margin: "5px 0 0",
                          textAlign: "right",
                        }}
                      >
                        {skill.level}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentSection === "experience" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                  padding: "15px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <button
                  onClick={() => setCurrentSection(previousSection)}
                  style={{
                    background:
                      "linear-gradient(135deg, #2a2a2e 0%, #1f1f22 100%)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: "1px solid #444",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(99, 179, 237, 0.4)";
                    e.currentTarget.style.borderColor = "#63b3ed";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.2)";
                    e.currentTarget.style.borderColor = "#444";
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>
                    Back to{" "}
                    {previousSection === "main" ? "Main" : previousSection}
                  </span>
                </button>
                <h4 style={{ color: "white", margin: 0, fontSize: "20px" }}>
                  <i
                    className="fas fa-briefcase"
                    style={{ marginRight: "10px", color: "#63b3ed" }}
                  ></i>
                  Professional Experience
                </h4>
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {experienceData.map((exp, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#2a2a2e",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid #444",
                      }}
                    >
                      <div style={{ marginBottom: "15px" }}>
                        <h4
                          style={{
                            color: "white",
                            margin: "0 0 5px",
                            fontSize: "18px",
                          }}
                        >
                          {exp.title}
                        </h4>
                        <p
                          style={{
                            color: "#667eea",
                            margin: "0 0 5px",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          {exp.company}
                        </p>
                        <p
                          style={{ color: "#aaa", margin: 0, fontSize: "12px" }}
                        >
                          {exp.period}
                        </p>
                      </div>
                      <p
                        style={{
                          color: "#ccc",
                          lineHeight: "1.6",
                          marginBottom: "15px",
                        }}
                      >
                        {exp.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            style={{
                              background:
                                "linear-gradient(135deg, #63b3ed 0%, #3182ce 100%)",
                              color: "white",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontSize: "11px",
                              fontWeight: "500",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentSection === "extracurricular" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                  padding: "15px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <button
                  onClick={() => setCurrentSection(previousSection)}
                  style={{
                    background:
                      "linear-gradient(135deg, #2a2a2e 0%, #1f1f22 100%)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: "1px solid #444",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(159, 122, 234, 0.4)";
                    e.currentTarget.style.borderColor = "#9f7aea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.2)";
                    e.currentTarget.style.borderColor = "#444";
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  <span>
                    Back to{" "}
                    {previousSection === "main" ? "Main" : previousSection}
                  </span>
                </button>
                <h4 style={{ color: "white", margin: 0, fontSize: "20px" }}>
                  <i
                    className="fas fa-users"
                    style={{ marginRight: "10px", color: "#9f7aea" }}
                  ></i>
                  Extracurricular Roles
                </h4>
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "#1f1f22",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {extracurricularData.map((activity, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#2a2a2e",
                        padding: "20px",
                        borderRadius: "10px",
                        border: "1px solid #444",
                      }}
                    >
                      <h4
                        style={{
                          color: "white",
                          margin: "0 0 10px",
                          fontSize: "18px",
                        }}
                      >
                        {activity.role}
                      </h4>
                      <p
                        style={{
                          color: "#9f7aea",
                          margin: "0 0 5px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {activity.organization}
                      </p>
                      <p
                        style={{
                          color: "#aaa",
                          margin: "0 0 15px",
                          fontSize: "12px",
                        }}
                      >
                        {activity.period}
                      </p>
                      <p
                        style={{
                          color: "#ccc",
                          lineHeight: "1.6",
                          marginBottom: "15px",
                        }}
                      >
                        {activity.description}
                      </p>
                      <div>
                        <strong
                          style={{
                            color: "white",
                            display: "block",
                            marginBottom: "10px",
                            fontSize: "14px",
                          }}
                        >
                          Key Achievements:
                        </strong>
                        <ul
                          style={{
                            color: "#ccc",
                            margin: 0,
                            paddingLeft: "20px",
                          }}
                        >
                          {activity.achievements.map(
                            (achievement, achIndex) => (
                              <li
                                key={achIndex}
                                style={{
                                  marginBottom: "5px",
                                  fontSize: "13px",
                                }}
                              >
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "latex"}
        onClose={closeModal}
        title="Resume"
        size="big"
      >
        <div style={{ padding: "20px", textAlign: "center" }}>
          <iframe
            src="/assets/resume/Last Cv Editng Lts..pdf"
            width="100%"
            height="480px"
            style={{ border: "1px solid #333", borderRadius: "8px" }}
            title="Resume PDF"
            loading="lazy"
          />
          <a
            href="/assets/resume/Last Cv Editng Lts..pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "#007acc",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Open PDF in New Tab
          </a>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "spotify"}
        onClose={closeModal}
        title="Spotify"
        size="big"
      >
        <div style={{ padding: "20px" }}>
          <h4 style={{ color: "white", marginBottom: "15px" }}>My Spotify</h4>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
            width="100%"
            height="480"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
          ></iframe>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "email"}
        onClose={closeModal}
        title="Contact Me"
      >
        <div
          style={{
            padding: "40px 30px",
            textAlign: "center",
            background: "linear-gradient(135deg, #1a1a1d 0%, #2b2b2e 100%)",
          }}
        >
          <h3
            style={{ color: "white", marginBottom: "30px", fontSize: "24px" }}
          >
            Let's Connect
          </h3>

          <div
            style={{
              background: "#1f1f22",
              padding: "25px",
              borderRadius: "12px",
              marginBottom: "20px",
              border: "1px solid #333",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
          >
            <i
              className="fa-solid fa-envelope"
              style={{
                fontSize: "32px",
                color: "#007acc",
                marginBottom: "15px",
                display: "block",
              }}
            ></i>
            <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "8px" }}>
              Email
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "16px",
                marginBottom: "15px",
                fontWeight: "500",
              }}
            >
              {contactData.email}
            </p>
            <button
              onClick={() => window.open(`mailto:${contactData.email}`)}
              style={{
                background: "linear-gradient(135deg, #007acc 0%, #005a9e 100%)",
                color: "white",
                padding: "12px 30px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(0, 122, 204, 0.3)",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <i
                className="fa-solid fa-paper-plane"
                style={{ marginRight: "8px" }}
              ></i>
              Send Email
            </button>
          </div>

          <div
            style={{
              background: "#1f1f22",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #333",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{
                fontSize: "32px",
                color: "#25D366",
                marginBottom: "15px",
                display: "block",
              }}
            ></i>
            <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "8px" }}>
              WhatsApp
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "16px",
                marginBottom: "15px",
                fontWeight: "500",
              }}
            >
              {contactData.phone}
            </p>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${contactData.phone.replace(/[^0-9]/g, "")}`,
                  "_blank"
                )
              }
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                color: "white",
                padding: "12px 30px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <i
                className="fa-brands fa-whatsapp"
                style={{ marginRight: "8px" }}
              ></i>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
