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
      window.scrollTo(0, 0);
    }, 1500);
  };

  // If opened, show the detailed invitation
  if (isOpen) {
    return (
      <div className="invitation-page fade-in">
        {/* Floating background elements for the open page */}
        <div className="bg-star star-a">⭐</div>
        <div className="bg-star star-b">⭐</div>
        <div className="bg-heart heart-a">🤍</div>
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-image-container">
            <div className="hero-placeholder">
              <span style={{fontSize: '3rem'}}>🏫</span>
            </div>
            <div className="hero-caption">Tập thể lớp 2A3 thân yêu</div>
          </div>
          
          <div className="hero-text">
            <div className="academic-year">NĂM HỌC 2024 - 2025</div>
            <h1 className="main-heading">HỌP PHỤ HUYNH</h1>
            <p className="hero-subtext">
              "Sự đồng hành của Gia đình là nền tảng vững chắc cho con đường tương lai của các con!"
            </p>
            <button className="scroll-down-btn" onClick={() => window.scrollTo({top: 600, behavior: 'smooth'})}>
              Xem thêm ⬇
            </button>
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section">
          <h2 className="section-title">Thông tin buổi họp</h2>
          <div className="title-underline"></div>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon-wrapper red-bg">📅</div>
              <div className="info-details">
                <span className="info-label">Thời gian</span>
                <span className="info-value">08:00 Sáng Chủ Nhật</span>
                <span className="info-sub">26 tháng 5 năm 2024</span>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon-wrapper blue-bg">📍</div>
              <div className="info-details">
                <span className="info-label">Địa điểm</span>
                <span className="info-value">Phòng D401 - Tin học 1</span>
                <span className="info-sub">Trường Tiểu học & THCS</span>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon-wrapper yellow-bg">🏫</div>
              <div className="info-details">
                <span className="info-label">Thành phần</span>
                <span className="info-value">Lớp 2A3</span>
                <span className="info-sub">Phụ huynh học sinh</span>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon-wrapper green-bg">👨‍🏫</div>
              <div className="info-details">
                <span className="info-label">Giáo viên</span>
                <span className="info-value">Thầy Nguyễn Việt Hùng</span>
                <span className="info-sub">Giáo viên chủ nhiệm</span>
              </div>
            </div>
          </div>
        </section>

        {/* Letter Section */}
        <section className="letter-section wavy-bg">
          <div className="letter-card">
            <h3 className="letter-title">Lời ngỏ từ Giáo viên Chủ nhiệm...</h3>
            <p className="letter-greeting">Kính gửi Quý Phụ huynh,</p>
            <p className="letter-p">
              Một năm học nữa lại sắp trôi qua với biết bao kỷ niệm đáng nhớ. Các con đã lớn khôn hơn, học hỏi được thêm nhiều điều mới mẻ và có những trải nghiệm tuyệt vời bên thầy cô, bạn bè.
            </p>
            <p className="letter-p">
              Sự tiến bộ của các con không thể thiếu đi sự quan tâm, đồng hành và sẻ chia từ phía Quý Phụ huynh trong suốt quãng thời gian vừa qua.
            </p>
            <p className="letter-p">
              Trân trọng kính mời Quý Phụ huynh tới dự buổi họp tổng kết cuối năm học.
            </p>
            <div className="letter-signature">
              <span className="sig-text">Trân trọng,</span>
              <span className="sig-name">Thầy Nguyễn Việt Hùng</span>
            </div>
            {/* Decorative elements on letter */}
            <div className="decor-heart top-right">💖</div>
            <div className="decor-tape top-left"></div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h2 className="section-title">Nội dung chính</h2>
          <div className="title-underline"></div>
          
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h4>Báo cáo học tập</h4>
                <p>Tổng kết kết quả học tập, rèn luyện của các con trong năm học vừa qua.</p>
              </div>
              <div className="timeline-dot">📚</div>
            </div>
            
            <div className="timeline-item right">
              <div className="timeline-dot">🎯</div>
              <div className="timeline-content">
                <h4>Trao đổi định hướng</h4>
                <p>Kế hoạch, phương hướng cho năm học tới. Cùng thảo luận phương pháp giúp các con phát triển.</p>
              </div>
            </div>
            
            <div className="timeline-item left">
              <div className="timeline-content">
                <h4>Giao lưu phụ huynh</h4>
                <p>Lắng nghe tâm tư, nguyện vọng từ Phụ huynh để thắt chặt sợi dây liên kết.</p>
              </div>
              <div className="timeline-dot">🤝</div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="form-section">
          <div className="form-card">
            <div className="form-avatar">👨‍👩‍👧‍👦</div>
            <h3 className="form-title">❤️ Xác nhận tham gia</h3>
            <p className="form-subtitle">Rất mong sự hiện diện của Quý Phụ huynh!</p>
            
            <div className="form-group">
              <label>Tên phụ huynh</label>
              <input type="text" placeholder="Nhập tên của Quý vị..." />
            </div>
            
            <div className="form-group">
              <label>Sự kiện tham gia buổi họp</label>
              <div className="radio-group">
                <label className="radio-btn">
                  <input type="radio" name="attendance" defaultChecked />
                  <span className="radio-custom green">✅ Tham gia</span>
                </label>
                <label className="radio-btn">
                  <input type="radio" name="attendance" />
                  <span className="radio-custom red">❌ Không tham gia</span>
                </label>
              </div>
            </div>
            
            <button className="submit-btn" onClick={() => alert('Đã gửi phản hồi thành công!')}>
              Gửi phản hồi ✨
            </button>
          </div>
        </section>
        
        <div className="footer-credits">
          Made with ❤️ for Class 2A3
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
