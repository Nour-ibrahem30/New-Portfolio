import { useState, useEffect } from 'react'
import { projectsData } from '../data/projects/projects'
import Modal from './Modal'

interface Project {
  name: string
  description: string
  html_url: string
  language: string
  homepage?: string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const getProjectData = (projectName: string) => {
    return projectsData[projectName] || null
  }

  useEffect(() => {
    fetch('https://api.github.com/users/Nour-ibrahem30/repos')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error:', error))
  }, [])

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getProjectImage = (projectName: string) => {
    return `https://api.microlink.io/?url=https://nour-ibrahem30.github.io/${projectName}/&screenshot=true&meta=false&embed=screenshot.url`
  }

  return (
    <>
      <div style={{padding: '20px', background: 'linear-gradient(135deg, #1a1a1d 0%, #2b2b2e 100%)', minHeight: '100%'}}>
        <input
          type="text"
          className="projects-search"
          placeholder="🔍 Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 20px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #333',
            background: '#1f1f22',
            color: 'white',
            fontSize: '14px',
            outline: 'none',
            transition: 'all 0.3s'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#667eea'
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.2)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#333'
            e.currentTarget.style.boxShadow = 'none'
          }}
        />
        <div
          className="parent-project"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            width: '100%',
            boxSizing: 'border-box',
            padding: '0 10px'
          }}
        >
        {filteredProjects.map((project, index) => (
          <div
            key={project.name || index}
            className="div-project"
            style={{
              width: '100%',
              minHeight: '360px',
              background: 'var(--card-bg, #161616)',
              borderRadius: 12,
              padding: 16,
              boxSizing: 'border-box',
              boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              userSelect: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(102, 126, 234, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.4)'
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div style={{ width: '100%', height: 180, overflow: 'hidden', borderRadius: 8 }}>
              <img
                src={getProjectImage(project.name)}
                alt={project.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/assets/images/_image.webp'
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0, color: '#fff', fontSize: 18, lineHeight: '1.1' }}>{project.name}</h4>
              <p style={{ margin: '8px 0 -28px', color: '#cfcfcf', fontSize: 13, minHeight: 40 }}>
                {project.description || 'No description'}
              </p>
            </div>

            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontSize: 13,
                  flex: 1
                }}
              >
                GitHub
              </a>
              <a
                href={project.homepage || `https://nour-ibrahem30.github.io/${project.name}/`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontSize: 13,
                  flex: 1
                }}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>

      {selectedProject && (
        <Modal 
          isOpen={true} 
          onClose={() => setSelectedProject(null)} 
          title={selectedProject.name}
          size="normal"
        >
          <div style={{padding: '20px', maxHeight: '500px', overflowY: 'auto'}}>
            <img 
              src={getProjectImage(selectedProject.name)} 
              alt={selectedProject.name}
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
              onError={(e) => {
                e.currentTarget.src = '/assets/images/_image.webp'
              }}
            />
            <div style={{marginBottom: '20px'}}>
              <h4 style={{color: 'white', marginBottom: '10px', fontSize: '20px'}}>{selectedProject.name}</h4>
            </div>
            <div style={{marginBottom: '20px', padding: '15px', background: '#1f1f22', borderRadius: '8px', border: '1px solid #333'}}>
              <strong style={{color: 'white', display: 'block', marginBottom: '10px', fontSize: '14px'}}>Technologies:</strong>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {getProjectData(selectedProject.name)?.technologies?.map((tech, index) => (
                  <span key={index} style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '500',
                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                  }}>
                    {tech}
                  </span>
                )) || (
                  <span style={{color: '#888', fontSize: '13px'}}>{selectedProject.language || 'Not specified'}</span>
                )}
              </div>
            </div>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center', width: '340px', margin: '0 auto 20px'}}>
              <a 
                href={selectedProject.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  boxShadow: '0 2px 10px rgba(102, 126, 234, 0.3)',
                  transition: 'transform 0.2s',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <i className="fab fa-github" style={{marginRight: '6px'}}></i>
                GitHub
              </a>
              <a 
                href={`https://nour-ibrahem30.github.io/${selectedProject.name}/`}
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '500',
                  boxShadow: '0 2px 10px rgba(245, 87, 108, 0.3)',
                  transition: 'transform 0.2s',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <i className="fas fa-external-link-alt" style={{marginRight: '6px'}}></i>
                Live Demo
              </a>
            </div>
            <div style={{padding: '15px', background: '#1f1f22', borderRadius: '8px', border: '1px solid #333'}}>
              <p style={{color: '#ccc', lineHeight: '1.6', fontSize: '14px', margin: 0}}>
                {getProjectData(selectedProject.name)?.description || selectedProject.description || 'No description'}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Projects