// from data.js
var tableData = data;

var submit = d3.select("#filter-btn");

// YOUR CODE HERE!

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    rows = d3.selectAll('td').remove()
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = data.filter(data => data.datetime == inputValue);
  
    console.log(filteredData);
	var table = d3.select("table");
    var tbody = d3.select("tbody");

    for (var j = 0; j < filteredData.length; j++) {
        
        var row = tbody.append("tr");
        row.append("td").text(filteredData[j].datetime);
        row.append("td").text(filteredData[j].city);
        row.append("td").text(filteredData[j].state);
        row.append("td").text(filteredData[j].country);
        row.append("td").text(filteredData[j].shape);
        row.append("td").text(filteredData[j].durationMinutes);
        row.append("td").text(filteredData[j].comments);
    }
});
  