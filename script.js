// التبديل بين الأقسام من الشريط الجانبي
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.section-block');
    sections.forEach(sec => sec.classList.add('hidden'));

    // إزالة الحالة النشطة عن كل الأزرار
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // إظهار القسم المطلوب وتفعيل الزر الخاص به
    document.getElementById(sectionId).classList.remove('hidden');
    event.target.classList.add('active');
}

const targets = {
    taraham: 100, istighfar: 100, tasbeeh: 100, tahmeed: 100, tahleel: 100, 
    takbeer: 100, sabah: 50, nawm: 50
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
