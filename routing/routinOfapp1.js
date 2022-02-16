const http= require("http")


const port =8080;

const routes={
    '/':function index(request,response){
                    response.writeHead(200,{'content-type':'text/html'});
                    response.write("<h1>Home page </h1> ")
                    response.end();
                },
    
    '/aboutus':function aboutus(request,response){
                    response.writeHead(200,{'content-type':'text/html'});
                    response.write("<h1>This is aAbout page </h1>")
                    response.end();
                },
    '/contactus':function conatctus(request,response){
                    response.writeHead(200,{'content-type':'text/html'});
                    response.write("<h1>This is aAContact us page </h1>")
                    response.end();
                }
                
}


http.createServer((request,response)=>{
let url=request.url;
console.log("Url is "+url)
    if(url in routes)
    return routes[url](request,response)
  


 
}).listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`)
})