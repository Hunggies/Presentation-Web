import React, { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';

const CountingNumber = ({ value, duration = 1, delay = 0, startTrigger }) => {
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

const Slide5 = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <div ref={containerRef} style={{
      width: '100%', height: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      paddingLeft: '65px', overflow: 'hidden', color: '#eee'
    }}>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <div style={{ position: 'absolute', left: '15%', top: 0, bottom: 0, width: '1px', background: '#00d8ff' }} />
        <div style={{ position: 'absolute', right: '15%', top: 0, bottom: 0, width: '1px', background: '#00d8ff' }} />
        <div style={{ position: 'absolute', top: '20%', left: 0, right: 0, height: '1px', background: '#00d8ff' }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ delay: 0.3 }}
        style={{ textAlign: 'center', marginBottom: '40px', zIndex: 2 }}
      >
        <h2 style={{ 
          fontFamily: '"JetBrains Mono", monospace', fontSize: '3rem', 
          margin: 0, color: '#fff', letterSpacing: '10px', textTransform: 'uppercase' 
        }}>
          ĐẠI HỌC CÔNG NGHỆ THÔNG TIN
        </h2>
        <div style={{ height: '2px', width: '200px', background: '#00d8ff', margin: '10px auto' }} />
        <h2 style={{ 
          fontFamily: '"JetBrains Mono", monospace', fontSize: '1rem', 
          margin: 0, color: '#999', letterSpacing: '10px', textTransform: 'uppercase' 
        }}>
          UNIVERSITY OF INFORMATION TECHNOLOGY
        </h2>
      </motion.div>

      <div style={{ 
        display: 'flex', width: '85%', height: '550px', 
        gap: '20px', zIndex: 2, position: 'relative' 
      }}>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1.5, position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <img src="https://tuyensinh.uit.edu.vn/sites/default/files/uploads/files/dai-hoc-uit-3.jpg" alt="UIT" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
          <div style={{ position: 'absolute', height: '30%', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, #050505, transparent)' }} />
          
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #00d8ff', color: '#00d8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>!</div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#aaa' }}>
              SOURCE: <motion.a 
                href="https://tuyensinh.uit.edu.vn/sites/default/files/uploads/files/dai-hoc-uit-3.jpg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ textDecoration: 'underline' }}
                style={{ color: '#00a8ff', textDecoration: 'none', cursor: 'pointer' }}
                >
                https://tuyensinh.uit.edu.vn/sites/default/files/uploads/files/dai-hoc-uit-3.jpg
                </motion.a>
            </span>
          </div>
        </motion.div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {[
            { label: 'ĐIỂM THPT', value: 27.20, delay: 0.5, bg: 'rgba(0, 216, 255, 0.05)' },
            { label: 'MỤC TIÊU SAT', value: 1500, delay: 0.8, bg: 'rgba(255, 255, 255, 0.02)' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: item.delay }}
              style={{ 
                flex: 1, backgroundColor: item.bg, borderRadius: '8px', 
                border: '1px solid rgba(255,255,255,0.05)', padding: '30px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                position: 'relative', overflow: 'hidden'
              }}
            >

              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: '#888', letterSpacing: '2px' }}>
                {item.label}
              </span>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: '"JetBrains Mono", monospace', color: idx === 0 ? '#00d8ff' : '#fff' }}>
                <CountingNumber value={item.value} startTrigger={isInView} delay={item.delay + 0.5} />
              </div>
              
              <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)', marginTop: '15px', position: 'relative' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '50%' } : { width: 0 }}
                  transition={{ delay: item.delay + 0.5, duration: 1 }}
                  style={{ position: 'absolute', top: 0, left: 0, bottom: 0, background: '#00d8ff', boxShadow: '0 0 10px #00d8ff' }}
                />
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2 }}
            style={{ padding: '20px', border: '1px dashed #333', borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'monospace', color: '#666' }}
          >
            {">"} KHÔNG CÓ GÌ <br/>
            {">"} KHÔNG CÓ GÌ <br/>
            {">"} KHÔNG CÓ GÌ
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Slide5;