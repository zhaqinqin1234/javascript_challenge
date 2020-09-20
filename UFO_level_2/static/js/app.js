// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
//select tbody element
var tbody = d3.select("tbody");

function buildTable(data) {

    tbody.html("");

    data.forEach((dataRow) => {
    var row =tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
        var cell =row.append('td');
        cell.text(val);
    });
});

}
//keep track all filters
var filters= {}
function updateFilter(){

    
}
function handleClick() {
    // Prevent the form from refreshing the page
    d3.event.preventDefault();
    // grab the datatime value from the filter
    var date =d3.select("#datetime").property("value");
    var filteredData = tableData;

    if (date) {
        filteredData=filteredData.filter(row=> row.datetime ===date);
        
    }
    buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleClick);

// call build table function to load data
buildTable(tableData);


