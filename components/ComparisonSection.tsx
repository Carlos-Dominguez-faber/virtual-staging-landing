import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = "https://storage.googleapis.com/msgsndr/9WsKwTMFwsyqE4fExicP/media/68f7e4f05d0f4e6bc075c834.png";
  const afterImage = "https://storage.googleapis.com/msgsndr/9WsKwTMFwsyqE4fExicP/media/68f7e4f0ec31a1dcb57ddff8.png";

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - containerRect.left, containerRect.width));
    const percentage = (x / containerRect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">See the difference</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">Instant Transformation</h2>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl border-4 border-white select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Background) */}
          <img 
            src={afterImage} 
            alt="After Staging" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg z-10">
            Virtually Staged
          </div>

          {/* Before Image (Clipped on top) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={beforeImage} 
              alt="Before Staging" 
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
            />
             <div className="absolute top-6 left-6 bg-black/60 backdrop-blur text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                Original Space
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-blue-600 hover:scale-110 transition-transform">
              <MoveHorizontal size={24} />
            </div>
          </div>
        </div>
        
        <p className="text-center text-slate-500 mt-6 text-sm">
          Drag the slider to compare original vs. staged room
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;