function maketable() {
    var co_data_request = new XMLHttpRequest();
    co_data_request.open('GET', 'http://rfzeitl.it.pointpark.edu:3000/courses');
    co_data_request.send();
    //after loading the variable data, create calls to the conversion and display functions

    co_data_request.onload = function () {
        var cdata = JSON.parse(co_data_request.responseText);
        console.log(cdata);
        // console.log("Student ID is " + tdata.data[0].StudentID);
        displayTable(cdata);
    }
    //   var tdata = JSON.parse(st_data_request.responseText);
}

function displayTable(data)
{
    var table = document.getElementById("classtable");
    var sectNode = "Class Name";
    var nameNode = "Class Section";
    var timeNode = "Class Time";
    var courses = data.data;
    var cols = Object.getOwnPropertyNames(courses[0]).length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < cols; i++)
    {
        var headerCell = document.createElement("th");
        switch(i)
        {
          case 0:
          headerCell.innerHTML = sectNode;
          break;
          case 1:
          headerCell.innerHTML = nameNode;
          break;
          case 2:
          headerCell.innerHTML = timeNode;
          break;
        }
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 0; i < courses.length; i++)
    {
      //var tableRow = document.createElement("tr");

      row = table.insertRow(-1);
      for (var j = 0; j < cols; j++)
      {
        var tableCell = row.insertCell(-1);
        switch(j)
        {
          case 0:
          tableCell.innerHTML = courses[i].CourseSection;
          console.log("in switch 0: " + courses[i].CourseSection);
          break;
          case 1:
          tableCell.innerHTML = courses[i].CourseName;
          console.log("in switch 1: " + courses[i].CourseName);
          break;
          case 2:
          tableCell.innerHTML = courses[i].CourseTime;
          console.log("in switch 2: " + courses[i].CourseTime);
          break;
        }
        row.appendChild(tableCell);
      }

    }
  /*
        //var student = students[i];
        //console.log(student.StudentName);
        //$("#students").append(student.StudentID + " " + student.StudentName + "<br>");

    /* //Get the count of columns.
     var columnCount = customers[0].length;

   //Add the header row.
     var row = table.insertRow(-1);
     for (var i = 0; i < columnCount; i++) {
         var headerCell = document.createElement("TH");
         headerCell.innerHTML = customers[0][i];
         row.appendChild(headerCell);
     }

     //Add the data rows.
     for (var i = 1; i < customers.length; i++) {
         row = table.insertRow(-1);
         for (var j = 0; j < columnCount; j++) {
             var cell = row.insertCell(-1);
             cell.innerHTML = customers[i][j];
         }*/
}
