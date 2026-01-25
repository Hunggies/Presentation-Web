import React from 'react';
import { motion } from 'framer-motion';

const Slide_1 = () => {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', // Làm gốc tọa độ cho toàn bộ slide
      overflow: 'hidden' 
    }}>
      {/* Khối nội dung chính căn giữa */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Dịch ngược lại 50% kích thước chính nó để căn chính xác tâm
        textAlign: 'center',
        width: '100%'
      }}>
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: '20px' }}
          animate={{ opacity: 1, letterSpacing: '5px' }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
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

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '300px', opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          style={{ 
            height: '2px', 
            background: '#00d8ff', 
            margin: '20px auto' 
          }}
        />

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
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

export default Slide_1;