import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Slide_6_Aspirations = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const domesticNV = [
    { id: 'NV 1', name: 'Đại học Bách Khoa Hà Nội', sub: 'Hanoi University of Science and Technology' },
    { id: 'NV 2', name: 'Đại học Công nghệ Thông tin', sub: 'University of Information Technology' },
    { id: 'NV 3', name: 'Đại học Bách Khoa TP.HCM', sub: 'HCM City University of Technology' },
    { id: 'NV 4', name: 'Đại học FPT', sub: 'FPT University' },
  ];

  const internationalNV = [
    { name: 'Đại học Leeds', country: 'University of Leeds' },
    { name: 'Đại học Nottingham', country: 'Nottingham University' },
    { name: 'Đại học Chiết Giang', country: 'Zhejiang University' },
    { name: 'Đại học Thanh Hoa', country: 'Tsinghua University' },
    { name: 'Và nhiều trường khác...', country: '...' },
  ];

  return (
    <div ref={containerRef} style={{
      width: '100%', height: '100vh',
      display: 'flex', flexDirection: 'column', padding: '60px 8%',
      color: '#fff', overflow: 'hidden', fontFamily: '"monospace", sans-serif'
    }}>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        style={{ marginBottom: '50px' }}
      >
        <h2 style={{ fontFamily: 'monospace', fontSize: '3rem', fontWeight: 800, margin: 0 }}>
          ĐỊNH HƯỚNG <span style={{ color: '#00d8ff' }}>NGUYỆN VỌNG</span>
        </h2>
        <div style={{ width: '100px', height: '4px', background: '#00d8ff', marginTop: '10px' }} />
      </motion.div>

      <div style={{ display: 'flex', gap: '60px', flex: 1 }}>
        
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: 'monospace', fontSize: '1.2rem', color: '#555', marginBottom: '30px', letterSpacing: '2px' }}>
            NGUYỆN VỌNG TRONG NƯỚC
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {domesticNV.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  padding: '20px', borderLeft: '3px solid #00d8ff',
                  background: 'rgba(255,255,255,0.02)', cursor: 'default',
                  transition: 'background 0.3s'
                }}
              >
                <div style={{ fontSize: '1rem', color: '#00d8ff', fontWeight: 'bold' }}>{item.id}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 600, margin: '5px 0', fontFamily: 'monospace' }}>{item.name}</div>
                <div style={{ fontSize: '1rem', color: '#888', fontFamily: 'monospace' }}>{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: 'monospace', fontSize: '1.2rem', color: '#555', marginBottom: '30px', letterSpacing: '2px' }}>
            NGUYỆN VỌNG NGOÀI NƯỚC
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {internationalNV.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: idx * 0.1 + 0.4 }}
                style={{
                  padding: '20px', borderRight: '1px solid rgba(255,255,255,0.1)',
                  textAlign: 'right', position: 'relative', overflow: 'hidden'
                }}
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ delay: 1 + idx * 0.1, duration: 1 }}
                  style={{ position: 'absolute', bottom: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #555)' }}
                />

                <div style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'monospace' }}>{item.name}</div>
                <div style={{ fontSize: '1rem', color: '#00d8ff', marginTop: '5px' }}>{item.country}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide_6_Aspirations;