
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

      //Dec to any
       /*-----------------------*/ 
       //dec to binario
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

      //dec to hexa
      if(options.selectedOptions[0].label == "Decimal" && options2.selectedOptions[0].label == "Hexa" )
      {
        
        let arrayToHex = []; 
        let castNumb =Number(inputEntry.value);
        
              
              let quotioent= Math.floor(castNumb / 16);
               
               arrayToHex.push(castNumb % 16);
      
                if(quotioent > 15){
                    while(quotioent > 15){
                        arrayToHex.push(quotioent%16);
                        quotioent = Math.floor(quotioent / 16);
                       
                        
                    }

                    arrayToHex.push(quotioent);
                }else{
                    arrayToHex.push(Math.floor(castNumb/16));
                }
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

                if(castNumb>15)out.value = arrayToHex.toReversed().join("");
                if(castNumb<=15)out.value = arrayToHex[0];
                
        

       


      }

      //dec to oct
      if(options.selectedOptions[0].label == "Decimal" && options2.selectedOptions[0].label == "Octal" )
      {
        let arrayToHex = []; 
        let castNumb =Number(inputEntry.value);
        
              
              let quotioent= Math.floor(castNumb / 8);
               
               arrayToHex.push(castNumb % 8);
      
                if(quotioent > 8){
                    while(quotioent > 8){
                        arrayToHex.push(quotioent%8);
                        quotioent = Math.floor(quotioent / 8);
                       
                        
                    }

                    arrayToHex.push(quotioent);
                }else{
                    arrayToHex.push(Math.floor(castNumb/8));
                }
        

                if(castNumb>8)out.value = arrayToHex.toReversed().join("");
                if(castNumb<=8)out.value = arrayToHex[0];
      }
        /*-----------------------*/ 
     
     //Bin to any 
     /*-----------------------*/ 
     //bin to dec
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
      //bin to hex
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
         
       if(castNumb.length > 4 && castNumb.length%4!=0){
        
        let contInnnerWhile = 0;
        let anyCount=0;
       
        while(anyCount < lengthMyBinNumber){
            
           // result = castNumb[0];
            if(lengthMyBinNumber%4 != 0){
                while(contInnnerWhile < 4){
                    
                    lengthMyBinNumber--;
                    if(lengthMyBinNumber < 0)break;
                    if(castNumb[lengthMyBinNumber] == "1")result = result + (parseInt(castNumb[lengthMyBinNumber]) * (Math.pow(2, contt)));
                    contt++;
                    
                    contInnnerWhile++;
                    
                }
                arrayToHex.push(result);
                contt= 0;
                contInnnerWhile = 0;
                result =0;
            }
             
             
        }
       
       }else
       //See if my binary sequence is an exact quotioent in 4 parts like: 1000 0101 1001 on 100001011001 (ex)
          if(castNumb.length <= 4 || castNumb.length%4==0){
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
                out.value = arrayToHex.toReversed().join("");  
                    
            }else
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
                    
                }
        
            }
            /*-----------------------*/ 
            //bin to octal

            if(options.selectedOptions[0].label == "Binario" && options2.selectedOptions[0].label == "Octal" )
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
         
       if(castNumb.length > 3 && castNumb.length%3!=0){
        
        let contInnnerWhile = 0;
        let anyCount=0;
       
        while(anyCount < lengthMyBinNumber){
            
           // result = castNumb[0];
            if(lengthMyBinNumber%3 != 0){
                while(contInnnerWhile < 3){
                    
                    lengthMyBinNumber--;
                    if(lengthMyBinNumber < 0)break;
                    if(castNumb[lengthMyBinNumber] == "1")result = result + (parseInt(castNumb[lengthMyBinNumber]) * (Math.pow(2, contt)));
                    contt++;
                    
                    contInnnerWhile++;
                    
                }
                arrayToHex.push(result);
                contt= 0;
                contInnnerWhile = 0;
                result =0;
            }
             
             
        }
       
       }else
       //See if my binary sequence is an exact quotioent in 3 parts like: 100 010 100 on 100010100 (ex)
          if(castNumb.length <= 3 || castNumb.length%3==0){
            lengthMyBinNumber =  castNumb.length;
            xInitial = 0;
            
           
            while(castNumb.length > ocasionalCont){

                
                    xInitial = xInitial + 3;
                    ocasionalCont = ocasionalCont + 3;
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

       if(onlyBin > 0){
        out.value ='Apenas numeros 1s e 0s';
       }else
            if(castNumb.length > 3  &&  castNumb.length%3 != 0){
                
                out.value = arrayToHex.toReversed().join("");  
                    
            }else
            if(castNumb.length%3 == 0 || castNumb.length <= 3 )out.value =  arrayToHex.toReversed().join("");
                
      }
      /*----------------------------*/

      //Hexa to any
      /*-----------------------*/ 
      //Hexa to bina
      if(options.selectedOptions[0].label == "Hexa" && options2.selectedOptions[0].label == "Binario" )
      {
        let restPlaces;
        let RepeatPlaces;
        let castedNumb = inputEntry.value;
        let arrayToBin = [];
        let finalArrayToBin = [];
        let cont = 0;
        let contPlaces = 0;
        while(cont < castedNumb.length){
            arrayToBin = [];
            let timelyVariable = Number(castedNumb[cont]);
          
            
          if(timelyVariable>0){                              
            while(timelyVariable >0){
                
                    
                     
                if(timelyVariable % 2 == 0) {
                    //Easy solution***** using push and toReversed()//join() js functions
                    arrayToBin.push(0);
                    contPlaces++;
               
                }else{
                    arrayToBin.push(1);
                    contPlaces++;
                
                }
                timelyVariable = Math.floor(timelyVariable/2);
                
            
            }
             restPlaces = 4 - contPlaces;
             RepeatPlaces = 0;
             while(RepeatPlaces < restPlaces){
                arrayToBin.push(0); 
                RepeatPlaces++;
             }
             contPlaces = 0;
          }else{
            let contador0 = 0;
            while(contador0 <= 3){arrayToBin.push(0); contador0++;}
          }
          finalArrayToBin.push(arrayToBin.toReversed().join(""));
          
          
            cont++;
        }
        out.value = finalArrayToBin.join("");

        
      }
      /*-----------------------*/ 
      //Hex to octal
      
      if(options.selectedOptions[0].label == "Hexa" && options2.selectedOptions[0].label == "Octal" )
      {
        let restPlaces;
        let RepeatPlaces;
        let castedNumb = inputEntry.value;
        let arrayToBin = [];
        let finalArrayToBin = [];
        let cont = 0;
        let contPlaces = 0;
        while(cont < castedNumb.length){
            arrayToBin = [];
            let timelyVariable = Number(castedNumb[cont]);
          
            
          if(timelyVariable>0){                              
            while(timelyVariable >0){
                
                    
                     
                if(timelyVariable % 2 == 0) {
                    //Easy solution***** using push and toReversed()//join() js functions
                    arrayToBin.push(0);
                    contPlaces++;
               
                }else{
                    arrayToBin.push(1);
                    contPlaces++;
                
                }
                timelyVariable = Math.floor(timelyVariable/2);
                
            
            }
             restPlaces = 4 - contPlaces;
             RepeatPlaces = 0;
             while(RepeatPlaces < restPlaces){
                arrayToBin.push(0); 
                RepeatPlaces++;
             }
             contPlaces = 0;
          }else{
            let contador0 = 0;
            while(contador0 <= 3){arrayToBin.push(0); contador0++;}
          }
          for(let xxx = 0; xxx < arrayToBin.length; xxx++)finalArrayToBin.push(arrayToBin.toReversed()[xxx]);
          cont++;
        }
        


        /**------------------reuse of bin to oct upside------------------* */
        let onlyBin = 0;
        let result = 0; 
        let castNumb =finalArrayToBin;
        let lengthMyBinNumber = castNumb.length ;
        let xInitial = 0;
        let contt = 0;
        let arrayToOct = [];
        let ocasionalCont = 0;
        while(xInitial < castNumb.length){
        
            if(castNumb[xInitial] != "1" && castNumb[xInitial] != "0"){
                onlyBin++;
            }
        
            xInitial++;
        }
        xInitial = 0;
         
        if(castNumb.length > 3 && castNumb.length%3!=0){
        
            let contInnnerWhile = 0;
            let anyCount=0;
       
            while(anyCount < lengthMyBinNumber){
            
                // result = castNumb[0];
                if(lengthMyBinNumber%3 != 0){
                    while(contInnnerWhile < 3){
                    
                        lengthMyBinNumber--;
                        if(lengthMyBinNumber < 0)break;
                        if(castNumb[lengthMyBinNumber] == "1")result = result + (parseInt(castNumb[lengthMyBinNumber]) * (Math.pow(2, contt)));
                        contt++;
                    
                        contInnnerWhile++;
                    
                    }
                    arrayToOct.push(result);
                    contt= 0;
                    contInnnerWhile = 0;
                    result =0;
                }
             
             
            }
       
       }else
            //See if my binary sequence is an exact quotioent in 3 parts like: 100 010 100 on 100010100 (ex)
            if(castNumb.length <= 3 || castNumb.length%3==0){
                lengthMyBinNumber =  castNumb.length;
                xInitial = 0;
            
           
                while(castNumb.length > ocasionalCont){

                
                    xInitial = xInitial + 3;
                    ocasionalCont = ocasionalCont + 3;
                    while(contt < xInitial){
                        lengthMyBinNumber--;
                        if(castNumb[lengthMyBinNumber] == "1")result = result + (parseInt(castNumb[lengthMyBinNumber]) * (Math.pow(2, contt)));
                    
                        contt++;
                   
                    }
                    arrayToOct.push(result);
                    result = 0;
                    contt = 0;  
                    xInitial = 0;  
                }
            }

        if(onlyBin > 0){
            out.value ='Apenas numeros 1s e 0s';
        }else
            if(castNumb.length > 3  &&  castNumb.length%3 != 0){
                if(arrayToOct.toReversed()[1] > 0 && arrayToOct.toReversed()[0] == 0){
                    arrayToOct.pop();//remove the zero when the most left number is 0(after all calculations like *0*00111010 or other number)
                    //or other number in hexa to bin like 321(16)  = 001100100001(2) the first number is 0
                   
                    out.value  = arrayToOct.toReversed().join("");
                }else{
                    out.value = arrayToOct.toReversed().join("");
                }
                  
                    
            }else
                if(castNumb.length%3 == 0 || castNumb.length <= 3 ){
                    if(arrayToOct.toReversed()[1] > 0 && arrayToOct.toReversed()[0] == 0){
                        arrayToOct.pop();
                        out.value = arrayToOct.toReversed().join("");  
                    }else{
                        out.value =  arrayToOct.toReversed().join("");
                    }
                }
                 
      }
      /**------------------reuse of bin to oct upside end------------------* */
      /*---------------------------*/ 
      //Hex to Dec
      
      if(options.selectedOptions[0].label == "Hexa" && options2.selectedOptions[0].label == "Decimal" )
      {
        /**----------------------Hexa to bin Reuse--------------------------**/
        let restPlaces;
        let RepeatPlaces;
        let castedNumb = inputEntry.value;
        let arrayToBin = [];
        let finalArrayToBin = [];
        let cont = 0;
        let contPlaces = 0;
        while(cont < castedNumb.length){
            arrayToBin = [];
            let timelyVariable = Number(castedNumb[cont]);
          
            
          if(timelyVariable>0){                              
            while(timelyVariable >0){
                
                    
                     
                if(timelyVariable % 2 == 0) {
                    //Easy solution***** using push and toReversed()//join() js functions
                    arrayToBin.push(0);
                    contPlaces++;
               
                }else{
                    arrayToBin.push(1);
                    contPlaces++;
                
                }
                timelyVariable = Math.floor(timelyVariable/2);
                
            
            }
             restPlaces = 4 - contPlaces;
             RepeatPlaces = 0;
             while(RepeatPlaces < restPlaces){
                arrayToBin.push(0); 
                RepeatPlaces++;
             }
             contPlaces = 0;
          }else{
            let contador0 = 0;
            while(contador0 <= 3){arrayToBin.push(0); contador0++;}
          }
         
          for(let xxx = 0; xxx < arrayToBin.length; xxx++)finalArrayToBin.push(arrayToBin.toReversed()[xxx]);
          
            cont++;
        }
        /**----------------------Hexa to bin Reuse end--------------------------**/

        /**----------------------Bin to Dec Reuse--------------------------**/
         let xInitial = 0;
         onlyBin = 0;
         result = 0; 
         let castNumb = finalArrayToBin;
         let lengthMyBinNumber = castNumb.length ;
         
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
       
            out.value = result;
         /**----------------------Bin to Dec Reuse end--------------------------**/

      }
      /*-------------------------*/
      //Octa to any

      /*-----------------------*/ 
      //Octa to bina

      if(options.selectedOptions[0].label == "Octal" && options2.selectedOptions[0].label == "Binario" )
      {
        let check = false;
        let restPlaces;
        let RepeatPlaces;
        let castedNumb = inputEntry.value;
        let arrayToBin = [];
        let finalArrayToBin = [];
        let cont = 0;
        let contPlaces = 0;
        while(cont < castedNumb.length){
            arrayToBin = [];
            let timelyVariable = Number(castedNumb[cont]);
          
          if(timelyVariable == 8 || timelyVariable == 9){check = true; break;}  
          if(timelyVariable>0){                              
            while(timelyVariable >0){
                
                    
                     
                if(timelyVariable % 2 == 0) {
                    //Easy solution***** using push and toReversed()//join() js functions
                    arrayToBin.push(0);
                    contPlaces++;
               
                }else{
                    arrayToBin.push(1);
                    contPlaces++;
                
                }
                timelyVariable = Math.floor(timelyVariable/2);
                
            
            }
             restPlaces = 3 - contPlaces;
             RepeatPlaces = 0;
             while(RepeatPlaces < restPlaces){
                arrayToBin.push(0); 
                RepeatPlaces++;
             }
             contPlaces = 0;
          }else{
            let contador0 = 0;
            while(contador0 <= 2){arrayToBin.push(0); contador0++;}
          }
          for(let xxx = 0; xxx < arrayToBin.length; xxx++)finalArrayToBin.push(arrayToBin.toReversed()[xxx]);
          cont++;
        }
        if(check){out.value = 'Só numeros entre 0s e 7s';}else{out.value = finalArrayToBin.join("");}
        
      }
      //Octa to hexa

      if(options.selectedOptions[0].label == "Octal" && options2.selectedOptions[0].label == "Hexa" )
      {
        
      }
})

Limpar.addEventListener("click", () =>{
    out.value = '';
    inputEntry.value = '';
})