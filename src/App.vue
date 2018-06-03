<template>
    <div id="app">
        <div class="wrapper">
            <!--<img src="./static/logo.png" alt="">-->
            <header>

                <swiper
                       :img-items="swiperItems"
                       :vertical="true"
                ></swiper>
                <div class="banner">
                    <img src="http://jdc.jd.com/img/750x260?color=eee&fontSize=40" alt="">
                </div>
                <swiper
                        :img-items="swiperItems"
                ></swiper>
            </header>
            <loading :type="loadingtype"></loading>
            <tips v-on:refresh="refresh" :isError="error">{{errorMsg}}</tips>
            <router-view/>
            <footer>
                <div class="bottombar">
                    <router-link to="/movie" class="bottombar_item cur">
                        电影
                    </router-link>
                    <!--<div class="">-->
                        <!---->
                    <!--</div>-->
                    <router-link to="/books" class="bottombar_item">
                        图书
                    </router-link>

                </div>
            </footer>
        </div>
        <up-to-top></up-to-top>

    </div>
</template>

<script>

    import tips from './components/Tips';

    import loading from './components/loading';

    import upToTop from './components/backToTop';

    import swiper from './components/swiper';

	export default {
		name: 'App',
        data: function(){
			return {
				errorMsg: "您的网络出现问题了！",
				error: false,
                loadingtype: 1,
                swiperItems:[
                	'http://jdc.jd.com/img/750x250?color=eee&fontSize=30',
                    'http://jdc.jd.com/img/750x250?color=FF00FF&fontSize=30',
                    'http://jdc.jd.com/img/750x250?color=FFFF00&fontSize=30',
                    'http://jdc.jd.com/img/750x250?color=CCAABB&fontSize=30',
                    'http://jdc.jd.com/img/750x250?color=ABCD12&fontSize=30'
                ]
            }
        },
        components:{
            tips,
            loading,
            upToTop,
            swiper
        },
        methods: {
			refresh: function(){
				console.log("refresh!!");
            }
        }
	}

</script>


<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }


    @charset "UTF-8";
    /* 重置样式 */
    * {
        -webkit-tap-highlight-color: transparent;
        outline: 0; }

    body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
        margin: 0;
        padding: 0;
        vertical-align: baseline; }

    img {
        border: 0 none;
        vertical-align: top; }

    i, em {
        font-style: normal; }

    ol, ul {
        list-style: none; }

    input, select, button, h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-family: inherit; }

    table {
        border-collapse: collapse;
        border-spacing: 0; }

    a, a:visited {
        text-decoration: none;
        color: #333; }

    /* 图片路径 */
    /**
     * space-around
     * space-between
     * center
     */
    html {
        font-size: 20px;
        font-size: 5.33333vw; }
    @media screen and (max-width: 320px) {
        html {
            font-size: 17.06667px; } }
    @media screen and (min-width: 540px) {
        html {
            font-size: 28.8px; } }

    .wrapper {
        margin: 0 auto;
        width: 18.75rem;
        background: #f7f7f7; }
    .wrapper .banner {
        height: 6.5rem; }
    .wrapper .banner img {
        width: 100%;
        height: 100%; }
    .wrapper .content {
        margin-top: 10px;
        padding: 0 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        background: #f7f7f7; }
    .wrapper .content .item {
        background: #ffffff;
        display: inline-block;
        width: 5.75rem;
        height: 11rem;
        border: 1px solid #ddd;
        margin-right: 0.25rem;
        margin-bottom: 20px; }
    .wrapper .content .item img {
        width: 100%;
        height: 9rem; }
    .wrapper .content .item .text {
        line-height: 2.5;
        font-size: 16px;
        text-align: center; }
    .wrapper .content .item .text .title {
        color: #37a; }
    .wrapper .content .item .text .rate {
        color: #e09015; }
    .wrapper .content .item:nth-child(3n) {
        margin-right: 0; }
    .wrapper .content2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; }
    .wrapper .content2::after {
        content: "";
        display: block;
        width: 100%;
        height: 60px; }
    .wrapper .content2_item {
        width: 50%;
        border-radius: 5px;
        background: #ffdba9;
        height: 14rem;
        display: inline-block;
        margin-bottom: 1px; }
    .wrapper .content2_item img {
        width: 100%;
        height: 12rem; }
    .wrapper .content2_item:nth-child(2n) {
        margin-left: 1px;
        margin-right: -1px; }
    .wrapper .content2_item .text {
        line-height: 2.5;
        font-size: 16px;
        text-align: center; }
    .wrapper .content2_item .text .title {
        color: #37a; }
    .wrapper .content2_item .text .rate {
        color: #e09015; }
    .wrapper .bottombar {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 60px;
        font-size: 16px;
        line-height: 60px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        border-top: 1px solid #ccc; }
    .wrapper .bottombar_item {
        display: inline-block;
        flex-grow: 1;
        flex-shrink: 1;
        width: 100px;
        color: #aaaaaa;
        background: #eeeeee;
        text-align: center; }
    .wrapper .bottombar_item.cur {
        color: #00df00; }




</style>
