var sa = [];

function submitnames() {
    for (i = 1; i <= 4; i++) {
        n = document.getElementById("s" + i).value;
        sa.push(n);
        console.log(sa);
    }
    
    h4_arr=[];
    for (j=0; j<sa.length;j++){
        h4_arr.push('<h4>name:'+sa[j]+'</h4>');
    }
    console.log(h4_arr);
    document.getElementById("result").innerHTML = h4_arr ; 
    document.getElementById("result_2").innerHTML=h4_arr.join(" ")                      ;
    document.getElementById("sub").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sortnames() {
    h4_arr.sort();
    document.getElementById("result_2").innerHTML = h4_arr.join("*");
}