import './styles.css';

const billAmount = <HTMLInputElement>document.getElementById('billInput');
let currentTipPercent = '10%';

const tipButtons = document.querySelectorAll('.btn-secondary');
SetupButtons();
DisplayTipPercent();

billAmount.addEventListener('input', function (evt) {

    //update Values
    document.getElementById('billAmount2').innerHTML = this.value;
    computePercentage();

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
    let totalBill: number = parseFloat(document.getElementById('billAmount2').innerHTML);
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
    tipAmount = totalBill * percent;
    document.getElementById('tipAmount').innerHTML = tipAmount.toString();
    totalAmount = totalBill + tipAmount;
    document.getElementById('totalAmount').innerHTML = totalAmount.toString();

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

