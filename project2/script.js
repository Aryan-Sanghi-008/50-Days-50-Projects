const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const step_list = document.querySelectorAll(".step");
const line_list = document.querySelectorAll(".line");

let step_cnt = 0;

next.addEventListener("click", () => {
    if (step_cnt < 3) {
        step_cnt++;
        step_list[step_cnt].classList.add('active-step')
        line_list[step_cnt - 1].classList.add('active-line')
        if (step_cnt == 1) {
            prev.classList.add('active')
        }
        if (step_cnt == 3) {
            next.classList.remove('active')
        }
    }
});

prev.addEventListener('click', () => {
    if (step_cnt > 0) {
        step_cnt--;
        step_list[step_cnt + 1].classList.remove('active-step')
        line_list[step_cnt].classList.remove('active-line')
        if (step_cnt == 0) {
            prev.classList.remove('active')
        }
        if (step_cnt == 2) {
            next.classList.add('active')
        }
    }
})