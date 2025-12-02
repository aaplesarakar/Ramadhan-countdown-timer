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
