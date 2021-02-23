 class Point {
     
    constructor(private xpoint?:number, private ypoint?:number){

    }
    draw(){
        console.log('X: '+this.xpoint+', Y: '+this.ypoint);
    }
}

let point= new Point(10,11);
point.draw(); 
