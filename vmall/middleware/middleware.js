let express = require('express')
let app = express()

// GoodsTypeBtn
app.get('/goodsTypeData',function(req,res){
    let _d = [{
        txt:'prod11',
        url:''
        },{
        txt:'prod22',
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
        },{
        txt:'prod6',
        url:''
        }]
        // console.log(JSON.stringify(_d));
    // res.send(JSON.stringify(_d));
    res.send(_d);
});

// Swipe Start 
app.get('/swipeData',function(req,res){
    let _d =[{
          imgurl:'https://res.vmallres.com/pimages//pages/picImages/57348574663617584375.jpg'
       },{
          imgurl: 'https://res.vmallres.com/pimages//pages/picImages/68557574663617575586.jpg'
       },{
          imgurl: 'https://res.vmallres.com/pimages//pages/picImages/32887574663617578823.jpg'
       }]
       res.send(_d )

})

// Grid, draggable Butten list
app.get('/gridGoodsData',function(req,res){
    let _d = [{
        imgurl:"https://res.vmallres.com/uomcdn/CN/cms/202205/5E0C9E2502B467B23042E572E639243A.png.75.webp",
        txt:"AI Office"
    },{
        imgurl:"https://res.vmallres.com/uomcdn/CN/cms/202207/E615C067A45F4E3EFB234CE86B6CA69B.png.75.webp",
        txt: "AI computer"
    },{
        imgurl:"https://res.vmallres.com/uomcdn/CN/cms/202208/58DB5B0A3F5529A5DE787DCFD10E65D4.webp",
        txt: "AIHome"
    },{
        imgurl: "https://res.vmallres.com/uomcdn/CN/cms/202206/F82423F6E11CABD5998B76397853117F.png.75.webp",
        txt: "Cellphone"
    },{
        imgurl: "https://res.vmallres.com/uomcdn/CN/cms/202207/E69A96C8F75A8C93E6DB5BEE5BA6F180.png.75.webp",
        txt: "HealthKit"
    },{
        imgurl: "https://res.vmallres.com/uomcdn/CN/cms/202207/E69A96C8F75A8C93E6DB5BEE5BA6F180.png.75.webp",
        txt: "HealthKit2"
    },{
        imgurl: "https://res.vmallres.com/uomcdn/CN/cms/202207/E69A96C8F75A8C93E6DB5BEE5BA6F180.png.75.webp",
        txt: "HealthKit3"
    },{
        imgurl: "https://res.vmallres.com/uomcdn/CN/cms/202207/E69A96C8F75A8C93E6DB5BEE5BA6F180.png.75.webp",
        txt: "HealthKit4"
    }]
    res.send( _d)
})

// Limited Time Purchase : limitBuy
app.get('/limitGoodsData',function(req,res){
    let _d = [{
                imgurl: 'https://res.vmallres.com/pimages//uomcdn/CN/pms/202208/gbom/6930345500498/428_428_37787513219D923628BE46C6C80F77FEmp.png',
                price: 999,
                ol_price:1999
             },{
                imgurl: 'https://res.vmallres.com/pimages//uomcdn/CN/pms/202112/sbom/4405010000701/428_428_595EEE852693FDBF022BCB6441E75CDC.png',
                price: 888,
                ol_price:1999
            },{
                imgurl: 'https://res.vmallres.com/pimages//uomcdn/CN/pms/202112/gbom/6971300260673/428_428_B6120A6C9FE69D0F2938CADD7F5FF661mp.png',
                price: 777,
                ol_price:1999
            },{
                imgurl: 'https://res.vmallres.com/pimages//uomcdn/CN/pms/202205/gbom/6941487243228/428_428_3933B27625DB4CDA4ADA669A1244F387mp.png',
                price: 666,
                ol_price:1999
            }]

    res.send( _d )
})

app.listen(8081,function(){
    console.log('8081, middleware running...')
})

