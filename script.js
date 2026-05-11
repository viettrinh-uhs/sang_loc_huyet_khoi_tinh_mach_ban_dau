function calculateResult() {
    let totalScore = 0;
    let formValid = true;

    // Vòng lặp kiểm tra và lấy điểm từ 10 câu hỏi
    for (let i = 1; i <= 10; i++) {
        let options = document.getElementsByName('q' + i);
        let answered = false;
        for (let j = 0; j < options.length; j++) {
            if (options[j].checked) {
                totalScore += parseInt(options[j].value);
                answered = true;
                break;
            }
        }
        // Nếu có câu hỏi chưa được trả lời, đánh dấu form không hợp lệ
        if (!answered) {
            formValid = false;
        }
    }

    // Cảnh báo nếu người dùng chưa trả lời hết
    if (!formValid) {
        alert("Vui lòng trả lời tất cả các câu hỏi trước khi xem kết quả!");
        return;
    }

    // Lấy các phần tử HTML để hiển thị kết quả
    let resultBox = document.getElementById("result-box");
    let resultTitle = document.getElementById("result-title");
    let resultAdvice = document.getElementById("result-advice");

    // Xóa định dạng màu sắc cũ (nếu người dùng bấm xem kết quả nhiều lần)
    resultBox.className = "";

    // Logic tính toán phân loại kết quả
    if (totalScore <= 0) {
        resultBox.classList.add("low-risk");
        resultTitle.innerHTML = "Mức độ: NGUY CƠ THẤP (Tổng điểm ≤ 0)";
        resultAdvice.innerHTML = "<strong>Kết luận:</strong> Nguy cơ mắc Huyết khối tĩnh mạch sâu của bạn hiện tại là THẤP.<br><br><strong>Lời khuyên:</strong> Dấu hiệu sưng đau có thể do các nguyên nhân thông thường khác như căng cơ, chấn thương nhẹ. Hãy nghỉ ngơi, kê cao chân khi nằm và theo dõi thêm. Nếu triệu chứng không thuyên giảm sau vài ngày, bạn vẫn nên đi khám để kiểm tra.";
    } else if (totalScore === 1 || totalScore === 2) {
        resultBox.classList.add("med-risk");
        resultTitle.innerHTML = "Mức độ: NGUY CƠ TRUNG BÌNH (Tổng điểm 1 đến 2)";
        resultAdvice.innerHTML = "<strong>Kết luận:</strong> Nguy cơ mắc Huyết khối tĩnh mạch sâu của bạn đang ở mức TRUNG BÌNH.<br><br><strong>Lời khuyên:</strong> Bạn có một vài dấu hiệu đáng lưu ý và không nên chủ quan. Hãy sắp xếp thời gian đến gặp bác sĩ chuyên khoa tim mạch - mạch máu sớm nhất có thể để được siêu âm kiểm tra chính xác nguyên nhân.";
    } else {
        resultBox.classList.add("high-risk");
        resultTitle.innerHTML = "Mức độ: NGUY CƠ CAO (Tổng điểm ≥ 3)";
        resultAdvice.innerHTML = "<strong>Kết luận:</strong> Nguy cơ mắc Huyết khối tĩnh mạch sâu của bạn rất CAO.<br><br><strong>BẠN CẦN ĐI KHÁM NGAY!</strong> Vui lòng đến ngay bệnh viện hoặc cơ sở y tế gần nhất để siêu âm tĩnh mạch. Tuyệt đối không tự ý xoa bóp, bôi dầu nóng hay bấm huyệt vào vùng chân bị sưng đau vì có thể làm cục máu đông bong ra trôi lên phổi gây nguy hiểm tính mạng.";
    }

    // Hiển thị khung kết quả lên màn hình
    resultBox.style.display = "block";
    
    // Tự động cuộn trang xuống đúng vị trí phần kết quả cho người dùng dễ đọc
    resultBox.scrollIntoView({ behavior: 'smooth' });
}