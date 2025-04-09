// Function to change the font of the entire webpage
function changeFont(fontName) {
    document.body.style.fontFamily = fontName;
    localStorage.setItem('selectedFont', fontName);
}

// Apply the saved font on page load
window.onload = function() {
    const savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
        document.body.style.fontFamily = savedFont;
    }
};

