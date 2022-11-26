function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let people = document.getElementById('people').value;

    document.getElementById('preenchaBill').style.display= "none";
    document.getElementById('preenchaQuality').style.display= "none";
    document.getElementById('preenchaPeople').style.display= "none";
    document.getElementById('minimoPeople').style.display= "none";
    document.getElementById('totalTip').style.display = "none";
    document.getElementById('each').style.display = "none";
    document.getElementById('ponto').style.display = "none";


    if (bill == ""){
        document.getElementById('preenchaBill').style.display= "block";        
    }
    
    if (serviceQuality == ""){
        document.getElementById('preenchaQuality').style.display= "block";
    }

    if(people == ''){
        document.getElementById('preenchaPeople').style.display= "block";
    }

    if(people < 1){
        document.getElementById('minimoPeople').style.display= "block";
    }

    if((people >= 1) && (serviceQuality != '') &&  (bill != '')){
        let total = (bill*serviceQuality)/people;
        total = total.toFixed(2);
        document.getElementById('tip').innerHTML = total;
        document.getElementById('totalTip').style.display= "block";
        if (people > 1){
            document.getElementById('each').style.display= "block";
        }
        if (people == 1){
            document.getElementById('ponto').style.display= "block";
        }
    }

    if((people > 1) && (serviceQuality != '') &&  (bill != '')){
        let total = (bill*serviceQuality)/people;
    }    
}

    document.getElementById('totalTip').style.display = "none";
    document.getElementById('each').style.display = "none";
    document.getElementById('ponto').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
