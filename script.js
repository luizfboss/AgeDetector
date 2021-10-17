function verify() {
    var data = new Date()
    var year = data.getFullYear()
    var fyear = window.document.getElementById('txtano')
    var fyear = Number(fyear.value)
    var res = window.document.getElementById('result')
    var sum = year - fyear
    if (fyear == 0 || sum < 0){
        window.alert(`[Error!]. The date of birth ${fyear} is invalid. Please type a valid year and try again.`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = 'Men'
            if (sum >= 0 && sum < 10) {
                //Child
                img.setAttribute('src', 'Imagens/kid-boy.png')
            } else if (sum < 21) {
                //Teen
                img.setAttribute('src', 'Imagens/teen-boy.png')
            } else if (sum < 50) {
                //Adult
                img.setAttribute('src', 'Imagens/men.png')
            } else {
                //Elder
                img.setAttribute('src', 'Imagens/grandpa.png')
            }
        } else if (fsex[1].checked) {
            gender = 'Woman'
            if (sum >= 0 && sum < 10) {
                //Child
                img.setAttribute('src', 'Imagens/kid-girl.png')
            } else if (sum < 21) {
                //Teen  
                img.setAttribute('src', 'Imagens/teen-girl.png')
            } else if (sum < 50) {
                //Adult
                img.setAttribute('src', 'Imagens/Woman.png')
            } else {
                //Elder
                img.setAttribute('src', 'Imagens/grandma.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${sum} year-old ${gender}`
        res.appendChild(img)
    }
}

