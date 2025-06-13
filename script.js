function getTaskCount() {
    const highcount = document.getElementById('high-button');
    const lownumber = document.getElementById('Low-button');
    const completedButtons = [
        document.getElementById('completed-btn-1'),
        document.getElementById('completed-btn-2'),
        document.getElementById('completed-btn-3'),
        document.getElementById('completed-btn-4'),
        document.getElementById('completed-btn-5'),
        document.getElementById('completed-btn-6')
    ];


    const taskMsgBox = document.getElementById('task-message-box');
    taskMsgBox.innerHTML = "";

    let numtakCount = 23;
    let taskincrease = 6;

    document.getElementById('high-button').parentElement.addEventListener('click', function () {
        highcount.textContent = ++numtakCount;
    });
    for (let i = 0; i < completedButtons.length; i++) {
        const button = completedButtons[i];
        button.addEventListener('click', function () {
            if (taskincrease > 0) {
                taskincrease--;
                lownumber.textContent = taskincrease;
                numtakCount++;
                highcount.textContent = numtakCount;
                button.disabled = true;
                button.classList.add('bg-gray-400');
                button.classList.remove('#3752FD');
                alert("Board Updated Successfully!");

                let taskTitle = document.createElement("p");
                taskTitle.textContent = "You have Completed The Task ";

                taskMsgBox.appendChild(taskTitle);
            }
        });
    }

    const clearHistoryButton = document.getElementById('clearTask');
    clearHistoryButton.addEventListener('click', function () {
        taskMsgBox.innerHTML = "";
        numtakCount = 23;
        taskincrease = 6;
        highcount.textContent = numtakCount;
        lownumber.textContent = taskincrease;

        for (let i = 0; i < completedButtons.length; i++) {
            const button = completedButtons[i];
            button.disabled = false;
            button.classList.remove('bg-gray-400');
            button.classList.add('#3752FD');
        }
    });




}

getTaskCount();
