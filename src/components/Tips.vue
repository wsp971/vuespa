<template>
    <div class="tip">
        <i class="tip_icon"></i>
        <p class="tip_text"><slot></slot></p>
        <span class="tip_refresh"  v-show="isError" @click="refreshEvent">刷新试试</span>
    </div>

</template>


<style >

    .tip {
        text-align: center;
        font-size: 15px;
    }
    .tip_icon {
        width: 50px;
        height: 50px;
        display: block;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTOo6PPZISOo7POo6POk6PfA8Q+o+Puw8QOo7Pus7Pek7PeoOX9cAAAALdFJOUwDeDYX3vyJWN6NnUq4UxQAAAq9JREFUWMOdmL9v01AQx1NHxE0nChUIeTENCESXwICATEWiILwghEAoSxFFArEEVCQklggqGLqAECxZKmBjMnWBcv8c92zXTtw7+73vLVWe+7Hv7t1796PVEuT89y+LS6uLD6+9bdnJuU9UyKmXFkDnIs3I8fUm4kJAFYm/1ROPI/Nfq59fv19efvrh6pL5lVyuI54Z4saV8OC39+6eYb7qRM+89EE4veS9MmuXNMJnO+JDT3tmdaT4aijbajyyJ/ttU3ub+fpNxZBE0bkXieZ4rNZ9zconrFp4aPUR0W3dlz+ITlTX5gOKxzoiPd4iulu3yWeJblXeEtF+WId4E0rGVUv69dHXrljjBbTbFOMDisNZTftNSHvW2gHtNx++ybQmfoO7ClXKeNqYVVNzWkBrxY9h1eeybNHelF47NshCqdnpkq6XIR0r/LVmh2wc+KxjsSnF1mSnsyv668VJ0Wcf88/9Ed4YxMLim9yEAR0VnhIJi3OZMV4kulhEFigJ0z/i1osIG7NTfswKyY14Tr/skRX6nYJ37JEjqUoBjewRn9j3XuYES4TdGzInx6SMcGSOOFx2XZABh8wc/XVBttnLK3TdBTnDW7ItRpiKGKV+5vFsiXTpH9vTd0Ha7K2JvJMa4vMlOaSxCzLP2xi4IjEj6y5IJ0VCF8RjJHJFEgQBFIPMd3YysJVAwABhqQW/eI1nwa8dMSlZ5EdMO8iKmIOsXReKGKW6zdVL9VLybdNxefVpF6xSYaRRrFzjSvVtrnEtWciSJQslJcmSpSQl8clbmamkpFcxYPL0CiRxoFRAChKg7AGKK6CEQwpFoBwFil6ktAYKeKBNQJoRoOUBGiukfQOaRKQVBRpepK2ua97bkTKLcB8RIIMIYNyBDFWQ0Q0yIELGUMiwCxmpNQ/u/gPSK9FuBo3RxAAAAABJRU5ErkJggg==") no-repeat;
        background-size: 100%;
        margin: auto; }
    .tip_text {
        text-align: center;
        line-height: 50px; }
    .tip_refresh {
        line-height: 1.5;
        padding: 10px;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 5px; }

</style>



<script>
	export  default{
    	name: 'tips',
        props:{
	        isError:{
		        type: Boolean,
		        default: true
	        }
        },
        methods:{
	        refreshEvent: function(){
	            this.$emit("refresh");
            }
        }
    }
</script>