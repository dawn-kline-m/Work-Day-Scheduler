// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let workDayHour = 0

let buttons = document.querySelectorAll(".saveBtn")
let displayTimeEl = document.querySelector("#currentDay")

displayTimeEl.textContent = dayjs().format('DD/MM/YYYY')
console.log(dayjs().format('DD/MM/YYYY'))

for (let button of buttons){

  button.addEventListener('click', function () {
    console.log('button clicked')
    let key = button.parentElement.getAttribute("id")
    console.log(key)
    let content = button.previousElementSibling.value
    console.log(content)
    localStorage.setItem(key,content)


  })
}

document.querySelector('#nine-activity').textContent=localStorage.getItem("hour-9")
document.querySelector('#ten-activity').textContent=localStorage.getItem("hour-10")
document.querySelector('#eleven-activity').textContent=localStorage.getItem("hour-11")
document.querySelector('#twelve-activity').textContent=localStorage.getItem("hour-12")
document.querySelector('#one-activity').textContent=localStorage.getItem("hour-1")
document.querySelector('#two-activity').textContent=localStorage.getItem("hour-2")
document.querySelector('#three-activity').textContent=localStorage.getItem("hour-3")
document.querySelector('#four-activity').textContent=localStorage.getItem("hour-4")
document.querySelector('#five-activity').textContent=localStorage.getItem("hour-5")





//let tdlHours = [{ "data-time", "textarea" }]

//$(function () {
  // TODO: Add a listener for click events on the save button. This code should

  //when you click this item it save entry to local storage 
  //localStorage.clear();

  // assume this area comes from the text area when click occurs
 // localStorage.setItem("9", "test")

  //document.querySelectorAll(workDayText)[0].value = localStorage.getItem("9");

  //when you refresh the page, it should show up

  // so pull it out of local storage
  //localStorage.getItem("9")
  //target text area 

  // need loop to loop over stored data and update
  //for (let i = 0; i < array.length; i++) {
   // const element = tdlHours[i];

  //}
 // localStorage.setItem(temp2.dataset.time, temp2.parentElement.previousElementSibling.value)

  //dayjs().format(DD / MM / YYY');

 // parseInt(document.querySelectorAll("row)[0].dataset.time , dayjs.hour()"))
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});
