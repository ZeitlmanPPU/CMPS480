function maketable() {
    var co_data_request = new XMLHttpRequest();
    co_data_request.open('GET', 'http://bahayzl.it.pointpark.edu:3000/students_has_course_offering');
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

  co_data_request.onload = function () {
      var cdata = JSON.parse(co_data_request.responseText);
      console.log(cdata);
      // console.log("Student ID is " + tdata.data[0].StudentID);
      displayTable(cdata);
  }
  //   var tdata = JSON.parse(st_data_request.responseText);

function displayTable(data)
{
    var table = document.getElementById("classtable");
    var stidNode = "Student ID";
    var sectNode = "Course Section";
    var students_has_course_offering = data.data;
    var cols = Object.getOwnPropertyNames(students_has_course_offering[0]).length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < cols; i++)
    {
        var headerCell = document.createElement("th");
        switch(i)
        {
          case 0:
          headerCell.innerHTML = stidNode;
          break;
          case 1:
          headerCell.innerHTML = sectNode;
          break;
        }
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 0; i < students_has_course_offering.length; i++)
    {
      //var tableRow = document.createElement("tr");

      row = table.insertRow(-1);
      for (var j = 0; j < cols; j++)
      {
        var tableCell = row.insertCell(-1);
        switch(j)
        {
          case 0:
          tableCell.innerHTML = students_has_course_offering[i].Students_StudentID;
          console.log("in switch 0: " + students_has_course_offering[i].Students_StudentID);
          break;
          case 1:
          tableCell.innerHTML = students_has_course_offering[i].Course_Offering_Section;
          console.log("in switch 1: " + students_has_course_offering[i].Course_Offering_Section);
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
