let male = 
    {
        name: "Back Rehab and Core Conditioning Workout",
        img: "/male/p1.png",
        time: 13,
        sex: "Male", 
        calo : 120,
        video: "https://www.youtube.com/embed/8tMbLfQqRis"
    };
let a = document.getElementById("minh");
let html = ` 
    <div>
        <iframe width="1000" height="562" src=${male.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
         `
    minh.innerhtml += html ; 
    
