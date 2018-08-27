//Grab the search query
const form = document.querySelector('.searchForm'); //grab form and store it

// listen to submit event o get the input
form.addEventListener('submit', handleSubmit);

//handle submit function
function handleSubmit(event) {
  event.preventDefault(); //prevents page fom reloading when form is submitted
//get value of input
  const input = document.querySelector('.searchForm input').value;
//removes white space from input
  const searchQuery = input.trim();
//prints it out to the console
fetchResults(searchQuery);
}


//now we make an AJAX call to wiki and handle the response

function fetchResults(searchQuery) { 
  
}

