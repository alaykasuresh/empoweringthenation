document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.course-checkbox');
    const selectedCoursesField = document.getElementById('selectedCourses');
    const calculateBtn = document.getElementById('calculateBtn');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateSelectedCourses();
        });
    });

    calculateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        calculateTotal();
    });

    function updateSelectedCourses() {
        let selectedCourses = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedCourses.push(checkbox.value);
            }
        });
        selectedCoursesField.value = selectedCourses.join('\n');
    }

    function calculateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                let price = parseInt(checkbox.value.match(/\d+/)[0]);
                total += price;
            }
        });
        alert(`Total price: R${total}`);
    }
});
