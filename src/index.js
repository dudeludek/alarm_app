document.getElementById('btn1').addEventListener('click', () => { 
    console.log('Button 1 clicked')
    var rom1 = document.getElementById('rom1');
    rom1.style.fill = 'red';
  });

document.getElementById('rom1').addEventListener('click', () => {
    console.log('rom1 clicked')
    var rom1 = document.getElementById('rom1');
    rom1.style.fill = '#e5e5e5';
  });