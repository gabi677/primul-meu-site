// --- 1. GALERIE DE 10 IMAGINI ---
const imagini = [
    { url: "https://picsum.photos/id/10/600/400", titlu: "Pădure Muntoasă" },
    { url: "https://picsum.photos/id/28/600/400", titlu: "Cale Ferată Părăsită" },
    { url: "https://picsum.photos/id/49/600/400", titlu: "Oraș pe Noapte" },
    { url: "https://picsum.photos/id/54/600/400", titlu: "Muniția Naturii" },
    { url: "https://picsum.photos/id/64/600/400", titlu: "Apus pe Ocean" },
    { url: "https://picsum.photos/id/106/600/400", titlu: "Floare Roz" },
    { url: "https://picsum.photos/id/116/600/400", titlu: "Toamnă Aurie" },
    { url: "https://picsum.photos/id/142/600/400", titlu: "Vârfuri Înzăpezite" },
    { url: "https://picsum.photos/id/160/600/400", titlu: "Furtună pe Mare" },
    { url: "https://picsum.photos/id/200/600/400", titlu: "Bizon în Sălbăticie" }
];

const imgElement = document.getElementById('imagine-dinamica');
const titluElement = document.getElementById('titlu-produs');

// Buton 1: Schimbă imaginea random
document.getElementById('btn-random').addEventListener('click', () => {
    // Generăm un index aleatoriu între 0 și 9
    const indexRandom = Math.floor(Math.random() * imagini.length);
    const alegere = imagini[indexRandom];
    
    // Efect de tranziție (fade out / fade in)
    imgElement.style.opacity = '0';
    setTimeout(() => {
        imgElement.src = alegere.url;
        titluElement.innerText = alegere.titlu;
        imgElement.style.opacity = '1';
    }, 200);
});

// Buton 2: Schimbă culorile lichidului
let culoareUnda = '#3b82f6';
document.getElementById('btn-theme').addEventListener('click', () => {
    const culori = ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'];
    culoareUnda = culori[Math.floor(Math.random() * culori.length)];
});

// Buton 3: Informații Produs
document.getElementById('btn-info').addEventListener('click', () => {
    alert("Această aplicație demo folosește efecte Canvas interactive și API-ul Unsplash/Picsum pentru imagini.");
});


// --- 2. EFECTUL LICHID DIN FUNDAL (CANVAS ANIMATION) ---
const canvas = document.getElementById('liquid-canvas');
const ctx = canvas.getContext('2d');

function redimensioneaza() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', redimensioneaza);
redimensioneaza();

let timp = 0;
function animatieLichid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenăm 3 valuri suprapuse pentru efectul fluid
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.fillStyle = culoareUnda;
        ctx.globalAlpha = 0.2 - i * 0.05; // Transparență
        
        ctx.moveTo(0, canvas.height);
        for (let x = 0; x <= canvas.width; x += 10) {
            // Formula matematică pentru mișcarea undelor lichide
            const y = Math.sin(x * 0.003 + timp + i) * 40 + 
                      Math.cos(x * 0.001 + timp * 0.8) * 30 + 
                      (canvas.height / 2);
            ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fill();
    }
    
    timp += 0.015; // Viteza animației
    requestAnimationFrame(animatieLichid);
}

animatieLichid();