<template>
    <div>
        <div class="content">
            <div class="item" v-for="item in movies">
                <img :src="item.url" alt="">
                <div class="text"><span class="title">{{item.name}}</span><span class="rate">{{item.rate}}</span></div>
            </div>
        </div>
        <div class="content2">

            <div class="content2_item" v-for="item in movies">
                <img :src="item.url" alt="">
                <div class="text"><span class="title">{{item.name}}</span><span class="rate">{{item.rate}}</span></div>
            </div>
        </div>
    </div>
</template>

<style>


</style>


<script>

    export  default {

    	name: 'Movie',

        data: function(){

    		return{
			    movies:[
				    {
					    name: "我的名字",
					    url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2385215679.jpg",
					    rate: 8.8
				    },
				    {
					    name: "我的名字",
					    url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2385215679.jpg",
					    rate: 8.8
				    },
				    {
					    name: "我的名字",
					    url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2385215679.jpg",
					    rate: 8.8
				    },
				    {
					    name: "我的名字",
					    url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2385215679.jpg",
					    rate: 8.8
				    },{
					    name: "我的名字",
					    url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2385215679.jpg",
					    rate: 8.8
				    },
				    {
					    name: "我的名字",
					    url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2385215679.jpg",
					    rate: 8.8
				    },
				    {
					    name: "我的名字",
					    url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2385215679.jpg",
					    rate: 8.8
				    }

			    ]

            }

        }
    }


</script>