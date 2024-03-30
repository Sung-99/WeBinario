
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
       while(xInitial < castNumb.length){
        
        if(castNumb[xInitial] != "1" && castNumb[xInitial] != "0"){
            onlyBin++;
        }
        
            xInitial++;
       }
       xInitial = 0;
      
       //See if my binary sequence is an exact divisions in 4 parts like: 1000 0101 1001 on 100001011001 (ex)
       if(castNumb.length <= 4){
            
        while(xInitial < castNumb.length){
            lengthMyBinNumber--;
            if(castNumb[xInitial] == "1")result = result + (parseInt(castNumb[xInitial]) * (Math.pow(2, lengthMyBinNumber)))
                xInitial++;
           }
        }else
         {
          if(castNumb.length%4 == 0){
            lengthMyBinNumber =  castNumb.length;
            xInitial = 0;
            let contt = 0;
           
            while(castNumb.length > xInitial){

                if(xInitial == 0){
                    xInitial = xInitial + 3;
                }else{
                    xInitial = xInitial + 4;
                }

                while(contt < xInitial){
                    lengthMyBinNumber--;
                    if(castNumb[lengthMyBinNumber] == "1")arrayToHex.push(result + (parseInt(castNumb[lengthMyBinNumber]) * (Math.pow(2, contt))));
                    contt++;
                   
                }    
            }
          }
         }
       


     
       if(onlyBin > 0){
        out.value ='Apenas numeros 1s e 0s';
       }else
            if(castNumb.length <= 4){
                if(result < 10){out.value = result;}
                    else{
                        if(result == 10){
                            out.value = 'A';
                        }else
                        if(result == 11){
                            out.value = 'B';
                        }else
                        if(result == 12){
                            out.value = 'C';
                        }else
                        if(result == 13){
                            out.value = 'D';
                        }else
                        if(result == 14){
                             out.value = 'E';
                        }else
                        if(result == 15){
                            out.value = 'F';
                        }
                    }
        
            }else
                if(castNumb.length > 4 && castNumb.length%4 == 0){
                    
                    out.value =  arrayToHex.toReversed().join("");
                    
                }
      
       
      } 

      if(options.selectedOptions[0].label == "Hexa" && options2.selectedOptions[0].label == "Decimal" )
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
      

})

Limpar.addEventListener("click", () =>{
    out.value = '';
    inputEntry.value = '';
})