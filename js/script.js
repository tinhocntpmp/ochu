// import { CONFIG, DataModule } from "./db-chuongtrinh.js";

// https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg
// https://developers.google.com/assistant/tools/sound-library

/* ================= SOUND ================= */
const SoundModule = (()=>{

    const sounds = {
        popup:new Audio("./audio/pop.mp3"),
        confirm:new Audio("./audio/clang_and_wobble.mp3"),
        tick:new Audio("./audio/beep_short.ogg"),
        end:new Audio("./audio/digital_watch_alarm_long.ogg"),
        win:new Audio("./audio/win.mp3"),
        solve:new Audio("./audio/hand_clap.mp3")
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

/* ================= POPUP ================= */
const PopupModule = (()=>{

    const popup=document.getElementById("popup");
    const content=document.getElementById("popupContent");

    function open(text){
        SoundModule.play("popup");
        TimerModule.start();

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
