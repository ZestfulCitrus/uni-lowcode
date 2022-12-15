import defData from '@/components/mixins/default_data'
const baseUrl = "http://localhost:8080/api"
const GetMapFromCompToOption = () => {
    const requireComponents = require.context('@/components/', true, /\.vue$/);
    let mapping = {}
    requireComponents.keys().forEach(e => {
        let temp1 = 0;
        let temp2 = 0;
        for (let i = 0; i < e.length; i++) {
            if (e[i] == '/') {
                if (temp1 == 0)
                    temp1 = i;
                else {
                    temp2 = i;
                    break;
                }
            }
        }
        let res = "option-" + e.substring(temp1 + 1, temp2) + "-bar";
        if (temp1 != 0 && temp2 != 0) {
            mapping[e.substring(temp1 + 1, temp2)] = res;
        }
    });
    return mapping;
}
const exportRaw = (data, name) => {
    let urlObject = window.URL || window.webkitURL || window;
    let export_blob = new Blob([data]);
    let save_link = document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "a"
    );
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    save_link.click();
}

const importRawV1 = (context) => {
    uni.request({
        url: "http://localhost:8080/api/customize/mysqlForm/getAll", 
        data: {},
        header: {},
        success: (res) => {
            context.existForm = res.data.result;
        },
        fail: () => {
            console.log("网络异常")
        }
    });
}

const changeOptionV1 = (context, item) => {
    uni.request({
        url: `http://localhost:8080/api/customize/mysqlForm/get/${item.id}`,
        success: (res) => {
            let items = []
            res.data.result.formFields.forEach(e => {
                let obj ={
                    type:e.fieldType,
                    compStyle:JSON.parse(e.compStyle),
                    option:JSON.parse(e.coption),
                }
                items.push(obj);
            })
            context.options = items;
        },
        fail: () => {
            console.log("网络异常")
        }
    })
}

const savePage = (pageName, options, context) => {
    let obj = {
        "children": [],
        "createBy": "",
        "createTime": "",
        "delFlag": 0,
        "formCode": "",
        "formFields": [
        ],
        "formName": pageName,
        "hasChildren": false,
        "id": "",
        "unitCode": "",
        "updateBy": "",
        "updateTime": ""
    };

    obj.formCode = context.$u.guid(12);
    let date = new Date();

    let now = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    obj.createTime = now;

    options.forEach(e => {
        let item = {
            canNull: false,
            compStyle: JSON.stringify(e.compStyle),
            createBy: "admin",
            createTime: now,
            defaultValue: " ",
            fieldName: context.$u.guid(12),
            fieldTitle: e.option.label?e.option.label:"非表单控件",
            fieldType:e.type,
            coption: JSON.stringify(e.option),
            "controlLinkCode": "",
            "controlLinkFieldCode": "",
            "controlLinkFieldId": "",
            "controlLinkId": "",
            "delFlag": 0,
        }
        obj.formFields.push(item)
    })
    uni.request({
        url: `${baseUrl}/customize/mysqlForm/insert`,
        data: obj,
        method: "POST",
        header: {
            'content-type': 'application/json'
        }
    })
}

module.exports = {
    exportRaw,
    GetMapFromCompToOption,
    importRawV1,
    changeOptionV1,
    savePage
}