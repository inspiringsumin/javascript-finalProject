const el = document.getElementById("cm");
const elResult = document.getElementById("result");
const elSubmit = document.getElementById("submit");


// cm를 inch로 변환
function calculate() {
    let result = el.value / 2.54;
    elResult.innerText = `${result} inch 입니다.`;
}

elSubmit.addEventListener("click", calculate);
