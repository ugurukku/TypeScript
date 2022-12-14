function greeter(name:string){
    return `Merhaba ${name}`;
}

let message  = greeter('uugur');

console.log(message)

let eded:number
eded = 22.3

let city:string
city = 'Baku'

let dogruMu:boolean
dogruMu = true

let ededler:number[] = [1,3,4,5]

let ededler2 : Array<number> = [1,2,3,4]

let arr :[number,string] = [1,'Baku']

enum Color {Red=1,Blue,White} 

let color : Color  =  Color.Red

console.log(color)

function salam():number{
    return 100;
}

console.log(salam)