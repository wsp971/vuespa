<style>

    .upToTop{
        position:fixed;
        right: 10px;
        bottom: 40px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbBAMAAADuGOSqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURQAAAAAAAAAAAEdwTJycnIuLizg4OE5OTujo6La2tuzs7AAAAAAAAPf397t56XwAAAANdFJOU7OTIADd18HG+eb7haZY52lSAAAA+UlEQVRYw+3YPwrCMBTH8TdUSwfBI7g7qRdwEJwKLuIkdHZyUwqunR1cPULv0qGCDrmL+dOCJD9qgorLe/OHLyQh0IZmY/KfIU0piE/C+Ig5c+bMP+Lx2p5NF0+EPfX/eG9hz/IXG3nMQnhcFiH8JO6ZP49LIQp/nssdhHnIVRznIc/1AaE84jpewzziMr4VVYrygMv4bSCqCOUBl/GV5ITyLldxUhzlXa7imqO8w/sqbjjIO3yn4oaDvM1NvOFu3uYm3nA3b/Orjrdc5uedPNHxllP6eLPUC73y6Ox1m1ruefmYM2f+LR4f9vxxxZx56J984DtB2CvEE4Hg0X6XrjHLAAAAAElFTkSuQmCC") no-repeat;
        background-size: 100%;
        width: 40px;
        height: 100px;
        display:inline-block;
    }

</style>


<template>
    <div class="upToTop" @click="toTop" v-show="isShow"></div>
</template>


<script>
    export default {

    	name: "upToTop",
        data: function(){
    	    return {
    	    	isShow: false
            }
        },
        methods:{
    		toTop: function(){
                document.documentElement.scrollTop = 0;
            }
        },
        created: function(){
    		var winHeight = window.innerHeight;
    		var self = this;
            window.addEventListener('scroll', function(){
            	var scrollTop = document.documentElement.scrollTop;
            	if(scrollTop > winHeight/2){
            		self.isShow = true;
                }else{
            		self.isShow = false;
                }
            },false);
        }
    }
</script>