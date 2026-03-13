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
                ${KEO_THA}
            </div>
        `,

        "row-2": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 2</p>
                ${MEO}
            </div>
        `,

        "row-3": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 3</p>
                ${SCRATCH}
            </div>
        `,
        "row-4": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 4</p>
                ${THOI_GIAN}
            </div>
        `,
        "row-5": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 5</p>
                ${THU_TU}
            </div>
        `,
        "row-6": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 6</p>
                ${MAY_TINH}
            </div>
        `,
        "row-7": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 7</p>
                ${HIEN_THI}
            </div>
        `,
        "row-8": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 8</p>
                ${NOI}
            </div>
        `
    };

    function getContent(rowId){
        return dataContent[rowId] || `<div><p>Không có nội dung</p></div>`;
    }

    return { getContent };

})();