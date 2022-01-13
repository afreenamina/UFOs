//import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {

    tbody.html("");

    //Loop through each object in the array
    data.forEach((datarow) => {

        //Appended a row to the HTML table
        let row = tbody.append("tr");
        
        //Added each value from the object into a cell
        Object.values(datarow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });
    });
}