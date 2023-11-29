function adBlockDetector() {
    setTimeout(function(){
        document.body.innerHTML += '<div class="adsbygoogle" id="test-ad"></div>'
        const testAd = document.getElementById('test-ad')
        const testAdStyle = getComputedStyle(testAd)

        if(testAdStyle.display==='none'){
            console.log('ad blocker detected!')
        } else{
            console.log('No ad blocker detected!')
        }

    }, 3000)
}

adBlockDetector()