
const RemoveSpace= (str)=>{
    let strarr= str.split(" ");
    let newarr=[];
    for(ele of strarr){
       if(ele!=""){
        newarr.push(ele);
       }
    }
    return(newarr.join(" "));
}

module.exports= RemoveSpace;