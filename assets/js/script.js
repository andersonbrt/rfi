document.addEventListener('DOMContentLoaded', function () {
    const inputForm = document.getElementById('inputForm');
    const posicaoInputs = document.querySelectorAll('input[name="posicao"]');
    const vilaoInputs = document.querySelectorAll('input[name="vilao"]');
    const blindsInputs = document.querySelectorAll('input[name="blinds"]');
    const resultImage = document.getElementById('resultImage');

    // Adiciona a classe 'hidden' quando necessário
    function ocultar(bbInput, bbLabel) {
        bbInput.classList.add('hidden');
        bbLabel.classList.add('hidden');
    }

    // Remove a classe 'hidden' se necessário restaurar a visibilidade
    function mostrar(bbInput, bbLabel) {
        bbInput.classList.remove('hidden');
        bbLabel.classList.remove('hidden');
    }
    // Função para atualizar a imagem com base nos inputs selecionados
    function updateImage() {
        const vilao = document.querySelector('input[name="vilao"]:checked');
        const posicao = document.querySelector('input[name="posicao"]:checked');
        const blinds = document.querySelector('input[name="blinds"]:checked');
        if (posicao) {

            if (posicao.id === "ep2" || posicao.id === "lj") {
                // Seleciona o grupo de div que queremos ocultar
                var group = document.getElementById('group-vilao');
                group.classList.add('hidden');
            }
            else {
                // Seleciona o grupo de div que queremos mostrar
                var group = document.getElementById('group-vilao');
                group.classList.remove('hidden');

            }
        }

        // Array com os valores que devem ser ocultados caso a coluna vilao esteja seleciona com alguma valor que seja diferente de ignorar
        const valoresOcultar = ['bb4', 'bb6', 'bb8', 'bb10', 'bb12', 'bb17', 'bb35', 'bb70'];

        if (vilao && posicao && blinds) {

            if (vilao.id === "ignorar") {

                // Percorrer array de campos para mostrar
                valoresOcultar.forEach(function (blind) {

                    // Seleciona o input e o label que queremos ocultar
                    var bbInput = document.getElementById(blind);
                    var bbLabel = document.querySelector('label[for=' + blind + ']');
                    mostrar(bbInput, bbLabel);
                });

                // Simula uma URL ou caminho para a imagem dinâmica com base nas variáveis
                var imagePath = `assets/images/${posicao.value}_${blinds.value}.png`;
            }
            else {
                // Seleciona o input e o label que queremos ocultar
                var bbInput = document.getElementById('ep2');
                var bbLabel = document.querySelector('label[for="ep2"]');
                ocultar(bbInput, bbLabel);

                // Seleciona o input e o label que queremos ocultar
                var bbInput = document.getElementById('lj');
                var bbLabel = document.querySelector('label[for="lj"]');
                ocultar(bbInput, bbLabel);

                // Percorrer array de campos para mostrar
                valoresOcultar.forEach(function (blind) {

                    // Seleciona o input e o label que queremos ocultar
                    var bbInput = document.getElementById(blind);
                    var bbLabel = document.querySelector('label[for=' + blind + ']');
                    ocultar(bbInput, bbLabel);
                });

                // Simula uma URL ou caminho para a imagem dinâmica com base nas variáveis
                var imagePath = `assets/images/${vilao.value}_${posicao.value}_${blinds.value}.png`;
            }

            // Cria a tag de imagem e atualiza o conteúdo da div
            const image = new Image();
            image.src = imagePath;
            image.alt = `Imagem para ${vilao.value} vs ${posicao.value} com blinds ${blinds.value}`;
            resultImage.innerHTML = ''; // Limpa o conteúdo anterior
            resultImage.appendChild(image);
        }

        if (posicao && blinds && !vilao) {
            // Simula uma URL ou caminho para a imagem dinâmica com base nas variáveis
            const imagePath = `assets/images/${posicao.value}_${blinds.value}.png`;

            // Cria a tag de imagem e atualiza o conteúdo da div
            const image = new Image();
            image.src = imagePath;
            image.alt = `Imagem para ${posicao.value} com blinds ${blinds.value}`;
            resultImage.innerHTML = ''; // Limpa o conteúdo anterior
            resultImage.appendChild(image);
        }

        if (posicao.id === "mp") {
            // Seleciona o input e o label que queremos ocultar
            var bbInput = document.getElementById('vmp');
            var bbLabel = document.querySelector('label[for="vmp"]');
            ocultar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos mostrar
            var bbInput = document.getElementById('vhj');
            var bbLabel = document.querySelector('label[for="vhj"]');
            mostrar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos mostrar
            var bbInput = document.getElementById('vco');
            var bbLabel = document.querySelector('label[for="vco"]');
            mostrar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos mostrar
            var bbInput = document.getElementById('vbtn');
            var bbLabel = document.querySelector('label[for="vbtn"]');
            mostrar(bbInput, bbLabel);
        }
        else if (posicao.id === "hj" || posicao.id === "co") {
            // Seleciona o input e o label que queremos ocultar
            var bbInput = document.getElementById('vhj');
            var bbLabel = document.querySelector('label[for="vhj"]');
            ocultar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos ocultar
            var bbInput = document.getElementById('vmp');
            var bbLabel = document.querySelector('label[for="vmp"]');
            ocultar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos ocultar
            var bbInput = document.getElementById('vco');
            var bbLabel = document.querySelector('label[for="vco"]');
            ocultar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos mostrar
            var bbInput = document.getElementById('vbtn');
            var bbLabel = document.querySelector('label[for="vbtn"]');
            mostrar(bbInput, bbLabel);
        }
        else if (posicao.id === "btn") {
            // Seleciona o input e o label que queremos ocultar
            var bbInput = document.getElementById('vhj');
            var bbLabel = document.querySelector('label[for="vhj"]');
            ocultar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos ocultar
            var bbInput = document.getElementById('vmp');
            var bbLabel = document.querySelector('label[for="vmp"]');
            ocultar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos ocultar
            var bbInput = document.getElementById('vco');
            var bbLabel = document.querySelector('label[for="vco"]');
            ocultar(bbInput, bbLabel);

            // Seleciona o input e o label que queremos ocultar
            var bbInput = document.getElementById('vbtn');
            var bbLabel = document.querySelector('label[for="vbtn"]');
            ocultar(bbInput, bbLabel);
        }
        else {
            //Seleciona o input e o label que queremos mostrar
            var bbInput = document.getElementById('vmp');
            var bbLabel = document.querySelector('label[for="vmp"]');
            mostrar(bbInput, bbLabel);

            //Seleciona o input e o label que queremos mostrar
            var bbInput = document.getElementById('vhj');
            var bbLabel = document.querySelector('label[for="vhj"]');
            mostrar(bbInput, bbLabel);

            //Seleciona o input e o label que queremos mostrar
            var bbInput = document.getElementById('vbtn');
            var bbLabel = document.querySelector('label[for="vbtn"]');
            mostrar(bbInput, bbLabel);

            //Seleciona o input e o label que queremos mostrar
            var bbInput = document.getElementById('vco');
            var bbLabel = document.querySelector('label[for="vco"]');
            mostrar(bbInput, bbLabel);
        }

        // if (posicao.id === "hj") {
        //     // Seleciona o input e o label que queremos ocultar
        //     var bbInput = document.getElementById('vhj');
        //     var bbLabel = document.querySelector('label[for="vhj"]');
        //     ocultar(bbInput, bbLabel);

        //     // Seleciona o input e o label que queremos ocultar
        //     var bbInput = document.getElementById('vco');
        //     var bbLabel = document.querySelector('label[for="vco"]');
        //     ocultar(bbInput, bbLabel);

        //     // Seleciona o input e o label que queremos ocultar
        //     var bbInput = document.getElementById('vmp');
        //     var bbLabel = document.querySelector('label[for="vmp"]');
        //     ocultar(bbInput, bbLabel);
        // }
        // else {
        //     // Seleciona o input e o label que queremos ocultar
        //     var bbInput = document.getElementById('vhj');
        //     var bbLabel = document.querySelector('label[for="vhj"]');
        //     mostrar(bbInput, bbLabel);

        //     // Seleciona o input e o label que queremos ocultar
        //     var bbInput = document.getElementById('vco');
        //     var bbLabel = document.querySelector('label[for="vco"]');
        //     mostrar(bbInput, bbLabel);

        //     // Seleciona o input e o label que queremos ocultar
        //     var bbInput = document.getElementById('vmp');
        //     var bbLabel = document.querySelector('label[for="vmp"]');
        //     mostrar(bbInput, bbLabel);
        // }
    }

    // Adiciona evento de change para os inputs de vilao
    vilaoInputs.forEach(input => {
        input.addEventListener('change', updateImage);
    });

    // Adiciona evento de change para os inputs de posição
    posicaoInputs.forEach(input => {
        input.addEventListener('change', updateImage);
    });

    // Adiciona evento de change para os inputs de blinds
    blindsInputs.forEach(input => {
        input.addEventListener('change', updateImage);
    });

    // Verifica e atualiza a imagem quando a página carrega
    updateImage();

});
