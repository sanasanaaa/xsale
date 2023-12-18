<template>
	<div>
		<div class="goods_detail_price_title">
			<div class="left">
				<h3>{{name}}</h3>
				<div class="review">
					<a href="#review" class="review_link">{{reviews}} reviews</a>
				</div>
			</div>
			<div class="right">
				<h4>{{price}}</h4>
			</div>
		</div>
  </div>
</template>


<script>

export default {
	data: function () { 
		return {
			name: "Audi A3",
			price: '$16,000',
			reviews:'2k+'
		}
	}
}

</script>

<style lang="scss">
    .goods_detail_price_title{
			border-bottom: 1px solid #e5e5e5;
			display: flex;
			justify-content: space-between;
			white-space: nowrap;
			
			.left{
				display: flex;
				align-items: center;
				text-align: left;
				h3 {
					-webkit-text-size-adjust: 100%;
					white-space: nowrap;
					color: #34373b;
					font: bold 36px "Barlow", sans-serif;
					text-align: left;
					margin-bottom: 20px;
					padding-right: 14px;
					// text-transform: uppercase;
					margin-inline-start: 0px;
					margin-inline-end: 0px;
				}

				.review{
					display: flex!important;
					.review_link{
						font-size: 14px;
						color: #777777;
						margin-left: 10px;
						margin-bottom: 15px;
					}
				}
			}
			.right{
				text-align: right;
				h4{
					font: bold 36px "Barlow", sans-serif;
					margin-bottom: 0px;

				}
			}
		}
</style>