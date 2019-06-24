import { DONE_STATUS } from "./statuses.const";
class DoneStatus {
  constructor(changeStatus){
    this.changeStatus = changeStatus;
  }

  complete(){
  }

  getStatus(){
    return DONE_STATUS;
  }
}

export default DoneStatus;
