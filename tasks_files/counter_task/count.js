let result = 0;


document.getElementById("btn1").onclick = function() {
    result++
    document.getElementById("count").innerHTML = result;
    if (result > 0) {
        document.getElementById("count").style.color = "green";
    }
    else if (result == 0) {
        document.getElementById("count").style.color = "black";
    }
}



document.getElementById("btn3").onclick = function() {
    result--
    document.getElementById("count").innerHTML = result;
    if (result < 0) {
        document.getElementById("count").style.color = "red";
    }
    else if (result == 0) {
        document.getElementById("count").style.color = "black";
    }
}

document.getElementById("btn2").onclick = function() {
    result=0;
    document.getElementById("count").innerHTML = result;
    if (result == 0) {
        document.getElementById("count").style.color = "black";
    }
}