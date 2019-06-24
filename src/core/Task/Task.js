import OpenStatus from "./statuses/OpenStatus";
import taskRepository from "../repository/taskRepositore";
import _ from "lodash";

class Task {
  constructor(id, name, status, taskId, deadline){
    this.id = id;
    this.name = name;
    this.status = status ? new status.constructor(this.changeStatus.bind(this)) : new OpenStatus(this.changeStatus.bind(this));
    this.taskId = taskId;
    this.deadline = deadline;
  }

  changeStatus(status){
    this.status = status;
  }

  complete(){
    this.status.complete()
  }

  getStatus(){
    return this.status.getStatus()
  }

  isDeadLinePassed(){
    return Date.now() <= +this.deadline;
  }
}
_.merge(Task.prototype, taskRepository);

export default Task;
