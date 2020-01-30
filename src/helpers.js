export const checkBudget = (budget,rest) =>{
    let alertStyle;
    if( (budget/4) > rest) {
        alertStyle = 'alert alert-danger';
    } else if( (budget/2) > rest){
        alertStyle = 'alert alert-warning'
    } else {
        alertStyle = 'alert alert-success'
    }
    return alertStyle;
}