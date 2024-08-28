document.addEventListener('DOMContentLoaded', function() {
    var shareMenu = document.getElementById('share-menu');
    shareMenu.style.display = 'none';

    document.getElementById('share-button').addEventListener('click', function() {
        if (shareMenu.style.display === 'flex') {
            shareMenu.style.display = 'none';
        } else {
            shareMenu.style.display = 'flex';
        }
    });
});
