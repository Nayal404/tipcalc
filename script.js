function getTip(){
    const tipCent = document.getElementById('tipcent').value;
    const people = document.getElementById('n-people').value;
    const totalBill = document.getElementById('totalbill').value;
    const getResult = document.getElementById('getResult');
    let result = ((tipCent/100)*totalBill)/people;
    document.getElementById('display').innerHTML = "Hence, (Each) Person will Pay" + " "+ result;
    document.querySelector('.here').innerHTML = '<iframe src="https://giphy.com/embed/65LrvAMGU650TvPgs5" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/soulpancake-tip-fundedinamerica-lalaanthony-65LrvAMGU650TvPgs5">via GIPHY</a></p>'
}