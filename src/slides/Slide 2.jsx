import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextType from '../slides/components/TextType';

const Slide2 = () => {
  const [step, setStep] = useState(0);

  const handleRightClick = (e) => {
    e.preventDefault();
    if (step < 2) setStep(step + 1);
  };

  const leftData = [
    { title: "Điểm mạnh", color: "#00d8ff", items: ["Tư duy giải quyết vấn đề", "Dễ hòa nhập", "Tự học hỏi", "Làm việc nhóm"] },
    { title: "Điểm yếu", color: "#ff4d4d", items: ["Thẳng tính", "Học theo hứng thú", "Thích làm độc lập", "Overthinking"] }
  ];

  return (
    <div 
      onContextMenu={handleRightClick}
      style={{
        width: '100vw', height: '100vh',
        position: 'relative', fontFamily: 'monospace',
        overflow: 'hidden', color: '#eee'
      }}
    >
      {/* 1. NỘI DUNG BÊN TRÁI - Xuất hiện ở Click 1 */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            style={{ position: 'absolute', top: '30%', left: '10%', width: '30%' }}
          >
            {leftData.map((sec, i) => (
              <div key={i} style={{ marginBottom: '60px' }}>
                <h3 style={{ 
                  color: sec.color, fontSize: '23px', letterSpacing: '4px', 
                  borderLeft: `2px solid ${sec.color}`, paddingLeft: '15px',
                  textTransform: 'uppercase'
                }}>
                  {sec.title}
                </h3>
                <div style={{ marginTop: '20px' }}>
                  {sec.items.map((item, j) => (
                    <motion.div 
                      key={j}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + (j * 0.1) }}
                      style={{ color: '#999', margin: '12px 0', fontSize: '18px' }}
                    >
                      <span style={{ color: sec.color, marginRight: '10px' }}>//</span> {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THANH CHẮN GIỮA - Xuất hiện ở Click 2 */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: step >= 2 ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        style={{
          position: 'absolute', left: '47.5%', top: '15%', bottom: '15%',
          width: '1px', backgroundColor: 'rgba(255,255,255,0.15)',
          originY: 0, zIndex: 10
        }}
      />

      {/* 3. NỘI DUNG BÊN PHẢI - Xuất hiện ở Click 2 */}
      <AnimatePresence>
        {step >= 2 && (
          <motion.div 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              right: '25%', 
              transform: 'translate(50%, -50%)', 
              width: '30%', 
              textAlign: 'right' 
            }}
          >
            {/* Mục 1: Sở thích */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 0.4 }}
              style={{ marginBottom: '60px' }}
            >
              <h3 style={{ fontSize: '23px', letterSpacing: '4px', color: '#fff' }}>SỞ THÍCH</h3>
              <p style={{ color: '#999', fontSize: '19px', lineHeight: '1.8', marginTop: '20px' }}>
                Chơi game, nghe nhạc và tìm hiểu<br/>các bài post về ngành IT
              </p>
            </motion.div>

            {/* Mục 2: Mục tiêu */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 0.7 }}
              style={{ marginBottom: '60px' }}
            >
              <h3 style={{ fontSize: '23px', letterSpacing: '4px', color: '#00d8ff' }}>MỤC TIÊU</h3>
              <p style={{ color: '#999', fontSize: '19px', marginTop: '20px', lineHeight: '1.4' }}>
                Tự tay làm ra một con game chất lượng<br/>để thỏa mãn đam mê.
              </p>
            </motion.div>

            {/* Mục 3: Ước mơ */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 1 }}
            >
              <h3 style={{ fontSize: '21px', letterSpacing: '4px', color: '#ff4d4d' }}>ƯỚC MƠ</h3>
              <p style={{ color: '#999', fontSize: '19px', marginTop: '20px' }}>
                Mở studio riêng, phát triển mảng AI.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {step >= 2 && (
          <div style={{ position: 'absolute', bottom: '30px', width: '100%', textAlign: 'center', opacity: 0.3, fontSize: '11px', letterSpacing: '3px' }}>
            <TextType
              text={["ĐẶC BIỆT: ĐÁNH SẬP CÔNG TY CỦA MỘT NGƯỜI NGẪU NHIÊN"]}
              typingSpeed={30}
              pauseDuration={150000000}
              initialDelay={1500}
              showCursor={false}
              cursorCharacter=""
              deletingSpeed={0}
              variableSpeedEnabled={false}
              variableSpeedMin={200}
              variableSpeedMax={200}
              cursorBlinkDuration={0.5}
            />
          </div>
      )}
    </div>
  );
};

export default Slide2;