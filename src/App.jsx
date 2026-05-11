import { useState, useEffect } from 'react'

function App() {
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    // Generate bubbles
    const newBubbles = Array.from({ length: 15 }).map((_, i) => {
      const size = Math.random() * 60 + 20; // 20px to 80px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 10 + 5; // 5s to 15s
      const delay = Math.random() * 5; // 0s to 5s
      
      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }
      }
    })
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="app-container">
      <div className="bubbles">
        {bubbles.map(bubble => (
          <div key={bubble.id} className="bubble" style={bubble.style}></div>
        ))}
      </div>
      
      <div className="invitation-card">
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
          <button className="action-btn" onClick={() => alert('Cảm ơn Quý phụ huynh đã xác nhận tham gia!')}>
            Xác nhận tham gia
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
