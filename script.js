const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('.calc-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (btn.classList.contains('equal')) {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'ERROR';
        setTimeout(() => {
          display.value = '';
        }, 1500);
      }
    } else if (btn.classList.contains('clear')) {
      display.value = '';
    } else if (btn.classList.contains('delete')) {
      if(display.value !== 'ERROR') {
        display.value = display.value.slice(0, -1);
      } else {
        display.value = '';
      }
    } else {
      if(display.value === 'ERROR') display.value = '';
      display.value += value;
    }
  });
});
