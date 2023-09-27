function writeCards(names){
    const thanksCards=[];
    for(let i=0;i<names.length;i++){
        thanksCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
return thanksCards;
}

function countDown(number){
    for(let i=number ; i>=0;i--){
        console.log(i);
    }

}