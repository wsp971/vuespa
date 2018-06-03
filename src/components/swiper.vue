<style>
    .swiper {
        width: 100%;
        height: auto;
        min-height: 50px;
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        overflow: hidden; }
    .swiper.vertical {
        flex-wrap: nowrap; }
    .swiper-item {
        display: inline-block;
        flex-shrink: 0;
        width: 100%;
        position: absolute;
        transition: all 1s ease-in-out; }
    .swiper-item:first-child {
        position: static; }
    .swiper-item img {
        width: 100%;
        height: 100%; }
    .swiper .point-container {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 20px;
        height: 10px;
        text-align: center;
        font-size: 0;
        /**消除幽灵节点对高度的影响*/ }
    .swiper .point-container .point {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        display: inline-block;
        background: #e7e7e7;
        border-radius: 10px; }
    .swiper .point-container .point.cur {
        background: #aaaaaa; }
    .swiper .point-container.vertical {
        position: absolute;
        left: auto;
        right: 20px;
        width: 10px;
        height: auto;
        bottom: auto;
        top: 50%;
        transform: translate3d(0, -50%, 0); }
    .swiper .point-container.vertical .point {
        display: block;
        margin: 5px 0; }

</style>


<script>

    export default {
    	name: "swiper",
        props:{
            imgItems:{
            	type: Array,
                default: function(){ return [];}
            },
            duration:{
            	type: Number,
                default: 3000
            },
	        vertical:{
            	type: Boolean,
                default: false
            }
        },
        created: function(){},

        data(){
    	    return {
                current:0,
		        animationStart:null
            }
        },


        computed:{
	        transitionX:function(){
	        	if(this.vertical){
	        		return 0;
                }else{
	        		return -1 * 100 * this.current + '%';
                }
            },
	        transitionY:function(){
	        	if(this.vertical){
	        		return -1* 100 * this.current + '%';
                }else{
	        		return 0;
                }
            },

	        transform3d: function(){
            	return  'translate3d(' + this.transitionX  + ',' + this.transitionY + ',' + 0 +  ')';
            },
            itemLen: function(){
            	return this.imgItems.length;
            }
        },

        mounted(){
           this.animationStart = this.startAnimationFun();
        },
        methods:{
    		startAnimationFun(){
			    return setInterval(()=>{
				    this.current +=1;
				    if(this.current%this.itemLen == 0){
					    this.current = 0;
				    }
			    },this.duration);
            },
	        setPosition: function(e){
                let position = e.currentTarget.dataset.index;
                this.current = position -1;
                clearInterval(this.animationStart);
                this.animationStart = this.startAnimationFun();
            }
        }
    }

</script>


<template>

    <div class="swiper" >
            <div class="swiper-item"  v-bind:style="{transform: transform3d ,left: vertical ? 0 : index * 100 + '%',top: vertical? index* 100+ '%': 0 } " v-for=" (item,index) in imgItems">
                <img :src="item" alt="">
            </div>
        <div :class="['point-container', vertical ? 'vertical': '']">
            <span :class="['point', current== index-1 ? 'cur':'' ]" v-for="index in this.imgItems.length" @click="setPosition" :data-index="index"></span>
        </div>
    </div>

</template>
