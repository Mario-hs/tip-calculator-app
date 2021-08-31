handleInput();

function handleInput(props) {
    const tip = props;

    const bill = Number(document.getElementById('conta').value);
    const custom = Number(document.getElementById('custom').value);
    const people = Number(document.getElementById('numberPeople').value);

    handleSum(tip, bill, custom, people);

}


function handleSum(tip, bill, custom, people) {
    let tipPeople = document.getElementById('tipPeople');
    let totalPerson = document.getElementById('totalPerson');


    let sumTip = (bill * (tip / 100)) / people;
    let sumTotal = (bill + (bill * (tip / 100))) / people;

    console.log('Tip', tip);
    if (tip === undefined) {
        sumTip = (bill * (custom / 100)) / people;
        sumTotal = (bill + (bill * (custom / 100))) / people;
        console.log('Custom', custom);
    }

    console.log('conta', bill);
    console.log('pessoas', people);
    console.log("------------------------");
    console.log(typeof (sumTip));
    console.log(typeof (sumTotal));


    if ((sumTip >= 0) && (sumTotal >= 0)) {
        tipPeople.innerHTML = `R$${sumTip}`;
        totalPerson.innerHTML = `R$${sumTotal}`;
    } else {
        tipPeople.innerHTML = `R$0`;
        totalPerson.innerHTML = `R$0`;
    }

}