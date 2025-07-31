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

        let hourInput, minInput, secInput;

        while (true) {
            hourInput = prompt("時を入力してください(0以上の半角数字)");
            if (hourInput === null) {
                push = false;
                return;
            }
            if (!isNaN(hourInput) && Number(hourInput) >= 0) {
                break;
            }
            alert("時は0以上の半角数字で入力してください");
        }

        while (true) {
            minInput = prompt("分を入力してください(0~59の半角数字)");
            if (minInput === null) {
                push = false;
                return;
            }
            if (!isNaN(minInput) && Number(minInput) >= 0 && Number(minInput) <= 59) {
                break;
            }
            alert("分は0~59の半角数字で入力してください");
        }

        while (true) {
            secInput = prompt("秒を入力してください(0~59の半角数字)");
            if (secInput === null) {
                push = false;
                return;
            }
            if (!isNaN(secInput) && Number(secInput) >= 0 && Number(secInput) <= 59) {
                break;
            }
            alert("秒は0~59の半角数字で入力してください");
        }

        let hour = Number(hourInput);
        let min = Number(minInput);
        let sec = Number(secInput);

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
