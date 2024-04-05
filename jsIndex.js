
let options = document.querySelector('#optionsList');
let options2 = document.querySelector('#optionsList2');

let convr = document.querySelector('#Convert')
let Limpar = document.querySelector('#Limpar')


let out = document.querySelector('#answer_converted');

let inputEntry = document.querySelector('#answer');


let myBin = [];


convr.addEventListener("click", () =>{

      myBin = [];
      let convertedNumb = parseInt(inputEntry.value);  
      if(options.selectedOptions[0].label == "Decimal" && options2.selectedOptions[0].label == "Binario" )
      {
        
       while(convertedNumb >= 1){ 
        if(convertedNumb % 2 == 0) {
            //Easy solution***** using push and toReversed()//join() js functions
            myBin.push(0);
           
        }else{
            myBin.push(1);
            
        }
        convertedNumb = Math.floor(convertedNumb/2);
       }
    
       
       let instantialVariablw = myBin.toReversed().join("");
       out.value = instantialVariablw;
       
      }
      
     
      
      if(options.selectedOptions[0].label == "Binario" && options2.selectedOptions[0].label == "Decimal" )
      {
       let onlyBin = 0;
       let result = 0; 
       let castNumb =inputEntry.value;
       let lengthMyBinNumber = castNumb.length ;
       let xInitial = 0;
       while(xInitial < castNumb.length){
        
        if(castNumb[xInitial] != "1" && castNumb[xInitial] != "0"){
            onlyBin++;
        }
        
            xInitial++;
       }
       xInitial = 0;
       while(xInitial < castNumb.length){
        lengthMyBinNumber--;
        if(castNumb[xInitial] == "1")result = result + (parseInt(castNumb[xInitial]) * (Math.pow(2, lengthMyBinNumber)))
            xInitial++;
       }
       if(onlyBin > 0){
        out.value ='Apenas numeros 1s e 0s';
       }else{
        out.value = result;
       }
      
       
      }
      
      if(options.selectedOptions[0].label == "Binario" && options2.selectedOptions[0].label == "Hexa" )
      {
       let onlyBin = 0;
       let result = 0; 
       let castNumb =inputEntry.value;
       let lengthMyBinNumber = castNumb.length ;
       let xInitial = 0;
       let arrayToHex = [];
       let contt = 0;
       let ocasionalCont = 0;
       while(xInitial < castNumb.length){
        
        if(castNumb[xInitial] != "1" && castNumb[xInitial] != "0"){
            onlyBin++;
        }
        
            xInitial++;
       }
       xInitial = 0;
         
       if(castNumb.length > 3000  &&  castNumb.length%4 != 0){
        let restKnow =  castNumb.length%4;
        let contInnnerWhile = 0;
        let anyCount=0;
        
        while(anyCount >= lengthMyBinNumber){
            

            if(lengthMyBinNumber%4 == 0){
                while(contInnnerWhile < 4){
                    lengthMyBinNumber--;
                    if(castNumb[lengthMyBinNumber] == "1")result = result + (parseInt(castNumb[lengthMyBinNumber]) * (Math.pow(2, contt)));
        
                    contInnnerWhile++;
                    
                }
                arrayToHex.push(result);
                contInnnerWhile = 0;
            }else{
                while(contInnnerWhile < restKnow){
                    lengthMyBinNumber--;
                    if(castNumb[lengthMyBinNumber] == "1")result = result + (parseInt(castNumb[lengthMyBinNumber]) * (Math.pow(2, contt)));
                    contInnnerWhile++;
                }
                contInnnerWhile = 0;
               
                arrayToHex.push(result);
             }
             
             
        }
       
       }else
       //See if my binary sequence is an exact divisions in 4 parts like: 1000 0101 1001 on 100001011001 (ex)
          if(castNumb.length <= -50 || castNumb.length%4==0){
            lengthMyBinNumber =  castNumb.length;
            xInitial = 0;
            
           
            while(castNumb.length > ocasionalCont){

                
                    xInitial = xInitial + 4;
                    ocasionalCont = ocasionalCont + 4;
                while(contt < xInitial){
                    lengthMyBinNumber--;
                    if(castNumb[lengthMyBinNumber] == "1")result = result + (parseInt(castNumb[lengthMyBinNumber]) * (Math.pow(2, contt)));
                    
                    contt++;
                   
                }
                arrayToHex.push(result);
                result = 0;
                contt = 0;  
                xInitial = 0;  
            }
          }
    
                
         
       
        
          out.value ='Apenas numeros 1s e 0s';
     
       if(onlyBin > 0){
        out.value ='Apenas numeros 1s e 0s';
       }else
            if(castNumb.length > 4  &&  castNumb.length%4 != 0){
                for(let ccc = 0; ccc < arrayToHex.length; ccc++){
                    if(arrayToHex[ccc] == 10){
                        arrayToHex[ccc] = 'A';
                    }else
                    if(arrayToHex[ccc] == 11){
                        arrayToHex[ccc] = 'B';
                    }else
                    if(arrayToHex[ccc] == 12){
                        arrayToHex[ccc] = 'C';
                    }else
                    if(arrayToHex[ccc] == 13){
                        arrayToHex[ccc] = 'D';
                    }else
                    if(arrayToHex[ccc] == 14){
                        arrayToHex[ccc] = 'E';
                    }else
                    if(arrayToHex[ccc] == 15){
                        arrayToHex[ccc] = 'F';
                    }
                }
                out.value =  arrayToHex.toReversed().join("");       
            }/*else
                if(castNumb.length%4 == 0 || castNumb.length <= 4 ){
                    for(let ccc = 0; ccc < arrayToHex.length; ccc++){
                        if(arrayToHex[ccc] == 10){
                            arrayToHex[ccc] = 'A';
                        }else
                        if(arrayToHex[ccc] == 11){
                            arrayToHex[ccc] = 'B';
                        }else
                        if(arrayToHex[ccc] == 12){
                            arrayToHex[ccc] = 'C';
                        }else
                        if(arrayToHex[ccc] == 13){
                            arrayToHex[ccc] = 'D';
                        }else
                        if(arrayToHex[ccc] == 14){
                            arrayToHex[ccc] = 'E';
                        }else
                        if(arrayToHex[ccc] == 15){
                            arrayToHex[ccc] = 'F';
                        }
                    }
                    out.value =  arrayToHex.toReversed().join("");
                    
                }*/  
                    
       
      } 

  
      

})

Limpar.addEventListener("click", () =>{
    out.value = '';
    inputEntry.value = '';
})