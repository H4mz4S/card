var plus=Array.from(document.getElementsByClassName('btn'));
console.log(plus)
for( let pluss of plus){
    pluss.addEventListener('click',function () {
       pluss.nextElementSibling.innerHTML++
       somme() ; 
        });
    }

var moins=document.getElementsByClassName('btn')
for( let moinss of moins){
    moinss.addEventListener('click', function () {
        if(moinss.previousElementSibling.innerHTML>0){
        moinss.previousElementSibling.innerHTML--
        }

        });
        }

var rm=document.getElementsByClassName('remove')
console.log(rm)

for(let bt of rm){
    bt.addEventListener('click',function(){
        bt.parentNode.parentNode.remove()
        somme()
    })
}


function somme() {
    let quantity =Array.from(document.getElementsByClassName("count")) ; 
    let prices = Array.from(document.getElementsByClassName("amount")) ; 
    let total= Array.from(document.getElementsByClassName("total-amount")) ; 
    var sum=0 ;
    for(i=0 ; i<prices.length;i++){
        sum+= quantity[i].innerHTML * prices[i].innerHTML;
    }
    return total.innerHTML=sum ;
}