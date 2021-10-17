function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var fano = Number(fano.value)
    var res = window.document.getElementById('result')
    var soma = ano - fano
    if (fano == 0 || soma < 0){
        window.alert(`[Erro!]. A data de nascimento ${fano} foi invalida. Escreva uma idade valida e tente novamente.`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (soma >= 0 && soma < 10) {
                //Crianca
                img.setAttribute('src', 'Imagens/kid-boy.png')
            } else if (soma < 21) {
                //Jovem
                img.setAttribute('src', 'Imagens/teen-boy.png')
            } else if (soma < 50) {
                //Adulto
                img.setAttribute('src', 'Imagens/men.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/grandpa.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (soma >= 0 && soma < 10) {
                //Crianca
                img.setAttribute('src', 'Imagens/kid-girl.png')
            } else if (soma < 21) {
                //Jovem
                img.setAttribute('src', 'Imagens/teen-girl.png')
            } else if (soma < 50) {
                //Adulto
                img.setAttribute('src', 'Imagens/Woman.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/grandma.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${soma} anos`
        res.appendChild(img)
    }
}

