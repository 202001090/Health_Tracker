
function trackActivity() {
    const activityInput = document.getElementById('activity');
    const durationInput = document.getElementById('duration');
    const activityList = document.getElementById('activityList');

    const activity = activityInput.value;
    const duration = durationInput.value;

    if (activity && duration) {
        const listItem = document.createElement('li');
        listItem.textContent = `${activity} - ${duration} minutes`;
        activityList.appendChild(listItem);

        // Clear input fields after tracking
        activityInput.value = '';
        durationInput.value = '';
    } else {
        alert('Please enter both activity and duration.');
    }
}
