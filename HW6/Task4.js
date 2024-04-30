
const debounce = function(func, delay){
	let timeout;
	return function(){
		const context = this;
		const args = arguments;

		const deb = () =>{
			func.apply(context, args);
		}
		clearTimeout(timeout);
		timeout = setTimeout(deb, delay);
	}
}




function debouncedSearch(query) {
	// Perform search operation with the query
	console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 3000);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});