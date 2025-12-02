// पेज लोड झाल्यावर identify फंक्शन रन होईल
document.addEventListener('DOMContentLoaded', identify);

const themeSwitch = document.getElementById("switch");
if (themeSwitch) {
    themeSwitch.addEventListener('change', toggleCheck);
}

function identify() {
    // LocalStorage तपासा
    if (localStorage.getItem("theme") === "dark") {
        setDark(true);
        if(themeSwitch) themeSwitch.checked = true;
    } else {
        setDark(false);
    }
}

function setDark(isDark) {
    if (isDark) {
        document.body.setAttribute("id", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("id", "light");
        localStorage.removeItem("theme");
    }
}

function toggleCheck() {
    if (themeSwitch.checked) {
        setDark(true);
    } else {
        setDark(false);
    }
}


// --- Modal Logic ---
const modal = document.getElementById("donationModal");
const btn = document.getElementById("donateBtn");
const span = document.getElementsBy className("close-btn")[0]; // Note: class selector fix

// जर एलिमेंट्स सापडले तरच कोड रन करा
if (modal && btn) {
    // बटन क्लिक केल्यावर मोडल उघडा
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    // 'X' (Close) वर क्लिक केल्यावर बंद करा
    // getElementsByClassName array return करते, म्हणून [0] वापरला आहे
    const closeBtn = document.querySelector(".close-btn");
    if(closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // मोडलच्या बाहेर क्लिक केल्यावर बंद करा
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

