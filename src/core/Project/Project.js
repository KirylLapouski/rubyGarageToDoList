import projectRepository from "../repository/projectRepository";
import _ from "lodash";
class Project {
  constructor(id, name, tasks){
    this.id = id;
    this.name = name;
    this.tasks = tasks || [];
  }

  addTask(task){
    this.tasks.push(task)
  }
}
_.merge(Project.prototype, projectRepository);
export default Project;
