const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const input = item.querySelector('input');
      const content = item.querySelector('.accordion-content');
      const arrowIcon = item.querySelector('svg');

      content.style.display = 'none';
      input.addEventListener('change', () => {
        if (input.checked) {
            arrowIcon.style.transform = 'rotate(180deg)';
            content.style.display = 'block';
         
        } else {
            arrowIcon.style.transform = 'rotate(0deg)';
            content.style.display = 'none';
        }
      });
    });