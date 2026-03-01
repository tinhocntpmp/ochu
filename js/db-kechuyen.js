/* ================= CONFIG ================= */
const CONFIG = {
    timeLimit: 40,          // chỉnh thời gian
    totalRows: 8,          // chỉnh số row
    secretColumn: 4         // chỉnh cột bí mật
};

/* ================= DATA ================= */
const DataModule = (()=>{

    const data = {
      "row-1":["0","0","0","0","K","E","O","T","H","A","0"],
      "row-2":["0","0","0","M","E","O","0","0","0","0","0"],
      "row-3":["0","0","0","S","C","R","A","T","C","H","0"],
      "row-4":["0","0","0","T","H","O","I","G","I","A","N"],
      "row-5":["T","H","U","T","U","0","0","0","0","0","0"],
      "row-6":["0","0","M","A","Y","T","I","N","H","0","0"],
      "row-7":["0","0","H","I","E","N","T","H","I","0","0"],
      "row-8":["0","0","0","0","N","O","I","0","0","0","0"]
    };

    const data2 = JSON.parse(JSON.stringify(data));

    // chỉnh theo yêu cầu
    data2["row-2"][4] = "Ể";
    data2["row-7"][4] = "Ệ";

    const hints = {
      "row-1":["K","E","O","T","H","A"],
      "row-2":["M","E","O"],
      "row-3":["S","C","R","A","T","C","H"],
      "row-4":["T","H","O","I","G","I","A","N"],
      "row-5":["T","H","U","T","U"],
      "row-6":["M","A","Y","T","I","N","H"],
      "row-7":["H","I","E","N","T","H","I"],
      "row-8":["N","O","I"]
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
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 6 chữ cái.</strong> Em hãy điền vào chỗ  . . . từ thích hợp <br>để hoàn thành câu nói.</div>
                    <div class="question-text__main">Scratch là phần mềm cho phép em _ _ _ &nbsp; _ _ _, lắp ghép các lệnh để tạo chương trình.
                </div>
            </div>
        `,

        "row-2": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 2</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 1 từ, gồm 3 chữ cái.</strong> Em hãy trả lời câu hỏi sau:</div>
                    <div class="question-text__main">Nhân vật mặc định trong Scratch là con gì?
                    </div>
                </div>
            </div>
        `,

        "row-3": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 3</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 1 từ, gồm 7 chữ cái.</strong> Em hãy trả lời câu hỏi sau:</div>
                    <div class="question-text__main">Đây là biểu tượng của phần mềm nào?
                        <br>
                        <div class="text-center"><img src="./img/img08_scratch.png" style="max-width:100%; width: 80px;"></div>
                    </div>
                </div>
            </div>
        `,
        "row-4": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 4</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 8 chữ cái.</strong> Em hãy trả lời câu hỏi sau:</div>
                    <div class="question-text__main">Trong khối lệnh <strong>Nói <i>Xin chào!</i> trong … giây</strong> vị trí chứa dấu ... cho biết nội dung gì?<br>
                      <img src="./img/img02_hien_thi2.png" style="max-width:100%;">
                    </div>
                </div>
            </div>
        `,
        "row-5": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 5</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 5 chữ cái.</strong> Em hãy điền vào chỗ  . . . từ thích hợp <br>để hoàn thành câu nói.</div>
                    <div class="question-text__main">Các lệnh trong chương trình được thực hiện lần lượt <br>theo _ _ _ &nbsp; _ _ từ trên xuống.
                    </div>
                </div>
            </div>
        `,
        "row-6": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 6</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 2 từ, gồm 7 chữ cái.</strong> Em hãy điền vào chỗ  . . . từ thích hợp <br>để hoàn thành câu nói.</div>
                    <div class="question-text__main">Chủ đề F có tên là: <br>“Giải quyết vấn đề với sự trợ giúp của _ _ _ &nbsp; _ _ _ _”
                    </div>
                </div>
            </div>
        `,
        "row-7": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 7</p>
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
        "row-8": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 8</p>
                <div class="question-text">
                    <div class="question-text__guide"><strong>Có 1 từ, gồm 3 chữ cái.</strong> Em hãy trả lời câu hỏi sau:</div>
                    <div class="question-text__main">Khối lệnh <img src="./img/img02_hien_thi.png" style="max-width:100%;"> là lệnh gì?</div>
                </div>
            </div>
        `
    };

    function getContent(rowId){
        return dataContent[rowId] || `<div><p>Không có nội dung</p></div>`;
    }

    return { getContent };

})();