export interface IEmployee{
     empid:number,
     empname:string,
     empcity:string
}

export class empClass{
    

     constructor( public empid?:number,public empname?:string ,public empcity?:string){}
}