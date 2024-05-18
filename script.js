const emojis = ['🎉', '🎊', '🎈', '✨', '🎂'];

// Function to create a random emoji
function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('celebration-section').appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

// Generate emojis every 300ms
setInterval(createEmoji, 300);