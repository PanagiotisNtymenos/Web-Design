function fontSize(size) {
    var imgSmall = document.getElementById("small_letters");
    var imgNormal = document.getElementById("normal_letters");
    var imgBig = document.getElementById("big_letters");
    var p = document.querySelectorAll("p");
    var h1 = document.querySelectorAll("h1");
    var h2 = document.querySelectorAll("h2");
    if (size === "small") {
        src = "letters/letterAsmallActive.png";
        imgSmall.src = src;
        imgNormal.src = "letters/letterA.png";
        imgBig.src = "letters/letterAbig.png";

        document.querySelector("body").style.fontSize = "10px";
        for (i = 0; i < p.length; i++) {
            p[i].style.fontSize = "10px";
        }

        for (i = 0; i < h1.length; i++) {
            h1[i].style.fontSize = "22px";
        }

        for (i = 0; i < h2.length; i++) {
            h2[i].style.fontSize = "16px";
        }

    } else if (size === "normal") {
        src = "letters/letterAActive.png";
        imgNormal.src = src;
        imgSmall.src = "letters/letterAsmall.png";
        imgBig.src = "letters/letterAbig.png";

        document.querySelector("body").style.fontSize = "16px";
        for (i = 0; i < p.length; i++) {
            p[i].style.fontSize = "16px";
        }

        for (i = 0; i < h1.length; i++) {
            h1[i].style.fontSize = "32px";
        }

        for (i = 0; i < h2.length; i++) {
            h2[i].style.fontSize = "24px";
        }

    } else {
        src = "letters/letterAbigActive.png";
        imgBig.src = src;
        imgSmall.src = "letters/letterAsmall.png";
        imgNormal.src = "letters/letterA.png";

        document.querySelector("body").style.fontSize = "20px";
        for (i = 0; i < p.length; i++) {
            p[i].style.fontSize = "20px";
        }

        for (i = 0; i < h1.length; i++) {
            h1[i].style.fontSize = "50px";
        }

        for (i = 0; i < h2.length; i++) {
            h2[i].style.fontSize = "44px";
        }

    }
}

function date() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if (date < 10) {
        date = '0' + date;
    }

    if (month < 10) {
        month = '0' + month;
    }

    today = month + '/' + date + '/' + year;
    document.getElementById("date").innerHTML = today;
    document.getElementById("date").style.color = "#931f1f";
    date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
    var myVar = setInterval(function () { clock() }, 1000);

    function clock() {
        date = new Date();
        document.getElementById("clock").innerHTML = date.toLocaleTimeString();
    }
}