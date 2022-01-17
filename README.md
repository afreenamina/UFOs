# UFOs

## Overview of the analysis:

* We are by putting together UFOs sighting data in table form and adding multiple filters to the table to manipulate the data using javascript.

* HTML and Bootstrap have been written to view the data in a neat format.

## Results:
Below are the steps to build a filter in data based on date, City, State, Country and Shape

* Build the HTML page by creating list of label tag <label> , input tag<input> and defining id inside input tag <input> for each filters.
  
  ![Screenshot 2022-01-17 015321](https://user-images.githubusercontent.com/92698873/149749014-a27cfee7-885a-418e-9909-5dd1dbc2115a.png)

* In the javascript file, below is the code written to notify any changes made in html.
  
        d3.selectAll("input").on("change", updateFilters);
  
* All the elements which were changed are saved in a seperate variable -
  
      let elementValue = filteredElements.property("value");
  
            let filteredId = filteredElements.attr("id");
  
* Each Elements are checked with data and filtered -
  
  ![Screenshot 2022-01-17 020829](https://user-images.githubusercontent.com/92698873/149750013-281caa03-66da-41bc-a00f-3940bc6c541c.png)

  
## Summary:

### Drawbacks - 
  
* Major drawbacks of this page, it is case sensitive, it only searches and finds matches if data and the filter data are in the same case (upper case or lower case).

### Recommendations for further development - 
  
* A button/link for Extracting the data.
  
* Search can be made case insensitive, so the user can serach data without worrying about the uppercase or lowercase of the data.
