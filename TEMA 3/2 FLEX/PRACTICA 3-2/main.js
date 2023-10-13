function voltear(){
    var div = document.getElementsByClassName("flex-wrap")[0];
    if(div.style.flexWrap === "wrap-reverse"){
        div.style.flexWrap = "wrap";
        div.style.flexDirection = "row";
    }else{
        div.style.flexDirection = "row-reverse";
        div.style.flexWrap = "wrap-reverse";
    }
}