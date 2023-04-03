import React, { useEffect } from 'react';

function Particles() {
  const useScript = (url) => {
    useEffect(() => {
      let bgColour = `#000000`
      let particleColour = `#000000`

      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        bgColour = `#ffffff`
        particleColour = `#ffffff`
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const container = document.querySelector('#particles');

      container.appendChild(canvas);

      var rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      let particlesArray;

      let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 90) * (canvas.width / 90),
      };

      container.addEventListener('mousemove', function (e) {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      class Particle {
        constructor(x, y, directionX, directionY, size, colour, speed) {
          this.x = x;
          this.y = y;
          this.directionX = directionX;
          this.directionY = directionY;
          this.size = size;
          this.colour = colour;
          this.speed = speed;
        }

        // draw each particle
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
          ctx.fillStyle = bgColour;
          ctx.fill();
        }
        // check particle position
        update() {
          // check is particle is still in canvas
          if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
          }
          if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionX;
          }

          // check for collision
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
              this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
              this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
              this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
              this.y -= 10;
            }
          }
          // move
          this.x += this.directionX;
          this.y += this.directionY;

          // draw
          this.draw();
        }
      }

      function init() {
        particlesArray = [];
        // create particle array for large screen
        if (canvas.width < 500) {
          let numberOfParticles = (canvas.height * canvas.width) / 1800;
          for (let i = 0; i < numberOfParticles * 2.2; i++) {
            let size = Math.random() * 2 + 1;
            let x =
              Math.random() * (rect.width - size * 2 - size * 2) + size * 2;
            let y =
              Math.random() * (rect.height - size * 2 - size * 2) + size * 2;
            let directionX = Math.random() * 5 - 2.5;
            let directionY = Math.random() * 5 - 2.5;
            let colour = particleColour;

            particlesArray.push(
              new Particle(x, y, directionX, directionY, size, colour)
            );
          }
        } else {
          let numberOfParticles = (canvas.height * canvas.width) / 1800;
          for (let i = 0; i < numberOfParticles; i++) {
            let size = Math.random() * 4 + 1;
            let x =
              Math.random() * (rect.width - size * 2 - size * 2) + size * 2;
            let y =
              Math.random() * (rect.height - size * 2 - size * 2) + size * 2;
            let directionX = Math.random() * 5 - 2.5;
            let directionY = Math.random() * 5 - 2.5;
            let colour = particleColour;

            particlesArray.push(
              new Particle(x, y, directionX, directionY, size, colour)
            );
          }
        }
      }

      // check if particles are close enough to draw a line between
      function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
          for (let b = 0; b < particlesArray.length; b++) {
            let distance =
              (particlesArray[a].x - particlesArray[b].x) *
                (particlesArray[a].x - particlesArray[b].x) +
              (particlesArray[a].y - particlesArray[b].y) *
                (particlesArray[a].y - particlesArray[b].y);

            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
              if (canvas.width < 500) {
                opacityValue = 1 - distance / 1500;
              } else {
                opacityValue = 1 - distance / 5000;
              }

              if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
              ) {
                ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';
              } else {
                ctx.strokeStyle = 'rgba(0,0,0,' + opacityValue + ')';
              }
              ctx.beginPath();
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, rect.width, rect.height);

        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
        }

        connect();
      }

      init();
      animate();

      window.addEventListener('resize', () => {
        canvas.width = rect.width;
        canvas.height = rect.height;
        init();
      });
      return () => {
        window.removeEventListener('resize', () => {
          canvas.width = rect.width;
          canvas.height = rect.height;
          init();
        });
      };
    }, [url]);
  };
  return (
    <div id='particles' className='grid w-full h-full'>
      {useScript()}
    </div>
  );
}

export default Particles;
