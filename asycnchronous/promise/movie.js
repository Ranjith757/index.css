let goToMovie = (success, failure) => {
    let amount = 700;
    if (amount > 600) {
        success("Go to PRINCE Alone")
    }
    else {
        failure("Go to Room ! Cook Food")
    }

}
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})