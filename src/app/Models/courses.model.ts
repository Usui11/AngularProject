

export class Courses{
    public name: string;
    public imgpath: string;
    public description: string;
    public dat : Date;
    public cost: number;
   
    
    constructor(name: string, 
        imgPath: string,
         des: string, 
         dat: Date,
          cost: number,
          ){
        this.name = name;
        this.imgpath = imgPath;
        this.description = des;
        this.dat = dat;
        this.cost = cost;
       
    }
}