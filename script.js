function nome(){

    let nome = String (document.getElementById('nome').value)
    let n1 = Number(document.getElementById ('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let n3 = Number(document.getElementById('n3').value)
    somarMedia = (n1+n2+n3)/3
    document.getElementById('media').innerHTML = `${nome} sua média foi ${somarMedia}` 
  
    
    if(somarMedia>= 6){
        document.getElementById('media').innerHTML = (`${nome} sua média foi ${somarMedia} PARABÉNS, PARECE QUE VOCÊ FOI APROVADO`) 
        }
        else{
            document.getElementById('media').innerHTML = (`${nome} sua média foi ${somarMedia} PARECE QUE VOCÊ FOI REPROVADO`)
        }



}
