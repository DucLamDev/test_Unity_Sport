// 1. Cài đặt nodejs

// 2. git clone https://github.com/DucLamDev/test_Unity_Sport.git

// mở Terminal
// 3. node cau1.js  => kết quả các trường hợp của câu 1

// 4. node cau2.js =>  kết quả các trường hợp của câu 2

// 5. node cau3.js => kết quả của câu 3


 -Câu 1: Theo em phân tích thì ở câu 1 em có trình bày trong code gồm 4 cách làm khác nhau, nhưng cách tối ưu và hiệu quả
 nhất là thuật toán đầu tiên sử dụng 2 con trỏ để so sánh đầu và đuôi của chuỗi. Tại vì thuật toán 1 không sử dụng bộ nhớ bổ sung theo chiều dài chuỗi, rất phù hợp cho các chuỗi lớn, như chuỗi hàng triệu ký tự. Trong khi đó, các thuật toán khác đều tiêu tốn bộ nhớ đáng kể hoặc có giới hạn ngăn xếp.

 -Câu 2: Tương tự như câu 1 thì câu 2 em có trình bày trong code gồm 4 cách làm khác nhau, nhưng cách tối ưu và hiệu quả
 nhất là thuật toán đầu tiên sử dụng map. Tại vì 1 số lí do sau:

 + Thuật toán twoSum với Map hoạt động hiệu quả trên các mảng lớn nhờ khả năng tra cứu nhanh (𝑂(1)) trong Map. Trong khi đó, các thuật toán khác như Brute Force hoặc Using Set không thể mở rộng tốt do chi phí thời gian cao.
 + Thuật toán twoSum dừng ngay khi tìm thấy một cặp thỏa mãn, giúp tránh xử lý không cần thiết. Trong khi đó, Brute Force và Two Pointers có thể tiếp tục duyệt qua phần còn lại của mảng ngay cả khi đã tìm thấy cặp phù hợp.

 -Câu 3: Tối ưu hóa JSON (Minimization):
 + Sử dụng các biểu thức chính quy để loại bỏ các ký tự không cần thiết (như khoảng trắng, dấu phẩy dư).Giúp giảm kích thước file JSON mà vẫn giữ nguyên cấu trúc và nội dung.Nén dữ liệu bằng Run-Length Encoding (RLE):Run-Length Encoding là một thuật toán nén cơ bản. Nó thay thế các chuỗi ký tự giống nhau liên tiếp bằng ký tự đó và số lần lặp lại.
Ví dụ: "aaaabbbcc" → "a4b3c2".
+ Đây là một phương pháp nén không mất dữ liệu (lossless compression).

Bước 1: Đọc dữ liệu JSON từ file
Sử dụng fs.readFileSync để đọc dữ liệu từ file JSON gốc (data.json) dưới dạng chuỗi.
Chuỗi này sẽ được xử lý ở các bước tiếp theo.

Bước 2: Tối ưu hóa JSON
Hàm: minimizeJSON dùng để loại bỏ các ký tự dư thừa để giảm kích thước file JSON.

Bước 3: Nén JSON bằng RLE
Hàm: compressRLE dùng để nén chuỗi JSON tối ưu hóa bằng thuật toán Run-Length Encoding (RLE).

Bước 4: Lưu dữ liệu
Hàm: compressFile dùng để tối ưu hóa dữ liệu JSON:

Gọi minimizeJSON trên dữ liệu gốc và lưu kết quả vào file data.min.json.
Nén dữ liệu tối ưu hóa: Gọi compressRLE trên dữ liệu đã tối ưu và lưu kết quả vào file data.min.json.rle.
Thông báo kết quả: In ra console để người dùng biết các file đã được xử lý thành công hoặc báo lỗi nếu có vấn đề xảy ra.
