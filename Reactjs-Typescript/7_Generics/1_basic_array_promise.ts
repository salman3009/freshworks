const names:Array<string>=[];
names[0].split('');

const promise:Promise<string>=new Promise((resolve,reject)=>{
     resolve("details");
})

promise.then((data)=>{
    data.split('');
})