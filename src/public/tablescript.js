function maketable() {
    var co_data_request = new XMLHttpRequest();
    co_data_request.open('GET', 'http://mssapie.it.pointpark.edu:3000/students_has_course_offering');
    co_data_request.send();
    //after loading the variable data, create calls to the conversion and display functions
    co_data_request.onload = function () {
        var cdata = JSON.parse(co_data_request.responseText);
        console.log(cdata);
        displayTable(cdata);
        }
    //   var tdata = JSON.parse(st_data_request.responseText);
}

function displayTable(data)
{
    var table = document.getElementById("classtable");
    var codeNode = "Course Code";
    var nameNode = "Course Name";
    var locNode = "Class Location";
    var timeNode = "Time of Class";
    var profNode = "Professor Name";
    var students_has_course_offering = data.data;

    $("#classtable").empty();

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < 5; i++)
    {
        var headerCell = document.createElement("th");
        var linkNode = document.createElement("a");
        switch(i)
        {
          case 0:
          headerCell.innerHTML = codeNode;
          break;
          case 1:
          headerCell.innerHTML = nameNode;
          break;
          case 2:
            linkNode.href='map.html';
          linkNode.innerText = locNode;
          headerCell.appendChild(linkNode);
         // headerCell.setAttribute('href',"map.html");
          break;
          case 3:
          headerCell.innerHTML = timeNode;
          break;
          case 4:
          headerCell.innerHTML = profNode;
          break;
        }
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 0; i < students_has_course_offering.length; i++)
    {
      //var tableRow = document.createElement("tr");

      row = table.insertRow(-1);
      for (var j = 0; j < 5; j++)
      {
        var tableCell = row.insertCell(-1);
        switch(j)
        {
          case 0:
          tableCell.innerHTML = students_has_course_offering[i].Course_Offering_Code;
          console.log("in switch 0: " + students_has_course_offering[i].Course_Offering_Code);
          break;
          case 1:
          tableCell.innerHTML = students_has_course_offering[i].Courses_CourseName;
          console.log("in switch 1: " + students_has_course_offering[i].Courses_CourseName);
          break;
          case 2:
          tableCell.innerHTML = students_has_course_offering[i].ClassLocation;
          console.log("in switch 2: " + students_has_course_offering[i].ClassLocation);
          break;
          case 3:
          tableCell.innerHTML = students_has_course_offering[i].ClassTime;
          console.log("in switch 3: " + students_has_course_offering[i].ClassTime);
          break;
          case 4:
          tableCell.innerHTML = students_has_course_offering[i].ClassProfessor;
          console.log("in switch 4: " + students_has_course_offering[i].ClassProfessor);
          break;
        }
      row.appendChild(tableCell);
      }
    }
    {
        //var tableRow = document.createElement("tr");

        row = table.insertRow(+1);
        for (var k = 0; k < 5; k++) {
            var tableCell = row.insertCell(+1);
            switch (k) {
                case 0:
                    tableCell.innerHTML = students_has_course_offering[i].Course_Offering_Code;
                    console.log("in switch 0: " + students_has_course_offering[i].Course_Offering_Code);
                    break;
                case 1:
                    tableCell.innerHTML = students_has_course_offering[i].Courses_CourseName;
                    console.log("in switch 1: " + students_has_course_offering[i].Courses_CourseName);
                    break;
                case 2:
                    tableCell.innerHTML = students_has_course_offering[i].ClassLocation;
                    console.log("in switch 2: " + students_has_course_offering[i].ClassLocation);
                    break;
                case 3:
                    tableCell.innerHTML = students_has_course_offering[i].ClassTime;
                    console.log("in switch 3: " + students_has_course_offering[i].ClassTime);
                    break;
                case 4:
                    tableCell.innerHTML = students_has_course_offering[i].ClassProfessor;
                    console.log("in switch 4: " + students_has_course_offering[i].ClassProfessor);
                    break;
            }
            row.appendChild(tableCell);
        }
    }
}

function showDropdown() {
  document.getElementById('courses').classList.toggle("show");
}

// Closes the dropdown if user clicks outside of dropdown menu
window.onclick = function(event) {
// Stops the dropdown from closing if you click inside it
document.getElementById("courses").addEventListener('click', function (event) {
  event.stopPropagation();
});
  if (!event.target.matches('.dropbutton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}