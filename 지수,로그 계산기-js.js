function goToPage(page) {
  const pages = ['select', 'exponent', 'logarithm'];

  pages.forEach(p => {
    const element = document.getElementById(`page-${p}`);
    if (element) {
      element.classList.add('hidden');
    }
  });

  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.remove('hidden');
  }
}

// 처음에는 선택 화면 보이게
window.onload = () => {
  goToPage('select');
};




function calculateLog() {
  const baseInputs = document.querySelectorAll('.log-base');
  const valueInputs = document.querySelectorAll('.log-value');

  // 밑 계산 (거듭제곱 구조)
  let baseValues = [];
  baseInputs.forEach(input => {
    const val = parseFloat(input.value);
    if (!isNaN(val)) baseValues.push(val);
  });

  let valueValues = [];
  valueInputs.forEach(input => {
    const val = parseFloat(input.value);
    if (!isNaN(val)) valueValues.push(val);
  });

  // 입력값이 부족하면 오류
  if (baseValues.length === 0 || valueValues.length === 0) {
    document.getElementById('logResult').innerText = '모든 값을 올바르게 입력해 주세요.';
    return;
  }

  // 거듭제곱 계산
  let base = baseValues[0];
  for (let i = 1; i < baseValues.length; i++) {
    base = Math.pow(base, baseValues[i]);
  }

  let value = valueValues[0];
  for (let i = 1; i < valueValues.length; i++) {
    value = Math.pow(value, valueValues[i]);
  }

  // 유효성 검사
  if (base <= 0 || base === 1 || value <= 0) {
    document.getElementById('logResult').innerText =
      '밑은 양수이고 1이 아니어야 하며, 진수는 양수여야 합니다.';
    return;
  }

  // 계산
  const result = Math.log(value) / Math.log(base);
  document.getElementById('logResult').innerText = `결과: ${result}`;
}

