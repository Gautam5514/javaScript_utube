const form = document.querySelector('form');

//This usecase give you empty
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `sahi se bhar BC ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Abhi na Bc sahi se Bhar ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let statement = '';

        if(bmi < 18.6) {
            statement = 'Under Weight';
        }
        else if(bmi >= 18.6 && bmi <= 24.9) {
            statement = 'Normal Range';
        }
        else{   
            statement = 'Over Weight';
        }

        result.innerHTML = `<span>${bmi} kg/m2 </span><br>${statement}`;
    }
});