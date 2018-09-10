function TaskRunner(concurrency) {
    this.concurrency = concurrency
    this.available = concurrency
    this.queue = []
}

TaskRunner.prototype.execute_task = function(id, callback) {
    console.log("start executing task:"+id)
    setTimeout( ()=> {
        console.log("I am done with id:"+id)
        callback()
    },
    1000*id
    )
}

TaskRunner.prototype.process_queue = function(id) {
    console.log("Processing Queue")
    if (this.available) {
        while (this.available && this.queue.length) {
            this.available -= 1
            id = this.queue.pop()
            this.execute_task(id, ()=> {
                console.log("finish executing task:"+id)
                this.available += 1
            })
        }
        
    }
}

TaskRunner.prototype.enqueue_task = function(id) {
    console.log("Enqueuing task"+id)
    if (this.available) {
        this.available -= 1
        this.execute_task(id, (data)=> {
            console.log("finish executing task:"+id)
            this.available += 1
            if (this.queue.length) {
                this.process_queue()
            }
        })
    } else {
        this.queue.push(id)
    }
}

let a = new TaskRunner(3)
console.log(a.available)
a.enqueue_task(1)
console.log(a.available)
a.enqueue_task(2)
console.log(a.available)
a.enqueue_task(3)
console.log(a.available)
a.enqueue_task(4)
console.log(a.available)
a.enqueue_task(5)
console.log(a.available)
a.enqueue_task(6)
console.log(a.available)
console.log(a.queue)