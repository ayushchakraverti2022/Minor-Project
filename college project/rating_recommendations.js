function getRatingRecommendations() {
    var ratingRange = document.getElementById("rating").value;
    var genre = document.getElementById("genre").value;
    
    // Dummy recommendations for demonstration
    var recommendations = [
        "The Dark Knight",
        "Inception",
        "The Shawshank Redemption",
        "Pulp Fiction",
        "The Godfather"
    ];

    var recommendationsContainer = document.getElementById("recommendations");
    recommendationsContainer.innerHTML = "<h2>Recommendations:</h2>";
    recommendations.forEach(function(movie) {
        recommendationsContainer.innerHTML += "<p>" + movie + "</p>";
    });
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
