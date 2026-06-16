// function calculateResult() {
//   let n = parseInt(document.getElementById("subjects").value, 10);
//   let total = 0;
//   let failedSubjects = 0;

//   if (isNaN(n) || n <= 0) {
//     document.getElementById("result").innerHTML = "Please enter a valid number of subjects.";
//     return;
//   }

//   for (let i = 1; i <= n; i++) {
//     let marks = parseFloat(prompt("Enter marks for Subject " + i));

//     if (isNaN(marks) || marks < 0 || marks > 100) {
//       document.getElementById("result").innerHTML = "Please enter valid marks between 0 and 100 for every subject.";
//       return;
//     }

//     if (marks < 40) {
//       failedSubjects++;
//     }

//     total = total + marks;
//   }

//   let average = total / n;
//   let maxMarks = n * 100;
//   let percentage = (total / maxMarks) * 100;
//   let grade;
//   let result;

//   if (average >= 90) {
//     grade = "A+";
//   } else if (average >= 75) {
//     grade = "A";
//   } else if (average >= 60) {
//     grade = "B";
//   } else if (average >= 50) {
//     grade = "C";
//   } else {
//     grade = "F";
//   }

//   if (failedSubjects === 0) {
//     result = "PASS";
//   } else {
//     result = "FAIL";
//   }

//   document.getElementById("result").innerHTML =
//     "Total Marks: " + total + " / " + maxMarks + "<br>" +
//     "Percentage: " + percentage.toFixed(2) + "%" + "<br>" +
//     "Average Marks: " + average.toFixed(2) + "<br>" +
//     "Failed Subjects: " + failedSubjects + "<br>" +
//     "Grade: " + grade + "<br>" +
//     "Result: " + result;
// }
function createMarkInputs() {
  let n = parseInt(document.getElementById("subjects").value, 10);
  let marksContainer = document.getElementById("marksContainer");
  let result = document.getElementById("result");

  marksContainer.innerHTML = "";
  result.innerHTML = "";

  if (isNaN(n) || n <= 0) {
    result.innerHTML = "Please enter a valid number of subjects.";
    return;
  }

  for (let i = 1; i <= n; i++) {
    marksContainer.innerHTML +=
      '<label for="mark' + i + '">Marks for Subject ' + i + '</label><br>' +
      '<input type="number" id="mark' + i + '" min="0" max="100" placeholder="Enter marks for Subject ' + i + '"><br><br>';
  }
}

function calculateResult() {
  let n = parseInt(document.getElementById("subjects").value, 10);
  let total = 0;
  let failedSubjects = 0;

  if (isNaN(n) || n <= 0) {
    document.getElementById("result").innerHTML = "Please enter a valid number of subjects.";
    return;
  }

  for (let i = 1; i <= n; i++) {
    let marks = parseFloat(document.getElementById("mark" + i).value);

    if (isNaN(marks) || marks < 0 || marks > 100) {
      document.getElementById("result").innerHTML = "Please enter valid marks between 0 and 100 for every subject.";
      return;
    }

    if (marks < 40) {
      failedSubjects++;
    }

    total += marks;
  }

  let average = total / n;
  let maxMarks = n * 100;
  let percentage = (total / maxMarks) * 100;
  let grade;
  let result;

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 75) {
    grade = "A";
  } else if (average >= 60) {
    grade = "B";
  } else if (average >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  if (failedSubjects === 0) {
    result = "PASS";
  } else {
    result = "FAIL";
  }

  document.getElementById("result").innerHTML =
    "Total Marks: " + total + " / " + maxMarks + "<br>" +
    "Percentage: " + percentage.toFixed(2) + "%<br>" +
    "Average Marks: " + average.toFixed(2) + "<br>" +
    "Failed Subjects: " + failedSubjects + "<br>" +
    "Grade: " + grade + "<br>" +
    "Result: " + result;
}
