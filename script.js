document.getElementById("button1").addEventListener("click", loadQuote);

function loadQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://thatsthespir.it/api", true);

    xhr.onload = function () {
        if (this.status == 200) {
            var quote = JSON.parse(this.responseText);

        }
        console.log(quote);
    }
    xhr.send();
}
