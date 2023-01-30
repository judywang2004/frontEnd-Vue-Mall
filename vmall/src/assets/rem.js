/* rem.js, simplized mobile adapter 
*/

; (function (win) {
    // get document object
    let doc = win.document;
    // get <html> ，documentElement，this is the root
    let docEl = doc.documentElement;
    console.log( docEl )

    // meta 
    let metaEl = doc.querySelector('meta[name="viewport"]')
    // force set meta 
    // viewport-fit=cover，page take the whole screen
    metaEl.setAttribute('content', 'initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no viewport-fit=cover')

    // Device Pixle Ratio, not use in this app, just a look
    let dpr = win.devicePixelRatio;
    // console.log( dpr )

    function refreshRem() {
        let _width = docEl.getBoundingClientRect().width;
        // console.log( _width )

        // check client agent 
        let ua = navigator.userAgent.toLocaleLowerCase();
        // console.log(/ipad/.test(ua)) //false

        // check if ipad or cellphone . there will be many criteria or conditions in real production codes.the logic is the same. here is just for simple 
        if (!/ipad/.test(ua)) {
            // why 750? because dpr is 2 and browser width is 375
            if (_width > 750) {
                _width = 750;
            }

            // <html> style, font size , just a base for other style to calculate
            // 
            docEl.style.fontSize = _width / 10 + 'px';
            // rem is the full length, relative to the size of the style of the root element (<html> element)
             // The usual practice is to set a font size for the html element, and then the length unit of other elements is rem
             // At this time, the font size of the style of the <html> tag is 37.5px
             // Then 1rem is equal to 37.5px
        }

    }
    // refreshRem()

    let tid;
    // when page shrink/smaller
    win.addEventListener("resize", function () {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300);
    }, false);

    // trigger when page get loaded
    // two cenario：1、direct load；2、load from cache
    win.addEventListener("pageshow", function (e) {
        // console.log(e.persisted)
        // attribute：persisted，is Boolean
        // first time load = false;
        // load from cache = true
        if (e.persisted) {
            clearTimeout(tid)
            tid = setTimeout(refreshRem, 300);
        }
    }, false)

})(window)

