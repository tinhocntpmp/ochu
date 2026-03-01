// import { CONFIG, DataModule } from "./db-chuongtrinh.js";

// https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg
// https://developers.google.com/assistant/tools/sound-library

/* ================= SOUND ================= */
const SoundModule = (()=>{

    const sounds = {
        popup:new Audio("./audio/pop.ogg"),
        confirm:new Audio("./audio/clang_and_wobble.ogg"),
        tick:new Audio("./audio/beep_short.ogg"),
        end:new Audio("./audio/digital_watch_alarm_long.ogg"),
        win:new Audio("./audio/concussive_hit_guitar_boing.ogg"),
        solve:new Audio("./audio/drum_roll.ogg")
    };

    // 🎵 Nhạc nền
    const bgm = new Audio("./audio/background_music.mp3");
    bgm.loop = true;
    bgm.volume = 0.4; // giảm nhỏ để không át hiệu ứng

    function stopAllEffects(){
        Object.values(sounds).forEach(sound=>{
            sound.pause();
            sound.currentTime = 0;
        });
    }

    function play(name){
        if(!sounds[name]) return;

        stopAllEffects();
        sounds[name].play().catch(()=>{});
    }

    function startBGM(){
        bgm.play().catch(()=>{});
    }

    function stopBGM(){
        bgm.pause();
        bgm.currentTime = 0;
    }

    function toggleBGM(){
        if(bgm.paused){
            startBGM();
        }else{
            stopBGM();
        }
    }

    return {
        play,
        startBGM,
        stopBGM,
        toggleBGM
    };

})();

/* ================= TIMER ================= */
const TimerModule = (()=>{

    let interval=null;
    let time=CONFIG.timeLimit;
    const clock=document.getElementById("clock");

    function start(){
        time=CONFIG.timeLimit;
        clock.textContent=time;
        clock.classList.remove("red");
        clock.classList.add("breathing");

        interval=setInterval(()=>{
            time--;
            clock.textContent=time;
            SoundModule.play("tick");

            if(time<=0){
                stop();
                clock.classList.remove("breathing");
                clock.classList.add("red");
                SoundModule.play("end");
            }

        },1000);
    }

    function stop(){
        clearInterval(interval);
    }

    function reset(){
        stop();
        clock.textContent="";
        clock.classList.remove("red","breathing");
    }

    return {start,stop,reset};

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

/* ================= POPUP ================= */
const PopupModule = (()=>{

    const popup=document.getElementById("popup");
    const content=document.getElementById("popupContent");

    function open(text){

        const rowId = text.includes("row-")
            ? text
            : "row-" + text.split(" ")[3];

        content.innerHTML = ContentModule.getContent(rowId);

        /* ================= GIỮ NGUYÊN LOGIC HINT ================= */
        const hintWrapper = document.createElement("div");
        hintWrapper.className = "hint-wrapper";

        const hintArray = DataModule.hints[rowId] || [];

        hintArray.forEach(letter=>{
            const item = document.createElement("div");
            item.className="hint-item";
            item.dataset.letter = letter;

            item.onclick=()=>{
                item.classList.add("revealed");
            };

            hintWrapper.appendChild(item);
        });

        content.appendChild(hintWrapper);

        popup.style.display="flex";
        SoundModule.play("popup");
        TimerModule.start();
    }

    function close(){
        popup.style.display="none";
        TimerModule.reset();
    }

    return {open,close};

})();

/* ================= GRID ================= */
const GridModule = (()=>{

    const grid=document.getElementById("grid");
    let opened=0;
    let currentRow=null;

    function render(){
        Object.keys(DataModule.data).slice(0,CONFIG.totalRows)
        .forEach((rowId,rowIndex)=>{
            const row=document.createElement("div");
            row.className="row-container";
            row.id=rowId;
            // Thêm cột số thứ tự
            const indexCell=document.createElement("div");
            indexCell.className="cell index-cell";
            indexCell.textContent=rowIndex+1;
            row.appendChild(indexCell);

            DataModule.data[rowId].forEach((value,col)=>{
                const cell=document.createElement("div");
                cell.className="cell";
                cell.dataset.col=col;

                if(value==="0"){
                    cell.classList.add("zero");
                }else{
                    cell.classList.add("active");
                    cell.textContent=value;

                    const cover=document.createElement("div");
                    cover.className="cover";
                    cell.appendChild(cover);

                    cell.onclick=()=>{
                        if(cell.classList.contains("disabled")) return;

                        currentRow=rowId;

                        // Lấy số thứ tự từ rowId
                        const questionNumber = rowId.split("-")[1];

                        PopupModule.open(rowId);
                    };
                }

                row.appendChild(cell);
            });

            grid.appendChild(row);
        });
    }

    function confirmRow(){
        const row=document.getElementById(currentRow);
        row.querySelectorAll(".cell.active")
            .forEach(c=>c.classList.add("revealed","disabled"));

        opened++;
        PopupModule.close();
        SoundModule.play("confirm");

        if(opened===CONFIG.totalRows){
            document.getElementById("solveBtn").style.display="block";
            showCongrats();
        }
    }

    function solve(){

        document.querySelectorAll(".row-container").forEach(row=>{

            const id = row.id;

            // chỉ lấy cell có data-col (tức là cell dữ liệu thật)
            const cells = row.querySelectorAll(".cell[data-col]");

            cells.forEach(cell=>{

                const colIndex = parseInt(cell.dataset.col);

                if(colIndex === CONFIG.secretColumn){

                    cell.textContent = DataModule.data2[id][CONFIG.secretColumn];
                    cell.classList.add("solve-text","column-highlight");

                }

            });

        });

    }

    function showCongrats(){
        SoundModule.play("win");
        const box=document.getElementById("congrats");
        box.style.display="flex";
        setTimeout(()=>box.style.display="none",3000);
    }

    return {render,confirmRow,solve};

})();

/* ================= INIT ================= */
GridModule.render();

document.getElementById("musicBtn").onclick = ()=>{
    SoundModule.toggleBGM();
};
document.getElementById("confirmBtn").onclick=GridModule.confirmRow;
document.getElementById("solveBtn").onclick=function(){
    SoundModule.play("solve");
    GridModule.solve();
    this.classList.add("solved");
};
document.getElementById("popupClose").onclick=PopupModule.close;
