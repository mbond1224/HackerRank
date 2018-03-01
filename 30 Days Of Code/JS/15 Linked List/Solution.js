
	this.insert=function(head,data){
      let node ={data:data,next:null};
        let start=head;
         if(!head){
               return node;
         }
         while(start.next)
         {
             start= start.next;
         }
      
        start.next=node;
        return head;
    
    };
