// import { environment } from "./src/environments/environment";


const PROXY_CONFIG ={
    '/api':{
        'target': "http://localhost:3000",
         'pathRewrite':{
             '^/api':''
         }
        
    }
}
module.exports =  PROXY_CONFIG