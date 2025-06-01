// src/components/SectionModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Icons for technical skills (replace URLs with your preferred icons)
const skillImages = {
  html5: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
  css3: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  javascript: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  java: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  python: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  wordpress: 'https://cdn-icons-png.flaticon.com/512/174/174881.png',
  aws: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
  azure: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
  googlecloud: 'https://cdn-icons-png.flaticon.com/512/270/270798.png',
};

const contentBySection = {
  hero: {
    title: "Welcome",
    body: "Welcome to Swarnim's Portfolio!",
    imgSrc: null,
  },
  'career-objective': {
    title: 'Career Objective',
    body: (
      <>
        Graduate in Bachelor of Information Technology from Melbourne Polytechnic with industry-based project experience.
        Experienced in Python, WordPress, HTML5, CSS, and JavaScript.
        Previously an IT Software Developer intern at 10th Dan, Melbourne.
        Currently a Multi-Site Store Manager with 5 years customer service experience.
        Seeking to develop an IT career and skillset.
      </>
    ),
    imgSrc: null,
  },
  'technical-skills': {
    title: 'Technical Skills',
    body: (
      <>
        <p>Here are some of my key technical skills:</p>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {Object.entries(skillImages).map(([key, url]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <img 
                src={url} 
                alt={key} 
                style={{ width: 50, height: 50, objectFit: 'contain' }}
              />
              <p style={{ color: '#eee', fontSize: '0.8rem', marginTop: '5px', textTransform: 'capitalize' }}>{key}</p>
            </div>
          ))}
        </div>
      </>
    ),
    imgSrc: null,
  },
  education: {
    title: 'Education',
    body: (
      <>
        <p><strong>Bachelor of Information Technology (Software Development)</strong></p>
        <p>Melbourne Polytechnic, July 2019 – July 2022</p>
      </>
    ),
    imgSrc: null,
  },
  'professional-development': {
    title: 'Professional Development',
    body: (
      <ul style={{ color: '#eee' }}>
        <li>Professional Year (Oct 2022 – Apr 2023), Performance Education</li>
        <li>AWS Cloud Practitioner Essentials, AWS Training</li>
        <li>Google Professional Cloud Developer Certificate</li>
        <li>Business Analysis and Process Management, Coursera</li>
        <li>Marketing Tools: Social Media, LinkedIn Learning</li>
        <li>Software Development Analytics Certification, SAS</li>
        <li>Web Page Development Certification, Alison</li>
        <li>Database Foundations, LinkedIn Learning</li>
        <li>Salesforce Developer AI Introduction, Alison</li>
        <li>Diploma in HTML5, CSS3, JavaScript and Python, Alison</li>
      </ul>
    ),
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/190/190411.png', // example certificate icon
  },
  'work-experience': {
    title: 'Work Experience',
    body: (
      <>
        <h5>AI Based Social Media Plugin Developer (Internship) - 10th Dan</h5>
        <p>May 2023 – Aug 2023, Melbourne</p>
        <ul>
          <li>Developed Instagram API plugin using Python and VS Code.</li>
          <li>Integrated API, developed algorithms, testing, debugging.</li>
          <li>Managed project schedules and documented workflows.</li>
        </ul>

        <h5>Project Intern & Admin Assistant - Enablement Nepal</h5>
        <p>Jun 2018 – Nov 2018, Kathmandu</p>
        <ul>
          <li>Webpage design, data entry, project management assistance.</li>
          <li>Handled IT section support and scheduled workshops.</li>
        </ul>

        <h5>Multi-Site Store Manager - Fossil Watches Australia</h5>
        <p>Oct 2022 – Present, Melbourne</p>
        <ul>
          <li>Store opening/closing, sales reporting, employee management.</li>
          <li>Customer service, cash handling, visual merchandising.</li>
        </ul>
      </>
    ),
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', // example company icon
  },
  references: {
    title: 'References',
    body: (
      <>
        <p><strong>Brandy Sahagun</strong> - Area Manager, Fossil Australia</p>
        <p>Email: bsahagun@fossil.com | Phone: 0431507535</p>
        <p><strong>Sujan Lama Tamang</strong> - Professional Year Colleague</p>
        <p>Email: lamasujan221@gmail.com | Phone: 0424142435</p>
      </>
    ),
    imgSrc: null,
  }
};

const SectionModal = ({ sectionId, onClose }) => {
  if (!sectionId) return null;

  const content = contentBySection[sectionId];

  return (
    <Modal
      show={!!sectionId}
      onHide={onClose}
      size="lg"
      centered
      contentClassName="custom-modal-content"
    >
      <Modal.Header closeButton style={{ borderBottom: '1px solid #444' }}>
        <Modal.Title style={{ color: '#fff' }}>{content?.title || 'Section'}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: '#eee' }}>
        {content?.imgSrc && (
          <img
            src={content.imgSrc}
            alt={content.title}
            style={{ width: '100%', marginBottom: '20px', borderRadius: '8px' }}
          />
        )}
        <div>{content?.body}</div>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: '1px solid #444' }}>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SectionModal;
