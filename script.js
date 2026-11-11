const targets = {
    taraham: 100, istighfar: 100, tasbeeh: 100, tahmeed: 100, tahleel: 100, 
    takbeer: 100, muawidhat: 100, shahaada: 100, salawat: 100, tawba: 100,
    sabah: 50, masaa: 50, nawm: 50, istiyqath: 50
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

// تغيير القارئ في المشغل الصوتي
function changeAudio(surahId, url) {
    let audioPlayer = document.getElementById('audio-' + surahId);
    if (audioPlayer) {
        audioPlayer.src = url;
        audioPlayer.play();
    }
}
