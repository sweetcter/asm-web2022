const work = [
    {
      id: 1,
      image: './src/img/Rectangle 30.jpg',
      name: 'Designing Dashboards',
      date: '2020',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      short_description: 'Dashboard',
    },
    {
      id: 2,
      image: './src/img/Rectangle 32.jpg',
      name: 'Vibrant Portraits of 2020',
      date: '2018',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      short_description: 'Illustration',
    },
    {
      id: 3,
      image: './src/img/Rectangle 34.jpg',
      name: '36 Days of Malayalam type',
      date: '2018',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      short_description: 'Typography',
    },
    {
        id: 4,
        image: './src/img/Rectangle 40.png',
        name: 'Components',
        date: '2018',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        short_description: 'Components, Design',
      },
  ];
  function listWork (work) {
    if(!Array.isArray(work) || work.length==0) return false
    let result='';
    for(let i =0;i<work.length;i++) {
      const works = work[i];
      result+= `
      <div class=" border-b border-[#E0E0E0]">
      <div class="md:flex mb-4 py-4 mt-4  ">
     <img src="${works.image}" alt="" class="w-full md:w-[248px] mr-4 ">
      <div class="">
      <div>
        <h3 class="font-bold text-3xl my-4"><a href="work-two.html?id=${works.id}" >${works.name}</a></h3>
      </div>
      <div class="my-4">
        <span class="inline-block mx-1 px-2 text-lg font-black  rounded-[26px] text-white bg-[#142850] ">${works.date}</span>
        <span class="inline-block mx-1 px-2 text-xl font-normal  rounded-[26px] text-[#8695A4] ">${works.short_description}</span>
      </div>
      <div>
        <p class="font-normal leading-6">${works.description}</p>
      </div>
    </div>
    </div>
    </div>
      `
    };
    return result;
  };
  function render(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = content;
    };
  };
  render('work',listWork(work));

const menu = document.getElementById('menu');
const navmenu = document.getElementById('navmenu');

navmenu.addEventListener('click', function() {
  menu.classList.toggle("hidden");
});
