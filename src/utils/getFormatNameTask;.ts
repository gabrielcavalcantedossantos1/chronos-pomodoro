export function getFormatNameTask(tarefa: string | null): string {
  switch (tarefa) {
    case "workTime":
      return "Trabalho"
    case "shortBreakTime":
      return "Pausa curta"
    case "longBreakTime":
      return "Pausa longa"
    default:
      return "Desconhecido"
  }
}
