//console.log(model.programs)
const view = {}
view.setActiveScreen = async (screenName, program = undefined) => {
    switch (screenName) {
        case 'programs':
            document.getElementById('web').innerHTML = components.programsScreen
            model.loadprograms()
            break;
        case 'a-program':
            document.getElementById('web').innerHTML = components.showProgram
            let child = document.createElement('div')
            child.classList.add('video')
            child.innerHTML = `<iframe width="1100px" height="618.75px"  src="${program.video}" frameborder="0"></iframe>`
            document.querySelector('.showProgram').appendChild(child)
            let child1 = document.createElement('div')
            child1.innerHTML = `
            <br><h2 style = "font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">WORKOUT DETAILS </h2>
            <span class = "text" style="font-weight:Bold"> Duration : </span> ${program.time} minutes. <br>
            <span class = "text" style="font-weight:Bold">Calories burn : </span>${program.calo - 20} - ${program.calo + 20}. <br>
            <span class = "text" style="font-weight:Bold">Gender :</span> ${controller.changeGender(program.sex)}. <br>
            `
            child1.innerHTML += `<div class= "text" style="font-weight:Bold" >Description: </div>`
            for (let i = 0; i < program.des.length; i++) {
                child1.innerHTML += `<div class = "text-detail">- ${program.des[i]}.<div>`
            }
            child1.classList.add('text-des')
            document.querySelector('.showProgram').appendChild(child1)
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
            view.setActiveScreen('a-program', program)

        })
    }
}



