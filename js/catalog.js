var count = 1
function hide() {
    if (count % 2 == 1) {
        document.getElementById("mydiv1").setAttribute("class", "none");
    }

    else {
        document.getElementById("mydiv1").setAttribute("class", "mydiv");
    }
    count++;
}