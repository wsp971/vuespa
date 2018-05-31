<style>
    .swiper {
        width: 100%;
        height: auto;
        min-height: 50px;
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        overflow: hidden; }
    .swiper-item {
        display: inline-block;
        flex-shrink: 0;
        width: 100%; }
    .swiper-item img {
        width: 100%;
        height: 100%; }
    .swiper .point-container {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 20px;
        height: 10px;
        font-size:0;         /**消除幽灵节点对高度的影响*/
        text-align: center; }
    .swiper .point-container .point {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        display: inline-block;
        background: #e7e7e7;
        border-radius: 10px; }
    .swiper .point-container .point.cur {
        background: #aaaaaa; }

</style>


<script>

    export default {
    	name: "swiper",
        props:{

        }
    }

</script>


<template>

    <div class="swiper">
        <div class="swiper-item">
            <img src="http://jdc.jd.com/img/750x250?color=eee&fontSize=30" alt="">
        </div>
        <div class="swiper-item">
            <img src="http://jdc.jd.com/img/750x250?color=eee&fontSize=30" alt="">
        </div>
        <div class="swiper-item">
            <img src="http://jdc.jd.com/img/750x250?color=eee&fontSize=30" alt="">
        </div>
        <div class="point-container">
            <span class="point"></span>
            <span class="point cur"></span>
            <span class="point"></span>
        </div>
    </div>

</template>
