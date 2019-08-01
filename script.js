document.getElementById("button1").addEventListener("click", loadQuote);

function loadQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://thatsthespir.it/api", true);

    xhr.onload = function () {
        if (this.status == 200) {
            var quote = JSON.parse(this.responseText);

            var result = " ";

            result +=
                "<div class='quote'>" +
                "<img src='" + quote.photo + "'>" +
                "<ul>" +
                "<li>" + quote.quote + "</li>" +
                "<li>Author:" + quote.author + "</li>" +
                "<li>ID:" + quote.id + "</li>" +
                "</ul>";
            document.getElementById("container").innerHTML = result;
        } else if (this.status == 404) {
            document.getElementById("container").innerHTML = "Page not found!";

        }

    }
    xhr.onerror = function () {
        document.getElementById("error").innerHTML = "Request Error";
    }

    xhr.send();
}
