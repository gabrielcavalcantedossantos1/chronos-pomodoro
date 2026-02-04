let isRunning = false

self.onmessage = function (e) {
  if(isRunning) return

  isRunning = true

  const state = e.data
  const {activeTask, secondsRemaining} = state

  const endDate = activeTask.startDate + secondsRemaining * 1000
  
    const now = Date.now()
    let countDonwSeconds = Math.ceil((endDate - now) / 1000)

  function tick() {
    self.postMessage(countDonwSeconds)

    const now = Date.now()
     countDonwSeconds = Math.floor((endDate - now) / 1000)

    setTimeout(tick,1000)
  }

  tick()
}