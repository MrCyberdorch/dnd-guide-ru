
// PAGE SWITCHING

document.querySelectorAll('.nav-btn')
.forEach(btn=>{

    btn.addEventListener('click',()=>{

        document.querySelectorAll('.nav-btn')
        .forEach(b=>b.classList.remove('active'));

        btn.classList.add('active');

        const target = btn.dataset.page;

        document.querySelectorAll('.page')
        .forEach(page=>page.classList.remove('active'));

        document.getElementById(target)
        .classList.add('active');
    });
});

// THEME

const themeToggle =
document.getElementById('themeToggle');

const savedTheme =
localStorage.getItem('theme');

if(savedTheme){
    document.body.dataset.theme =
    savedTheme;
}

themeToggle.onclick = ()=>{

    const next =
    document.body.dataset.theme === 'dark'
    ? 'light'
    : 'dark';

    document.body.dataset.theme = next;

    localStorage.setItem('theme',next);
};

// PARTICLES

const canvas =
document.getElementById('magic-bg');

const ctx =
canvas.getContext('2d');

let particles = [];

function resize(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

resize();
addEventListener('resize',resize);

for(let i=0;i<70;i++){

    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        vx:(Math.random()-.5)*0.3,
        vy:(Math.random()-.5)*0.3
    });
}

function animate(){

    ctx.clearRect(0,0,
    canvas.width,canvas.height);

    particles.forEach(p=>{

        p.x += p.vx;
        p.y += p.vy;

        if(p.x<0)p.x=canvas.width;
        if(p.x>canvas.width)p.x=0;

        if(p.y<0)p.y=canvas.height;
        if(p.y>canvas.height)p.y=0;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle =
        'rgba(212,162,76,.55)';
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

// MAP

document.querySelectorAll('.map-marker')
.forEach(marker=>{

    marker.onclick = ()=>{

        alert(
            marker.innerText +
            '\n\nПозже здесь будут лор, NPC, музыка и квесты.'
        );
    };
});

// AUDIO

const audio =
document.getElementById('bgAudio');

const soundToggle =
document.getElementById('soundToggle');

let playing = false;

soundToggle.onclick = ()=>{

    if(!playing){

        audio.play();
        soundToggle.innerText =
        '🔇 Выключить';

    }else{

        audio.pause();
        soundToggle.innerText =
        '🔊 Атмосфера';
    }

    playing = !playing;
};
