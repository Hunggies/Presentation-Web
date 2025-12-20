import React from 'react';
import { motion } from 'framer-motion';

const Slide2 = () => {
  const data = [
    {
      id: "strength",
      title: "Điểm mạnh",
      details: [
        "Có khả năng tư duy giải quyết vấn đề",
        "Dễ hòa nhập với mọi người",
        "Thích tự tìm tòi, học hỏi điều mới",
        "Có khả năng làm việc nhóm"
      ],
      color: "#00d8ff"
    },
    {
      id: "weakness",
      title: "Điểm yếu",
      details: [
        "Đôi khi hơi thẳng tính, có thể gây mâu thuẫn",
        "Học theo tâm trạng, hứng thú sẽ rất quan tâm",
        "Thích tự làm mọi thứ một mình",
        "Đôi khi bị overthinking"
      ],
      color: "#ff4d4d"
    }
  ];

  const containerVars = (delayTime) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: delayTime 
      }
    }
  });

  const itemVars = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div style={{
      width: '85vw',
      maxWidth: '1000px',
      color: '#e0e0e0',
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      gap: '60px',
      position: 'relative'
    }}>
      {data.map((section, idx) => (
        <motion.div 
          key={section.id}
          variants={containerVars(idx === 0 ? 0.2 : 1.2)} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center', 
            position: 'relative', // Quan trọng để định vị đường kẻ
            paddingBottom: '40px',
            minHeight: '200px'
          }}
        >
          {/* ĐƯỜNG KẺ NGANG (PROGRESS BAR) - Chỉ xuất hiện ở mục đầu tiên */}
          {idx === 0 && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 0 10px rgba(255,255,255,0.2)'
              }}
            />
          )}

          {/* CỘT BÊN TRÁI: TIÊU ĐỀ */}
          <div style={{ 
            flex: '0 0 30%',
            textAlign: 'right',
            paddingRight: '40px',
            boxSizing: 'border-box'
          }}>
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: section.color,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                margin: 0,
                textShadow: `0 0 10px ${section.color}44`
              }}
            >
              {section.title}
            </motion.h2>
          </div>

          {/* CỘT BÊN PHẢI: CHI TIẾT */}
          <div style={{ 
            flex: '1', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            position: 'relative', // Để định vị đường kẻ dọc nội bộ
            paddingLeft: '40px'
          }}>
            
            {/* ĐƯỜNG KẺ DỌC (PROGRESS BAR DỌC) */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx === 0 ? 0.2 : 1.2 }}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: `0 0 8px ${section.color}33`
              }}
            />

            {section.details.map((detail, dIdx) => (
              <motion.div 
                key={dIdx}
                variants={itemVars}
                style={{
                  fontSize: '17px',
                  lineHeight: '1.4',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#bbb'
                }}
              >
                <span style={{ 
                  color: section.color, 
                  marginRight: '15px',
                  fontSize: '10px' 
                }}>●</span>
                {detail}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Slide2;