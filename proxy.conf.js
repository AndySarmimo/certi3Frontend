
   const PROXY_CONFIG ={
    '/api':{
        'target': "http://upb-alb-233930559.us-east-1.elb.amazonaws.com:3306",
         'pathRewrite':{
             '^/api':''
         },
         'secure':false
    }
}
module.exports =  PROXY_CONFIG
