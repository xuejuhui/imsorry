document.addEventListener('DOMContentLoaded', () => {

    (function frame() {
        // launch a few confetti from the left edge
        confetti({
            particleCount: 7,
            angle: 180,
            spread: 360,
            origin: { x: 0.8, y:0 }
        });
        // and launch a few from the right edge
        confetti({
            particleCount: 7,
            angle: 360,
            spread: 360,
            origin: { x: 0.2, y:0 }
        });

        // keep going
        if (Date.now()) {
            requestAnimationFrame(frame);
        }
    }());
})