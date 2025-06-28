function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date ();
    clock.textContent = now.toLocaleTimeString('en-GB', {hour12: false});
}

setInterval(updateClock, 1000);
updateClock();
