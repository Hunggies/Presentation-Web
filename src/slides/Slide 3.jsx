import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component đánh máy cơ học tốc độ cao
const TypewriterText = ({ text, delay = 0, color = "#e0e0e0" }) => {
  const letters = Array.from(text);
  return (
    <motion.span 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      transition={{ delayChildren: delay, staggerChildren: 0.02 }}
      style={{ display: 'inline-block', color: color }}
    >
      {letters.map((letter, index) => (
        <motion.span 
          key={index} 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Slide3 = () => {
  const [step, setStep] = useState(0); 

  const handleRightClick = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const aspirations = [
    { nv: "NV1", school: "Đại học Bách Khoa Hà Nội (HUST)" },
    { nv: "NV2", school: "Đại học Công Nghệ Thông Tin (UIT)" },
    { nv: "NV3", school: "Đại học Bách Khoa TP Hồ Chí Minh (HCMUT)" },
    { nv: "NV4", school: "Đại học Khoa học Tự nhiên (HCMUS)" },
    { nv: "NV5", school: "Đại học FPT" }
  ];

  return (
    <div 
      onContextMenu={handleRightClick}
      style={{
        width: '85vw', maxWidth: '1000px', color: '#e0e0e0',
        fontFamily: 'monospace', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', minHeight: '75vh', gap: '30px',
        cursor: 'context-menu'
      }}
    >

      <motion.div layout style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ fontSize: '18px', display: 'flex', gap: '15px' }}>
          <TypewriterText text="[Mục Tiêu]" color="#00d8ff" delay={0.1} />
          <TypewriterText text="Tự tay mình làm được một con game chất lượng cao." delay={0.4} />
        </div>
        <div style={{ fontSize: '18px', display: 'flex', gap: '15px' }}>
          <TypewriterText text="[Ước Mơ]" color="#00d8ff" delay={1.5} />
          <TypewriterText text="Mở một studio chuyên làm game." delay={1.8} />
        </div>
      </motion.div>

      <motion.div layout style={{ position: 'relative', alignSelf: 'flex-start', minHeight: '50px' }}>
        <AnimatePresence>
          {step >= 1 && (
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: '0%', opacity: 1 }}
                animate={{ width: '100%', opacity: [1, 1, 0] }}
                transition={{ 
                  width: { duration: 0.9, ease: "easeInOut" }, 
                  opacity: { duration: 1, delay: 0.9 } 
                }}
                style={{ position: 'absolute', top: 0, bottom: 0, left: 0, backgroundColor: '#00d8ff', zIndex: 2 }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={{
                  padding: '12px 20px', borderLeft: '4px solid #00d8ff',
                  backgroundColor: 'rgba(0, 216, 255, 0.05)', fontSize: '20px',
                  fontWeight: 'bold', color: '#00d8ff', whiteSpace: 'nowrap'
                }}
              >
                ➜ Ngành Khoa Học Máy Tính (CS) là phù hợp nhất
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <AnimatePresence>
            {step >= 2 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div style={{ position: 'relative', paddingBottom: '8px' }}>
                  <h3 style={{ color: '#fff', fontSize: '14px', margin: 0 }}>NGUYỆN VỌNG TRONG NƯỚC</h3>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, ease: "easeOut"}}
                    style={{ height: '1px', backgroundColor: '#333', marginTop: '8px' }}
                  />
                </div>
                
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {aspirations.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4, 
                        delay: i * 0.2 + 0.5, 
                        ease: "easeOut"
                      }}
                      style={{ fontSize: '15px' }}
                    >
                      <span style={{ color: '#00d8ff' }}>{item.nv}:</span> {item.school}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div style={{ flex: 0.8 }}>
          <AnimatePresence>
            {step >= 3 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ padding: '20px', borderLeft: '1px solid #333', background: 'rgba(255,255,255,0.02)' }}
              >
                <h3 style={{ fontSize: '14px', marginBottom: '10px', color: '#fff' }}>NGUYỆN VỌNG PHỤ</h3>
                <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.6' }}>
                  Du học tại các nước như <span style={{ color: '#fff' }}>Anh, Mỹ, Trung,...</span> 
                  <br /> 
                  Ưu tiên nhắm vào các trường <span style={{ color: '#00d8ff' }}>TOP 1% - 10% Thế Giới</span>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slide3;