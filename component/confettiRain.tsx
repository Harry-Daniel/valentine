import confetti from "canvas-confetti";

export function heartRain(duration = 5000) {
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      spread: 70,
      origin: { x: Math.random(), y: 0 },
      shapes: ["text"] as any,
      scalar: 1.8,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
