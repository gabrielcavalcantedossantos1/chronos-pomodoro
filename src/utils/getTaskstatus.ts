import type { TaskModel } from "../models/TaskModel";

export function getTaskStatus(tarefa:TaskModel, activeTask:TaskModel | null) {
  if(tarefa.completeDate) return "Completa"
  if(tarefa.interruptDate) return "Interrompida"
  if(tarefa.id === activeTask?.id) return "Em andamento"
  return "Abandonada"
}