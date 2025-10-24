import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Master of Computer Applications (MCA)</h3>
          <p className="period">2021</p>
          <p className="institution">Nandha Engineering College, Erode</p>
          <p>CGPA: 8.1</p>
        </div>
        <div className="timeline-item">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p className="period">2018</p>
          <p className="institution">Nandha Arts and Science College, Erode</p>
          <p>CGPA: 6.1</p>
        </div>
      </div>
    </section>
  );
};

export default Education;