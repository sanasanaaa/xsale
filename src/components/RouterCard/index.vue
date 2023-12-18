
<template>
    <div class="router_card_area">  
        <div class="container">
            <div class="inner">
                <h3>{{title?title:'-'}}</h3>
                <!-- <div class="router_link">{{router_path?router_path:'--'}}</div> -->
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'router_card',

    props: {
        router_path: String,
        title:String
    }
}

</script>


<style lang="scss">
    .router_card_area{
        background-size: cover !important;
        padding: 120px 0px 118px 0px;
        position: relative;
        z-index: 2;
        background-repeat: no-repeat !important;
        background-color: #f5f5f5;

        :before {
            content: "";
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
            left: 0px;
            top: 0px;
            height: 100%;
            width: 100%;
            z-index: -1;
        } 

        .inner{
            text-align: center;
            color: #fff;
            h3 {
                font: bold 60px "Barlow", sans-serif;
                margin-bottom: 12px;
            }
        
        }
    }

</style>