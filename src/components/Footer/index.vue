<template>
    <footer class="">
    
        <div class="footer_copyright">
            <div class="container">
                <el-row>
                    <el-col  :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <div class="message_info">
                            <h3>Contact Info</h3>
                            <!-- <a class="f_logo" href="index.html"><img src="img/repair-logo.png" srcset="img/repair-logo-2x.png 2x" alt="bar"></a> -->
                            <a>
                                <i class="icon-map_marker_2" aria-hidden="true"></i> 
                                Address:&nbsp;&nbsp;&nbsp;&nbsp;{{ map }}
                            </a>
                            <a >
                                <i class="icon-envelop_2" aria-hidden="true"></i> 
                               E-Mail:&nbsp;&nbsp;&nbsp;&nbsp;{{email}}
                            </a>
                            <a >
                                <i class="icon-phone_2" aria-hidden="true"></i>
                               Tel:&nbsp;&nbsp;&nbsp;&nbsp;{{phone}}
                            </a>
                        </div>
                    
                    </el-col>
                    <el-col  :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <div class="quick_link">
                                <h3> Quick Link</h3>
                                <a href="">Shop</a>
                                <a href="">About us</a>
                                <a href=""></a>
                                <a href=""></a>

                        </div>
                    </el-col>
                    <el-col  :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                        <div class="SubscribeUs">
                            <h3>Subscribe us</h3>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Your email">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary red" type="button" id="button-addon2">Send</button>
                                </div>
							</div>
                        </div>
                    </el-col>
                </el-row>

                <div class="copyright_inner">
                    <div class="left">
                        <p>Copyright © 2023.Sanasan All rights reserved.</p>
                        <p>Design by Sanasan</p>
                    </div>
                  
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    name: "s-footer",
    data() {
        return {
            map: '四川省成都市金牛区',
            email: '2635343666@qq.com',
            phone: '18119445865',
        }
    },
    
};
</script>

<style lang="scss">

footer{
    width: 100%;
    padding-top: 70px;
    background-color: #000;
    overflow: hidden;

    .message_info,.quick_link,.SubscribeUs{
        h3 {
            color: #fff;
            font: bold 24px "Barlow", sans-serif;
            margin-bottom: 32px;
        }
        a {
            display: block;
            color: #fff;
            position: relative;
            margin-bottom: 15px;
        }
    }
    
    .footer_copyright{
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 0px;

        .copyright_inner{
            text-align: center;
        }
    }

    .input-group {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: stretch;
        align-items: stretch;
        width: 100%;
        input {
            background: #3a3a3a;
            width: 100%;
            display: block;
            border: none;
            height: 55px;
            outline: none !important;
            box-shadow: none !important;
            border-radius: 27.5px !important;
            padding-right: 75px;
            padding-left: 20px;
            padding-top: 0px;
            padding-bottom: 0px;
            color: #fff;
            font: normal 15px/55px "Barlow", sans-serif;
        }

        .input-group-append {
            position: absolute;
            right: 4px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 4;
            margin-left: -1px;
            display: flex;
            button {
                border: none;
                height: 47px;
                border-radius: 23.5px !important;
                width: 70px;
                background-color:#8EC21E ;
                padding: 0px;
                text-align: center;
                outline: none !important;
                box-shadow: none !important;
                transition: all 300ms linear 0s;
                color: #fff;    
            }
        }
    }
    
}

</style>

