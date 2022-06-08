const id = new URLSearchParams(window.location.search).get('id');


const work = [
  {
    id: 1,
    image: './src/img/Rectangle 4.png',
    name: 'Designing Dashboards with usability in mind',
    date: '2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    short_description: 'Dashboard, User Experience Design',
  },
  {
    id:2,
    image: './src/img/Rectangle 5.png',
    name: 'Vibrant Portraits of 2020',
    date: '2018',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    short_description: 'Dashboard, User Experience Design',

  },
  {
    id: 3,
    image: './src/img/Rectangle 6.png',
    name: '36 Days of Malayalam type',
    date: '2022',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    short_description: 'Dashboard, User Experience Design',

  },
  {
    id: 4,
    image: './src/img/Rectangle 40.png',
    name: 'Components',
    date: '2022',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    short_description: 'Dashboard, User Experience Design',

  },


];
const found = work.find(function (element) {
  return element.id==id;
});
document.getElementById('work-second').innerHTML=`<div class="">
<div class=" mb-4 py-4 mt-4 ">
<h3 class="font-bold text-3xl w-[102%] md:w-3/6 text-[#21243D]"><a href="#" >${found.name}</a></h3>
<span class="inline-block mx-1 px-4 my-6 md:my-7 text-lg font-black  rounded-[26px] text-white bg-[#FF7C7C] ">${found.date}</span>
  <span class="inline-block md:mx-1 md:px-4 mb-4 md:my-7 text-xl font-normal  rounded-[26px] text-[#21243D] ">${found.short_description}</span>
  <p class="font-normal leading-6 ">${found.description}</p>
  <a href="#" class="mr-4"><img src="${found.image}" alt="" class="w-full" ></a>
</div>
</div>`

const menu = document.getElementById('menu');
const navmenu = document.getElementById('navmenu');

navmenu.addEventListener('click', function() {
  menu.classList.toggle("hidden");
});

