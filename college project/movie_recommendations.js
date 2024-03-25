

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
// Assuming you have a JavaScript array called recommendations containing your series recommendations

// Assuming you have a JavaScript array called recommendations containing your series recommendations


// Assuming you have a JavaScript array called recommendations containing your series recommendations
// Assuming you have a JavaScript array called recommendations containing your series recommendations
// Assuming you have a JavaScript array called recommendations containing your series recommendations
// Assuming you have a JavaScript array called recommendations containing your series recommendations
var recommendations = [
    "Series A",
    "Series B",
    "Series C",
    // Add more series recommendations as needed
];

var searchInput = document.getElementById("searchInput");
var suggestionsContainer = document.getElementById("suggestions");

searchInput.addEventListener("input", function() {
    var input = this.value.toLowerCase();
    var suggestions = recommendations.filter(function(series) {
        return series.toLowerCase().startsWith(input);
    });

    if (input.trim() === "") {
        // Clear suggestions if search input is empty
        suggestionsContainer.innerHTML = "";
    } else {
        displaySuggestions(suggestions);
    }
});

function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = ""; // Clear previous suggestions

    suggestions.forEach(function(series) {
        var dropdown = document.createElement("select");
        dropdown.classList.add("dropdown");
        
        var option = document.createElement("option");
        option.textContent = series;
        option.value = series;
        dropdown.appendChild(option);
        
        dropdown.addEventListener("change", function() {
            searchInput.value = this.value; // Update search input with selected suggestion
            suggestionsContainer.innerHTML = ""; // Clear suggestions after selection
        });

        suggestionsContainer.appendChild(dropdown);
    });
}

// Add event listener to handle filling input with selected suggestion when dropdown option is clicked
suggestionsContainer.addEventListener("change", function(event) {
    if (event.target.classList.contains("dropdown")) {
        searchInput.value = event.target.value;
    }
});
function getMovieRecommendations() {
    var searchInputValue = searchInput.value.trim().toLowerCase();
    
    // Filter recommendations based on the search input
    var filteredRecommendations = recommendations.filter(function(series) {
        return series.toLowerCase().includes(searchInputValue);
    });

    var recommendationsContainer = document.getElementById("recommendations");
    recommendationsContainer.innerHTML = "<h2>Recommendations:</h2>";
    filteredRecommendations.forEach(function(series) {
        recommendationsContainer.innerHTML += "<p>" + series + "</p>";
    });
}


// Rest of your JavaScript code...
