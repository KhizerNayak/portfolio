import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import '../cssFold/projects.css'; // Ensure the correct path to the CSS file
import img1 from '../asset/SSadminDash1.png';
import img2 from '../asset/ssDash2.png';
import img3 from '../asset/project-img3.png';
import hotel from '../asset/Screenshot.png';
import img4 from '../asset/diary-968592_1280.jpg'
// import img5 from '../asset/diary-968592_1280.jpg'

export const ProjectsSection = () => {
  const [key, setKey] = useState('first'); // Initial tab key is 'first'

  // Project data for each tab
  const projects = {
    first: [
      { title: 'Admin Dashboard 1', description: 'An admin dashboard is a comprehensive interface that allows administrators to monitor, manage, and analyze key aspects of their application or system. It typically features a variety of widgets and tools for tracking metrics, user activities, and system health, providing real-time insights and controls. This centralized platform enables efficient decision-making and streamlined administrative tasks', image: img1, url: 'https://khizernayak.github.io/AdminDashB/' },
      { title: 'Admin Dashboard 2', description: 'An admin dashboard is a comprehensive interface that allows administrators to monitor, manage, and analyze key aspects of their application or system. It typically features a variety of widgets and tools for tracking metrics, user activities, and system health, providing real-time insights and controls. This centralized platform enables efficient decision-making and streamlined administrative tasks', image: img2, url: 'https://khizernayak.github.io/AdminDB2/' },
    ],
    second: [
      { title: 'Hotel Management System ', description: 'Manage your hotel efficiently with our PHP-based Hotel Management System. This system streamlines check-in, room bookings, and real-time room status updates, making it easy for customers and staff. .', image: hotel ,url: 'https://hotel-management.yahya.in'},
      { title: 'Student Result System', description: ' The Student Result Management System is a comprehensive project aimed at efficiently managing student results, important events, and notices.', image: img2,url: 'https://www.student-result.yahya.in' },
    ],
    third: [
      { title: 'Data Analysis Project 1', description: 'Description 1', image: img3 },
      { title: 'Data Analysis Project 2', description: 'Description 2', image: img4 },
    ],
    fourth: [
      { title: 'Automation Project 1', description: 'Description 1', image: img4 },
      { title: 'Automation Project 2', description: 'Description 2', image: img4 },
    ],
  };

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <p>Check out some of my recent work.</p>

      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="pills" className="nav-pills">
          <Nav.Item>
            <Nav.Link eventKey="first">UI/UX & Web Design</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Full Stack Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Data Analyst</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Automation Project</Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          <Tab.Content>
            {key === 'first' && (
              <Tab.Pane eventKey="first" className="tab-pane">
                {projects.first.map((project, index) => (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                ))}
              </Tab.Pane>
            )}
            {key === 'second' && (
              <Tab.Pane eventKey="second" className="tab-pane">
                {projects.second.map((project, index) => (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                ))}
              </Tab.Pane>
            )}
            {key === 'third' && (
              <Tab.Pane eventKey="third" className="tab-pane">
                {projects.third.map((project, index) => (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                ))}
              </Tab.Pane>
            )}
            {key === 'fourth' && (
              <Tab.Pane eventKey="fourth" className="tab-pane">
                {projects.fourth.map((project, index) => (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                ))}
              </Tab.Pane>
            )}
          </Tab.Content>
        </div>
      </Tab.Container>
    </section>
  );
};
