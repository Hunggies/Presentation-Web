import React, { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';

const CountingNumber = ({ value, duration = 1, delay = 0, startTrigger }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (startTrigger) {
      const timeout = setTimeout(() => {
        const controls = animate(0, value, {
          duration: duration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => setDisplayValue(latest.toFixed(value % 1 === 0 ? 0 : 2))
        });
        return () => controls.stop();
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [value, duration, delay, startTrigger]);
  return <span>{displayValue}</span>;
};

const Slide_4_Minimal_Dark = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <div ref={containerRef} style={{
      width: '100%', height: '100vh', 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 8%', gap: '80px', 
      color: '#ffffff',
      overflow: 'hidden',
      fontFamily: '"Inter", sans-serif'
    }}>
      
      <div style={{ flex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          
          <h2 style={{ 
            fontSize: '2rem', margin: '15px 0', fontWeight: 800, fontFamily: '"JetBrains Mono", monospace',
            lineHeight: 1.1, color: '#fff' 
          }}>
            ĐẠI HỌC BÁCH KHOA TP HỒ CHÍ MINH
          </h2>
          <h2 style={{ 
            fontSize: '1rem', margin: '15px 0', fontFamily: '"JetBrains Mono", monospace',
            lineHeight: 1.1, color: '#999' 
          }}>
            // HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY
          </h2>
          
          <div style={{ width: '60px', height: '4px', background: '#fff', marginBottom: '40px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: '0.75rem', color: '#555', marginBottom: '10px', fontFamily: 'monospace' }}>[ 01. ĐIỂM XÉT TUYỂN ]</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
                <span style={{ fontSize: '4.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                  <CountingNumber value={85.41} delay={0.5} startTrigger={isInView} />
                </span>
                <span style={{ fontSize: '1.2rem', color: '#00d8ff', fontWeight: 600 }}>pts</span>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#222', marginTop: '10px', position: 'relative' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '50%' } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  style={{ 
                    position: 'absolute', height: '2px', top: -0.5, 
                    background: '#00d8ff', width: '50%',
                    boxShadow: '0 0 10px rgba(0, 216, 255, 0.5)'
                  }}
                />
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: '0.75rem', color: '#555', marginBottom: '10px', fontFamily: 'monospace' }}>[ 02. ĐIỂM SAT ]</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#ddd' }}>
                  <CountingNumber value={1550} delay={0.8} startTrigger={isInView} />
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      <div style={{ flex: 1.2, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div style={{ position: 'relative', zIndex: 1 }}>
            <img 
              src="https://hcmut.edu.vn/img/carouselItem/36986508.jpeg?t=36986508" 
              alt="HCMUT"
              style={{ 
                width: '100%', height: '500px', objectFit: 'cover', 
                borderRadius: '2px', border: '1px solid rgba(255,255,255,0.1)' 
              }}
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
                background: 'linear-gradient(90deg, rgba(0, 216, 255, 0.08), transparent)',
                pointerEvents: 'none'
              }}
            />
          </div>

          <div style={{ marginTop: '10px', textAlign: 'left' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#555' }}>NGUỒN: </span>
            <motion.a 
              href="https://hcmut.edu.vn/img/carouselItem/36986508.jpeg?t=36986508"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ textDecoration: 'underline' }}
              style={{ color: '#00a8ff', textDecoration: 'none', cursor: 'pointer', fontFamily: 'monospace', fontSize: '0.7rem' }}
              >
              https://hcmut.edu.vn/img/carouselItem/36986508.jpeg?t=36986508
              </motion.a>
          </div>
        </motion.div>

        <div style={{ position: 'absolute', top: '-10px', left: '-10px', color: '#00d8ff', fontSize: '20px', opacity: 0.5 }}>+</div>
        <div style={{ position: 'absolute', bottom: '40px', right: '-10px', color: '#00d8ff', fontSize: '20px', opacity: 0.5 }}>+</div>
      </div>

    </div>
  );
};

export default Slide_4_Minimal_Dark;