function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number.")
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").style.display = 'block';
    document.getElementById("m1").innerText = principal;
    document.getElementById("m2").innerText = rate + "%";
    document.getElementById("m3").innerText = interest;
    document.getElementById("m4").innerText = year;

}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
