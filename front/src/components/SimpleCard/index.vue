<template >
    <div class="simple_card_area">
        <div class="car_img">
            <a href="product-details.html">
                <img class="img-fluid" src="img/product/car-collection/car-1.jpg" alt="">
            </a>
        </div>
        <div class="text_body">
            <a href=""><h4>Jaguer M1 Hybrid</h4></a>
            <h5>$16,000</h5>
            <p>Build year: <span>2015</span></p>
        </div>
        <div class="text_footer">
            <a href="#"><i class="icon-engine"></i> 2500</a>
            <a href="#"><i class="icon-gear1"></i> Manual</a>
            <a href="#"><i class="icon-oil"></i>20/24</a>
        </div>
        
    </div>
</template>

<script>


</script>


<style lang="scss">
    .simple_card_area{
        border-radius: 5px;
        background: #fff;
        overflow: hidden;
        margin-bottom: 30px;
        box-shadow: 0px 2px 4px 0px rgba(0, 121, 175, 0.08);
        transition: all 300ms linear 0s;

        .car_img{
            overflow: hidden;
            position: relative;
            height: 350px;
            width: 233px;
            z-index: 2;
        }
        .text_body {
            padding: 25px 30px 20px 30px;
            h4 {
                display: inline-block;
                color: #34373b;
                font: bold 24px "Barlow", sans-serif;
                margin-bottom: 12px;
                transition: all 300ms linear 0s;
            }

            p span {
                font-weight: 500;
                color: #34373b;
            }

             h5 {
                display: inline-block;
                float: right;
                font: bold 24px "Barlow", sans-serif;
                color: #34373b; 
            }
        }
        .text_footer{
            display: flex;
            flex-wrap: wrap;
            border-top: 1px solid #e4e4e4;

            a {
                flex: 0 0 33.33%;
                max-width: 33.33%;
                display: inline-block;
                text-align: center;
                color: #777777;
                font: normal 16px/50px "Barlow", sans-serif;
                cursor: auto;
                transition: all 300ms linear 0s;    
            }
        }
    }

</style>