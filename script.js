// const countValue = document.querySelector('#counter')

// const increment = () => {

//     let value = parseInt(countValue.innertext);

//     value = value + 1;

//     countValue.innertext = value;
// };

// const decrement = () => {

//     let value = parseInt(countValue.innertext);

//     value = value - 1;

//     countValue.innertext = value;
// };



const countValue = document.getElementById('counter');

function increment(){
    // get the vlue from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};