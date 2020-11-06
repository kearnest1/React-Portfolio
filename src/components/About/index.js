import React from 'react';
import selfPhoto from '../../assets/self-photo.jpeg'

function About() {
    return (
        <section className="my-5">
    <div>
        <h1 id="about">Who am I?</h1>
        <img className="self-picture" src={selfPhoto} alt="Kristin Earnest" />
    </div>
    <div className="info">
        <p>
        My name is Kristin Earnest and I am currently an employee at Anthem/Aspire Healthcare. With my current position I have advanced three times and I am now a Care Coordinator III. My daily tasks are scheduling my five providers visits for their weekly follow ups, manage all activity on each individual’s calendar, follow up with each patient after a hospitalization or rehab stay, assist with training new colleagues, and sales experience/enrolling new patients to service. While here at Aspire Healthcare, I was awarded the Aspire for Greatness award by my Clinical Director for my stewardship, team work, compassion and going the extra mile while starting up the Atlanta market. 
       </p>
       <br />
       <p>
       I have eight years in healthcare, starting at Vanderbilt Medical Center and currently in the process of transitioning into the development field. I am currently enrolled in the Vanderbilt University Full-stack Web Development bootcamp and I will be completed November 16, 2020. I have experience with Salesforce from my current position and knowledge in the following languages: JavaScript, HTML, CSS, Node.js, Bootstrap, API, Git, MySQL, React and JQuery.    
       </p>
    </div>
      </section>
      );
    
}

export default About;