const EventEmitter = require('events');
const readline = require('readline');

class TaskManager extends EventEmitter {
  constructor() {
    super();
    this.tasks = {};
  }

  createTask(name) {
    if (this.tasks[name]) {
      console.log(` A tarefa "${name}" já existe.`);
      return;
    }

    const timeout = setTimeout(() => {
      this.completeTask(name);
    }, 3000);

    this.tasks[name] = {
      status: 'pendente',
      timeout: timeout
    };

    this.emit('taskCreated', name);
  }

  completeTask(name) {
    if (this.tasks[name] && this.tasks[name].status === 'pendente') {
      this.tasks[name].status = 'concluída';
      this.emit('taskCompleted', name);
    }
  }

  cancelTask(name) {
    const task = this.tasks[name];
    if (!task) {
      console.log(` Tarefa "${name}" não encontrada.`);
      return;
    }

    if (task.status !== 'pendente') {
      console.log(` Tarefa "${name}" já foi ${task.status}.`);
      return;
    }

    clearTimeout(task.timeout);
    task.status = 'cancelada';
    this.emit('taskCancelled', name);
  }

  listTasks() {
    const names = Object.keys(this.tasks);
    if (names.length === 0) {
      console.log(' Nenhuma tarefa criada.');
      return;
    }

    console.log(' Lista de Tarefas:');
    for (const name of names) {
      console.log(`- ${name}: ${this.tasks[name].status}`);
    }
  }
}

const manager = new TaskManager();

manager.on('taskCreated', (name) => {
  console.log(` Tarefa "${name}" criada (será concluída em 3s).`);
});

manager.on('taskCompleted', (name) => {
  console.log(` Tarefa "${name}" concluída automaticamente.`);
});

manager.on('taskCancelled', (name) => {
  console.log(` Tarefa "${name}" foi cancelada.`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(' Gerenciador de Tarefas Ativo. Digite um comando (create <nome>, cancel <nome>, list, exit).');

rl.on('line', (input) => {
  const [command, ...args] = input.trim().split(' ');
  const name = args.join(' ');

  switch (command) {
    case 'create':
      if (name) {
        manager.createTask(name);
      } else {
        console.log(' Especifique o nome da tarefa.');
      }
      break;
    case 'cancel':
      if (name) {
        manager.cancelTask(name);
      } else {
        console.log(' Especifique o nome da tarefa.');
      }
      break;
    case 'list':
      manager.listTasks();
      break;
    case 'exit':
      console.log(' Encerrando...');
      rl.close();
      process.exit(0);
      break;
    default:
      console.log(' Comando desconhecido.');
  }
});
