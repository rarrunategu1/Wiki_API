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
  //display results on the page by looping through each object in the results array and append into .searchResults

function displayResults(results) {
  //store a reference to .searchResults
  const searchResults = document.querySelector('.searchResults');
  //remove child elements
  searchResults.innerHTML = '';
  //loop over results array
  results.forEach(result => {
    //result here represents each object in our array
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`); //encode url with encode URI method changes the spaces it returns in the url to %20 to convert it into a format that can be transmitted over the net.
   
   //appending each result to the .searchResults node using insertAdjacentHTmL - a DOM API
   searchResults.insertAdjacentHTML('beforeend',
   `<div class="resultItem"> 
   <h3 class="resultItem-title">
   <a href ="${url}" target="_blank" rel="noopener">${result.title})</a>
   </h3>
   <span class="resultItem-snippet">${result.snippet}</span><br>
   <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
  });</div>`
  );
  });
}
  
  //insertAdjacentHTML has two arguements, one for the position where we want to append the information, and a string of the html we want to return to the page.
  //beforeend specifies that the HTML in the second argument be appended after the last child of searchResults.


  

 

  

//Grab the search query
const form = document.querySelector('.searchForm'); //grab form and store it

// listen to submit event o get the input
form.addEventListener('submit', handleSubmit); 

/*additional notes 

const a = 'Hello';
 console.log('${a} World');  This is a new trick that uses ES6 Template literals instead of concatenation.  This will print Hello World. */
 

