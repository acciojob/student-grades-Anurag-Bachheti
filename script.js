async function getStudentGrades() {
  try {
    // Fetch JSON file
    const response = await fetch('students.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse as JSON
    const students = await response.json();

    // Calculate and log the average marks
    students.forEach(student => {
      const total = student.marks.reduce((sum, mark) => sum + mark, 0);
      const avg = total/student.marks.length;
      console.log(`${student.name}: Average Marks = ${avg.toFixed(2)}`);
    });

  } catch (error) {
    console.error('Error fetching student data:', error);
  }
}

// Call the function
getStudentGrades();
