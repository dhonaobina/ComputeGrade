
function resultCal()
{
    gradCalculation('Math', 'MathResult');
    gradCalculation('English', 'EnglishResult');
    gradCalculation('Computer', 'ComputerResult');
    gradCalculation('Science', 'ScienceResult');
    resultDisplay();
}
function gradCalculation(Numtag, resultTag)
{ 
  var NumTagVal = document.getElementById(Numtag).value;
    if (NumTagVal = '')
        {
            document.getElementById(resultTag).innerHTML = 'Enter Marks';
            document.getElementById(resultTag).style.backgroundColor = "";
            return;
        }
        else if (parseInt(NumTagVal) == 80) 
            {
                document.getElementById(resultTag).innerHTML = 'Grade A';
                document.getElementById(resultTag).style.backgroundColor = "#99ff99";
                return;
            }

        else if (parseInt(NumTagVal) == 60) 
            {
                document.getElementById(resultTag).innerHTML = 'Grade B';
                document.getElementById(resultTag).style.backgroundColor = "#ffff80";
                return;
            }

        
        else if (parseInt(NumTagVal) == 40) 
            {
                document.getElementById(resultTag).innerHTML = 'Grade C';
                document.getElementById(resultTag).style.backgroundColor = "#b3ffff";
                return;
            }
            else
                {
                    document.getElementById(resultTag).innerHTML = 'Fail';
                    document.getElementById(resultTag).style.backgroundColor = "#ffb3b3";
                }
}

function resultDisplay()
{
    var stuName = document.getElementById("stuName").value;
    var result = parseInt(document.getElementById("Math").value)
               + parseInt(document.getElementById("English").value)
               + parseInt(document.getElementById("Computer").value)
               + parseInt(document.getElementById("Science").value);
        if (result)
        {
            document.getElementById('txtout').innerHTML = stuName + " has scored " + result + " mark of 400.";
            document.getElementById('txtout').style.backgroundColor = "#ffd9b3";
        }
        else
        { 
            document.getElementById('txtout').innerHTML = "Please enter marks for all subjects.";
            document.getElementById('txtout').style.backgroundColor = '#ffd9b3';
            return;
        }
}