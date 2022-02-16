const path=require("path")

//basename()
let file=path.basename('C:/a/b/c/d.json')
console.log(`basename() is =  ${file}`)


//dirname()
let dir=path.dirname('C:/tutorial/b/c/d.json')
console.log(`Directory name = ${dir}`);

//isAbsolute()
let isAbsolutePath=path.isAbsolute('C:/a/b/c/d.json')
console.log(`isAbsolutePath op  = ${isAbsolutePath}`);

 isAbsolutePath=path.isAbsolute('d.json')
console.log(`isAbsolutePath op  = ${isAbsolutePath}`);

//join()

let joinpath=path.join('c:','/a/b/c','/d.json')
console.log(`path after joining  op  = ${joinpath}`);

 joinpath=path.join(dir,'/d.json')
console.log(`path after joining  op  = ${joinpath}`);

//path.parse()

let parsepath=path.parse('C:/tutorial/b/c/d.json')
console.log(parsepath);

//path.resolve()

let resolvepath=path.resolve('d.json')
console.log(resolvepath);

  resolvepath=path.resolve('c/d.json')
console.log(resolvepath);

resolvepath=path.resolve('/a/c/d.json')
console.log(resolvepath);
