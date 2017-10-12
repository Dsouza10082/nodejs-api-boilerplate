
module.exports =  {
    app: {
        name: 'Mad talk API',
        port: process.env.port,
        pathDelimiter:'/',
        key:'EC71FF392FED454269F7997F87AAA',
        keyAdm:'4EEBD779F91169FA4ED867595EEC5',
        keyPortal:'FC696826FDADF9B2BB3182CA166F3',
        keySite:'2FCA6E1F6E6A8B2CE5FC9F574156A',
        functionTimeout:5000,
        blockchainFee:15, //R$ 0,15 centavos
        cnabFilePath:'C:/cnab'
    },
    header: {
        json: 'application/json; charset=utf-8;'
    },
    http: {
        ok:         {cod:200, msg:'ok'},
        noContent:  {cod:204, msg:'No Content'},
        forbidden:  {cod:403, msg:'Forbidden'},
        notAuthorized:  {cod:401, msg:'ok'},
        notFound:   {cod:404, msg:'Not Found'},
        internalError:   {cod:500, msg:'Internal Error'}
    },
    session: {
        secret: '4yryrhejrhjejmmmcncn'
    },
    services:{
        CALL_REQUEST:'callRequest'        
    },
    webHook:{
         PROBE_TRANSACTION:'probe'
    },    
    securityConfig:{
        companyId:"",
        maxcount:30,
        burst:5,
        limit:4,
        maxexpiry:120,
        checkinterval:1,
        trustProxy:true,
        includeUserAgent:true,
        whitelist:[],
        errormessage:"Error: that request rate exceed contrated plan",
        testmode:false,
        silent:false,
        silentStart:false,
        responseStatus:429
    }
};