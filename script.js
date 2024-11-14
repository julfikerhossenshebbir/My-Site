window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.body.classList.remove('loading');
    }, 2000);
});

document.body.classList.add('loading');
