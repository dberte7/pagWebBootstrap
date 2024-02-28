document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('worker-form');
    const workersList = document.getElementById('workers-list');
    const workersSummary = document.getElementById('workers-summary');
    const workers = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;

        const worker = { firstName, lastName, email, department };
        workers.push(worker);
        form.reset();
        updateWorkersList();
        updateWorkersSummary();
    });

    function updateWorkersList() {
        workersList.innerHTML = '';
        workers.forEach(worker => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${worker.firstName} ${worker.lastName}`;
            workersList.appendChild(li);
        });
    }

    function updateWorkersSummary() {
        const summary = workers.reduce((acc, worker) => {
            acc[worker.department] = (acc[worker.department] || 0) + 1;
            return acc;
        }, {});

        workersSummary.innerHTML = '';
        for (const department in summary) {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${department}: ${summary[department]}`;
            workersSummary.appendChild(li);
        }
    }
});