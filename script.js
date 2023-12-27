function clearForm() {
    document.getElementById('rollNo').value = '';
    document.getElementById('name').value = '';
    document.getElementById('fName').value = '';
    document.getElementById('class').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('mobileNo').value = '';
    document.getElementById('cgpa').value = '';
}
// Function to add a new student to the table
function addStudent() {
    // Get input values from the form
    const rollNo = document.getElementById('rollNo').value;
    const name = document.getElementById('name').value;
    const fName = document.getElementById('fName').value;
    const _class = document.getElementById('class').value;
    const gender = document.getElementById('gender').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const cgpa = document.getElementById('cgpa').value;

    // Reference to the table body where the data will be displayed
    const tableBody = document.getElementById('studentData');

    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert cells with student data into the row
    newRow.insertCell().appendChild(document.createTextNode(rollNo));
    newRow.insertCell().appendChild(document.createTextNode(name));
    newRow.insertCell().appendChild(document.createTextNode(fName));
    newRow.insertCell().appendChild(document.createTextNode(_class));
    newRow.insertCell().appendChild(document.createTextNode(gender));
    newRow.insertCell().appendChild(document.createTextNode(mobileNo));
    newRow.insertCell().appendChild(document.createTextNode(cgpa));

    // Clear input fields after adding the student
    document.getElementById('rollNo').value = '';
    document.getElementById('name').value = '';
    document.getElementById('fName').value = '';
    document.getElementById('class').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('mobileNo').value = '';
    document.getElementById('cgpa').value = '';
    // Function to download data as a CSV file
}
    function downloadCSV() {
        const table = document.getElementById('studentTable');
        const rows = table.querySelectorAll('tr');

        let csv = [];
        for (let i = 0; i < rows.length; i++) {
            let row = [], cols = rows[i].querySelectorAll('td, th');

            for (let j = 0; j < cols.length; j++) {
                row.push(cols[j].innerText);
            }

            csv.push(row.join(','));
        }

        // Create a Blob object with the CSV data
        const csvData = new Blob([csv.join('\n')], { type: 'text/csv' });
        const csvUrl = URL.createObjectURL(csvData);

        // Create a link element to download the CSV file
        const link = document.createElement('a');
        link.href = csvUrl;
        link.download = 'student_data.csv';
        link.click();
    }