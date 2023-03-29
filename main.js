const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,{
    loop: true,
    delay:80
});

typewriter
.typeString('Prueba')
.pauseFor(200)
.start();