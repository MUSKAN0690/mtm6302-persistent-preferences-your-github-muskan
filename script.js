document.addEventListener("DOMContentLoaded", function() {
    const dynamicList = document.getElementById("dynamic-list");
    const themeSelect = document.getElementById("theme-select");
    const listStyleSelect = document.getElementById("list-style-select");

    
    themeSelect.addEventListener("change", changeTheme);
    listStyleSelect.addEventListener("change", changeListStyle);


    const items = ['RED', 'PINK', 'BLACK', 'WHITE', 'ORANGE'];
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        dynamicList.appendChild(li);
    });

   
    loadPreferences();

    function changeTheme() {
        document.body.className = themeSelect.value;
        savePreferences();
    }

    function changeListStyle() {
        dynamicList.className = listStyleSelect.value;
        savePreferences();
    }

    function savePreferences() {
        localStorage.setItem('theme', themeSelect.value);
        localStorage.setItem('listStyle', listStyleSelect.value);
    }

    function loadPreferences() {
        const savedTheme = localStorage.getItem('theme');
        const savedListStyle = localStorage.getItem('listStyle');
        if (savedTheme) {
            themeSelect.value = savedTheme;
            changeTheme();
        }
        if (savedListStyle) {
            listStyleSelect.value = savedListStyle;
            changeListStyle();
        }
    }
});
