import path from "path";
import child_process, { fork, spawn } from "child_process";

/* 
TODO:
cp.js - implement function that receives array of arguments and creates 
child process from file , passing these to it. 
This function should create IPC-channel between and of master process 
and child process: spawnChildProcessargsscript.jsargsstdinstdout
child process should receive input from master process stdinstdin
child process should send data to master process stdoutstdout
*/

const spawnChildProcess = async (args) => {
  // fork потому что в задании сказно "создавать IPC-канал"
  const childProcess = fork(
    path.join(import.meta.dirname, "files", "script.js"),
    args
  );

  childProcess.on("message", (data) => {
    console.log(data);
  });
};

// Put your arguments in function call to test this functionality
//spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
spawnChildProcess([1, 2, 3, 4, 5]);
