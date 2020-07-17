function minToMax (List,Boolean){
    if(Boolean==true){
        console.log(List.sort((a,b)=>a-b))
    }else{
        console.log(List.sort((a,b)=>b-a))
    }
}

minToMax([5,6,9,10],true)