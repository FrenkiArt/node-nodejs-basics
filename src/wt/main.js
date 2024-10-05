import { Worker, isMainThread } from "worker_threads";
import path from "path";
import os from "os";

/* 
TODO:
main.js - implement function that creates number of worker threads 
(equal to the number of host machine logical CPU cores) 
from file and able to send data to those threads and to receive 
result of the computation from them. You should send incremental 
number starting from to each . For example: on host machine 
with 4 cores you should create 4 workers and send 10 to first , 
11 to second , 12 to third , 13 to fourth . 
After all workers will finish, function should log array of results 
into console. The results are array of objects with 2 properties: 
worker.js10workerworkerworkerworkerworker
status - 'resolved' in case of successfully received value 
from or in case of error in worker'error'worker
data - value from in case of success or in case of error 
in workerworkernull
*/

const performCalculations = async () => {
  const cpuInfo = os.cpus();
  const cpuCount = cpuInfo.length;

  //console.log(cpuCount);

  // Создаем потоки
  if (isMainThread) {
    const worker = new Worker(path.join(import.meta.dirname, "worker.js"));

    const workers = [];
    const results = [];
    let startCount = 9;

    // Передача данных в рабочий поток и получение результатов
    for (let i = 0; i <= cpuCount; ++i) {
      worker.index = i;
      worker.postMessage(startCount); // Отправляем данные в рабочий поток
      workers.push(worker);

      let result = {};

      worker.on("message", (data) => {
        result.status = "resolved";
        result.data = data;

        results.push(result);

        if (worker.index === cpuCount) {
          console.log(results);
        }

        worker.terminate();
      });

      worker.on("error", () => {
        result.status = "error";
        result.data = null;
        result.index = worker.index;

        results.push(result);

        if (worker.index === cpuCount) {
          console.log(results);
        }
      });

      startCount++;
    }
  }
};

await performCalculations();
