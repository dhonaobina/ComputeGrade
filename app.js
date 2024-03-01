
function resultCal()
{
    var stuName = document.getElementById("stuName").value;
    var result = parseInt(document.getElementById("Math").value) + parseInt(document.getElementById("Math").value) + parseInt(document.getElementById("English").value) + parseInt(document.getElementById("Computer").value) + parseInt(document.getElementById("Science").value);
    document.getElementById("txtout").innerHTML = stuName + " has scored " + result + " marks out of 400.";
}

function gradCalculation(Numtag, resultTag)
{ 
    var NumtagVal = document.getElementById(Numtag).value;
    if (NumtagVal == '')
    { 
        document.getElementById(resultTag)
    }
}