document.getElementById('se').onclick=function(){
    console.log('hiii');
    // var ul = document.getElementById("your_ul");
    //  var li = document.createElement("li");
    // li.appendChild(document.createTextNode(document.getElementById('yourtxt').value));
   
    let ans=document.getElementById('yourtxt').value;
    let button = $('<button/>', {type:'button', class:'delete',text:'Delete'});
    //li.classList.add("name");
    $('#your_ul').append('<li>' + ans + button[0].outerHTML + '</li>');
//$('#your_ul').append('<li>' + (document.getElementById('yourtxt').value) + $('<button>') + '</li>');
    //ul.appendChild(li);

}
//function to remove delete functionality
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
console.log(e.target.parentNode);
var ans=document.getElementById('your_ul');
//console.log(ans);
ans.removeChild(e.target.parentNode);
});

