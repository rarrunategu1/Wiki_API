//handle submit function
function handleSubmit(event) {
  event.preventDefault(); //prevents page fom reloading when form is submitted
//get value of input
  const input = document.querySelector('.searchForm input').value;
//removes white space from input
  const searchQuery = input.trim();
//prints it out to the console
fetchResults(searchQuery); //this can display the search query on the console if you change to console.log
}


//now we make an AJAX call to wiki and handle the response

function fetchResults(searchQuery) {  //we are using fetch because it's built into the browser.  You won't need additional libraries
   const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;  
  fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const results = data.query.search; //search is an arry of objects nested in query
  displayResults(results);
  })

  .catch(() => console.log('An error ocurred'));
  }
  //declare the displayResults function under fetchResults
  function displayResults(results) {
    console.log(results);
  }
  

//Grab the search query
const form = document.querySelector('.searchForm'); //grab form and store it

// listen to submit event o get the input
form.addEventListener('submit', handleSubmit); 

/*additional notes 

const a = 'Hello';
 console.log('${a} World');  This is a new trick that uses ES6 Template literals instead of concatenation.  This will print Hello World. */