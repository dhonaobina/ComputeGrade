function myFunction()
{
    //Using DOM getElementsByTagName
    var x = document.getElementsByTagName("P");
    x[0].style.backgroundColor = "#ff944d";
    x[1].style.backgroundColor = "#ffff66";
    x[2].style.backgroundColor = "#ffff66";
    x[3].style.backgroundColor = "#99ff99";
    //Using DOM getElementsByClassName
    var x = document.getElementsByClassName("subcaption");
    x[0].style.backgroundColor = "#ffccf2";
    x[1].style.backgroundColor = "#ffccf2";
    x[2].style.backgroundColor = "#ffccf2";
    x[3].style.backgroundColor = "#ffccf2";
}

function resultCal()
{
    var stuName = document.getElementById("stuName").value;
    var result = parseInt(document.getElementById("Math").value) + parseInt(document.getElementById("Math").value) + parseInt(document.getElementById("English").value) + parseInt(document.getElementById("Computer").value) + parseInt(document.getElementById("Science").value);
    document.getElementById("txtout").innerHTML = stuName + " has scored " + result + " marks out of 400.";
}