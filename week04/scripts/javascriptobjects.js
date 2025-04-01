let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
      {
        sectionNumber: "001",
        enrolled: 95,
        instructor: "Roberto Diaz Rodriguez"
      },

      { 
        sectionNumber: "002", 
        enrolled: 80, 
        instructor: "Sarah Gobble" }
    ]
  };
  
  function setCourseInformation(course) {
    document.querySelector(
      "#courseName"
    ).innerHTML = `${course.code} - ${course.title}`;
  }
  
  function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNumber}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`
  }
  
  function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
  }
  
  setCourseInformation(aCourse);
  renderSections(aCourse.sections);
  