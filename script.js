const Bill = {
    bill: Number,
    tip: Number,
    custom: Number,
    byPeople: Number,

    getValues() {
        return {
            bill: Number(Bill.bill.value),
            tip: Number(Bill.tip.value),
            custom: Number(Bill.custom.value),
            byPeople: Number(Bill.byPeople.value)
        }
    }
}

handleInput();

function handleInput() {
    Bill.bill = document.querySelector('#conta');
    Bill.bill.addEventListener('change', () => {
        return Bill.bill;
    })

    Bill.tip = document.querySelector('.buttonTip');
    Bill.tip.addEventListener('click', () => {
        return Bill.tip;
    })

    Bill.custom = document.querySelector('#custom');
    Bill.custom.addEventListener('change', () => {
        return Bill.custom;
    })

    Bill.byPeople = document.querySelector('#people');
    Bill.byPeople.addEventListener('change', () => {
        return Bill.byPeople;
    })
    handleSum();
}

function handleSum() {

    const { bill, tip, custom, byPeople } = Bill.getValues();
    let tipPeople = document.getElementById('tipPeople');
    let totalPerson = document.getElementById('totalPerson');


    // let sumTip = (bill * (tip / 100)) / byPeople;
    // let sumTotal = (bill + (bill * (tip / 100))) / byPeople;
    let sumTotalsumTip
    let sumTotal

    // console.log('Tip', tip);
    // if (tip === undefined) {
    sumTip = ((bill * (custom / 100)) / byPeople).toFixed(2);
    sumTotal = ((bill + (bill * (custom / 100))) / byPeople).toFixed(2);
    // }


    if ((sumTotal > 0) && (sumTotal != Infinity)) {
        tipPeople.innerHTML = `R$${sumTip}`;
        totalPerson.innerHTML = `R$${sumTotal}`;
    } else {
        tipPeople.innerHTML = `R$0`;
        totalPerson.innerHTML = `R$0`;
    }

}