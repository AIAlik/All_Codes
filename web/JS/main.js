var x=1,anser = Number(prompt("1 to what ..."));
while (x<=anser){
    if (!(x%3==0 || x%5==0)) {
        console.log(x);
    } else{
        if (x%3==0 && x%5==0) {
            console.log("FB");
        }
        if (x%3==0) {
            console.log("F");
        }if (x%5==0){
            console.log("B");
        }
    }
    x++;
}