//console.log(model.programs)
const view = {}
view.setActiveScreen = async (screenName) => {
    switch (screenName) {
        case 'programs':
            document.getElementById('web').innerHTML = components.programsScreen
            model.loadprograms()
            break;
    }
}

view.loadPrograms = (programs) => {
    for (let i = 0; i < programs.length; i++) {
        let child = document.createElement('div')
        child.classList.add('program')
        child.id = `${programs[i].id}`
        child.innerHTML = `
            <div class="image" style=" background-image: url(${programs[i].img[0]});"></div>
            <div class="program-detail">
                <span style="font-weight: bold;"> - Program: </span> ${programs[i].name}<br>
                <span style="font-weight: bold;"> - Time: </span> ${programs[i].time} minutes <br>
                <span style="font-weight: bold;"> - Calories burn: </span> ${programs[i].calo - 20} - ${programs[i].calo + 20}.
            </div>
        `
        document.querySelector('.list-program').appendChild(child)
        child.addEventListener('click', () => {
            console.log(child.id)
        })
    }
}
