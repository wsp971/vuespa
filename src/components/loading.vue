<style>

    .loading1 {
        text-align: center; }
    .loading1 div {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: #cccccc;
        border-radius: 20px;
        animation: loading1 1.4s infinite  ease-in-out; }
    .loading1 div.one {
        animation-delay: -.32s; }
    .loading1 div.two {
        animation-delay: -.16s; }
    .loading1 div.three {
        animation-delay: 0s; }


    @keyframes loading1 {
        0%, 80%, 100% {
            transform: scale(0); }
        40% {
            transform: scale(1); } }


    .loading2 {
        text-align: center;
        width: 40px;
        height: 40px;
        display: inline-block;
        border-radius: 40px;
        border: 2px solid transparent;
        border-left-color: #ff0000;
        border-top-color: #ff0000;
        animation: loading2 .8s infinite linear; }
    .loading2.ease {
        animation-timing-function: ease; }
    .loading2.ease-in-out {
        animation-timing-function: ease-in-out; }

    @keyframes loading2 {
        0% {
            transform: rotate(0); }
        100% {
            transform: rotate(360deg); } }

    .loading3 {
        width: 40px;
        height: 40px;
        position: absolute;
        left:50%;
        /*transform: translate3d(-50%,0,0);*/
        transform: translateX(-50%);
        clip: rect(0, 40px, 20px, 0);
        border-radius: 40px;
        border: 2px solid #ff0000;
        animation: loading2 .5s infinite  linear; }

</style>

<template>
    <div>
        <div class="loading1" v-if="type==1">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
        </div>
        <div class="loading2" v-if="type==2"></div>
        <div style="height: 60px;position:relative;" v-if="type==3">
            <div class="loading3"></div>
        </div>
    </div>
</template>

<script>

    export default {
    	 name: "loading",
	     props: ['type'],
         data: function(){
    	 	return {
            };
         }
    }


</script>