import React, { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import formula from '../assets/formula.png';

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

const Slide7 = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const stats = [
    { label: 'ĐIỂM THI THPT', value: 27, color: '#fff', unit: '' },
    { label: 'ĐIỂM ĐGNL (TOÁN: 300)', value: 1050, color: '#00d8ff', unit: '' },
    { label: 'ĐIỂM HỌC BẠ', value: 8.5, color: '#fff', unit: '' },
    { label: 'ĐIỂM SAT', value: 1550, color: '#00d8ff', unit: '' },
  ];

  return (
    <div ref={containerRef} style={{
      width: '100%', height: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '0 8%', color: '#fff', overflow: 'hidden', fontFamily: '"Inter", sans-serif'
    }}>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <h2 style={{ fontFamily: 'monospace', fontSize: '3rem', fontWeight: 800, margin: '10px 0', color: '#fff' }}>TỔNG KẾT</h2>
        <div style={{ width: '60px', height: '3px', background: '#fff', margin: '0 auto' }} />
      </motion.div>

      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', 
        width: '100%', gap: '25px', marginBottom: '60px' 
      }}>
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: idx * 0.15 }}
            style={{
              padding: '35px 20px', background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px',
              textAlign: 'center', position: 'relative'
            }}
          >
            <div style={{ fontSize: '1.5rem', color: '#666', marginBottom: '15px', fontFamily: 'monospace', letterSpacing: '1px' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: item.color, fontFamily: '"JetBrains Mono", monospace' }}>
              <CountingNumber value={item.value} delay={0.5 + idx * 0.1} startTrigger={isInView} />
            </div>
            <div
              style={{ position: 'absolute', bottom: 0, width: '30%', left: '35%', height: '2px', background: item.color }} 
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2 }}
        style={{ width: '100%', textAlign: 'center', position: 'relative' }}
      >
        <div style={{ marginBottom: '25px', fontSize: '1rem', color: '#999', fontFamily: 'monospace' }}>
          CÔNG THỨC TÍNH ĐIỂM XÉT TUYỂN TỔNG HỢP
        </div>
        
        <div style={{ 
          background: '#fff',
          padding: '30px 60px', 
          borderRadius: '4px',
          display: 'inline-block',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <img 
            src={formula} 
            alt="Admission Formula" 
            style={{ height: '80px', width: 'auto', display: 'block' }} 
          />
        </div>
      </motion.div>

    </div>
  );
};

export default Slide7;