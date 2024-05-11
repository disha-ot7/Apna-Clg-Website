document.addEventListener('DOMContentLoaded', function() {
    const courses = [
      { title: 'Physics(12)', instructor: 'Akshay Kumar', link: 'https://youtu.be/Ru_aOZOBIlI?si=hw_MEUknB7DTJgPc' },
      { title: 'Python Programming', instructor: 'Dharmendra Chauhan', link: 'https://youtu.be/f2PMfGfBOPo?si=rnqYC3kLZ1eq7SG1' },
      { title: 'Chemistry(12)', instructor: 'Sumeet Kataria', link: 'https://youtu.be/JIpSHc2ZNQg?si=0uJID_MaPmuUPMz0' },
      { title: 'Mathematics(12)', instructor: 'Mayank Saini', link: 'https://youtu.be/r7LC0KLmMI0?si=930WKAvKkwS1orNf' },
      { title: 'Math11(JEE/NEET)', instructor: 'Dharmendra Chouhan', link: 'https://www.youtube.com/live/dVHOJH-lo54?si=O8uoGGGsM0SJn5hN' },
      { title: 'Phyics11(JEE/NEET)', instructor: 'Gagan Garg', link: 'https://www.youtube.com/live/235j59nlNn0?si=G5QTeXZyxVvnpGyO' }
    ];
  
    const coursesContainer = document.getElementById('courses');
  
    courses.forEach(course => {
      const courseElement = document.createElement('div');
      courseElement.classList.add('course');
      courseElement.innerHTML = `
        <h2>${course.title}</h2>
        <p>Instructor: ${course.instructor}</p>
        <a href="${course.link}" target="_blank">Learn More</a>
      `;
      coursesContainer.appendChild(courseElement);
    });
  });
  