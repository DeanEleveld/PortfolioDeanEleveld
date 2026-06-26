document.getElementById('mijnKnop').addEventListener('click', function() {
    document.getElementById('doelElement').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
document.getElementById('projecten').addEventListener('click', function() {
    document.getElementById('doelProject').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
document.getElementById('hobby').addEventListener('click', function() {
    document.getElementById('doelRecent').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
document.getElementById('getInTouch').addEventListener('click', function() {
    document.getElementById('doelGetInTouch').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}