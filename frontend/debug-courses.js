// Quick debugging script for browse courses
// Open browser console and run this to see what's happening

console.log('=== BROWSE COURSES DEBUG ===');
console.log('Student ID:', localStorage.getItem('userId'));
console.log('Student Grade:', localStorage.getItem('studentGrade'));
console.log('API Base URL:', 'http://localhost:8080');

// Test API call
fetch('http://localhost:8080/courses')
    .then(res => res.json())
    .then(data => {
        console.log('All courses API response:', data);
        if (data.data && data.data.courses) {
            console.log(`Found ${data.data.courses.length} courses:`);
            data.data.courses.forEach(course => {
                console.log(`- ${course.title} (Status: ${course.status}, Grade: ${course.targetGrade || 'All'})`);
            });
        }
    });

// Test with grade filter
const grade = localStorage.getItem('studentGrade');
if (grade) {
    fetch(`http://localhost:8080/courses?grade=${grade}`)
        .then(res => res.json())
        .then(data => {
            console.log(`Courses for Grade ${grade}:`, data);
            if (data.data && data.data.courses) {
                console.log(`Found ${data.data.courses.length} courses for grade ${grade}`);
            }
        });
}
