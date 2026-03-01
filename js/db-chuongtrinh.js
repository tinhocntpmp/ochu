/* ================= CONFIG ================= */
const CONFIG = {
    timeLimit: 50,          // chỉnh thời gian
    totalRows: 11,          // chỉnh số row
    secretColumn: 7         // chỉnh cột bí mật
};

/* ================= DATA ================= */
const DataModule = (()=>{

    const data = {
        "row-1":["0","0","0","0","0","0","0","C","O","X","A","N","H"],
        "row-2":["0","0","H","I","E","N","T","H","I","0","0","0","0"],
        "row-3":["0","S","A","N","K","H","A","U","0","0","0","0","0"],
        "row-4":["0","0","0","0","0","M","E","O","0","0","0","0","0"],
        "row-5":["0","0","0","0","0","0","0","N","O","I","0","0","0"],
        "row-6":["0","0","0","0","D","U","N","G","0","0","0","0","0"],
        "row-7":["0","0","0","0","T","H","U","T","U","0","0","0","0"],
        "row-8":["0","0","0","0","0","S","C","R","A","T","C","H","0"],
        "row-9":["0","0","0","M","A","Y","T","I","N","H","0","0","0"],
        "row-10":["K","E","C","H","U","Y","E","N","0","0","0","0","0"],
        "row-11":["0","0","0","K","E","O","T","H","A","0","0","0","0"]
    };

    const data2 = JSON.parse(JSON.stringify(data));

    // chỉnh theo yêu cầu
    data2["row-3"][7] = "Ư";
    data2["row-4"][7] = "Ơ";
    data2["row-9"][7] = "Ì";

    const hints = {
        "row-1":["C","O","X","A","N","H"],
        "row-2":["H","I","E","N","T","H","I"],
        "row-3":["S","A","N","K","H","A","U"],
        "row-4":["M","E","O"],
        "row-5":["N","O","I"],
        "row-6":["D","U","N","G"],
        "row-7":["T","H","U","T","U"],
        "row-8":["S","C","R","A","T","C","H"],
        "row-9":["M","A","Y","T","I","N","H"],
        "row-10":["K","E","C","H","U","Y","E","N"],
        "row-11":["K","E","O","T","H","A"]
    };

    return {data, data2, hints};

})();


/* ================= CONTENT MODULE ================= */
const ContentModule = (()=>{

    const dataContent = {

        "row-1": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 1</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 6 chữ cái.</strong> Em hãy điền vào chỗ . . . từ thích hợp với hình minh họa <br>để hoàn thành câu nói.</div>
                    <div class="question-text__main">
                        Cần nháy chuột vào nút lệnh _ _ &nbsp; _ _ _ _ để chạy chương trình.
                        <br>
                        <div class="text-center"><img src="./img/img01_co_xanh.png" style="max-width:100%;"></div>
                    </div>
                </div>
            </div>
        `,

        "row-2": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 2</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 7 chữ cái.</strong> Em hãy lựa chọn đáp án đúng nhất.</div>
                    <div class="question-text__main">
                        Khối lệnh dưới đây thuộc nhóm lệnh nào?<br>
                        <img src="./img/img02_hien_thi.png" style="max-width:100%;"><br>
                        A) <i>Chuyển động</i><br>
                        B) <i>Hiển thị</i><br>
                        C) <i>Âm thanh</i><br>
                        D) <i>Cảm biến</i>
                    </div>
                </div>
            </div>
        `,

        "row-3": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 3</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 7 chữ cái.</strong> Em hãy trả lời câu hỏi sau:</div>
                    <div class="question-text__main">Khu vực bên phải phần mềm Scratch, nơi nhân vật hoạt động, gọi là khu vực gì?
                        <div class="text-center"><img src="./img/img03_san_khau.png" style="max-width:100%; width: 660px;"></div>
                    </div>
                </div>
            </div>
        `,
        "row-4": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 4</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 1 từ, gồm 3 chữ cái.</strong> Em hãy trả lời câu hỏi sau:</div>
                    <div class="question-text__main">Nhân vật mặc định trong Scratch là con gì?
                    </div>
                </div>
            </div>
        `,
        "row-5": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 5</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 1 từ, gồm 3 chữ cái.</strong> Em hãy trả lời câu hỏi sau:</div>
                    <div class="question-text__main">Khối lệnh <b>[Nói (Xin chào!) trong (2) giây]</b> là lệnh gì?
                        <div class="text-center"><img src="./img/img02_hien_thi.png" style="max-width:100%;"></div>
                    </div>
                </div>
            </div>
        `,
        "row-6": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 6</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 1 từ, gồm 4 chữ cái.</strong> Em hãy điền vào chỗ . . . từ thích hợp với hình minh họa <br>để hoàn thành câu nói.</div>
                    <div class="question-text__main">Nút lệnh màu đỏ dùng để _ _ _ _ chương trình.
                        <br><br>
                        <div class="text-center"><img src="./img/img06_dung.png" style="max-width:100%;"></div>
                    </div>
                </div>
            </div>
        `,
        "row-7": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 7</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 5 chữ cái.</strong> Em hãy điền vào chỗ  . . . từ thích hợp <br>để hoàn thành câu nói.</div>
                    <div class="question-text__main">Các lệnh trong chương trình được thực hiện lần lượt <br>theo _ _ _ &nbsp; _ _ từ trên xuống.
                    </div>
                </div>
            </div>
        `,
        "row-8": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 8</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 1 từ, gồm 7 chữ cái.</strong> Em hãy trả lời câu hỏi sau:</div>
                    <div class="question-text__main">Đây là biểu tượng của phần mềm nào?
                        <br>
                        <div class="text-center"><img src="./img/img08_scratch.png" style="max-width:100%; width: 80px;"></div>
                    </div>
                </div>
            </div>
        `,
        "row-9": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 9</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 7 chữ cái.</strong> Em hãy điền vào chỗ  . . . từ thích hợp <br>để hoàn thành câu nói.</div>
                    <div class="question-text__main">Chủ đề F có tên là: <br>“Giải quyết vấn đề với sự trợ giúp của _ _ _ &nbsp; _ _ _ _”
                    </div>
                </div>
            </div>
        `,
        "row-10": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 10</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 8 chữ cái.</strong> Em hãy điền vào chỗ  . . .</div>
                    <div class="question-text__main">Các hình <i>3a, 3b, 3c, 3d, 3e trong SGK trang 71</i> thể hiện chương trình Scratch dùng để _ _ &nbsp; _ _ _ _ _ _ “Mèo con không vâng lời”.
                        <div class="text-center"><img src="./img/img10_ke_chuyen.png" style="max-width:100%; width: 660px;"></div>
                    </div>
                </div>
            </div>
        `,
        "row-11": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 11</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 6 chữ cái.</strong> Em hãy điền vào chỗ  . . . từ thích hợp <br>để hoàn thành câu nói.</div>
                    <div class="question-text__main">Lập trình trực quan trong Scratch bằng cách _ _ _ &nbsp; _ _ _, lắp ghép các lệnh.
                    </div>
                </div>
            </div>
        `
    };

    function getContent(rowId){
        return dataContent[rowId] || `<div><p>Không có nội dung</p></div>`;
    }

    return { getContent };

})();