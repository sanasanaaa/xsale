<template>
	<div class="browse_area">
		<div class="container">
			<div class="title">
                <h2 class=""  ><img src="img/icon/flag-2.png" alt=""> Browse Type</h2>
			</div>

            <div class="browse_slider">
                <div class="item" v-for="(item,index) in Brands" style="width: 112.5px; margin-right: 30px;" :key="index">
                        <div class="car_c_item">
                            <a href="shop.html"><img src="img/car-company/car-company-5.png" alt=""></a>
                            <a href="shop.html">
                                <h5>porsche <span>(26)</span></h5>
                            </a>
                        </div>

                </div>
            </div>
        </div>
		
	</div>
</template>

<script>

export default {
	name: 'Browse',
	components: {

	},
	data: function () { 
		return {
			Brands: [
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
.browse_area{
    padding-top: 275px;
    padding-bottom: 100px;
    background-color: #fff;
    
    z-index: 3;

    .container{
        width: 100%;
        max-width: 1140px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;

        .title{
            h2 {
                position: relative;
                z-index: 2;
                margin-bottom: 0px;
                font: bold 44px "Barlow", sans-serif;
                color: #34373b;
                display: inline-block;
                line-height: 1;

                img {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: -22px;
                    z-index: -1;
                    width: 100%;    
                }
            }
        }

        .browse_slider{
            width: 100%;
            z-index: 1;
            display: flex;
            justify-content: space-between;

           .item{
            text-align: center;
                img {
                    width: auto !important;
                    display: inline-block !important;
                    margin-bottom: 15px;
                    line-height: 90px;
                    height: 90px;
                }

                h5 {
                    width: 100%;
                    font: normal 16px "Barlow", sans-serif;
                    color: #34373b;
                    margin-bottom: 0px;
                    transition: all 300ms linear 0s;

                    span{
                        width: 100%;
                        display: block;
                        margin-top: 6px;
                    }
                }
            
           }
        }
    }
}


</style>	