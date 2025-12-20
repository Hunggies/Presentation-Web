import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from './backgrounds/pacticles';

import Slide_1 from './slides/Slide 1';
import Slide_2 from './slides/Slide 2';
import Slide_3 from './slides/Slide 3';

const slides = [
  { component: Slide_1, label: 'Mở Đầu' },
  { component: Slide_2, label: 'Tự Đánh Giá' },
  { component: Slide_3, label: 'Mục Tiêu' },
];

function App() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const scrollContainerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef(null);
  const totalSlides = slides.length;

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  const handleScroll = (e) => {
    const container = e.target;
    
    // CẬP NHẬT PROGRESS BAR (Luôn chạy để thanh dưới cùng mượt)
    const totalScrollable = container.scrollHeight - container.clientHeight;
    if (totalScrollable > 0) {
      setScrollProgress((container.scrollTop / totalScrollable) * 100);
    }

    // CHỈ CẬP NHẬT ACTIVE INDEX KHI NGƯỜI DÙNG TỰ CUỘN (CHẾ ĐỘ RẢNH TAY)
    // Nếu đang chạy scrollToSlide (isScrollingRef.current === true), chúng ta bỏ qua việc setIdx ở đây
    if (!isScrollingRef.current) {
      const newIndex = Math.round(container.scrollTop / container.clientHeight);
      if (newIndex !== activeIdx && !isNaN(newIndex)) {
        setActiveIdx(newIndex);
      }
    }
  };

  const scrollToSlide = (i) => {
    if (i < 0 || i >= totalSlides || !scrollContainerRef.current) return;
    
    // Hủy các animation cũ nếu có
    if (timeoutRef.current) cancelAnimationFrame(timeoutRef.current);
    
    // Khóa handleScroll lại để không tranh giành quyền set activeIdx
    isScrollingRef.current = true; 
    setActiveIdx(i); // Nhảy thanh Active trên Sidebar ngay lập tức đến đích

    const container = scrollContainerRef.current;
    const targetY = i * container.clientHeight;
    const startY = container.scrollTop;
    const distance = targetY - startY;
    
    const duration = 600; 
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);
      container.scrollTop = startY + distance * ease;

      if (timeElapsed < duration) {
        timeoutRef.current = requestAnimationFrame(animateScroll);
      } else {
        // Sau khi cuộn xong, mở khóa để handleScroll có thể hoạt động lại khi người dùng dùng chuột
        // Dùng một khoảng delay nhỏ để đảm bảo trình duyệt đã ổn định vị trí
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
    };

    timeoutRef.current = requestAnimationFrame(animateScroll);
  };

  return (
    <div style={{
      display: 'flex', height: '100vh', width: '100vw',
      backgroundColor: '#0d0d0d', color: '#e0e0e0',
      overflow: 'hidden', position: 'relative', userSelect: 'none'
    }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.02}
          particleBaseSize={30}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredIdx(null);
        }}
        animate={{ width: isHovered ? '180px' : '65px' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          position: 'fixed', left: 0, top: 0, bottom: 0,
          borderRight: '1px solid rgba(255,255,255,0.05)',
          backgroundColor: '#0f0f0f', zIndex: 100,
          display: 'flex', flexDirection: 'column',
        }}
      >
        <div style={{ flex: 1, paddingTop: '100px', position: 'relative' }}>
          
          <motion.div
            animate={{ y: activeIdx * 55 }}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            style={{
              position: 'absolute', left: 0, right: 0, height: '55px',
              padding: '4px 0', paddingRight: '6px', zIndex: 1
            }}
          >
            <div style={{ 
              height: '100%', 
              backgroundColor: 'rgba(0, 216, 255, 0.12)', 
              borderLeft: '3px solid #00d8ff' 
            }} />
          </motion.div>

          <AnimatePresence mode="popLayout">
            {hoveredIdx !== null && hoveredIdx !== activeIdx && (
              <motion.div
                key={`hover-item-${hoveredIdx}`}
                initial={{ opacity: 0, y: hoveredIdx * 55 }}
                animate={{ opacity: 1, y: hoveredIdx * 55 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', left: 0, right: 0, height: '55px',
                  padding: '4px 6px', pointerEvents: 'none', zIndex: 1
                }}
              >
                <div style={{ 
                  height: '100%', 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }} />
              </motion.div>
            )}
          </AnimatePresence>

          {slides.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => scrollToSlide(i)}
              style={{
                height: '55px', display: 'flex', alignItems: 'center',
                paddingLeft: '25px', cursor: 'pointer', position: 'relative',
                zIndex: 2,
              }}
            >
              <motion.div
                animate={{ 
                  x: (hoveredIdx === i && activeIdx !== i) ? 8 : 0,
                  color: activeIdx === i ? '#00d8ff' : (hoveredIdx === i ? '#fff' : '#555')
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span style={{ fontFamily: 'monospace', fontWeight: 'bold', width: '30px', fontSize: '14px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                
                <motion.span
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 10 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  style={{ fontFamily: 'monospace', fontSize: '13px', whiteSpace: 'nowrap' }}
                >
                  {item.label}
                </motion.span>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.nav>

      <main
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onClick={(e) => {
          const isContentClick = e.target.closest('section') || e.target === e.currentTarget;
          if (isContentClick && activeIdx < totalSlides - 1) {
            scrollToSlide(activeIdx + 1);
          }
        }}
        style={{ 
          flex: 1, height: '100vh', position: 'relative', zIndex: 10, 
          overflowY: 'auto', 
          scrollBehavior: 'auto',
          paddingLeft: '65px',
          cursor: activeIdx < totalSlides - 1 ? 'pointer' : 'default'
        }}
      >
        <style>{`main::-webkit-scrollbar { display: none; }`}</style>
        {slides.map((Slide, i) => (
          <section key={i} id={`slide-${i}`} style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.2 }} 
            >
              <Slide.component />
            </motion.div>
          </section>
        ))}
      </main>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', zIndex: 200 }}>
        <motion.div 
          animate={{ width: `${scrollProgress}%` }} 
          style={{ height: '100%', backgroundColor: '#00d8ff', boxShadow: '0 0 15px rgba(0, 216, 255, 0.5)' }} 
          transition={{ duration: 0.5 }}
        />
      </div>

      <div style={{ position: 'absolute', bottom: '20px', right: '30px', opacity: 0.3, zIndex: 200, pointerEvents: 'none' }}>
        <span style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '3px' }}>HUNGGIES</span>
      </div>
    </div>
  );
}

export default App;