import './styles.css';

const billAmount = <HTMLInputElement>document.getElementById('billInput');
let currentTipPercent = '10%';

const tipButtons = document.querySelectorAll('.btn-secondary');

billAmount.addEventListener('input', function (evt) {

    //update Values
    document.getElementById('billAmount2').innerHTML = this.value;
    alert(this.value);

});

tipButtons.forEach((btn, idx) => {
    const el = btn as HTMLDivElement;
    btn.addEventListener('click', function () {
        if (!this.classList.contains('disabled')) {
            this.classList.add('disabled');
        }
        currentTipPercent = this.innerText;
        document.getElementById('tipPercent').innerHTML = currentTipPercent;

    })
});

