document.getElementById('yesButton').addEventListener('click', () => {
    displayEmojis('happy');
});

document.getElementById('noButton').addEventListener('click', () => {
    displayEmojis('sad');
});

function displayEmojis(mood) {
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = '';
    let emojis = '';
    
    if (mood === 'happy') {
        emojis = '😊🥰😍💖💕';
    } else if (mood === 'sad') {
        emojis = '😢💔😞😔';
    }

    emojiContainer.textContent = emojis;
}
