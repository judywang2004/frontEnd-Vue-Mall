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
          imgurl:'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
       },{
          imgurl: 'https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79'
       },{
          imgurl: 'https://images.unsplash.com/photo-1504375243548-4c974e20e993'
       }]
       res.send(_d )

})

// Grid, draggable Butten list
app.get('/gridGoodsData',function(req,res){
    let _d = [{
        imgurl:"https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        txt:"AI Office"
    },{
        imgurl:"https://images.unsplash.com/photo-1546868871-7041f2a55e12",
        txt: "AI computer"
    },{
        imgurl:"https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79",
        txt: "AIHome"
    },{
        imgurl: "https://images.unsplash.com/photo-1464564531096-f0163633a18a", 
        txt: "Cellphone"
    },{
        imgurl: "https://images.unsplash.com/photo-1483032469466-b937c425697b",
        txt: "HealthKit"
    },{
        imgurl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        txt: "HealthKit2"
    },{
        imgurl: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
        txt: "HealthKit3"
    },{
        imgurl: "https://images.unsplash.com/photo-1505751104546-4b63c93054b1",
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

//category page, sidebar nav, menu
app.get('/sidebarItemName',function(req,res){
    let _d = [{
                sideName:'New Arrive'
             },{
             sideName:'Cellphone'
             },{
                sideName:'Computer'
             },{
                sideName:'iPad'
             },{
                sideName:'SmartWatch' 
             },{
             sideName:'Cellphone'
             },{
                sideName:'Computer'
             },{
                sideName:'iPad'
             },{
                sideName:'SmartWatch'
            },{
                sideName:'Cellphone'
            },{
                sideName:'Computer'
            },{
                sideName:'iPad'
            },{
                sideName:'SmartWatch'
                
            }]

    res.send( _d )
})

// return coresponding value based on sidebar menu index
app.get('/sidebarGetGoods',function(req,res){
    let sidebarInx = Number(req.query.n);
    let _d =  [{
        inx:0,
        title:'New Arrival',
        goods:[{
                goodsInx:'11',
                imgurl:'https://res.vmallres.com//cmscdn/CN/2022-10/1a98b191236a4e6a9281792b52709149.png',
                goodsName:'Car',
            },{
                goodsInx:'12',
                imgurl:'https://res.vmallres.com//cmscdn/CN/2022-10/6bfe8588574e49249799b3352d58aa9c.png',
                goodsName:'Car2',
            },{
                goodsInx:'13',
                imgurl:'https://res.vmallres.com/pimages//uomcdn/CN/pms/202208/gbom/6941487276479/428_428_0F233DFEF531B9659EFC70F8934BFA16mp.jpg',
                goodsName:'111',
            },]

    },{
        inx:1,
        title:'Car Accessary',
        goods:[{
                goodsInx:'14',
                imgurl:'https://res.vmallres.com/pimages//FssCdnProxy/vmall_bop_server/BopMaterialCenter/428_428_1FD209DE45835020E928403BB003AE73.png',
                goodsName:'222',
            },{
                goodsInx:'15',
                imgurl:'https://res.vmallres.com/pimages//uomcdn/CN/pms/202205/gbom/6971943680502/428_428_03B5D75B9D28AC9DAAE0CB7C54ABA55Emp.png',
                goodsName:'222',
            },{
                goodsInx:'16',
                imgurl:'https://res.vmallres.com/pimages//uomcdn/CN/pms/202210/gbom/6941487286843/428_428_3F569A0F0BD7A75ED877115F0FB114E5mp.png',
                goodsName:'333',
            },]

    },{
        inx:2,
        title:'cellphone',
        goods:[{
                goodsInx:'17',
                imgurl:'https://res.vmallres.com/pimages//FssCdnProxy/vmall_bop_server/BopMaterialCenter/428_428_4E6FF380B8E76F3F045D9E8B2BB53B08.png',
                goodsName:'222',
            },{
                goodsInx:'18',
                imgurl:'https://res.vmallres.com/pimages//uomcdn/CN/pms/202209/gbom/6971837084188/428_428_5D1F1D498C508C3CA440851AFB9B0E93mp.png',
                goodsName:'222',
            },{
                goodsInx:'19',
                imgurl:'https://res.vmallres.com/pimages//FssCdnProxy/vmall_bop_server/BopMaterialCenter/428_428_5E874272522442D2A13F44D740FDB5F8.png',
                goodsName:'333',
            },]

    }]

    // filter return value based on index
    let _goods = _d.filter(_obj=>{
        return _obj.inx ===sidebarInx
    })

    res.send( _goods )
})

app.listen(8081,function(){
    console.log('8081, middleware running...')
})

