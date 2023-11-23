    class Task {


        constructor(task, status, counter, metric) {
            this.id = Math.random().toString(36).substr(2, 9);
            this.task = task.trim().toLowerCase();
            this.status = status.trim().toLowerCase();
            this.completeTime = `${counter}  ${metric}`;
            this.timeToComplete(counter, metric);
        }

        timeToComplete = (counter, metric) => {

            if (metric === 'minutes') {
                metric = 60000;
            } else if (metric === 'hours') {
                metric = 3600000;
            } else if (metric === 'days') {
                metric = 86400000;
            } else {
                metric = 60000;
            }

            let completed = false;
            setTimeout(() => {
                console.log(`task: "${this.task}" uncompleted, time to complete have passed`)
                return completed
            }, counter * metric);

        };

    }

    class TasksList {
    constructor() {
        this.taskList = [];
    }

        addTask = (task, status, counter, metric) => {
        const newTask = new Task(task, status, counter, metric);
        this.taskList.push(newTask);
        }

        removeTask = (task) => {
         let taskToRemove = task.trim().toLowerCase();
         return this.taskList = this.taskList.filter((item) => item.task !== taskToRemove);
        }

        updateTask = (task, replaceTask, status, counter, metric) => {
            const index = this.taskList.findIndex((item) => item.task === task.trim().toLowerCase());

            if (index !== -1) {
                const updatedTask = new Task(replaceTask, status, counter, metric);
                this.taskList[index] = updatedTask;
                console.log(`Task "${task}" updated successfully.`);
            } else {
                console.log('Task not found.');
            }
        }

        completeTask = (task) => {

        this.taskList.forEach((item) => {
            if(item.task === task && item.status === 'pending'){
                item.status = 'completed';
            } else if(item.task === task && item.status === 'completed') {
                item.status = 'pending';
            } else {
                return 'task not found';
            }
        }

        )};

        getTask = (task) => {
        let taskToGet = task.trim().toLowerCase();

        this.taskList.forEach((item) => {
            if(item.task === taskToGet){
                console.log(item)
                return item;
            } else {
                return 'task not found';
            }
        });
    }

        getAllTasks = () => {
            console.log(this.taskList)
            return this.taskList;
        }

        getCompletedTasks = () => {
            console.log(this.taskList.filter((item) => item.status === 'completed'))
           this.taskList.filter((item) => item.status === 'completed');
        }

        getPendingTasks = () => {
            console.log( this.taskList.filter((item) => item.status === 'pending'))
            this.taskList.filter((item) => item.status === 'pending');
        }

        getOverdueTasks = () => {
            console.log( this.taskList.filter((item) => item.status === 'pending' && item.completeTime === '0 minutes'))
            this.taskList.filter((item) => item.status === 'pending' && item.completeTime === '0 minutes');
        }

    }

let taskLists = new TasksList();

taskLists.addTask('task1', 'pending', 1, 'minutes' );
taskLists.addTask('task2', 'pending', 1, 'minutes' );
taskLists.addTask('task3', 'pending', 1, 'minutes' );
taskLists.addTask('task4', 'pending', 1, 'minutes' );

taskLists.removeTask('task2');

taskLists.updateTask('task3', 'task7', 'pending', 2, 'minutes' );

taskLists.completeTask('task4');

// taskLists.getTask('task1');

// taskLists.getAllTasks();

// taskLists.getCompletedTasks();

// taskLists.getPendingTasks();

// taskLists.getOverdueTasks();