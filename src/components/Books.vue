<style>
    .books{
        width: 100%;
        background: #ccc;
        height: 500px;
    }
</style>



<template>
    <div>
        <div class="books">图书</div>
        <p>名称： {{name}}</p>
    </div>

</template>


<script>

 export default {

 	name: 'Books',
    data: function(){
 		return {
 		    name: '人人都是产品经理'
        }
    }

 }



</script>