/* ================= CONFIG ================= */
const CONFIG = {
    timeLimit: 50,          // chỉnh thời gian
    totalRows: 11,          // chỉnh số row
    secretColumn: 7         // chỉnh cột bí mật (FIRST COLUMN IS 0)
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
                ${CO_XANH}
            </div>
        `,

        "row-2": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 2</p>
                ${HIEN_THI}
            </div>
        `,

        "row-3": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 3</p>
                ${SAN_KHAU}
            </div>
        `,
        "row-4": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 4</p>
                ${MEO}
            </div>
        `,
        "row-5": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 5</p>
                ${NOI}
            </div>
        `,
        "row-6": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 6</p>
                ${DUNG}
            </div>
        `,
        "row-7": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 7</p>
                ${THU_TU}
            </div>
        `,
        "row-8": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 8</p>
                ${SCRATCH}
            </div>
        `,
        "row-9": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 9</p>
                ${MAY_TINH}
            </div>
        `,
        "row-10": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 10</p>
                ${KE_CHUYEN}
            </div>
        `,
        "row-11": `
            <div class="question">
                <p class="question-title">CÂU HỎI SỐ 11</p>
                ${KEO_THA}
            </div>
        `
    };

    function getContent(rowId){
        return dataContent[rowId] || `<div><p>Không có nội dung</p></div>`;
    }

    return { getContent };

})();