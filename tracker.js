// tracker.js

// Track clicks on specific elements
document.querySelectorAll('.trackable').forEach(element => {
    element.addEventListener('click', (event) => {
        gtag('event', 'click', {
            'event_category': 'post',
            'event_label': event.target.href,
            'value': 1
        });
    });
});

// Track time spent on the page
let startTime = new Date();
window.addEventListener('beforeunload', () => {
    let endTime = new Date();
    let timeSpent = (endTime - startTime) / 1000; // Time in seconds
    gtag('event', 'time_spent', {
        'event_category': 'engagement',
        'event_label': 'time on page',
        'value': timeSpent
    });
});
