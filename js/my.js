function tra(data) {
    var num;
    switch (data) {
        case "5成": num = 0.5; break;
        case "6成": num = 0.6; break;
        case "7成": num = 0.7; break;
        case "8成": num = 0.8; break;
        case "9成": num = 0.9; break;
        case "最新基准利率": num = 0.049; break;
        case "最新基准利率9折": num = 0.049 * 0.9; break;
        case "最新基准利率8折": num = 0.049 * 0.8; break;
        case "最新基准利率7折": num = 0.049 * 0.7; break;
        case "最新基准利率6折": num = 0.049 * 0.6; break;
        case "最新公积金利率": num = 0.0325; break;
        case "最新公积金利率9折": num = 0.0325 * 0.9; break;
        case "最新公积金利率8折": num = 0.0325 * 0.8; break;
        case "最新公积金利率7折": num = 0.0325 * 0.7; break;
        case "最新公积金利率6折": num = 0.0325 * 0.6; break;
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
    var fee = price * area * anjie;
    var rate_month = rate / 12;
    var month = year * 12;

    var paymonth = fee * (rate_month * Math.pow(1 + rate_month, month)) / (Math.pow(1 + rate_month, month) - 1);
    var total = paymonth * month;
    var interest = total - fee;

    var paymonth1 = fee / month;
    var total1 = (month + 1) * fee * rate_month / 2 + fee;
    var interest1 = total1 - fee;
    var lower = paymonth1 * rate_month;

    document.getElementsByClassName("data")[0].innerHTML = fee;
    document.getElementsByClassName("data")[1].innerHTML = month;
    document.getElementsByClassName("data")[2].innerHTML = paymonth.toFixed(2);
    document.getElementsByClassName("data")[3].innerHTML = interest.toFixed(2);
    document.getElementsByClassName("data")[4].innerHTML = total.toFixed(2);

    document.getElementsByClassName("data")[5].innerHTML = fee;
    document.getElementsByClassName("data")[6].innerHTML = month;
    document.getElementsByClassName("data")[7].innerHTML = paymonth1.toFixed(2);
    document.getElementsByClassName("data")[8].innerHTML = lower.toFixed(2);
    document.getElementsByClassName("data")[9].innerHTML = interest1.toFixed(2);
    document.getElementsByClassName("data")[10].innerHTML = total1.toFixed(2);

}