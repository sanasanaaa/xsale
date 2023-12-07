<template>
	<div class="latest_collection_area">
		<div class="container">
			<div class="flag_title">
				<h2 class=""><img src="img/icon/flag-2.png" alt="">Latest Collection</h2>
			</div>
			<div class="row_collection">
				<el-row :gutter="20">
					<el-col v-for="(item,index) in cardData " :xs="24" :sm="12" :md="12" :lg="8" :xl="8" :key="index">
							<SimpleCard />
					</el-col>
				</el-row>
				<a class="main_btn" href="#" >All Cars</a>
			</div>
		</div>
	</div>
</template>

<script>
import SimpleCard from '../../../../components/SimpleCard'
export default {
	name: 'LatestCollection',
	components: {
		SimpleCard
	},
	data: function () { 
		return {
			cardData: [
				{ name: '' },
				{ name: '' },
				{ name: '' },
				{ name: '' },
				{ name: '' },
				{ name: '' },
			]
		}
	}
}


</script>

<style lang="scss">
.main_btn {
    line-height: 48px;
    font-size: 16px;
    font-family: "Barlow", sans-serif;
    display: inline-block;
    padding: 0px 26px;
    position: relative;
    border-width: 1px;
    border-style: solid;
    transition: all 300ms linear 0s;
    font-weight: bold;
}
    .latest_collection_area {
        background: #f9f9f9;
				padding-top: 100px;
				padding-bottom: 100px;

        .container {
            max-width: 1140px;
						width: 100%;
						padding-right: 15px;
						padding-left: 15px;
						margin-right: auto;
						margin-left: auto;

            .flag_title {
                margin-bottom: 60px;

								h2 {
										position: relative;
										z-index: 2;
										text-align: left;
										margin-bottom: 0px;
										font: bold 44px "Barlow", sans-serif;
										color: #34373b;
								}
							}

						.row_collection{
								margin-bottom: -30px;
								position: relative;

									.main_btn {
										position: absolute;
										right: 15px;
										top: -105px;
										z-index: 3;
										line-height: 38px;
										text-transform: uppercase;
										font-weight: bold;
										font-size: 14px;
										background-color: #8EC21E;	
										color: #fff;
									}
							}
      }
    }
</style>	