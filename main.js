const  calcular  =  documento . getElementById ( 'calcular' ) ;

function  imc  ( )  {
    const  nome  =  documento . getElementById ( 'nome' ) . valor ;
    const  altura  =  documento . getElementById ( 'altura' ) . valor ;
     peso  const =  documento . getElementById ( 'peso' ) . valor ;
    const  resultado  =  documento . getElementById ( 'resultado' ) ;

    if  ( nome  ! ==  ''  &&  altura  ! ==  ''  &&  peso  ! ==  '' )  {

        const  valorIMC  =  ( peso  /  ( altura  *  altura ) ) . toFixed ( 1 ) ;

        let  classificacao  =  '' ;

        if  ( valorIMC  <  17 ) {
            classificacao  =  'muito abaixo do peso' ;
        } else  if  ( valorIMC  <  18,50 )  {
            classificacao  =  'abaixo do peso' ;
        } else  if  ( valorIMC  <  25 )  {
          classificacao  =  'nenhum peso normal' ;
        } else  if  ( valorIMC  <  30 ) {
            classificacao  =  'acima do peso' ;
        } else  if  ( valorIMC  <  35 ) {
            classificacao  =  'com obesidade I'
        } else  if  ( valorIMC  <  40 ) { 
            classificacao  =  'com obesidade II (severa)' ;
        } else  {
            classificacao  =  'com obesidade III (mórbida)' ;
        }

        resultado . textContent  =  ` $ { nome } seu IMC é $ { valorIMC } e você está $ { classificacao } ` ;

    } else  {
        resultado . textContent  =  'Preencha todos os campos !!!' ;
    }

}

calcular . addEventListener ( 'click' ,  imc ) ;
