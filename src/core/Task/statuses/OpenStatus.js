import DoneStatus from "./DoneStatus";
import { OPEN_STATUS } from "./statuses.const";
class OpenStatus {
  constructor(changeStatus){
    this.changeStatus = changeStatus;
  }

  complete(){
    this.changeStatus(new DoneStatus(this.changeStatus))
  }

  getStatus(){
    return OPEN_STATUS
  }
}

export default OpenStatus;
