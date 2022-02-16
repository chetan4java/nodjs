const http= require("http")


const port =8080;


function index(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.write("response send hi from home page :. ")
    response.end();
}


function aboutus(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.write("<h1>This is aAbout page </h1>")
    response.end();
}

http.createServer((request,response)=>{
let url=request.url;
    if(url == '/')
         return index(request,response);
    if(url == '/aboutus')
        return aboutus(request,response);


    console.log(`${request.url}`);

}).listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`)
})