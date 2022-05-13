
const PROXY_CONFIG ={
    '/api':{
        'target': "http://upb-alb-1098414869.us-east-1.elb.amazonaws.com:3306",
         'pathRewrite':{
             '^/api':''
         }
    }
}
module.exports =  PROXY_CONFIG
