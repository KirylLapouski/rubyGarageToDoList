import Task from "../../../../src/core/Task/Task";
import { OPEN_STATUS } from "../../../../src/core/Task/statuses/statuses.const";
import { expect } from "chai";

describe('Task', function(){
  beforeEach(function(){
    this.task = new Task()
  })

  describe('#constructor()', function(){
    it('should create task with open status if args is not provided', function(){
      expect(this.task.getStatus()).equals(OPEN_STATUS)
    })
  })

  describe('#isDeadLinePassed()', function(){
    it('should return false if deadline was not setted', function(){
      expect(this.task.isDeadLinePassed()).to.be.false
    })

    it('should return true if deadline is in a future', function(){
      const task = new Task(null, null, null, null, Date.now()+1000)
      expect(task.isDeadLinePassed()).to.be.true
    })
  })
})
