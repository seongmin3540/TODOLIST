document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('delete-all-btn').addEventListener('click', deleteAllTasks);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('할 일을 입력하세요!');
        return;
    }

    // 새로운 할 일 항목 생성
    const li = document.createElement('li');
    
    // 체크박스 생성
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through'; // 완료된 항목에 취소선 추가
        } else {
            li.style.textDecoration = 'none'; // 취소선 제거
        }
    });

    // 텍스트와 체크박스를 리스트 항목에 추가
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));

    // 삭제 버튼 추가
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        toggleDeleteAllButton(); // 항목 삭제 후 버튼 상태 확인
    });

    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);

    taskInput.value = '';

    toggleDeleteAllButton(); // 새 항목 추가 후 버튼 상태 확인
}

function deleteAllTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // 리스트 항목 모두 삭제
    toggleDeleteAllButton(); // 항목 삭제 후 버튼 상태 확인
}

function toggleDeleteAllButton() {
    const deleteAllBtn = document.getElementById('delete-all-btn');
    const taskList = document.getElementById('task-list');

    // 리스트 항목이 하나 이상 있을 때만 "모두 삭제" 버튼 표시
    if (taskList.children.length > 0) {
        deleteAllBtn.style.display = 'block';
    } else {
        deleteAllBtn.style.display = 'none';
    }
}

// 페이지 로드 시 초기 상태에 맞춰 "모두 삭제" 버튼 표시 여부 설정
toggleDeleteAllButton();
