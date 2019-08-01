document.getElementById("button1").addEventListener("click", loadQuote);

function loadQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://thatsthespir.it/api", true);

    xhr.onload = function () {
        if (this.status == 200) {
            var quote = JSON.parse(this.responseText);
            if (quote.photo == "") {
                var result = " ";

                result +=
                    "<div class='quote'>" +
                    "<img src='" + quote.photo + "'>" +
                    "<ul>" +
                    "<li id='quoteText'>" + quote.quote + "</li>" +
                    "<li id='author'>--   " + quote.author + "   -- </li>" +
                    "</ul>" + "</div>";
                document.getElementById("container").innerHTML = result;
                console.log("no url found");
            } else {

                var result = " ";

                result +=
                    "<div class='quote'>" +
                    "<img src='" + quote.photo + "'>" +
                    "<ul>" +
                    "<li id='quoteText'>" + quote.quote + "</li>" +
                    "<li id='author'>--   " + quote.author + "   -- </li>" +
                    "</ul>" + "</div>";
                document.getElementById("container").innerHTML = result;
            }
        } else if (this.status == 404) {
            document.getElementById("container").innerHTML = "Page not found!";

        }

    }
    xhr.onerror = function () {
        document.getElementById("error").innerHTML = "Request Error";
    }

    xhr.send();
}
