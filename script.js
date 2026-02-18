function calculateCGPA() {
    // Get grades and credits
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let credit1 = parseFloat(document.getElementById("credit1").value);

    let grade2 = parseFloat(document.getElementById("grade2").value);
    let credit2 = parseFloat(document.getElementById("credit2").value);

    let grade3 = parseFloat(document.getElementById("grade3").value);
    let credit3 = parseFloat(document.getElementById("credit3").value);

    let grade4 = parseFloat(document.getElementById("grade4").value);
    let credit4 = parseFloat(document.getElementById("credit4").value);

    let grade5 = parseFloat(document.getElementById("grade5").value);
    let credit5 = parseFloat(document.getElementById("credit5").value);

    // Optional: Target CGPA
    let targetCGPA = parseFloat(document.getElementById("targetCGPA").value);
    let futureCredits = parseFloat(document.getElementById("futureCredits").value);

    // Check if inputs are valid numbers
    if (isNaN(grade1) || isNaN(credit1) || isNaN(grade2) || isNaN(credit2) ||
        isNaN(grade3) || isNaN(credit3) || isNaN(grade4) || isNaN(credit4) ||
        isNaN(grade5) || isNaN(credit5)) {
        document.getElementById("result").innerText = "⚠️ Please enter all grades and credits!";
        return;
    }

    // Calculate current CGPA
    let totalCredits = credit1 + credit2 + credit3 + credit4 + credit5;
    let totalGradePoints = (grade1 * credit1) + (grade2 * credit2) + (grade3 * credit3) +
                           (grade4 * credit4) + (grade5 * credit5);
    let currentCGPA = totalGradePoints / totalCredits;

    let output = "✅ Your current CGPA: " + currentCGPA.toFixed(2);

    // If target entered, calculate required average
    if (!isNaN(targetCGPA) && !isNaN(futureCredits) && futureCredits > 0) {
        let requiredTotalGradePoints = (targetCGPA * (totalCredits + futureCredits)) - totalGradePoints;
        let requiredAverage = requiredTotalGradePoints / futureCredits;
        output += "\n🎯 To reach target CGPA, you need an average of: " + requiredAverage.toFixed(2) + " in future credits.";
    }

    // Show result
    document.getElementById("result").innerText = output;
}
