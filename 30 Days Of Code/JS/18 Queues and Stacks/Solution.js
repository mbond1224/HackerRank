class Solution{
  constructor(){
      this.stack=[];
      this.queue=[];
      this.tos=-1;
      this.toq=-1;
      
  }
    pushCharacter(c){
        this.stack.push(c);
        this.tos++;
    }
    enqueueCharacter(c){
        this.queue.push(c);
        this.toq=this.toq>0?this.toq:0;
    }
    popCharacter(){
        return this.stack[this.tos--];
    }
    dequeueCharacter(){
        return this.queue[this.toq++];
    }
}
