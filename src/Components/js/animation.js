export function startCanvasAnimation(canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#FF5733", "#33FFBD", "#335BFF", "#FFC133", "#FF33A6"];
  const particleCount = 20; // বলের সংখ্যা

  class Particle {
    constructor() {
      this.radius = Math.random() * 3 + 1; // ছোট সাইজের বল
      this.reset(); // এলোমেলো অবস্থান এবং দিক নির্ধারণ
    }

    reset() {
      const side = Math.floor(Math.random() * 4); // এলোমেলো দিক নির্ধারণ (0-3)
      const slowSpeed = (Math.random() * 0.3 + 0.05); // ধীর গতি
      switch (side) {
        case 0: // বাম থেকে ডান
          this.x = -this.radius;
          this.y = Math.random() * canvas.height;
          this.speedX = slowSpeed;
          this.speedY = (Math.random() - 0.5) * 0.05;
          break;
        case 1: // ডান থেকে বাম
          this.x = canvas.width + this.radius;
          this.y = Math.random() * canvas.height;
          this.speedX = -slowSpeed;
          this.speedY = (Math.random() - 0.5) * 0.05;
          break;
        case 2: // উপর থেকে নিচ
          this.x = Math.random() * canvas.width;
          this.y = -this.radius;
          this.speedX = (Math.random() - 0.5) * 0.05;
          this.speedY = slowSpeed;
          break;
        case 3: // নিচ থেকে উপর
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + this.radius;
          this.speedX = (Math.random() - 0.5) * 0.05;
          this.speedY = -slowSpeed;
          break;
      }
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.shadowLength = this.radius * 52; // শ্যাডো দৈর্ঘ্য
    }

    draw() {
      // শ্যাডো তৈরি
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(
        this.x,
        this.y,
        this.x - this.speedX * this.shadowLength,
        this.y - this.speedY * this.shadowLength
      );
      gradient.addColorStop(0, this.color + "95"); // উজ্জ্বল শ্যাডো
      gradient.addColorStop(1, "transparent");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = this.radius * 1.5;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x - this.speedX * this.shadowLength,
        this.y - this.speedY * this.shadowLength
      );
      ctx.stroke();
      ctx.closePath();

      // বল আঁকা
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // স্ক্রিনের বাইরে গেলে পুনরায় তৈরি
      if (
        this.x - this.radius > canvas.width ||
        this.x + this.radius < 0 ||
        this.y - this.radius > canvas.height ||
        this.y + this.radius < 0
      ) {
        this.reset();
      }

      this.draw();
    }
  }

  function createParticles() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => particle.update());
    requestAnimationFrame(animate);
  }

  createParticles();
  animate();
}
