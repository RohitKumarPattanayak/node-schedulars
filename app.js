import { scheduleJob, cancelJob } from "node-schedule";
import dayjs from "dayjs";
import { ToadScheduler, SimpleIntervalJob, Task } from "toad-scheduler";

// const d = new Date("2023-02-18T15:36:00.Z");
// const cur = new Date(Date.now());
// console.log(d, "  ", cur);
// scheduleJob("jai", "*/3 * * * * *", () => {
//   console.log("hi ", new Date().getSeconds());
//   cancelJob("jai");
// });

const scheduler = new ToadScheduler();

const task = new Task("simple task", () => {
  console.log("hi", new Date(Date.now()).getSeconds());
});
const job = new SimpleIntervalJob({ seconds: 5, runImmediately: true }, task);

scheduler.addSimpleIntervalJob(job);

// when stopping your app
// scheduler.stop();


