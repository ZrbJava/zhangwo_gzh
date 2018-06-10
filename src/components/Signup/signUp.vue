<template>
    <div>
                
            <!-- <group>
                <cell title="公司地址" icon="safe-success" value="请输入" inline-desc="1111"></cell>
            </group> -->

          <!-- <x-address style="display:none;" title="title" v-model="value" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address> -->
            <group>
    <x-address title="title" v-model="value" :list="addressData"></x-address>
  </group>
 
        
        <div class="signup">
            <div class="container">
               <div style="background:#fff">
                    <img src="../../assets/signup/banner.png" alt="" class="banner">
                <div class="addPhoto mb10">
                    <div class="title pl10 pr10">工作现场图片（0/5）</div>
                    <div class="upload pl10 pr10 frc">
                        <div class="pr uploadImgBox" v-for="(item,index) in uploadImg" :key="index">
                             <img src="../../assets/index/avator.png" alt="" class="upload_img">
                             <div class="delImg pa">x</div>
                             <div class="pa hidden"  @click="delImg(index)"></div>
                             
                        </div>
                        <div class="photoLogo fcc" v-if="uploadImg.length<5">
                            <img src="../../assets/signup/camera.png" alt="" class="camera mb3">
                            <span>添加照片</span>
                        </div>
                    </div>
                </div>
               </div>
                <!-- 表单域 -->
                <form action="" class="form">
                     <div class="bgf">
                        <div class="frc pr inpBox pl10"><span>姓名</span><input type="text" placeholder="请输入" ></div>
                        <div class="frc pr inpBox pl10"><span>联系电话</span><input type="number" placeholder="请输入" ></div>
                        <div class="frc pr inpBox pl10"><span>公司名称（选填）</span><input type="text" placeholder="请输入"></div>
                        <div class="frc pr inpBox pl10"><span>参赛地区</span><input type="text"  placeholder="请输入" @click="test"><img src="../../assets/signup/right.png" class="pa right_img"  alt=""></div>
                        <div class="frc pr inpBox pl10"><span>从业时间</span><input type="text"  placeholder="请输入" @click="test"><img src="../../assets/signup/right.png" class="pa right_img"  alt=""></div>
                        <div class="frc pr inpBox pl10"><span>主修类型</span><input type="text"  placeholder="请输入" @click="test"><img src="../../assets/signup/right.png" class="pa right_img"  alt=""></div>
                        <div class="frc pr inpBox pl10"><span>维修场地</span><input type="text"  placeholder="请输入" @click="test"><img src="../../assets/signup/right.png" class="pa right_img"  alt=""></div>
                        <div class="frc pr inpBox pl10"><span>维修团队</span><input type="text"  placeholder="请输入" @click="test"><img src="../../assets/signup/right.png" class="pa right_img"  alt=""></div>
                     </div>
                    <div class="addPhoto mb10 mt10 bgf" >
                        <div class="title pl10 pr10">参赛描述</div>
                        <textarea class="pl10 pr10" name="" id="">分享每天我们与挖掘机修理的那些点点滴滴…</textarea>
                    </div>
                    <div class="sign_btn pf">
                        <button>报名</button>
                    </div>
                </form>
                <actionsheet v-model="actions" :show-cancel= true cancel-text="取消你妹啊"  :menus="menus"></actionsheet>
            </div>
        </div>
    </div>
</template>

<script>
import { PopupRadio, Picker, Actionsheet, AlertModule,Cell, XAddress } from "vux";
export default {
  components: {
    PopupRadio,
    Picker,
    Actionsheet,
    AlertModule,
    Cell,
     XAddress
  },
  data() {
    return {
      uploadImg: [1, 2, 3, 4, 5],
      value: [],
      actions: false,
      menus: {
        menu1: "删除",
        menu2: "删除1",
        menu3: "删除2",
        menu4: "删除3",
        menu5: "删除4"
      },
       addressData: [
            {
                "value": "湖北省",
                "text": "湖北省",
                "children": [
                    {
                        "value": "武汉市",
                        "text": "武汉市"
                    },
                    {
                        "value": "荆州市",
                        "text": "荆州市"
                    },
                    {
                        "value": "天门市",
                        "text": "天门市"
                    }
                ]
            },
            {
                "value": "四川省",
                "text": "四川省",
                "children": [
                    {
                        "value": "成都市",
                        "text": "成都市"
                    },
                    {
                        "value": "绵阳市",
                        "text": "绵阳市"
                    },
                    {
                        "value": "巴中市",
                        "text": "巴中市"
                    }
                ]
            }
        ],
    };
  },
  methods: {
    delImg(index) {
      this.uploadImg.splice(index, 1);
    },
    test() {
      console.log(1111111111);
    }
  }
};
</script>

<style lang="less" scoped>
.bgf {
  background: #fff;
}
.signup {
  // padding-bottom:50px;
  .banner {
    height: 125px;
    width: 100%;
  }
  .addPhoto {
    background: #ffffff;
    height: 123px;
    .title {
      font-size: 13px;
      color: #333333;
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #f5f5f5;
    }
    .upload {
      align-items: center;
      justify-content: space-between;
      height: 88px;
      .delImg {
        text-align: center;
        right: 0;
        top: 0;
        background: #f05b29;
        color: #fff;
        width: 15px;
        height: 15px;
        border-bottom-left-radius: 14px;
        z-index: 1;
      }
      .hidden {
        width: 30px;
        height: 30px;
        right: 0;
        top: 0;
        background: transparent;
        z-index: 2;
      }
      .upload_img {
        width: 60px;
        height: 60px;
      }
      .photoLogo {
        background: #f5f5f5;
        border: 1px dashed rgba(200, 200, 200, 0.5);
        width: 60px;
        height: 60px;
        justify-content: center;
      }
      .camera {
        width: 22px;
        height: 19px;
      }
    }
  }
  // 表单
  .form {
    input {
      // display:block;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding-right: 26px;
      text-align: right;
    }
    input::-ms-input-placeholder {
      text-align: right;
      font-size: 13px;
      color: #999999;
    }

    input::-webkit-input-placeholder {
      text-align: right;
      font-size: 13px;
      color: #999999;
    }
    .inpBox {
      border-bottom: 1px solid #eee;
      height: 45px;
      line-height: 45px;
      font-size: 13px;
      color: #666666;
      span {
        flex: none;
      }
      .right_img {
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 8px;
      }
    }
    textarea {
      width: 100%;
      height: 88px;
      border: none;
      font-size: 12px;
      color: #999999;
      padding-top: 10px;
      line-height: 18px;
      letter-spacing: 1px;
    }
    .sign_btn {
      background: #ffffff;
      height: 50px;
      bottom: 0;
      width: 100%;
      max-width: 600px;
      left: 50%;
      transform: translateX(-50%);
      padding: 7px 14px;
      z-index: 10;
      button {
        border: none;
        width: 100%;
        background: #f05b29;
        color: #fff;
        border-radius: 2px;
        line-height: 35px;
        height: 35px;
        font-size: 14px;
      }
    }
  }
}
</style>