const cluster = require('cluster')
const os = require('os')

const pid = process.pid

if(cluster.isMaster) {
  const cpuCount = os.cpus().length
  console.log(`cpus: ${cpuCount}`)
  console.log(`Master started Pid: ${pid}`)
  for(let i = 0; i < cpuCount - 1; i++) {
    const worker = cluster.fork()
  }

  cluster.on('exit', (worker, code) => {
    console.log(`Worker DIED, ${worker.process.pid}, Code ${code}`)
    if(code === 1) {
      cluster.fork()
    }
  })
}

if(cluster.isWorker){
  require('./app')
}