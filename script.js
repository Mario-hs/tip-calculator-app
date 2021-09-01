const Bill = {
    bill: Number,
    tip: Number,
    custom: Number,
    byPeople: Number,

    getValues() {
        return {
            bill: Number(Bill.bill.value),
            tip: Number(Bill.tip),
            custom: Number(Bill.custom.value),
            byPeople: Number(Bill.byPeople.value)
        }
    }
}
var aux
handleTipButton = (e, position) => {
    let buttons = document.querySelectorAll('.buttonTip');
    Bill.tip = e;
    if (Bill.custom.value != 0) {
        buttons.item(aux).classList.remove('active');
        buttons.item(position).classList.add('active');
    }
    aux = position;

    if ((e === 0) && (position === null)) {
        buttons.item(aux).classList.remove('active');
    }

    handleSum();
}

handleInput = () => {
    Bill.bill = document.querySelector('#conta');
    Bill.bill.addEventListener('change', () => {
        return Bill.bill;
    })

    Bill.custom = document.querySelector('#custom');
    Bill.custom.addEventListener('change', () => {
        handleTipButton(0, null)
        return Bill.custom;
    })

    Bill.byPeople = document.querySelector('#people');
    Bill.byPeople.addEventListener('change', () => {
        return Bill.byPeople;
    })
    handleSum();

}

const handleSum = () => {

    const { bill, tip, custom, byPeople } = Bill.getValues();
    let tipPeople = document.getElementById('tipPeople');
    let totalPerson = document.getElementById('totalPerson');


    let sumTip = ((bill * (tip / 100)) / byPeople).toFixed(2);
    let sumTotal = ((bill + (bill * (tip / 100))) / byPeople).toFixed(2);

    if ((tip === undefined) || (custom >= 0)) {
        sumTip = ((bill * (custom / 100)) / byPeople).toFixed(2);
        sumTotal = ((bill + (bill * (custom / 100))) / byPeople).toFixed(2);
    }


    if ((sumTotal > 0) && (sumTotal != Infinity)) {
        tipPeople.innerHTML = `R$${sumTip}`;
        totalPerson.innerHTML = `R$${sumTotal}`;
    } else {
        tipPeople.innerHTML = `R$0`;
        totalPerson.innerHTML = `R$0`;
    }
}
