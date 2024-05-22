document.addEventListener('DOMContentLoaded', () => {
    const imagedecon = document.getElementById('imagedecon'); 
    const audio = document.getElementById('audio');
    const gifContainer = document.getElementById('gif-container');
    // Changer les nom qui sont entre '' si vous avez au nom même nom dans le fichier html

    imagedecon.addEventListener('click', () => {
        audio.play();
        gifContainer.style.display = 'block';
        setTimeout(() => {
            gifContainer.style.display = 'none';
        }, 1350); // Mettez le double du temps de votre gif ou audio pour ne pas avoir de problème
    });
});
