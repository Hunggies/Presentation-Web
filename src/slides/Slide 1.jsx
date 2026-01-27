import React from 'react';
import { motion } from 'framer-motion';

const Slide1 = () => {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '100%'
      }}>
        <motion.h1 
          // Chữ bắt đầu ở dưới (20px) và trong suốt
          initial={{ opacity: 0, y: '20px' }}
          // Khi slide hiện ra, chữ trượt lên vị trí gốc (0px)
          whileInView={{ opacity: 1, y: '0px' }}
          viewport={{ once: false, amount: 0.5 }}
          // delay 0.4s như bạn yêu cầu
          transition={{ delay: 0.4, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{ 
            fontFamily: '"JetBrains Mono", monospace', 
            fontSize: '4.5rem', 
            margin: 0, 
            color: '#00d8ff',
            fontWeight: '900',
            textTransform: 'uppercase'
          }}
        >
          MAI ĐỨC HƯNG
        </motion.h1>

        {/* Container cho hiệu ứng 2 điểm expand */}
        <div style={{ 
          width: '400px', 
          height: '2px', 
          margin: '20px auto', 
          position: 'relative',
          display: 'flex' 
        }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
            style={{ 
              flex: 1,
              height: '100%',
              background: '#00d8ff',
              originX: 0.5 
            }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
            style={{ 
              flex: 1,
              height: '100%',
              background: '#00d8ff',
              originX: 0.5 
            }}
          />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          style={{ 
            fontFamily: '"JetBrains Mono", monospace', 
            fontSize: '1.2rem', 
            letterSpacing: '2px',
            margin: 0
          }}
        >
          TÔI TRƯỞNG THÀNH
        </motion.p>
      </div>
    </div>
  );
};

export default Slide1;