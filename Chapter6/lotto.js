// 전역 변수
let historyData = [];

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 45개의 공 생성
    createFloatingBalls();
    
    // 버튼 클릭 이벤트 등록
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', generateLottoNumbers);
    
    // localStorage에서 히스토리 로드
    loadHistory();
});

// 번호에 따른 색상 클래스 반환
function getColorClass(number) {
    if (number >= 1 && number <= 10) return 'ball-color-1';
    if (number >= 11 && number <= 20) return 'ball-color-2';
    if (number >= 21 && number <= 30) return 'ball-color-3';
    if (number >= 31 && number <= 40) return 'ball-color-4';
    if (number >= 41 && number <= 45) return 'ball-color-5';
    return 'ball-color-1';
}

// 45개의 떠다니는 공 생성
function createFloatingBalls() {
    const container = document.getElementById('balls-container');
    
    for (let i = 1; i <= 45; i++) {
        const ball = document.createElement('div');
        ball.className = 'floating-ball ' + getColorClass(i);
        ball.textContent = i;
        
        // 랜덤 위치 설정
        const randomX = Math.random() * 90; // 0-90%
        const randomY = Math.random() * 90; // 0-90%
        ball.style.left = randomX + '%';
        ball.style.top = randomY + '%';
        
        // 랜덤 애니메이션 딜레이 및 지속시간 설정
        const randomDelay = Math.random() * 5; // 0-5초
        const randomDuration = 15 + Math.random() * 10; // 15-25초
        ball.style.animationDelay = randomDelay + 's';
        ball.style.animationDuration = randomDuration + 's';
        
        container.appendChild(ball);
    }
}

// 로또번호 생성 (1-45 중 중복없이 6개)
function generateLottoNumbers() {
    const numbers = [];
    
    // 중복 없이 6개 번호 생성
    while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    
    // 오름차순 정렬
    numbers.sort((a, b) => a - b);
    
    // 화면에 표시
    displayCurrentNumbers(numbers);
    
    // 히스토리에 추가
    addToHistory(numbers);
}

// 현재 생성된 번호 표시
function displayCurrentNumbers(numbers) {
    const container = document.getElementById('current-numbers');
    container.innerHTML = ''; // 기존 내용 제거
    
    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.className = 'lotto-ball ' + getColorClass(num);
        ball.textContent = num;
        ball.style.animationDelay = (index * 0.1) + 's'; // 순차적으로 나타나기
        container.appendChild(ball);
    });
}

// 히스토리에 추가
function addToHistory(numbers) {
    const now = new Date();
    const timestamp = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const historyItem = {
        numbers: numbers,
        timestamp: timestamp,
        id: Date.now()
    };
    
    // 배열 앞에 추가 (최신 항목이 위로)
    historyData.unshift(historyItem);
    
    // localStorage에 저장
    saveHistory();
    
    // 화면 업데이트
    displayHistory();
}

// 히스토리 표시
function displayHistory() {
    const container = document.getElementById('history-list');
    
    if (historyData.length === 0) {
        container.innerHTML = '<p class="empty-message">아직 생성된 번호가 없습니다</p>';
        return;
    }
    
    container.innerHTML = ''; // 기존 내용 제거
    
    historyData.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.style.animationDelay = (index * 0.05) + 's';
        
        // 헤더 (날짜/시간)
        const header = document.createElement('div');
        header.className = 'history-item-header';
        header.innerHTML = `
            <span>생성 시간: ${item.timestamp}</span>
            <span>번호 ${historyData.length - index}</span>
        `;
        
        // 번호 표시
        const numbersDiv = document.createElement('div');
        numbersDiv.className = 'history-numbers';
        
        item.numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = 'history-ball ' + getColorClass(num);
            ball.textContent = num;
            numbersDiv.appendChild(ball);
        });
        
        historyItem.appendChild(header);
        historyItem.appendChild(numbersDiv);
        container.appendChild(historyItem);
    });
}

// localStorage에 히스토리 저장
function saveHistory() {
    try {
        localStorage.setItem('lottoHistory', JSON.stringify(historyData));
    } catch (e) {
        console.error('히스토리 저장 실패:', e);
    }
}

// localStorage에서 히스토리 로드
function loadHistory() {
    try {
        const saved = localStorage.getItem('lottoHistory');
        if (saved) {
            historyData = JSON.parse(saved);
            displayHistory();
        }
    } catch (e) {
        console.error('히스토리 로드 실패:', e);
        historyData = [];
    }
}
