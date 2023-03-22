import React from 'react';
import Canvas from '../../components/animations/Canvas';
import ParticleAnimation from '../../components/animations/ParticleAnimation';

function TestPage() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  return (
    <>
      <section className='grid grid-rows-reg h-screen'>
        <div>
          <h1>Particles</h1>
        </div>
        <section className='grid grid-cols-2'>
          <div className='bg-red-200 min-h-[600px]'>
            <Canvas draw={draw} />
          </div>
          <div className='min-h-[600px]'>
            <ParticleAnimation />
          </div>
        </section>
      </section>
    </>
  );
}

export default TestPage;
