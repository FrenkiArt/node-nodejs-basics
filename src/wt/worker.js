import { parentPort } from "worker_threads";

/* 
TODO:
worker.js - extend given function to work with data 
received from main thread and implement function which 
sends result of the computation to the main thread
*/

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.on("message", (data) => {
    try {
      // Получаем результаты вычислений
      const result = nthFibonacci(parseInt(data));

      // Передаем результаты обратно в главный поток
      parentPort.postMessage(result);
    } catch (error) {
      // Обработка ошибки или возврат значения ошибках
      parentPort.postMessage("error");
    }
  });
};

sendResult();
