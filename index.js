window.onload = function() {
    var tagline = [
        "Epic Bass Guitar Guy",
        "All Around Nerd",
        "Gamer, Coder, Nerd",
        "Causal Web Developer",
        "Epic Gamer Guy"
    ]
    var randomtagline = tagline[Math.floor(Math.random() * tagline.length)];
    document.getElementById('tagline').innerHTML = randomtagline;
}