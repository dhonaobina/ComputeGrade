var flag = 0;
function resultCal()
{
    gradCalCulation('Math', 'MathResult');
    gradCalCulation('English', 'EngResult');
    gradCalCulation('Computer', 'ComputerResult');
    gradCalCulation('Science', 'ScienceResult');
    resultDisplay();
}

function gradCalCulation(Numtag, resultTag)
{

       var NumtagVal = document.getElementById(Numtag).value;
       var grade;
       var color;
       switch (true)
      {
      case (NumtagVal == ''):
        grade = 'Enter Marks';
        color = "";
        break;
       
      case (parseInt(NumtagVal) >= 80 && parseInt(NumtagVal) <= 100):
        grade = 'Grade A';
        color = "#99ff99";
        break;
      case (parseInt(NumtagVal) >= 60 && parseInt(NumtagVal) <80):
        grade = 'Grade B';
        color = "#ffff80";
        break;
      case (parseInt(NumtagVal) >= 40 && parseInt(NumtagVal) < 60):
        grade = 'Grade C';
        color = "#b3ffff";
        break;
      case (parseInt(NumtagVal) > 100 || parseInt(NumtagVal) < 0 ):
        flag=1;
        grade = 'Please Check';
        color = "#ffd9b3";
        break;
      default:
        grade = 'Fail';
        color = "#ffb3b3";
      }
      document.getElementById('txtout').innerHTML = grade;
      document.getElementById('txtout').style.backgroundColor = color;
}
function resultDisplay()
{
    var stuName = document.getElementById("stuName").value;
    var result = parseInt(document.getElementById("Math").value)
                + parseInt(document.getElementById("English").value)
                + parseInt(document.getElementById("Computer").value)
                + parseInt(document.getElementById("Science").value);
        if (!result)
        {
            document.getElementById('txtout').innerHTML = "Please enter marks for all subjects.";
            document.getElementById('txtout').style.backgroundColor = "#ffd9b3";
            return;  
        }
        else if (flag == 1)
        {
            document.getElementById('txtout').innerHTML = 'Please enter marks between 0 and 100 for all subjects.';
            document.getElementById('txtout').style.backgroundColor = "#ffd9b3";
            flag=0;
        }
        else
        {    
            document.getElementById('txtout').innerHTML = stuName + " has scored " +  result + " marks out of 400.";
            document.getElementById('txtout').style.backgroundColor = "#ffd9b3";
        } 
}