let submit = document.getElementById('submit');

let output = document.createElement('div');
output.id = 'total';
document.getElementsByClassName('col')[0].appendChild(output);

function calculate(){
    // getting data
    let name = document.getElementById('name').value;
    let total = parseInt(document.getElementById('bid').value);
    let education = document.getElementById('education').value;
    let networth = document.getElementById('networth').value;
    let caste = document.getElementById('caste').value;
    let isMusical = document.getElementById('musical').checked;
    let cooks = document.getElementById('cook').checked;
    let goodCharacter = document.getElementById('character').checked;
    let singsWell = document.getElementById('sings').checked;
    let isYoung = document.getElementById('a1823').checked;
    let isMiddle = document.getElementById('a2427').checked;
    let isOld = document.getElementById('a28').checked;
    let badAttitude = document.getElementById('attitude').checked;
    let gossips = document.getElementById('gcharacter').checked;
    let negativePerson = document.getElementById('person').checked;
    let love_letter = document.getElementById('letter').value;

    if (education == 'undergraduate'){
        total *= 1.5;
    }
    else if (education == 'college'){
        total *= 1.2;
    }
    else if (education == 'high'){
        total *= 1.05;
    }
    else if (education == 'middle'){
        total *= .9;
    }
    if (networth == 'upper_class'){
        total *= 2;
    }
    else if (networth == 'middle_class'){
        total *= 1.5;
    }
    else if (networth == 'lower_class'){
        total *= 1.2;
    }
    if (caste == 'Brahmin'){
        total += 100;
    }
    else if (caste == 'Kshatriya'){
        total += 50;
    }
    else if (caste == 'Vaishya'){
        total += 20;
    }
    else if (caste == 'Shudra'){
        total += 10;
    }
    if (isMusical){
        total += 10;
    }
    if (cooks){
        total += 20;
    }
    if (goodCharacter){
        total += 15;
    }
    if (singsWell){
        total += 10;
    }
    if (isYoung)
        total *= 1.5;
    if (isMusical)
        total *= 1.2;
    if (isOld)
        total *= .95;
    if (badAttitude)
        total *= 0.85;
    if (gossips)
        total *= 0.9;
    if (negativePerson)
        total -= 20;

    let person = {
        bride_name: name,
        bride_price: total,
        letter_to_bride: love_letter
    }

    if (name && total)
        document.getElementById('total').innerHTML = `Your price for ${person.bride_name} is ${person.bride_price} tg.<br><br>Love letter: ${person.letter_to_bride}`;
    else
        document.getElementById('total').innerHTML = '<b>Fill all the fields!</b';

    total = parseInt(document.getElementById('bid').value);
}

submit.addEventListener('click',() => calculate());