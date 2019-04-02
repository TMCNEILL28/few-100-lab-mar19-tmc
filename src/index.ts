import './styles.css';

const billInputAmount = <HTMLInputElement>document.getElementById('billInput');
let billAmount: number;
let currentTipPercent: number = .10;

const tipButtons = document.querySelectorAll('.btn-secondary');
setButtonAttributes();
displayTipPercent();

billInputAmount.addEventListener('input', function (evt) {
    //update Values
    billAmount = parseFloat(this.value);
    if (billAmount < 0) {
        billInputAmount.classList.add('bad');
        clearCalculatedValues()
    } else {
        billInputAmount.classList.remove('bad');
        document.getElementById('billAmount').innerHTML = "$" + billAmount.toFixed(2);
        computePercentage();
    }
});

tipButtons.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        currentTipPercent = parseFloat(this.getAttribute('tipPercent'));
        setButtonAttributes();
        displayTipPercent();
        computePercentage();
    })
});

function computePercentage() {
    let tipAmount: number;
    let totalAmount: number;
    tipAmount = billAmount * currentTipPercent;
    document.getElementById('tipAmount').innerHTML = "$" + tipAmount.toFixed(2);
    totalAmount = billAmount + tipAmount;
    document.getElementById('totalAmount').innerHTML = "$" + totalAmount.toFixed(2);
}

function clearCalculatedValues() {
    document.getElementById('billAmount').innerHTML = "$";
    document.getElementById('tipAmount').innerHTML = "$";
    document.getElementById('totalAmount').innerHTML = "$";
}

function setButtonAttributes() {
    tipButtons.forEach((btn, idx) => {
        const el = btn as HTMLButtonElement;
        if (parseFloat(el.getAttribute("tipPercent")) === currentTipPercent) {
            el.classList.add('disabled');
        } else if (el.classList.contains('disabled')) {
            el.classList.remove('disabled');
        }
    })
}

function displayTipPercent() {
    const percentDisplay: string = (currentTipPercent * 100).toString() + "%";
    document.getElementById('tipPercent').innerHTML = percentDisplay;
    document.getElementById('tipPercent2').innerHTML = percentDisplay;
}

