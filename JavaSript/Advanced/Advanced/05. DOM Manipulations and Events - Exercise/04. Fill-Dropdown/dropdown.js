function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const select = document.getElementsByTagName('select')[0];
    
    const option = document.createElement('option');
    option.textContent = newItemText.value;
    option.value = newItemValue.value;
    select.appendChild(option);
    
    newItemText.value = '';
    newItemValue.value = '';
}