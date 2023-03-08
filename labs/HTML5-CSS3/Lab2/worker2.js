this.onmessage =function(){
    var sum2 = 0;
    for(var i=0;i<20000;i++){
        sum2+=i;
    }
    alert(sum2);
    this.postMessage(sum2);
}