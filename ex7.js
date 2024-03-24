
let options = document.querySelector('#optionsList');
let options2 = document.querySelector('#optionsList2');

let convr = document.querySelector('#Convert')
let Limpar = document.querySelector('#Limpar')


let out = document.querySelector('#answer_converted');

let inputEntry = document.querySelector('#answer');

let myBin = [];



convr.addEventListener("click", () =>{

      
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
       instantialVariablw = 0;
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
      

})

Limpar.addEventListener("click", () =>{
    out.value = '';
    inputEntry.value = '';
})