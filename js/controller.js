let controller = {}
controller.login = (data) => {



    model.login(data)
}
controller.register =(data) => {


    
    model.register(data)
}
controller.changeGender = (num) => {
    if (num == 0) return "Male";
    if (num == 1) return "Female"
    if (num == 2) return "Both"
}
