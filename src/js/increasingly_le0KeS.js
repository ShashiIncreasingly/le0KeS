/* eslint-disable no-inner-declarations */
function generateRandomString(bits1) {
    return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
}
function getCurrentFormattedTime() {
    let d = new Date();
    return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
}

function getVisitorId() {
    function generateUniqueINCVisitorId(len, bits) {
        let bits1 = bits || 36;
        let outStr = "";
        let newStr;
        while (outStr.length < len) {
            newStr = generateRandomString(bits1).toString().slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }
    let clientdomain = window.location.host
    let arr = clientdomain.split(".");
    let d = new Date();
    let expires = "expires=" + d.toUTCString();
    let ivid = "";
    if(readCookie('ivid') != undefined){
        ivid = readCookie('ivid')
    }
    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        arr.shift();
        clientdomain = arr.join(".");
        if(arr == 'com' || window.location.host.indexOf('www') == -1){
            clientdomain = window.location.host;
        }
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }else{
        arr.shift();
        clientdomain = arr.join(".");
        if(arr == 'com' || window.location.host.indexOf('www') == -1){
            clientdomain = window.location.host;
        }
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }
    return ivid;
}
getVisitorId()

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let s of ca) {
        let c = s;
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    if (window.innerWidth < 1367 && window.innerWidth > 600) {
        document.querySelector('body').classList.add('safari_browser')
    } else if (window.innerWidth > 1367) {
        document.querySelector('body').classList.add('safari_browser_inc')
    }
}

if (readCookie('ivid') != null) {
    let cook_ids = readCookie("ivid");
    localStorage.setItem('inc_cookie', cook_ids);
    getCurrentFormattedTime()
}



//https://www.leekes.co.uk/checkout/onepage/success/
if(window.location.host == 'www.leekes.co.uk' && window.location.pathname.indexOf("onepage/success") >= 0){
    var firemailonceflag = true
    var products;
    var orderID = 0;
    var ordamount= 0
    var ship = 0
    var inctax = 0
    var currency = "GBP";
    var eld = setInterval(function(){
        if(window.dataLayer != undefined){
            for(d=0;d<window.dataLayer.length;d++){
                if(window.dataLayer[d]["ecommerce"] != undefined){
                    if(window.dataLayer[d]["ecommerce"]["purchase"]["products"] != undefined && window.dataLayer[d]["ecommerce"]["purchase"]["products"].length > 0){
                        if(window.dataLayer[d]["ecommerce"]["currencyCode"] != undefined) {
                            currency = window.dataLayer[d]["ecommerce"]["currencyCode"]
                        }
                        products =  window.dataLayer[d]["ecommerce"]["purchase"]["products"];
                        orderID = window.dataLayer[d]["ecommerce"]["purchase"]["actionField"].id;
                        ordamount = window.dataLayer[d]["ecommerce"]["purchase"]["actionField"].revenue
                        ship = window.dataLayer[d]["ecommerce"]["purchase"]["actionField"].shipping
                        inctax = window.dataLayer[d]["ecommerce"]["purchase"]["actionField"].tax
                        clearInterval(eld)
                    }
                }
            }
            if(firemailonceflag == true){
                trackConversion();
            }
        }

    }, 500);
    // eslint-disable-next-line no-inner-declarations
    function trackConversion() {
        if(window.location.host == 'www.leekes.co.uk' && window.location.pathname.indexOf("onepage/success") >= 0){
            try{
                firemailonceflag = false
            var _incProductsInfo= "";
            var _ivid = "";
                if (localStorage.getItem('inc_cookie') != null && localStorage.getItem('inc_cookie') != "" && localStorage.getItem('inc_cookie') != undefined) {
                _ivid = localStorage.getItem('inc_cookie');
                }

                if (_ivid == null || _ivid == "" || _ivid == undefined) {
                _ivid = readCookie('ivid');
                } 

            if(products != undefined && products != null){  
                for(i=0; i < products.length; i++){       
                var unitPrice =  parseFloat(products[i].price)
                    _incProductsInfo += "p1=" + products[i].id + "&p2=" + unitPrice + "&p3=" + products[i].quantity + "|"
                }
                _incProductsInfo = _incProductsInfo.replace(/\|$/, '');
                // var currency = "GBP";
                // if(document.querySelector(".price_currency_code") != undefined){
                //     currency = document.querySelector(".price_currency_code").innerText
                // }
                var _incConvPixData = '//optimizedby.increasingly.co/track?CONVERSION_PIXEL/clientId=48&orderId='+orderID+'&orderAmount='+ordamount+'&orderStatus='+escape('complete')+'&currency='+currency+'&discountAmount=&couponCode=&storeCode='+currency+'&transactionTax='+inctax+'&transactionShipping='+ship+'&ivid='+_ivid+'&productsInfo='+escape(_incProductsInfo)+'&cb='+Math.floor(Math.random()*999999);

                var _incConvPixElm = document.createElement('img');
                _incConvPixElm.setAttribute('border', '0');
                _incConvPixElm.setAttribute('width', '1');
                _incConvPixElm.setAttribute('height', '1');
                _incConvPixElm.setAttribute('src',_incConvPixData);
                _incConvPixElm.setAttribute('style','display:none');

                var _incConvPixPlaceToSet = document.querySelector('body');
                if(orderID != ""){
                    console.log(_incConvPixElm)
                    _incConvPixPlaceToSet.appendChild(_incConvPixElm);
                }

            }
            } catch (err) {
                var formData = new FormData();
                formData.append("EmailId", "tech@increasingly.com");
                formData.append("Subject", 'Conversion pixel Error on Leekes');
                formData.append("Message", err.stack);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                xhr.send(formData);
            }
        }

    }
}

var cssfileload=false
function checkpagetype(){
    if (document.querySelector(".catalog-product-view") != null || document.querySelector(".checkout-cart-index") != null) {
        cssfileload = true;
    }
    
    if(cssfileload){
        if(window.location.href.includes('inctest') == true){
            function addCSSFile() {
                var cssFilePath = "https://www.increasingly.co/Implementation/le0KeS/tickbox/css/IY3whK.css";
                var linkTag = document.createElement('link');
                linkTag.rel = "stylesheet";
                linkTag.href = cssFilePath;
                document.querySelector('head').appendChild(linkTag);
            }
            addCSSFile()
            setTimeout(function(){
                var versionUpdate = (new Date()).getTime();
                var jsFilePath = "https://www.increasingly.co/Implementation/le0KeS/prod/js/IY3whK_tickbox.js"
                var scriptTag = document.createElement('script');
                scriptTag.type = 'text/javascript';
                scriptTag.src = jsFilePath;
                document.querySelector('body').appendChild(scriptTag);
            },500)
        }else{
            function addCSSFile() {
                var cssFilePath = "https://www.increasingly.co/Implementation/le0KeS/css/IY3whK.css";
                var linkTag = document.createElement('link');
                linkTag.rel = "stylesheet";
                linkTag.href = cssFilePath;
                document.querySelector('head').appendChild(linkTag);
            }
            addCSSFile()
            setTimeout(function(){
                var versionUpdate = (new Date()).getTime();
                var jsFilePath = "https://www.increasingly.co/Implementation/le0KeS/prod/js/IY3whK.js"
                var scriptTag = document.createElement('script');
                scriptTag.type = 'text/javascript';
                scriptTag.src = jsFilePath;
                document.querySelector('body').appendChild(scriptTag);
            },500)
        }
    }
}
if(window.location.hostname == 'www.leekes.co.uk' ){
    checkpagetype()
}