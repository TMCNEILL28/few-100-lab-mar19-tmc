import './styles.css';

const billInputAmount = <HTMLInputElement>document.getElementById('billInput');
let billAmount: number;
let currentTipPercent: number = .10;

const tipButtons = document.querySelectorAll('.btn-secondary');
SetupButtons();
DisplayTipPercent();

billInputAmount.addEventListener('input', function (evt) {
    //update Values
    billAmount = parseFloat(this.value);
    if (isNaN(billAmount)) {
        billInputAmount.classList.add('bad');
        ClearCalculatedValues()
    } else {

        if (billAmount < 0) {
            billInputAmount.classList.add('bad');
            ClearCalculatedValues()
        } else {
            billInputAmount.classList.remove('bad');
            document.getElementById('billAmount').innerHTML = "$" + billAmount.toFixed(2);
            computePercentage();
        }
    }

});

tipButtons.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        if (!this.classList.contains('disabled')) {
            this.classList.add('disabled');
            currentTipPercent = parseFloat(this.getAttribute('tipPercent'));
            SetupButtons();
            DisplayTipPercent();
            computePercentage();
        }
    })
});

function computePercentage() {
    //let percent: number = .10;
    let tipAmount: number;
    let totalAmount: number;
    tipAmount = billAmount * currentTipPercent;
    document.getElementById('tipAmount').innerHTML = "$" + tipAmount.toFixed(2);
    totalAmount = billAmount + tipAmount;
    document.getElementById('totalAmount').innerHTML = "$" + totalAmount.toFixed(2);
}

function ClearCalculatedValues() {
    document.getElementById('billAmount').innerHTML = "$";
    document.getElementById('tipAmount').innerHTML = "$";
    document.getElementById('totalAmount').innerHTML = "$";
}

function SetupButtons() {
    tipButtons.forEach((btn, idx) => {
        const el = btn as HTMLButtonElement;
        if (parseFloat(el.getAttribute("tipPercent")) === currentTipPercent) {
            el.classList.add('disabled');
        } else {
            if (el.classList.contains('disabled')) {
                el.classList.remove('disabled');

            }
        }
    })
}

function DisplayTipPercent() {
    document.getElementById('tipPercent').innerHTML = currentTipPercent.toString();
    document.getElementById('tipPercent2').innerHTML = currentTipPercent.toString();
}

