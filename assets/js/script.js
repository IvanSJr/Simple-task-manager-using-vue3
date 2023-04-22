const { createApp } = Vue

createApp({
    data() {
        return {
            tarefas: [],
            tarefa: ""
        }
    },
    methods: {
        adicionarTarefa() {
            if (this.tarefa.trim() && (this.tarefas.length === 0 || !this.tarefas.includes(this.tarefa))){
                this.tarefas.push(this.tarefa)
                this.tarefa = ""
            }
        },
        removerTarefa() {
            if(this.tarefas.length > 0) {
                this.tarefas.pop()
            }
        }
    }
}).mount('#app')
