function changeTitlesAndIcon(newTitle, newIcon) {
    localStorage.setItem('pageTitle', newTitle);
    localStorage.setItem('pageIcon', newIcon);
    updateTitlesAndIcon();
}

function updateTitlesAndIcon() {
    const newTitle = localStorage.getItem('pageTitle');
    const newIcon = localStorage.getItem('pageIcon');
    if (newTitle) {
        document.title = newTitle;
    }
    if (newIcon) {
        changeFavicon(newIcon);
    }
}

function storeOriginalTitleAndIcon() {
    const originalTitle = document.title;
    const originalIcon = document.querySelector('link[rel="icon"]').getAttribute('href');
    if (!localStorage.getItem('originalTitle')) {
        localStorage.setItem('originalTitle', originalTitle);
    }
    if (!localStorage.getItem('originalIcon')) {
        localStorage.setItem('originalIcon', originalIcon);
    }
}

function resetTitlesAndIcon() {
    const originalTitle = localStorage.getItem('originalTitle');
    const originalIcon = localStorage.getItem('originalIcon');
    if (originalTitle) {
        localStorage.removeItem('pageTitle');
        document.title = originalTitle;
    }
    if (originalIcon) {
        localStorage.removeItem('pageIcon');
        changeFavicon(originalIcon);
    }
}

function changeFavicon(iconURL) {
    const link = document.querySelector('link[rel="icon"]') || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = iconURL;
    document.getElementsByTagName('head')[0].appendChild(link);
}

window.onload = function() {
    storeOriginalTitleAndIcon();
    updateTitlesAndIcon();
};
