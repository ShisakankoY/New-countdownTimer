function timer() {
    const Btn1 = document.getElementById('Btn1');
    const Btn2 = document.getElementById('Btn2');
    const Btn3 = document.getElementById('Btn3');
    const Btn4 = document.getElementById('Btn4');
    const clock = document.getElementById('clock');
    let intervalId;
    let push = false;
    let nowTime = 0;
    Btn1.addEventListener('click', () => {
        if (push) {
            return;
        }
        push = true;
        let hourInput = prompt("時・分・秒のうち、時を入力してください");
        if (hourInput === null) {
            push = false;
            return;
        }
        let minInput = prompt("分を入力してください");
        if (minInput === null) {
            push = false;
            return;
        }
        let secInput = prompt("秒を入力してください");
        if (secInput === null) {
            push = false;
            return;
        }

        let hour = Number(hourInput);
        let min = Number(minInput);
        let sec = Number(secInput);

        if (isNaN(hour) || isNaN(min) || isNaN(sec)) {
            alert("数値を半角で入力してください");
            alert("一度終了します");
            push = false;
            return;
        }

        if (hour < 0 || min < 0 || min > 59 || sec < 0 || sec > 59) {
            alert("時は0以上, 分・秒は0~59の範囲で入力してください");
            push = false;
            return;
        }

        let time = hour * 3600 + min * 60 + sec;
        if (time <= 0) {
            alert("0秒以上の時間を設定してください");
            push = false;
            return;
        }
        intervalId = setInterval(() => {
            time--;
            nowTime = time;
            let newHour = Math.floor(time / 3600);
            let newMin = Math.floor((time % 3600) / 60);
            let newSec = time % 60;
            const pad = n => String(n).padStart(2, "0");
            clock.textContent = `残り：${pad(newHour)}:${pad(newMin)}:${pad(newSec)}`;
            if (time <= 0) {
                clearInterval(intervalId);
                alert("時間です");
                clock.textContent = "";
                push = false;
            }
        }, 1000);
    });

    Btn2.addEventListener('click', () => {
        clearInterval(intervalId);
        intervalId = null;
    });

    Btn3.addEventListener('click', () => {
        if (intervalId) {
            return;
        }
        if (nowTime <= 0) {
            return;
        }
        push = true;
        intervalId = setInterval(() => {
            nowTime--;
            if(nowTime <= 0) {
                clearInterval(intervalId);
                intervalId = null;
                alert("時間です");
                clock.textContent = "";
                push = false;
                return;
            }
            let nextHour = Math.floor(nowTime / 3600);
            let nextMin = Math.floor((nowTime % 3600) / 60);
            let nextSec = nowTime % 60;
            const pad = n => String(n).padStart(2, "0");
            clock.textContent = `残り：${pad(nextHour)}:${pad(nextMin)}:${pad(nextSec)}`;
        }, 1000)
    });

    Btn4.addEventListener('click', () => {
        clearInterval(intervalId);
        intervalId = null;
        clock.textContent = "";
        push = false;
    })

}

export { timer };