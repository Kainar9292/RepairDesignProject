
    const slider = document.querySelector('.portfolio__info'),
          slidesField = document.querySelector('.portfolio__inner'),
          slidesWrapper = document.querySelector('.portfolio__pictures'),
          slides = document.querySelectorAll('.portfolio__item'),
          prev = document.querySelector('.portfolio__arrow-left'),
          next = document.querySelector('.portfolio__arrow-right'),
          width = window.getComputedStyle(slidesWrapper).width,
          dots = document.querySelectorAll('.portfolio__dot'),
          tabs = document.querySelectorAll('.portfolio__link'),
          descriptions = slider.querySelector('.portfolio__text'),
          city = slider.querySelector('#city'),
          area = slider.querySelector('#area'),
          time = slider.querySelector('#time'),
          cost = slider.querySelector('#cost');


      const data = [
            slideOne = {
                  descriptions: 'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
                  city: 'Rostov-on-Don LCD admiral',
                  area: '81 m2',
                  time: '3.5 months',
                  cost: 'Upon request'
            },
            slideTwo = {
                  descriptions: 'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
                  city: 'Sochi Thieves',
                  area: '105 m2',
                  time: '4 months',
                  cost: 'Upon request'
            },
            slideTree = {
                  descriptions: 'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
                  city: 'Rostov-on-Don Patriotic',
                  area: '93 m2',
                  time: '3 months',
                  cost: 'Upon request'
            }
      ];

      let slideIndex = 1,
            offset = 0;
    
      slidesField.style.width = 100 * slides.length + '%';
      slidesField.style.display = 'flex';
      slidesField.style.transition = '0.5s all';

      slidesWrapper.style.overflow = 'hidden';

      slides.forEach(slide => {
            slide.style.width = width;
      });

      slider.style.position = 'relative';


      
      function changeSlides() {
            slidesField.style.transform = `translateX(-${offset}px)`;

            descriptions.textContent = data[slideIndex - 1].descriptions;
            city.textContent = data[slideIndex -1].city;
            area.textContent = data[slideIndex - 1].area;
            time.textContent = data[slideIndex - 1].time;
            cost.textContent = data[slideIndex - 1].cost;

            changeDots(dots, 'active-white');
            changeDots(tabs, 'active-underline');
      }
      
      function changeDots(dots, changeClass) {
            dots.forEach(dot => dot.classList.remove(changeClass));
            dots[slideIndex - 1].classList.add(changeClass);
      }

      function deleteStr(str) {
            return +str.replace(/[a-z]/g, '');
      }

      next.addEventListener('click', () => {
            if (offset == deleteStr(width) * (slides.length - 1)) {
                  offset = 0;
            } else {
                  offset += deleteStr(width);
            }

            if (slideIndex == slides.length) {
                  slideIndex = 1;
            } else {
                  slideIndex++;
            }

            changeSlides();
      });

      prev.addEventListener('click', () => {
            if (offset == 0) {
                  offset = deleteStr(width) * (slides.length - 1);
            } else {
                  offset -= deleteStr(width);
            }

            if (slideIndex == 1) {
                  slideIndex = slides.length;
            } else {
                  slideIndex--;
            }

            changeSlides();
      });

      function clickToDots(dots) {
            dots.forEach(dot => {
                  dot.addEventListener('click', (e) => {
                        e.preventDefault();
                        const slideTo = e.target.getAttribute('data-slide-to');

                        slideIndex = slideTo;
                        offset = deleteStr(width) * (slideTo - 1);

                        changeSlides();
                  });
            });
      }

      clickToDots(dots);
      clickToDots(tabs);