
        var listadehistorico = [qualquer = []]

        function verificaValorZero ()
        {
            var numerodigitado = parseFloat(document.getElementById("caixanumerodigitado").value)

            if (numerodigitado == "") {
                return numerodigitado = 0;
            } 
            else {
                return numerodigitado = parseFloat(document.getElementById("caixanumerodigitado").value)
            }
        }

        function CriaUlLI(array) 
            {

                const itemlu = document.createElement('ul')

                const itemli = document.createElement('li')

                for(var i = 0; i < array.length; i++) 
                    {
                        itemli.appendChild(document.createTextNode(array[i]));
                        itemlu.appendChild(itemli);
                    }

                // Retorne a lista construída:
                return itemlu;
            }
        
        function somar() {

                var numerodigitado = verificaValorZero ()

                var resultado = parseFloat(document.querySelector("#resultado").innerText)
                
                var valoranterior = resultado

                resultado = resultado + numerodigitado

                document.querySelector("#resultado").innerText = resultado

                document.getElementById("caixanumerodigitado").value = ""

                qualquer.splice(0, qualquer.length);

                qualquer.push(valoranterior, " + ", numerodigitado , ' = ', resultado)

                document.getElementById('listahistorico').appendChild(CriaUlLI(listadehistorico[0]))

        }
        
        function diminuir() {

                var numerodigitado = verificaValorZero ();
                
                var resultado = parseFloat(document.querySelector("#resultado").innerText)

                var valoranterior = resultado
               
                if (numerodigitado != ""){
                    resultado = resultado - numerodigitado
                }

                document.querySelector("#resultado").innerText = resultado

                document.getElementById("caixanumerodigitado").value = ""

                qualquer.splice(0, qualquer.length);

                qualquer.push(valoranterior, " - ", numerodigitado , ' = ', resultado)

                document.getElementById('listahistorico').appendChild(CriaUlLI(listadehistorico[0]))

        }

        function multiplicar() {

                var numerodigitado = verificaValorZero ();
                
                var resultado = parseFloat(document.querySelector("#resultado").innerText)

                var valoranterior = resultado
    
                resultado = resultado * numerodigitado
               
                document.querySelector("#resultado").innerText = resultado
    
                document.getElementById("caixanumerodigitado").value = ""

                qualquer.splice(0, qualquer.length);

                qualquer.push(valoranterior, " x ", numerodigitado , ' = ', resultado)

                document.getElementById('listahistorico').appendChild(CriaUlLI(listadehistorico[0]))

        }

        function dividir() {

                var numerodigitado = verificaValorZero ();
                
                if (numerodigitado != 0) {

                    var resultado = parseFloat(document.querySelector("#resultado").innerText)

                    var valoranterior = resultado
        
                    resultado = resultado / numerodigitado
                   
                    document.querySelector("#resultado").innerText = resultado
        
                    document.getElementById("caixanumerodigitado").value = ""
    
                    qualquer.splice(0, qualquer.length);
    
                    qualquer.push(valoranterior, " / ", numerodigitado , ' = ', resultado)
    
                    document.getElementById('listahistorico').appendChild(CriaUlLI(listadehistorico[0]))
                    
                } else {

                    var resultado = parseFloat(document.querySelector("#resultado").innerText)

                    var valoranterior = resultado
        
                    resultado = 0
                   
                    document.querySelector("#resultado").innerText = resultado
        
                    document.getElementById("caixanumerodigitado").value = ""
    
                    qualquer.splice(0, qualquer.length);
    
                    qualquer.push(valoranterior, " / ", numerodigitado , ' = ', resultado)
    
                    document.getElementById('listahistorico').appendChild(CriaUlLI(listadehistorico[0]))
                    
                }

        }

        function zerarresultado() {

            document.querySelector("#resultado").innerText = 0
            
            document.getElementById("caixanumerodigitado").value = 0

        }
