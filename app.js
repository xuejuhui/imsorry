document.addEventListener("DOMContentLoaded", () => {
  let present = document.getElementById("present");
  present.addEventListener("click", openBox);

  function playSong() {
    let birthdaySong = document.getElementById("birthday-song");
    birthdaySong.play();
  }
  function openBox() {
    let sec = 1;
    let gift = document.getElementById("gift");
    let present = document.getElementById("present");
    // reset animation
    const shake = setInterval(function() {
      // -> delete class
      gift.classList.remove("apply-shake");
      // -> triggering reflow The actual magic
      // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
      gift.offsetWidth = gift.offsetWidth;
      // -> add the animation class so the animation is restarted
      gift.classList.add("apply-shake");
      sec++;
      // Stop shaking after 5th sec fade and start main animation and show confetti
      if (sec === 5) {
        stopShaking(shake);
        fade(present);
        startMain();
        showConfetti();
      }
    }, 1000);
  }

  function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function() {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= op * 0.1;
    }, 50);
  }

  function startMain() {
    let main = document.getElementById("main");
    main.classList.add("center");
  }
  function stopShaking(shake) {
    clearInterval(shake);
  }

  function showConfetti() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 5,
      angle: 180,
      spread: 360,
      origin: { x: 0.8, y: 0 }
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 5,
      angle: 360,
      spread: 360,
      origin: { x: 0.2, y: 0 }
    });

    // keep showing confetti and play birthday song
    if (Date.now()) {
      requestAnimationFrame(showConfetti);
      playSong();
    }
  }
});
