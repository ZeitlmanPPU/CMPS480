function maketable()
{
    var st_data_request = new XMLHttpRequest();
    st_data_request.open('GET', 'http://rfzeitl.it.pointpark.edu:3000/students');
    st_data_request.send();
    //after loading the variable data, create calls to the conversion and display functions

    st_data_request.onload = function()
    {
    
    }
   /* var tdata = JSON.parse(st_data_request.responseText); */
    


    /*
    var table = document.createElement("TABLE");
        table.border = "1";
 
        //Get the count of columns.
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
            }
        }
*/
};
