//Function to count correct answers and print results to document 
function myFunction() {


    //Create variable to count correct answers 
    var correctAnswers = 0;

    var q1 = document.getElementById("q1a").checked;
    var q2 = document.getElementById("q2a").checked;
    var q3 = document.getElementById("q3a").checked;
    var q4 = document.getElementById("q4a").checked;
    var q5 = document.getElementById("q5a").checked;
    var q6 = document.getElementById("q6a").checked;
    var q7 = document.getElementById("q7a").checked;
    var q8 = document.getElementById("q8a").checked;
    var q9 = document.getElementById("q9a").checked;

    var object = {};
    var formData = new FormData(document);
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    var json = JSON.stringify(object);






    //Assign correct answers to field inputs

    if (q1) {
        correctAnswers += 1;
    }

    if (q2) {
        correctAnswers += 1;
    }

    if (q3) {
        correctAnswers += 1;
    }

    if (q4) {
        correctAnswers += 1;
    } if (q5) {
        correctAnswers += 1;
    }


    if (q6) {
        correctAnswers += 1;
    }

    if (q7) {
        correctAnswers += 1;
    } if (q8) {
        correctAnswers += 1;
    }

    if (q9) {
        correctAnswers += 1;
    }


    //Print results (and statement) to document, dependant on outcome
    if (correctAnswers === 9) {
        document.getElementById("result").innerHTML = "You only got 9 answers correct ";
    }
    else if (correctAnswers >= 8) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";
    }
    else if (correctAnswers >= 7) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";
    }
    else if (correctAnswers >= 2) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";
    }
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";
    }
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";
    }

    //Print book slot
    document.getElementById("answers").innerHTML = "Book Slot";

    //Reset contents of form
    document.getElementById("quiz-form").reset();
}



