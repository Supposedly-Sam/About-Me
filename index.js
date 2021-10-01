window.onload = function() {
    var tagline = [
        "Offensive Lineman",
        "High School Student",
        "Avid Siege Player",
        "Causal Web Developer"
    ]
    var randomtagline = tagline[Math.floor(Math.random() * tagline.length)];
    document.getElementById('tagline').innerHTML = randomtagline;
}