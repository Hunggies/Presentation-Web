import React from 'react';
import { motion } from 'framer-motion';

const Slide8 = () => {
  const viewConfig = { once: false, amount: 0.2 };

  return (
    <div style={{ 
      width: '100vw', height: '100vh', 
      position: 'relative', overflow: 'hidden' 
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center', width: '100%'
      }}>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewConfig}
          style={{ 
            overflow: 'hidden', height: '100px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <motion.h1 
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            style={{ 
              fontFamily: '"JetBrains Mono", monospace', fontSize: '4.5rem', 
              margin: 0, color: '#00d8ff', textTransform: 'uppercase', lineHeight: 1
            }}
          >
            KẾT THÚC
          </motion.h1>
        </motion.div>

        <div style={{ position: 'relative', margin: '0px 0' }}>
          
          <div style={{ 
            width: '150px', margin: '0 auto', 
            display: 'flex', justifyContent: 'space-between', height: '2px' 
          }}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.3, ease: "circOut" }}
              style={{ width: '45%', height: '100%', background: '#fff', originX: 0 }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.3, ease: "circOut" }}
              style={{ width: '45%', height: '100%', background: '#fff', originX: 1 }}
            />
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: "circOut" }}
            style={{ 
              width: '500px', height: '3px', background: '#00d8ff', 
              margin: '10px auto 0',
              originX: 0.5
            }}
          />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewConfig}
          style={{ 
            overflow: 'hidden', height: '40px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginTop: '0px'
          }}
        >
          <motion.p 
            variants={{
              hidden: { y: -40, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '1.5rem', 
              letterSpacing: '2px', margin: 0, color: '#eee', lineHeight: 1
            }}
          >
            CẢM ƠN THẦY VÀ CÁC BẠN ĐÃ XEM
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide8;