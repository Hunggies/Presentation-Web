import React, { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import TextType from '../slides/components/TextType';

const Slide2 = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  const leftData = [
    { title: "Điểm mạnh", color: "#00d8ff", items: ["Tư duy giải quyết vấn đề", "Dễ hòa nhập", "Tự học hỏi", "Làm việc nhóm"] },
    { title: "Điểm yếu", color: "#ff4d4d", items: ["Thẳng tính", "Học theo hứng thú", "Thích làm độc lập", "Overthinking"] }
  ];

  const rightData = [
    { title: "SỞ THÍCH", text: "Chơi game, nghe nhạc và tìm hiểu các bài post về ngành IT", color: "#fff" },
    { title: "MỤC TIÊU", text: "Tự tay làm ra một con game chất lượng để thỏa mãn đam mê.", color: "#00d8ff" },
    { title: "ƯỚC MƠ", text: "Mở studio riêng, phát triển mảng AI.", color: "#ff4d4d" }
  ];

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100vw', height: '100vh',
        position: 'relative', fontFamily: 'monospace',
        overflow: 'hidden', color: '#eee',
      }}
    >
      <AnimatePresence>
        {isInView && (
          <>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.6 , delay: 0.3}}
              style={{ position: 'absolute', top: '25%', left: '10%', width: '30%' }}
            >
              {leftData.map((sec, i) => (
                <div key={i} style={{ marginBottom: '50px' }}>
                  <h3 style={{ 
                    color: sec.color, fontSize: '35px', letterSpacing: '4px', 
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
                        transition={{ delay: 0.6 + (j * 0.1) + (i * 0.4) }}
                        style={{ color: '#999', margin: '12px 0', fontSize: '25px' }}
                      >
                        <span style={{ color: sec.color, marginRight: '10px' }}>//</span> {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: "circOut", delay: 0.8 }}
              style={{
                position: 'absolute', left: '50%', top: '15%', bottom: '15%',
                width: '1px', backgroundColor: 'rgba(255,255,255,0.1)',
                originY: 0, zIndex: 10
              }}
            />

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              style={{ 
                position: 'absolute', 
                top: '30%', 
                left: '58%',
                width: '32%', 
                textAlign: 'left'
              }}
            >
              {rightData.map((content, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + (idx * 0.3) }}
                  style={{ marginBottom: '55px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: content.color }} />
                    <h3 style={{ fontSize: '30px', letterSpacing: '3px', color: '#fff', margin: 0 }}>
                       {content.title}
                    </h3>
                  </div>
                  <p style={{ 
                    color: '#aaa', 
                    fontSize: '20px', 
                    lineHeight: '1.7', 
                    paddingLeft: '23px',
                    margin: 0
                  }}>
                    {content.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div style={{ position: 'absolute', bottom: '40px', width: '100%', textAlign: 'center', opacity: 0.25, fontSize: '11px', letterSpacing: '4px' }}>
              <TextType
                text={["ĐẶC BIỆT: ĐÁNH SẬP CÔNG TY CỦA MỘT NGƯỜI NGẪU NHIÊN"]}
                typingSpeed={20}
                initialDelay={2000}
                pauseDuration={10000000000}
                showCursor={false}
              />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slide2;