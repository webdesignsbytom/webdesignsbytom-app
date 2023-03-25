import React, { useEffect } from 'react';

function Particles() {
  const useScript = (url) => {
    useEffect(() => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const container = document.querySelector('#particles');

      container.appendChild(canvas);

      var rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      console.log('canvas', canvas);
      console.log('ctx', ctx);
      console.log('container', container);
      console.log('rect', rect);

      let particlesArray;

      let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 90) * (canvas.width / 90),
      };

      container.addEventListener('mousemove', function (e) {
        console.log(e);
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
          ctx.fillStyle = `#000000`;
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

      // create particle array
      function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 8000;
        for (let i = 0; i < numberOfParticles * 1; i++) {
          let size = Math.random() * 4 + 1;
          let x = Math.random() * (rect.width - size * 2 - size * 2) + size * 2;
          let y =
            Math.random() * (rect.height - size * 2 - size * 2) + size * 2;
          let directionX = Math.random() * 5 - 2.5;
          let directionY = Math.random() * 5 - 2.5;
          let colour = '#000000';

          particlesArray.push(
            new Particle(x, y, directionX, directionY, size, colour)
          );
        }

        if (particlesArray.length < 400) {
          setInterval(() => {
            console.log('x', particlesArray.length);
            let size = Math.random() * 4 + 1;
            let x =
              Math.random() * (rect.width - size * 2 - size * 2) + size * 2;
            let y =
              Math.random() * (rect.height - size * 2 - size * 2) + size * 2;
            let directionX = Math.random() * 5 - 2.5;
            let directionY = Math.random() * 5 - 2.5;
            let colour = '#000000';

            particlesArray.push(
              new Particle(x, y, directionX, directionY, size, colour)
            );
          }, 100);
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
              opacityValue = 1 - distance / 5000;
              ctx.strokeStyle = 'rgba(0,0,0,' + opacityValue + ')';
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
