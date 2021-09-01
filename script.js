const Bill = {
    bill: 0,
    tip: 0,
    custom: 0,
    byPeople: 0,

    getValues() {
        return {
            bill: Number.parseFloat(Bill.bill.value.replace(",", ".")),
            tip: Number(Bill.tip),
            custom: Number(Bill.custom.value),
            byPeople: Number(Bill.byPeople.value)
        }
    }
}

var aux;

handleTipButton = (e, position) => {
    let buttons = document.querySelectorAll('.buttonTip');
    Bill.tip = e;

    buttons.item(aux).classList.remove('active');
    buttons.item(position).classList.add('active');

    if ((Bill.custom != undefined) && (Bill.custom != 0)) {
        console.log('oi')
        buttons.item(aux).classList.remove('active');
    }

    aux = position;

    handleSum();
}

handleInput = () => {
    Bill.bill = document.querySelector('#conta');
    Bill.bill.addEventListener('change', () => {
        console.log(Bill.bill.value)
        return Bill.bill;
    })

    Bill.custom = document.querySelector('#custom');
    Bill.custom.addEventListener('change', () => {
        handleTipButton(null, null);
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

    if ((tip === undefined) || (custom > 0)) {
        sumTip = ((bill * (custom / 100)) / byPeople).toFixed(2);
        sumTotal = ((bill + (bill * (custom / 100))) / byPeople).toFixed(2);
    }

    if ((sumTotal > 0) && (sumTotal != Infinity)) {
        tipPeople.innerHTML = `$${sumTip}`;
        totalPerson.innerHTML = `$${sumTotal}`;
    } else {
        tipPeople.innerHTML = `$0.00`;
        totalPerson.innerHTML = `$0.00`;
    }
}

function handleReset() {
    window.location.reload();
}