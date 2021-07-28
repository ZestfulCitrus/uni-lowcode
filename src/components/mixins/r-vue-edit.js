import defaultData from "./default_data.js"; //导入默认数据
export const redit = {
    data() {
        return {
            ...defaultData,
            contShow: false,
        };
    },
    beforeMount() {
        this.options.push(this.getData(this.rFormInput, this));
    },
    methods: {
        //在这里将拖入组件时的默认数据压入页面中
        addComp(type, index) {
            switch (type) {
                case "r-form-input":
                    this.options.splice(index, 0, this.getData(this.rFormInput, this));
                    break;
                case "r-form-input-time":
                    this.options.splice(index, 0, this.getData(this.rFormInputTime, this));
                    break;
                case "r-swiper":
                    this.options.splice(index, 0, this.getData(this.rSwiperDef, this));
                    break;
                case "r-menu":
                    this.options.splice(index,0,this.getData(this.rMenu, this))
                    break;
                case "r-image":
                    this.options.splice(index,0,this.getData(this.rImage,this));
                    break;
                case "r-grid":
                    this.options.splice(index,0,this.getData(this.rGridDef,this));
                    break;
                case "r-form-rate":
                    this.options.splice(index,0,this.getData(this.rFormRate,this));
                    break;
                case "r-form-switch":
                    this.options.splice(index,0,this.getData(this.rFormSwitch,this));
                    break;
                case "r-button":
                    this.options.splice(index,0,this.getData(this.rButton,this));
                    break;
                case "r-form-input-password":
                    this.options.splice(index,0,this.getData(this.rFormPasswordInput,this));
                    break;
                case "r-form-numberbox":
                    this.options.splice(index,0,this.getData(this.rFormNumberBox,this));
                    break;
                case "r-form-textarea-input":
                    this.options.splice(index,0,this.getData(this.rFormTextAreaInput,this));
                    break;
                case "r-form-input-map":
                    this.options.splice(index,0,this.getData(this.rFormInputMap,this));
                    break;
                case "r-form-radio":
                    this.options.splice(index,0,this.getData(this.rFormInputRadio,this));
                    break;
                case "r-form-checkboxes":
                    this.options.splice(index,0,this.getData(this.rFormCheckboxes,this));
                    break;
                case "r-form-slider":
                    this.options.splice(index,0,this.getData(this.rFormSlider,this));
                    break;
            }
        },
        
    }
}