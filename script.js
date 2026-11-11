const targets = {
    // ملف الأذكار الأساسي (adhkar.html)
    taraham: 100, 
    ibrahimiyyah: 100, 
    istighfar: 100, 
    tasbeeh: 100, 
    tasbeehExtra: 100, 
    tahmeed: 100, 
    tahleel: 100, 
    takbeer: 100, 
    hawqala: 100, 
    muawidhat: 100, 
    shahaada: 100, 
    nawm: 50,
    
    // أذكار الصباح والمساء والأدعية النبوية (morning-evening.html)
    sabah: 50,
    masaa: 50,
    sayedIstighfar: 100,
    hasbi: 100,
    afiah: 100,
    hayy: 100,
    ayatKursi: 100,
    radayt: 100,
    istiyqath: 50
};

let counts = {};

window.onload = function() {
    for (let key in targets) {
        let saved = localStorage.getItem('cnt_' + key);
        counts[key] = saved ? parseInt(saved) : 0;
        updateUI(key);
    }
};

function increment(key, maxTarget) {
    counts[key]++;
    localStorage.setItem('cnt_' + key, counts[key]);
    updateUI(key);
}

function resetCount(key) {
    counts[key] = 0;
    localStorage.setItem('cnt_' + key, 0);
    updateUI(key);
}

function updateUI(key) {
    let countEl = document.getElementById(key + '-count');
    let progressEl = document.getElementById(key + '-progress');

    if (countEl) countEl.innerText = counts[key];
    if (progressEl) {
        let percentage = Math.min((counts[key] / targets[key]) * 100, 100);
        progressEl.style.width = percentage + '%';
    }
}

function changeAudio(surahId, url) {
    let audioPlayer = document.getElementById('audio-' + surahId);
    if (audioPlayer) {
        audioPlayer.src = url;
        audioPlayer.play();
    }
}
