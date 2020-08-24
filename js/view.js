//console.log(model.programs)
const view = {}
view.setActiveScreen = async (screenName) => {
    switch (screenName) {
        case 'programs':
            document.getElementById('web').innerHTML = components.programsScreen
            model.loadprograms()
            break;
        case 'a-program' :
            document.getElementById('web').innerHTML = components.showProgram
            break;
    }

}

view.loadPrograms = (programs) => {
    for (let program of programs) {
        let child = document.createElement('div')
        child.classList.add('program')
        child.id = `${program.id}`
        child.innerHTML = `
            <div class="image" style=" background-image: url(${program.img[0]});"></div>
            <div class="program-detail">
                <span style="font-weight: bold;"> - Program: </span> ${program.name}<br>
                <span style="font-weight: bold;"> - Time: </span> ${program.time} minutes <br>
                <span style="font-weight: bold;"> - Calories burn: </span> ${program.calo - 20} - ${program.calo + 20}.
            </div>
        `
        document.querySelector('.list-program').appendChild(child)
        child.addEventListener('click', () => {
            console.log(program.video)
            view.showProgram(program)
            
        })
    }
}
view.showProgram = (program) => {
    let child = document.createElement('div')
    child.classList.add('programDetail')
    //child.id = `${program.id}`
    child.innerHTML = `
    <div> a </div>
    `
    document.querySelector('.showProgram1').appendChild(child)
    view.setActiveScreen('a-program')
}
