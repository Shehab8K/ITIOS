this.onmessage =function(){
    var summ = 0;
    for(var i=0;i<1000000000;i++){
        summ+=i;
    }
    this.postMessage(summ);
}