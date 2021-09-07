import defaultData from "./default_data.js"; //导入默认数据
export const redit = {
    data() {
        return {
            ...defaultData,
            contShow: false,
        };
    },
    beforeMount() {
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
                case "r-chart-line":
                    this.options.splice(index,0,this.getData(this.rChartLineDef,this));
                    break;
                case "r-form":
                    this.options.splice(index,0,this.getData(this.rFormCommonDef,this))
                    break;
                case "r-chart-pie":
                    this.options.splice(index,0,this.getData(this.rChartPieDef,this));
                    break;
                case "r-me":
                    this.options.splice(index,0,this.getData(this.rMe,this));
                    break;
                case "r-card":
                    this.options.splice(index,0,this.getData(this.rCard,this));
                    break;
                case "r-cell":
                    this.options.splice(index,0,this.getData(this.rCellDef,this));
                    break;
                case "r-subsection":
                    this.options.splice(index,0,this.getData(this.rSubsectionDef,this));
                    break;
                case "r-lottery":
                    this.options.splice(index,0,this.getData(this.rLottery,this));
                    break;
                case "r-chart-radar":
                    this.options.splice(index,0,this.getData(this.rChartRadarDef,this));
                    break;
                case "r-data-list":
                    this.options.splice(index,0,this.getData(this.rDdataListDef,this));
                    break;
                case "r-login":
                    this.options.splice(index,0,this.getData(this.rloginDef,this));
                    break;
                case "r-parse":
                    this.options.splice(index,0,this.getData(this.rParseDef,this));
                    break;
            }
        },
        
    }
}