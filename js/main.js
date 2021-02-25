
    const slidesField = document.querySelector('.portfolio__inner'),
          slidesWrapper = document.querySelector('.portfolio__pictures'),
          slides = document.querySelector('.portfolio__item');
    
    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    console.log('sss');
