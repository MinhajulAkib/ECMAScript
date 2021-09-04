function PatriChai(age, earning){
    //console.log(TrueAge);
    var decision = canMarry(15000);
    console.log(decision);
    console.log(age);
    console.log(earning);

    //var TrueAge = age +7;

    function canMarry(expense){
        const remaining = earning- expense;
        if (remaining > 1000){
            const showing = 500;
            console.log(showing);
            return true;
        }
        return false;
    }
}
PatriChai(21, 50000);