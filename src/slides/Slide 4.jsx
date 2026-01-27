import React, { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';

// Component số chạy với delay
const CountingNumber = ({ value, duration = 0.75, delay = 0, startTrigger }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (startTrigger) {
      const timeout = setTimeout(() => {
        const controls = animate(0, value, {
          duration: duration,
          ease: "easeOut",
          onUpdate: (latest) => setDisplayValue(latest.toFixed(value % 1 === 0 ? 0 : 2))
        });
        return () => controls.stop();
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [value, duration, delay, startTrigger]);
  return <span>{displayValue}</span>;
};

const Slide4= () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const cardStyle = {
    position: 'relative',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
    padding: '20px 25px',
    borderRadius: '4px 20px 4px 20px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeft: '4px solid #00d8ff',
    boxShadow: 'inset 0 0 20px rgba(0, 216, 255, 0.05)',
  };

  return (
    <div ref={containerRef} style={{
      width: '100%', height: '100vh', display: 'flex', alignItems: 'center', 
      justifyContent: 'center', padding: '0 10% 0 150px', gap: '60px', color: '#eee'
    }}>
      
      <div style={{ flex: 1.2 }}>
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
          
          <div style={{ overflow: 'hidden', marginBottom: '10px' }}>
            <motion.h2
              variants={{ hidden: { y: 60 }, visible: { y: 0 } }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: '3rem',
                color: '#00d8ff', margin: 0, letterSpacing: '2px', fontWeight: 'bold'
              }}
            >
              ĐẠI HỌC BÁCH KHOA HÀ NỘI
            </motion.h2>
          </div>

          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: '1rem', color: '#fff', marginBottom: '40px', fontFamily: '"JetBrains Mono", monospace' }}
          >
            // HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            <motion.div
              variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
              transition={{ delay: 0.6 }}
              style={cardStyle}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={isInView ? { width: '50%' } : { width: 0 }}
                transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                style={{ 
                  position: 'absolute', left: 0, top: 0, bottom: 0, 
                  background: 'linear-gradient(90deg, rgba(0, 216, 255, 0.15) 0%, transparent 100%)', 
                  zIndex: 0 
                }}
              />
              
              <div style={{ zIndex: 1, display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#00d8ff', transform: 'rotate(45deg)' }} />
                <span style={{ color: '#aaa', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.9rem', letterSpacing: '1px' }}>
                  ĐIỂM THI THPT
                </span>
              </div>

              <span style={{ 
                color: '#00d8ff', fontWeight: 'bold', fontSize: '1.8rem', 
                fontFamily: '"JetBrains Mono", monospace', zIndex: 1,
                textShadow: '0 0 15px rgba(0, 216, 255, 0.5)'
              }}>
                <CountingNumber value={29.19} delay={1.5} startTrigger={isInView} />
              </span>
            </motion.div>

            {/* Ô ĐIỂM SAT */}
            <motion.div
              variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
              transition={{ delay: 0.8 }}
              style={{ ...cardStyle, borderLeft: '4px solid #fff' }}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={isInView ? { width: '50%' } : { width: 0 }}
                transition={{ delay: 1.2, duration: 1.5, ease: "circOut" }}
                style={{ 
                  position: 'absolute', left: 0, top: 0, bottom: 0, 
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)', 
                  zIndex: 0 
                }}
              />

              <div style={{ zIndex: 1, display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#fff', transform: 'rotate(45deg)' }} />
                <span style={{ color: '#aaa', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.9rem', letterSpacing: '1px' }}>
                  ĐIỂM SAT (DỰ KIẾN)
                </span>
              </div>

              <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.8rem', fontFamily: '"JetBrains Mono", monospace', zIndex: 1 }}>
                <CountingNumber value={1550} delay={1.5} startTrigger={isInView} />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <div style={{ flex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%', height: '400px', borderRadius: '4px 40px 4px 40px', overflow: 'hidden',
            border: '1px solid rgba(0, 216, 255, 0.3)', boxShadow: '0 0 40px rgba(0,0,0,0.5)'
          }}>
            <img src="https://hust.edu.vn/assets/sys/news/2025_03/dhbkhn-6920-1658994052-1-16702-2617-6074-1740802743.jpg" alt="HUST" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
          </div>
          
          <div style={{ 
            marginTop: '15px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 
          }}>
            <div style={{ 
              width: '18px', height: '18px', borderRadius: '50%', border: '1px solid #aaa', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold'
            }}>!</div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '1px', color: '#aaa' }}>
              NGUỒN: <motion.a 
                href="https://hust.edu.vn/assets/sys/news/2025_03/dhbkhn-6920-1658994052-1-16702-2617-6074-1740802743.jpg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ textDecoration: 'underline' }}
                style={{ color: '#00a8ff', textDecoration: 'none', cursor: 'pointer' }}
              >
                https://hust.edu.vn/assets/sys/news/2025_03/dhbkhn-6920-1658994052-1-16702-2617-6074-1740802743.jpg
              </motion.a>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4;