function criaCalculadora(){
    return {
        //- atributos para cima
        display: document.querySelector(".display"),        


        
        //- métodos para baixo
        inicia(){            
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes(){
            //this -> calculadora
            document.addEventListener("click", (e) => { //com a arraow fucntion o this continuara sendo a " calculadora ", ou seja o this é mantido
                const el = e.target;

                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }

                if(el.classList.contains("btn-del")){
                    this.apagaUm();
                }

                if(el.classList.contains("btn-eq")){
                    this.realizaConta();
                }

                this.display.focus();
            })/* .bind(this)) */ //(aqui estamos mudando o comportamento do this, para usar o bind usamos funcao anonima em quem esta chamando(nesse caso o document)) com o bind estamos falando para usar este this e nao o this que ficou atribuido ao document, ao colocar um addEventListener; 
        },

        pressionaEnter(){
            this.display.addEventListener("keyup", (e) => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = "";
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){ // o eval(), pode ser uma função perigosa, pois suponhamos que mandamos uma string dentro dele, ele irá tentar executar a string, como código javaScript, e isso permite várias possibilidade para scripts maliciosos.
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(isNaN(conta)){
                    alert("conta invalida");
                    return;
                }

                this.display.value = String(conta);
            } catch(e){
                alert("conta invalida");
                return;
            }
        },



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();

