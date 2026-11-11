// حفظ استجابة العدادات داخل المتصفح (Local Storage) حتى لا تضيع الأعداد عند الخروج من الصفحة

const counters = {
    tasbeeh: 0,
    tahmeed: 0,
    tahleel: 0,
    takbeer: 0,
    salawat: 0,
    istighfar: 0
};

// تحميل الأعداد المسجلة مسبقاً إن وجدت
window.onload = function() {
    for (let key in counters) {
        let savedValue = localStorage.getItem('counter_' + key);
        if (savedValue !== null) {
            counters[key] = parseInt(savedValue);
            document.getElementById(key + '-count').innerText = counters[key];
        }
    }
};

// زيادة العداد
function increment(type) {
    if (counters.hasOwnProperty(type)) {
        counters[type]++;
        document.getElementById(type + '-count').innerText = counters[type];
        localStorage.setItem('counter_' + type, counters[type]);
    }
}

// إعادة ضبط العداد
function resetCount(type) {
    if (counters.hasOwnProperty(type)) {
        counters[type] = 0;
        document.getElementById(type + '-count').innerText = 0;
        localStorage.setItem('counter_' + type, 0);
    }
}
