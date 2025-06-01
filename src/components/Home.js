// src/components/Home.js
import React from 'react';


<div className="background-animation"></div>

const technicalSkills = [
  { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'jQuery', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
  { name: 'ASP.NET', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'SQL', img: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Oracle', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'WordPress', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Shopify', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968906.png' },
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Azure', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'GCP', img: '/logo/googlecloud.png' },
  { name: 'Office 365', img: '/logo/office365.jpg' },
  { name: 'Google Charts', img: '/logo/googlecharts.png' },
  { name: 'Draw.io', img: '/logo/drawio.png' }
];

const Home = () => {
  const sectionStyle = {
    backgroundColor: '#111',
    color: '#eee',
    padding: '2rem',
    marginBottom: '2rem',
    borderRadius: '8px',
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
          color: '#fff',
          padding: '6rem 2rem',
          textAlign: 'center',
          borderRadius: 8,
          marginBottom: '2rem',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            marginBottom: '1rem',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: 'fadeSlideIn 1s forwards',
            animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          }}
        >
          Welcome to my portfolio!!!
        </h1>

        <p
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            fontWeight: '500',
            minHeight: '2rem',
            color: '#ddd',
            fontFamily: 'Courier, monospace',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            borderRight: '3px solid #fff',
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
            animation: 'typing 3s steps(20) 1 forwards, blink 0.75s step-end infinite',
            opacity: 0,
            animationDelay: '1.2s',
            animationFillMode: 'forwards',
          }}
        >
          Welcome to My Portfolio!
        </p>

        <button
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#203a43',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(255,255,255,0.3)',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: 'fadeSlideIn 1s forwards',
            animationDelay: '2.6s',
            animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e6e6e6';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          Explore
        </button>

        <style>{`
          @keyframes fadeSlideIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 18ch }
          }
          @keyframes blink {
            50% { border-color: transparent }
          }
          @media (max-width: 768px) {
            #hero h1 {
              font-size: 2.8rem !important;
            }
            #hero p {
              font-size: 1.2rem !important;
            }
            #hero button {
              font-size: 1rem !important;
              padding: 0.8rem 2rem !important;
            }
          }
          @media (max-width: 480px) {
            #hero h1 {
              font-size: 2.4rem !important;
            }
            #hero p {
              font-size: 1rem !important;
            }
            #hero button {
              font-size: 0.9rem !important;
              padding: 0.7rem 1.8rem !important;
            }
          }
        `}</style>
      </section>

      {/* Career Objective */}
      <section id="career-objective" style={sectionStyle}>
        <h2>Career Objective</h2>
        <p style={{ lineHeight: '1.6', fontWeight: '500', fontSize: '1.1rem', color: '#ddd' }}>
          Bachelor of Information Technology graduate from Melbourne Polytechnic with hands-on industry project experience. Proficient in Python, WordPress, HTML5, CSS, and JavaScript. Former IT Software Developer Intern at 10th Dan, Melbourne and Webpage Developer Intern at ChakraIO, Melbourne. Currently leveraging strong leadership and customer service skills as a Multi-Site Store Manager with over five years of experience. Eager to advance my career in IT by further developing technical expertise and contributing to impactful projects.
        </p>
      </section>


      {/* Technical Skills */}
      <section id="technical-skills" style={sectionStyle}>
        <h2>Technical Skills</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          {technicalSkills.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                textAlign: 'center',
                width: 100,
                color: '#eee',
                cursor: 'default',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animation: 'fadeSlideUp 0.7s forwards',
                animationDelay: `${0.15 * i}s`,
                opacity: 0,
                borderRadius: '10px',
                padding: '0.5rem',
              }}
              title={skill.name}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                style={{ width: 70, height: 70, objectFit: 'contain', marginBottom: '0.5rem' }}
              />
              <div style={{ fontSize: '1rem', fontWeight: '600' }}>{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" style={sectionStyle}>
        <h2>Education</h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'fadeSlideIn 0.8s forwards',
            opacity: 0,
          }}
        >
          <div style={{ maxWidth: 400, textAlign: 'center', color: '#eee' }}>
            <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>
              Bachelor of Information Technology (Software Development)
            </p>
            <p>Melbourne Polytechnic, July 2019 – July 2022</p>
          </div>
          <img
            src="/logo/mp.jpg"
            alt="Melbourne Polytechnic"
            style={{
              height: 80,
              borderRadius: 10,
              objectFit: 'contain',
              boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            title="Melbourne Polytechnic"
          />
        </div>
      </section>


      {/* Professional Development */}
      <section id="professional-development" style={sectionStyle}>
        <h2>Professional Development</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {[
            { name: 'Professional Year (Oct 2022 – Apr 2023), Performance Education', img: '/logo/pe.png', alt: 'Performance Education' },
            { name: 'AWS Cloud Practitioner Essentials, AWS Training', img: '/logo/aws.png', alt: 'AWS' },
            { name: 'Google Professional Cloud Developer Certificate', img: '/logo/gcpd.png', alt: 'Google Cloud' },
            { name: 'Business Analysis and Process Management, Coursera', img: '/logo/c.png', alt: 'Coursera' },
            { name: 'Marketing Tools: Social Media, LinkedIn Learning', img: '/logo/linkedin.png', alt: 'LinkedIn Learning' },
            { name: 'Software Development Analytics Certification, SAS', img: '/logo/sas.png', alt: 'SAS' },
            { name: 'Web Page Development Certification, Alison', img: '/logo/alison.jpg', alt: 'Alison' },
            { name: 'Database Foundations, LinkedIn Learning', img: '/logo/linkedin.png', alt: 'LinkedIn Learning' },
            { name: 'Salesforce Developer AI Introduction, Alison', img: '/logo/alison.jpg', alt: 'Alison' },
            { name: 'Diploma in HTML5, CSS3, JavaScript and Python, Alison', img: '/logo/alison.jpg', alt: 'Alison' },
          ].map((cert, i) => (
            <div
              key={cert.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#222',
                borderRadius: '8px',
                padding: '1rem 1.5rem',
                width: '320px',
                boxShadow: '0 0 10px rgba(255,255,255,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
                opacity: 0,
                animation: 'fadeSlideUp 0.7s forwards',
                animationDelay: `${0.15 * i}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.1)';
              }}
              title={cert.name}
            >
              <img
                src={cert.img}
                alt={cert.alt}
                style={{ height: 50, marginRight: '1rem', objectFit: 'contain', borderRadius: 4 }}
              />
              <span style={{ fontSize: '1rem', color: '#eee', fontWeight: '600' }}>{cert.name}</span>
            </div>
          ))}
        </div>
      </section>


      {/* Work Experience */}
      <section id="work-experience" style={sectionStyle}>
        <h2>Work Experience</h2>

        {[
          {
            logo: '/logo/cio.png',
            title: 'Web Developer (Internship)',
            company: 'ChakraIO',
            dates: 'July 2024 – Current, Melbourne',
            description: [
              'Customize WordPress themes and templates to create visually appealing and user-friendly websites.',
              'Develop and modify WordPress plugins to enhance website functionality.',
              'Perform website maintenance, including troubleshooting bugs and applying security updates.',
              'Collaborate with designers and content creators to integrate multimedia content.',
              'Assist in testing website responsiveness and cross-browser compatibility.',
            ],
          },
          {
            logo: '/logo/10thdan.jpg',
            title: 'AI Based Social Media Plugin Developer (Internship)',
            company: '10th Dan',
            dates: 'May 2023 – Aug 2023, Melbourne',
            description: [
              'Developed Instagram API plugin using Python and VS Code.',
              'Integrated API, developed algorithms, testing, debugging.',
              'Managed project schedules and documented workflows.',
            ],
          },
          {
            logo: '/logo/en.jpg',
            title: 'Project Intern & Admin Assistant',
            company: 'Enablement Nepal',
            dates: 'Jun 2018 – Nov 2018, Kathmandu',
            description: [
              'Webpage designing of the organisation.',
              'Worked with excel sheets containing huge amounts of data.',
              'Data entry using excel and SPSS.',
              'Management of past projects and report writing.',
              'Assisted in handling of new projects and helped in making a framework for the generation of project files.',
              'Scheduled meetings, discussions, seminars, and workshops for over 20 people.',
              'Assisted with the handling of IT section of the organization.',
            ],
          },
          {
            logo: '/logo/fossil.jpg',
            title: 'Multi-Site Store Manager',
            company: 'Fossil Watches Australia',
            dates: 'Oct 2022 – June 2025, Melbourne',
            description: [
              'Responsible for opening and closing of the store.',
              'Generating market recaps, conference calls, employee productivity, traffic by hours reports to analyse and understand the business and the store.',
              'Delegating tasks and management of sub-tasks.',
              'Setting up Visual Merchandising.',
              'Providing customer service.',
              'Working as a supportive and reliable team member to achieve all the KPI goals.',
              'Organising workspace.',
              'Reporting daily and weekly sales with effective communication channels within the company.',
              'Handling cash and over 30 transactions daily.',
              'Promoting premium products through direct customer interaction.',
              'Answering close to 20 customer enquiries through phone calls.',
            ]

          },
        ].map((job, index) => (
          <div
            key={job.title}
            style={{
              display: 'flex',
              gap: '1.5rem',
              backgroundColor: '#222',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              alignItems: 'center',
              boxShadow: '0 0 15px rgba(255,255,255,0.05)',
              opacity: 0,
              animation: 'fadeSlideUp 0.7s forwards',
              animationDelay: `${0.15 * index}s`,
              cursor: 'default',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.05)';
            }}
            title={`${job.title} at ${job.company}`}
          >
            <img
              src={job.logo}
              alt={job.company}
              style={{
                height: 80,
                width: 80,
                borderRadius: '10px',
                objectFit: 'contain',
                boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                flexShrink: 0,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{ color: '#eee' }}>
              <h3 style={{ margin: 0, fontWeight: '700' }}>{job.title}</h3>
              <p style={{ margin: '0.25rem 0', fontStyle: 'italic', color: '#bbb' }}>
                {job.company} — {job.dates}
              </p>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                {job.description.map((line, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem', lineHeight: 1.4 }}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Add this animation style in your existing <style> block */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* References */}
      <section id="references" style={sectionStyle}>
        <h2>References</h2>
        <p><strong>Brandy Sahagun</strong> - Area Manager, Fossil Australia</p>
        <p>Email: bsahagun@fossil.com | Phone: 0434582952</p>

        <p><strong>Sailendra Kafle</strong> - Founder, Chakraio</p>
        <p>Phone: 0410791105</p>
      </section>

      {/* Global Animations */}
      <style>{`
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
