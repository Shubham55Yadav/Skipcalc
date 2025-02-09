function calculate() {
    const attended = parseInt(document.getElementById('attended').value, 10);
    const happened = parseInt(document.getElementById('happened').value, 10);
    const total = parseInt(document.getElementById('total').value, 10);
    const percentage = parseFloat(document.getElementById('percentage').value);

    const resultElement = document.getElementById('result');

    // Validate inputs
    if (attended > happened) {
        resultElement.textContent = "Error: Attended classes cannot exceed total classes happened till date.";
        return;
    }
    
    if (percentage < 0 || percentage > 100) {
        resultElement.textContent = "Error: Percentage should be between 0 and 100.";
        return;
    }

    // Calculations
    const futureClasses = total - happened;
    const requiredAttendance = Math.ceil((percentage / 100) * total);
    const totalClassesYouCanSkip = futureClasses - (requiredAttendance - attended);

    // Display result
    if (totalClassesYouCanSkip < 0) {
        resultElement.textContent = "You cannot skip any classes to maintain the desired attendance percentage.";
    } else {
        resultElement.textContent = `The total number of classes that you can skip is: ${totalClassesYouCanSkip}`;
    }
}
