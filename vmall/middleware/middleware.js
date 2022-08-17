let express = require('express')
let app = express()

// test interface
app.get('/goodsTypeData',function(req,res){
    let _d = [{
        txt:'prod1',
        url:''
        },{
        txt:'prod2',
        url:''
        },{
        txt:'prod3',
        url:''
        },{
        txt:'prod4',
        url:''
        },{
        txt:'prod5',
        url:''
        },]
    res.send({ _d });
});

app.listen(8081,function(){
    console.log('8081, middleware running...')
})

