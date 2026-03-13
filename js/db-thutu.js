/* ================= CONFIG ================= */
const CONFIG = {
    timeLimit: 40,          // chỉnh thời gian
    totalRows: 5,          // chỉnh số row
    secretColumn: 6         // chỉnh cột bí mật
};

/* ================= DATA ================= */
const DataModule = (()=>{

    const data = {
      "row-1":["0","0","0","M","A","Y","T","I","N","H","0","0","0","0"],
      "row-2":["S","C","R","A","T","C","H","0","0","0","0","0","0","0"],
      "row-3":["0","0","N","O","I","D","U","N","G","0","0","0","0","0"],
      "row-4":["0","0","0","0","0","0","T","H","O","I","G","I","A","N"],
      "row-5":["0","0","K","E","C","H","U","Y","E","N","0","0","0","0"]
    };

    const data2 = JSON.parse(JSON.stringify(data));

    // chỉnh theo yêu cầu
    data2["row-3"][6] = "Ứ";
    data2["row-5"][6] = "Ự";

    const hints = {
      "row-1":["M","A","Y","T","I","N","H"],
      "row-2":["S","C","R","A","T","C","H"],
      "row-3":["N","O","I","D","U","N","G"],
      "row-4":["T","H","O","I","G","I","A","N"],
      "row-5":["K","E","C","H","U","Y","E","N"]
    };

    return {data, data2, hints};

})();


/* ================= CONTENT MODULE ================= */
const ContentModule = (()=>{

    const dataContent = {
        "row-1": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 1</p>
                ${MAY_TINH}
            </div>
        `,
        "row-2": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 2</p>
                ${SCRATCH}
            </div>
        `,
        "row-3": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 3</p>
                ${NOI_DUNG}
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
                ${KE_CHUYEN}
            </div>
        `,
    };

    function getContent(rowId){
        return dataContent[rowId] || `<div><p>Không có nội dung</p></div>`;
    }

    return { getContent };

})();