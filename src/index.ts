import './styles.css';

const billInputAmount = <HTMLInputElement>document.getElementById('billInput');
let billAmount: number;
let currentTipPercent = '10%';

const tipButtons = document.querySelectorAll('.btn-secondary');
SetupButtons();
DisplayTipPercent();

billInputAmount.addEventListener('input', function (evt) {

    //update Values
    billAmount = parseFloat(this.value);
    if (isNaN(billAmount)) {
        billInputAmount.classList.add('bad');
    } else {

        billInputAmount.classList.remove('bad');
        document.getElementById('billAmount2').innerHTML = "$" + billAmount.toFixed(2);
        computePercentage();
    }

});

tipButtons.forEach((btn, idx) => {
    const el = btn as HTMLDivElement;
    btn.addEventListener('click', function () {
        if (!this.classList.contains('disabled')) {
            this.classList.add('disabled');
            currentTipPercent = this.innerText;
            SetupButtons();
            DisplayTipPercent();
            computePercentage();
        }
    })
});

function computePercentage() {
    let percent: number = .10;
    let tipAmount: number;
    let totalAmount: number;
    // let totalBill: number = billAmount;
    switch (currentTipPercent) {
        case "10%":
            percent = .10;
            break;
        case "15%":
            percent = .15;
            break;
        case "20%":
            percent = .20;
            break;
    }
    tipAmount = billAmount * percent;
    document.getElementById('tipAmount').innerHTML = "$" + tipAmount.toFixed(2);
    totalAmount = billAmount + tipAmount;
    document.getElementById('totalAmount').innerHTML = "$" + totalAmount.toFixed(2);

}

function SetupButtons() {

    tipButtons.forEach((btn, idx) => {
        const el = btn as HTMLDivElement;
        if (el.getAttribute("tipPercent") === currentTipPercent) {
            el.classList.add('disabled');
        } else {
            if (el.classList.contains('disabled')) {
                el.classList.remove('disabled');

            }
        }
    })
}

function DisplayTipPercent() {
    document.getElementById('tipPercent').innerHTML = currentTipPercent;
    document.getElementById('tipPercent2').innerHTML = currentTipPercent;
}

