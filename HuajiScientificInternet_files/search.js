function commit() {
    var texta = "https://www.google.com/search?&q=" + document.getElementById("#textbox").value;
    console.log(texta);
    window.open(texta);
}