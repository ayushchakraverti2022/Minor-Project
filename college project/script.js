function redirectToSelected() {
    var recommendationType = document.getElementById("recommendation-type").value;
    
    if (recommendationType === "movie") {
        window.location.href = "movie_recommendations.html";
    } else if (recommendationType === "rating") {
        window.location.href = "rating_recommendations.html";
    }
}
