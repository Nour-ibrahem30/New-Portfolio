import { useState, useEffect } from 'react'
import { projectsData } from '../data/projectsData'
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
    console.log('Looking for:', projectName, 'Found:', projectsData[projectName])
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
      <input
        type="text"
        className="projects-search"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="parent-project">
        {filteredProjects.map((project, index) => (
          <div key={index} className="div-project">
            <img 
              src={getProjectImage(project.name)} 
              alt={project.name}
              style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer' }}
              onClick={() => setSelectedProject(project)}
              onError={(e) => {
                e.currentTarget.src = '/assets/images/_image.webp'
              }}
            />
            <p>{project.name}</p>
            <p style={{fontSize: '14px', color: '#ccc', marginBottom: '8px'}}>
              {getProjectData(project.name)?.description || project.description || 'No description'}
            </p>
            <div style={{fontSize: '10px', color: '#666', marginBottom: '8px'}}>
              {getProjectData(project.name)?.technologies?.join(' • ') || project.language || 'Not specified'}
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={`https://nour-ibrahem30.github.io/${project.name}/`} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal 
          isOpen={true} 
          onClose={() => setSelectedProject(null)} 
          title={selectedProject.name}
          size="normal"
        >
          <div className="parent-span">
            <span onClick={() => setSelectedProject(null)}></span>
            <span></span>
            <span></span>
          </div>
          <div style={{padding: '20px'}}>
            <img 
              src={getProjectImage(selectedProject.name)} 
              alt={selectedProject.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }}
              onError={(e) => {
                e.currentTarget.src = '/assets/images/_image.webp'
              }}
            />
            <h4 style={{color: 'white', marginBottom: '10px'}}>{selectedProject.name}</h4>
            <p style={{color: '#ccc', marginBottom: '15px'}}>
              {getProjectData(selectedProject.name)?.description || selectedProject.description || 'No description'}
            </p>
            <div style={{marginBottom: '15px'}}>
              <strong style={{color: 'white'}}>Technologies:</strong>
              <div style={{marginTop: '5px'}}>
                {getProjectData(selectedProject.name)?.technologies?.map((tech, index) => (
                  <span key={index} style={{
                    display: 'inline-block',
                    background: '#333',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    margin: '2px',
                  }}>
                    {tech}
                  </span>
                )) || (
                  <span style={{color: '#888'}}>{selectedProject.language || 'Not specified'}</span>
                )}
              </div>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
              <a 
                href={selectedProject.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: '#007acc',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  textDecoration: 'none'
                }}
              >
                GitHub
              </a>
              <a 
                href={`https://nour-ibrahem30.github.io/${selectedProject.name}/`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: '#28a745',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  textDecoration: 'none'
                }}
              >
                Live Demo
              </a>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Projects