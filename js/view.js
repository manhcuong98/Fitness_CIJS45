for(let i=0 ; i<6 ; i++ ) {
    let child = document.createElement('div')
    child.classList.add('program')
    child.innerHTML = `
    <div class="image" style=" background-image: url(../image/both/p1-2.png);"></div>
    <div class="program-detail">
        <span style="font-weight: bold;"> Program: </span> Back Rehab and Core Conditioning Workout.<br>
        <span style="font-weight: bold;"> Time: </span> 23 minutes. <br>
        <span style="font-weight: bold;"> Calories burn: </span> burn: 100-140.

    </div>
    `
    document.querySelector('.list-program').appendChild(child)
}
