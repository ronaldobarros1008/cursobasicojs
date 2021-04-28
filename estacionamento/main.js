//torna variáveis inacessiveis
(function (){
    const $ = q => document.querySelector(q)//torna o 'querySelector' em '$' só será necessário digitar o '$'

    function addCarToGarage (car) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${car.name}</td>
            <td>${car.licence}</td>
            <td>${new Date(car.time)
                        .toLocaleString("pt-BR",{
                            hour: "numeric", minute: "numeric"//formatar a data
                        })}</td>
            <td>
                <button class="delete">x</button>
            <td>
        `;

        $("#garage").appendChild(row);

    };

    const getGarege

    document.querySelector("#send").addEventListener("click", e => {
        //console.log(e)//só para verificar a captura do evento
        const name = $("#name").value;
        const licence = $("#licence").value;

        if(!name || !licence){ // se o campos estiverem vazios o mesmo não permir continuar com o 'return'
            alert("Os campos são obrigatórios");
            return;
        }

        const car = {name, licence, time: new Date()}        
        //console.log(name, licence);
        //console.log(car)
        
        const garage = localStorage.garage ? JSON.parse(localStorage.garage) : [];
        garage.push(car);

        localStorage.garage = JSON.stringify(garage);
        console.log(garage)

        addCarToGarage(car);

        $("#name").value = "";
        $("#licence").value = ""


    });

})();