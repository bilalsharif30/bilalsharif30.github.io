document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  const section1 = document.querySelector('#section1');
  const section2 = document.querySelector('#section2');
  const section3 = document.querySelector('#section3');
  
  section1.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
  section2.style.backgroundPositionY = `${(scrollPosition - section2.offsetTop) * 0.3}px`;
  section3.style.backgroundPositionY = `${(scrollPosition - section3.offsetTop) * 0.3}px`;

  const textContents = document.querySelectorAll('.text-content');
  textContents.forEach(content => {
    const contentOffset = section3.offsetTop + content.offsetTop;
    const distance = scrollPosition - contentOffset + window.innerHeight / 2;
    content.style.transform = `translateY(${distance * 0.1}px)`;
  });
});
