

window.onload = function() {
    const form = document.querySelector('#form');
    const fName = document.querySelector('#fName');
    const fNumber = document.querySelector('#fNumber');
    const fMonth = document.querySelector('#F-mm');
    const errorN = document.querySelector('#eNumber');
    const fCvc = document.querySelector('#fcvc');
    const Fyy = document.querySelector('#Fyy');

    function formatNumber(input) {
            // L'input ne contient que des chiffres
            input = input.replace(/(\d{4})/g, '$1 ');
            errorN.style.display="none";
            return input
            // L'input contient au moins un caractère qui n'est pas un chiffre
        }
    const borderNumber = document.querySelector('#Number');
        function error(input){ 
            if (/^\d+$/.test(input)) {
                    borderNumber.style.border="";
                    errorN.style.display="none";
                    return 1;
                } else {
                    borderNumber.style.border="red 0.1px solid";
                        errorN.style.display="block";}
        }
    const NameError = document.querySelector('#blank1')
    const NameB = document.querySelector('#Name');
    function errorName(input){
        if (input==""){
            NameB.style.border="red 0.1px solid";
            NameError.style.display="block";
        }
        else{
            NameB.style.border="";
            NameError.style.display="none";
            return 1;
        }
    }
const NMerror = document.querySelector('#blank2');
const borderNM = document.querySelector('#MM');
    function errorNM(input){
        if (input==""){
            borderNM.style.border="red 0.1px solid";
            NMerror.style.display="block";
        }
        else{
            borderNM.style.border="";
            NMerror.style.display="none";
            return 1;
        }
    }
const YYerror = document.querySelector('#blank3');
const borderYY = document.querySelector('#yy');
function errorYY(input){
    if (input==""){
        borderYY.style.border="red 0.1px solid";
        YYerror.style.display="block";
        
    }
    else{
        borderYY.style.border="";
        YYerror.style.display="none";
        return 1;
    }
}
    
const CVCerror = document.querySelector('#blank4');
const borderCVC = document.querySelector('#cvc');

function errorCVC(input){
    if (input==""){
        borderCVC.style.border="red 0.1px solid";
        CVCerror.style.display="block";
        return 0;
    }
    else{
        borderCVC.style.border="";
        CVCerror.style.display="none";
        return 1;
    }
}



form.addEventListener('input',()=>{
    const nom = document.querySelector('#Name').value;
    const Number = document.querySelector('#Number').value;
    const Month = document.querySelector('#MM').value;
    const cvc = document.querySelector('#cvc').value;
    const yy = document.querySelector('#yy').value;
    fMonth.innerHTML= Month;
    fName.innerHTML = nom;

    fNumber.innerHTML = formatNumber(Number);
    fCvc.innerHTML = cvc;
    Fyy.innerHTML = yy;

})



form.addEventListener('submit',function(event){
    event.preventDefault();
    const nom = document.querySelector('#Name').value;
    const Number = document.querySelector('#Number').value;
    const Month = document.querySelector('#MM').value;
    const cvc = document.querySelector('#cvc').value;
    const yy = document.querySelector('#yy').value;
    const validation = document.querySelector('#complete');
    
    error(Number);
    errorNM(Month);
    errorYY(yy);
    errorName(nom);
    errorCVC(cvc);
    if(error(Number)&&errorNM(Month)&&errorYY(yy)&&errorName(nom)&&errorCVC(cvc)){
        validation.style.display="flex"
        form.style.display="none"
    }else{
        form.style.display="flex";
        validation.style.display="none";
    }
})
const conti = document.querySelector('#complete');

conti.addEventListener('click',()=>{
    const contiN = document.querySelector('#complete')
    form.style.display="flex";
        contiN.style.display="none";
})


};