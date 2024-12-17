// File: compressData.js
import fs from 'fs';

// Hàm nén JSON bằng Run-Length Encoding (RLE)
const compressRLE = (data) => {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < data.length; i++) {
        if (data[i] === data[i + 1]) {
            count++;
        } else {
            compressed += data[i] + (count > 1 ? count : '');
            count = 1;
        }
    }

    return compressed;
};

// Hàm giải nén JSON từ định dạng RLE
const decompressRLE = (compressed) => {
    let decompressed = '';
    let count = '';

    for (const char of compressed) {
        if (!isNaN(char)) {
            count += char;
        } else {
            decompressed += char.repeat(count ? parseInt(count) : 1);
            count = '';
        }
    }

    return decompressed;
};

// Loại bỏ khoảng trắng và tối ưu file JSON
const minimizeJSON = (data) =>
    data
        .replace(/\s+/g, '') // Loại bỏ khoảng trắng và xuống dòng
        .replace(/,\}/g, '}') // Sửa lỗi dấu phẩy thừa
        .replace(/,\]/g, ']'); // Sửa lỗi dấu phẩy thừa

// Đọc file JSON và xử lý
const compressFile = (inputFile, outputCompressedFile, outputMinimizedFile) => {
    try {
        // Đọc file gốc
        const rawData = fs.readFileSync(inputFile, 'utf8');

        // Tối ưu dữ liệu JSON
        const minimizedData = minimizeJSON(rawData);
        fs.writeFileSync(outputMinimizedFile, minimizedData);
        console.log(`File JSON đã được tối ưu: ${outputMinimizedFile}`);

        // Nén dữ liệu bằng RLE
        const compressedData = compressRLE(minimizedData);
        fs.writeFileSync(outputCompressedFile, compressedData);
        console.log(`File đã được nén bằng RLE: ${outputCompressedFile}`);
    } catch (error) {
        console.error('Lỗi khi xử lý file:', error);
    }
};


// Chạy thử với các file mẫu
const inputFile = 'data.json';
const outputMinimizedFile = 'data.min.json';
const outputCompressedFile = 'data.min.json.rle';


compressFile(inputFile, outputCompressedFile, outputMinimizedFile);
