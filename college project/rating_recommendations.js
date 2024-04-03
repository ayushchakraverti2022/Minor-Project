

function getRatingRecommendations() {
    var ratingRange = document.getElementById("rating").value;
    var genre = document.getElementById("genre").value;

    // Define the URL of your Flask API endpoint
    const apiUrl = 'http://localhost:5000/rating';

    // Define the query parameters
    const params = {
    genre: 'Crime, Sci-Fi & Fantasy',
    lang: 'en',
    rating: 1,
    num: 10
    };
    
    var recommendations = [ "g" ];
    
    // Construct the query string
    const queryString = new URLSearchParams(params).toString();

    // Make the GET request
    fetch(`${apiUrl}?${queryString}`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Accessing the 'names' list elements
        recommendations = data.names;
        var recommendationsContainer = document.getElementById("recommendations");
        recommendationsContainer.innerHTML = "<h2>Recommendations:</h2>";
        recommendations.forEach(function(movie) {
            recommendationsContainer.innerHTML += "<p>" + movie + "</p>";
        });
        console.log(namesList);
        // You can access the 'names' and 'posters' properties from the response
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
    
 

   
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
