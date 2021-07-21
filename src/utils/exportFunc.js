const GetMapFromCompToOption = () =>{
    const requireComponents = require.context('@/components/', true, /\.vue$/);
    let mapping = {}
    requireComponents.keys().forEach(e => {
        let temp1 = 0;
        let temp2 = 0;
        for(let i = 0 ;i<e.length;i++){
            if(e[i]=='/'){
                if(temp1==0)
                    temp1 = i;
                else{
                    temp2 = i;
                    break;
                }
            }
        }
        let res = "option-" + e.substring(temp1+1,temp2)+"-bar";
        if(temp1!=0&&temp2!=0){
            mapping[e.substring(temp1+1,temp2)] = res;
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
module.exports={
    exportRaw,
    GetMapFromCompToOption
}