function tra(data) {
    var num;
    switch (data) {
        case "5成": num = 5; break;
        case "6成": num = 6; break;
        case "7成": num = 7; break;
        case "8成": num = 8; break;
        case "9成": num = 9; break;
        case "最新LPR加点利率": num = 4.61; break;
        case "2020年LPR加点利率": num = 4.633; break;
        case "2019年LPR加点利率": num = 4.3; break;
        case "2018年LPR加点利率": num = 5.36; break;
        case "2017年LPR加点利率": num = 5.51; break;
        case "10年": num = 10; break;
        case "20年": num = 20; break;
        case "30年": num = 30; break;
        case "40年": num = 40; break;
        case "50年": num = 50; break;
    }
    return num;
}
function validateForm() {
    var price = document.forms["myForm"]["price"].value;
    var area = document.forms["myForm"]["area"].value;
    var anjie = tra(document.forms["myForm"]["anjie"].value);
    var year = tra(document.forms["myForm"]["year"].value);
    var rate = tra(document.forms["myForm"]["rate"].value);
    document.getElementsByClassName("data")[1].innerHTML = price;
    document.getElementsByClassName("data")[8].innerHTML = year;
}