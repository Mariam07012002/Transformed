const list =[{
    key: "a",
    value: "1"
},{
    key: "a",
    value: "2"
},{
    key: "b",
    value: "1"
},{
    key: "c",
    value: "1"
},{
    key: "c",
    value: "1"
},{
    key: "c",
    value: "2"
}];

// transformed list 

const transformedList = list.reduce((acc,obj)=>{
    const existingObj = acc.find(item => item.key === obj.key);
    if(existingObj){
        existingObj.count++;
        existingObj.values.push(obj.value);
    }else {
        acc.push({
            key: obj.key,
            count: 1,
            values:[obj.value]
        });
    }
    return acc;
},[]);

console.log(transformedList);