import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);
    // After 1.5 seconds of animation, show the full content
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, 1500);
  };

  // If opened, show the detailed invitation
  if (isOpen) {
    return (
      <div className="app-container open-state">
        <div className="invitation-card open-animation">
          <div className="card-header">
            <div className="school-name">TRƯỜNG TIỂU HỌC & THCS</div>
            <h1 className="title">Thư Mời Họp</h1>
            <div className="subtitle">Phụ Huynh Học Sinh Cuối Năm Học</div>
          </div>
          
          <div className="card-body">
            <p className="greeting">
              Kính gửi: Quý Phụ huynh học sinh lớp <strong>2A3</strong>
            </p>
            <p style={{marginBottom: '20px', lineHeight: '1.6'}}>
              Để tổng kết và đánh giá kết quả học tập, rèn luyện của các em học sinh trong năm học vừa qua, cũng như triển khai phương hướng nhiệm vụ năm học tới. Ban giám hiệu nhà trường và Giáo viên chủ nhiệm trân trọng kính mời Quý phụ huynh tới dự buổi họp phụ huynh cuối năm học.
            </p>
            
            <div className="info-box">
              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-text">
                  <span className="info-label">Thời gian</span>
                  <span className="info-value">08:00 Sáng, Chủ Nhật</span>
                  <div style={{fontSize: '0.9rem', color: '#636e72', marginTop: '3px'}}>Ngày 28 tháng 5 năm 2026</div>
                </div>
              </div>
              
              <div className="info-item" style={{marginTop: '15px'}}>
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <span className="info-label">Địa điểm</span>
                  <span className="info-value">Phòng học lớp 2A3</span>
                  <div style={{fontSize: '0.9rem', color: '#636e72', marginTop: '3px'}}>Tầng 2, Dãy nhà A</div>
                </div>
              </div>
            </div>
            
            <p className="message">
              Sự có mặt của Quý phụ huynh là niềm vinh hạnh của nhà trường và là nguồn động viên lớn mạnh cho các con.
            </p>
          </div>
          
          <div className="card-footer">
            <div className="teacher-info">
              <div className="teacher-label">Giáo viên chủ nhiệm</div>
              <div className="teacher-name">Nguyễn Thị A</div>
            </div>
            <button className="action-btn" onClick={() => setIsOpen(false)}>
              Đóng thư
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Cover Page (Closed State)
  return (
    <div className="cover-container">
      {/* Floating Elements */}
      <div className="floating-element cloud cloud-1">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 17.5C4.01472 17.5 2 15.4853 2 13C2 10.5147 4.01472 8.5 6.5 8.5C6.82155 8.5 7.13524 8.53372 7.43763 8.59737C8.16335 5.4385 11.0028 3 14.5 3C18.6421 3 22 6.35786 22 10.5C22 10.7441 21.9883 10.9855 21.9656 11.2238C21.9883 11.4795 22 11.7381 22 12C22 15.0376 19.5376 17.5 16.5 17.5H6.5Z" fill="white" fillOpacity="0.8"/></svg>
      </div>
      <div className="floating-element cloud cloud-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 17.5C4.01472 17.5 2 15.4853 2 13C2 10.5147 4.01472 8.5 6.5 8.5C6.82155 8.5 7.13524 8.53372 7.43763 8.59737C8.16335 5.4385 11.0028 3 14.5 3C18.6421 3 22 6.35786 22 10.5C22 10.7441 21.9883 10.9855 21.9656 11.2238C21.9883 11.4795 22 11.7381 22 12C22 15.0376 19.5376 17.5 16.5 17.5H6.5Z" fill="white" fillOpacity="0.8"/></svg>
      </div>
      <div className="floating-element star star-1">⭐</div>
      <div className="floating-element heart heart-1">💖</div>

      {/* Main Envelope Card */}
      <div className="envelope-wrapper">
        <div className={`envelope-card ${isAnimating ? 'animate-open' : ''}`} onClick={handleOpen}>
          
          <div className="mini-letter">
            <div className="mini-letter-content">
              <div className="mini-line"></div>
              <div className="mini-line"></div>
              <div className="mini-line short"></div>
            </div>
          </div>

          <div className="envelope-front">
            <div className="ticket">
              <span>TICKET</span>
              <div className="ticket-heart">❤️</div>
            </div>
            
            <div className="avatar-circle">
              <div className="avatar-inner">
                💌
              </div>
            </div>

            <div className="envelope-content">
              <h2 className="envelope-title">Thư Mời Nhỏ</h2>
              <p className="envelope-from">FROM: LỚP 2A3 💕</p>
            </div>
            
            <div className="yellow-note"></div>
            <div className="blue-note"></div>
          </div>

          <div className="envelope-top-flap"></div>
        </div>
        
        <button className={`open-btn ${isAnimating ? 'fade-out' : ''}`} onClick={handleOpen}>
          ✨ BẤM ĐỂ MỞ THƯ ✨
        </button>
      </div>
    </div>
  )
}

export default App
