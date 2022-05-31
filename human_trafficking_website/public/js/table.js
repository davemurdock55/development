//JSON ARRAY OF JSON Objects WITH KEYS AND VALUES
//This array contains 4 elements/records
//Each element is an OBJECT

let list =  
[

{"case": 1,"date_missing": "10/30/2009","last_name": "Sharmarice","first_name": "Halima","age_at_missing": "14","city": "Granger","state": "UT","gender": "F","race": "W"},
{"case": 2,"date_missing": "10/16/2015","last_name": "Martinez","first_name": "Kimberly","age_at_missing": "16","city": "West Valley City","state": "UT","gender": "F","race": "M"},
{"case": 3,"date_missing": "07/23/2004","last_name": "Gomez","first_name": "Brenda","age_at_missing": "3","city": "Logan","state": "UT","gender": "F","race": "H"},
{"case": 4,"date_missing": "05/25/2003","last_name": "Bishop","first_name": "Acacia","age_at_missing": "1","city": "Salt Lake City","state": "UT","gender": "F","race": "W"},
{"case": 5,"date_missing": "08/03/2020","last_name": "Salazar","first_name": "Maria","age_at_missing": "14","city": "Snowville","state": "UT","gender": "F","race": "H"},
{"case": 6,"date_missing": "04/09/2020","last_name": "Hernandez-Soto","first_name": "Peggy","age_at_missing": "6","city": "Ogden","state": "UT","gender": "F","race": "H"},
{"case": 7,"date_missing": "06/24/2021","last_name": "Jimenez","first_name": "Lucero","age_at_missing": "14","city": "West Valley City","state": "UT","gender": "F","race": "H"},
{"case": 8,"date_missing": "11/08/2013","last_name": "Colindres-Avila","first_name": "Yuris","age_at_missing": "17","city": "West Valley City","state": "UT","gender": "F","race": "M"},
{"case": 9,"date_missing": "07/15/2021","last_name": "Harris","first_name": "Kandis","age_at_missing": "16","city": "Salt Lake City","state": "UT","gender": "F","race": "W"},
{"case": 10,"date_missing": "07/30/2006","last_name": "Seal","first_name": "Jaydan","age_at_missing": "1","city": "Garleys Wash","state": "UT","gender": "M","race": "W"},
{"case": 11,"date_missing": "06/13/2018","last_name": "Lizarraga","first_name": "Jose","age_at_missing": "13","city": "West Valley City","state": "UT","gender": "M","race": "H"},
{"case": 12,"date_missing": "04/23/2020","last_name": "Cortez Trujillo","first_name": "Eztli","age_at_missing": "21","city": "North Ogden","state": "UT","gender": "M","race": "H"},
{"case": 13,"date_missing": "10/25/2017","last_name": "Fowles","first_name": "Juan","age_at_missing": "15","city": "Lehi","state": "UT","gender": "M","race": "M"},
{"case": 14,"date_missing": "08/20/2012","last_name": "Garcia","first_name": "Isai","age_at_missing": "17","city": "West Valley City","state": "UT","gender": "M","race": "M"},
{"case": 15,"date_missing": "09/01/2015","last_name": "Smith","first_name": "Macin","age_at_missing": "17","city": "St. George","state": "UT","gender": "M","race": "W"},
{"case": 16,"date_missing": "01/26/2006","last_name": "Sisco-Ramirez","first_name": "Jose","age_at_missing": "4","city": "West Valley City","state": "UT","gender": "M","race": "M"}

] ; 

//Begin the table by writing an HTML table tag to the DOM
document.write("<table style='margin-top: -15px; margin-bottom: 50px;'>");

//Begin the head section of the table
document.write("<thead>");        

//Create the first row
document.write("<tr>");



function toTitleCase(str) {
return str.replace(
    /\w\S*/g,
    function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
);
}

for (key in list[0]) 
{
    key = key.replace("_"," ");
    key = key.replace("_"," ");
    key = toTitleCase(key);
    //Create a new column and display the value from the array (i.e. UserID, UserName, Password, etc.)
    document.write('<td style="font-weight: bold;">' + key + '</td>');
}

document.write("</tr>");
document.write("</thead>"); 

//Begin the body section of the table
document.write("<tbody>");    

//For each element in the JSON array create a new table row
for (var iRow = 0; iRow < list.length; iRow++) 
{
    //Create the row
    document.write('<tr>');

    //Create the column and display the value for the element
    document.write('<td>' + list[iRow].case + '</td>');
    document.write('<td>' + list[iRow].date_missing + '</td>');
    document.write('<td>' + list[iRow].last_name + '</td>');
    document.write('<td>' + list[iRow].first_name + '</td>');
    document.write('<td>' + list[iRow].age_at_missing + '</td>');
    document.write('<td>' + list[iRow].city + '</td>');  
    document.write('<td>' + list[iRow].state + '</td>');
    document.write('<td>' + list[iRow].gender + '</td>');
    document.write('<td>' + list[iRow].race + '</td>');
    document.write('</tr>');
}

document.write("</tbody>");
document.write("</table>");




// //JSON ARRAY OF JSON Objects WITH KEYS AND VALUES
// //This array contains 4 elements/records
// //Each element is an OBJECT
// let list =  
// [

// {"case": 1,"date_missing": "10/30/2009","last_name": "Sharmarice","first_name": "Halima","age_at_missing": "14","city": "Granger","state": "UT","gender": "F","race": "W"},
// {"case": 2,"date_missing": "10/16/2015","last_name": "Martinez","first_name": "Kimberly","age_at_missing": "16","city": "West Valley City","state": "UT","gender": "F","race": "M"},
// {"case": 3,"date_missing": "07/23/2004","last_name": "Gomez","first_name": "Brenda","age_at_missing": "3","city": "Logan","state": "UT","gender": "F","race": "H"},
// {"case": 4,"date_missing": "05/25/2003","last_name": "Bishop","first_name": "Acacia","age_at_missing": "1","city": "Salt Lake City","state": "UT","gender": "F","race": "W"},
// {"case": 5,"date_missing": "08/03/2020","last_name": "Salazar","first_name": "Maria","age_at_missing": "14","city": "Snowville","state": "UT","gender": "F","race": "H"},
// {"case": 6,"date_missing": "04/09/2020","last_name": "Hernandez-Soto","first_name": "Peggy","age_at_missing": "6","city": "Ogden","state": "UT","gender": "F","race": "H"},
// {"case": 7,"date_missing": "06/24/2021","last_name": "Jimenez","first_name": "Lucero","age_at_missing": "14","city": "West Valley City","state": "UT","gender": "F","race": "H"},
// {"case": 8,"date_missing": "11/08/2013","last_name": "Colindres-Avila","first_name": "Yuris","age_at_missing": "17","city": "West Valley City","state": "UT","gender": "F","race": "M"},
// {"case": 9,"date_missing": "07/15/2021","last_name": "Harris","first_name": "Kandis","age_at_missing": "16","city": "Salt Lake City","state": "UT","gender": "F","race": "W"},
// {"case": 10,"date_missing": "07/30/2006","last_name": "Seal","first_name": "Jaydan","age_at_missing": "1","city": "Garleys Wash","state": "UT","gender": "M","race": "W"},
// {"case": 11,"date_missing": "06/13/2018","last_name": "Lizarraga","first_name": "Jose","age_at_missing": "13","city": "West Valley City","state": "UT","gender": "M","race": "H"},
// {"case": 12,"date_missing": "04/23/2020","last_name": "Cortez Trujillo","first_name": "Eztli","age_at_missing": "21","city": "North Ogden","state": "UT","gender": "M","race": "H"},
// {"case": 13,"date_missing": "10/25/2017","last_name": "Fowles","first_name": "Juan","age_at_missing": "15","city": "Lehi","state": "UT","gender": "M","race": "M"},
// {"case": 14,"date_missing": "08/20/2012","last_name": "Garcia","first_name": "Isai","age_at_missing": "17","city": "West Valley City","state": "UT","gender": "M","race": "M"},
// {"case": 15,"date_missing": "09/01/2015","last_name": "Smith","first_name": "Macin","age_at_missing": "17","city": "St. George","state": "UT","gender": "M","race": "W"},
// {"case": 16,"date_missing": "01/26/2006","last_name": "Sisco-Ramirez","first_name": "Jose","age_at_missing": "4","city": "West Valley City","state": "UT","gender": "M","race": "M"}

// ] ; 

// //Begin the table by writing an HTML table tag to the DOM
// document.write("<table>");

// //Begin the head section of the table
// document.write("<thead>");        

// //Create the first row
// document.write("<tr>");

// //This loop displays the headers
// //For every element in the array
// //Grab the first element and the first position in the element
// //First time would grab the key for the first element which would be UserID

// function toTitleCase(str) {
// return str.replace(
//     /\w\S*/g,
//     function(txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     }
// );
// }

// for (key in list[0]) 
// {
//     // key = key.replace("_"," ");
//     // key = key.replace("_"," ");
//     // key = toTitleCase(key);
//     //Create a new column and display the value from the array (i.e. UserID, UserName, Password, etc.)
//     document.write('<th style="font-weight: bold;">' + key + '</th>');
// }

// document.write("</tr>");
// document.write("</thead>"); 

// //Begin the body section of the table
// document.write("<tbody>");    

// //For each element in the JSON array create a new table row
// for (var iRow = 0; iRow < list.length; iRow++) 
// {
//     //Create the row
//     document.write('<tr>');

//     //Create the column and display the value for the element
//     document.write('<td>' + list[iRow].case + '</td>');
//     document.write('<td>' + list[iRow].date_missing + '</td>');
//     document.write('<td>' + list[iRow].last_name + '</td>');
//     document.write('<td>' + list[iRow].first_name + '</td>');
//     document.write('<td>' + list[iRow].age_at_missing + '</td>');
//     document.write('<td>' + list[iRow].city + '</td>');  
//     document.write('<td>' + list[iRow].state + '</td>');
//     document.write('<td>' + list[iRow].gender + '</td>');
//     document.write('<td>' + list[iRow].race + '</td>');
//     document.write('</tr>');
// }

// document.write("</tbody>");
// document.write("</table>");
