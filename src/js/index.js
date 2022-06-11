const user = {
  name: 'Hi, I am John,',
  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  job: 'Creative Technologist',
  image: 'https://res.cloudinary.com/dat-nguyen/image/upload/v1654915203/img/Ellipse_1_zpaddk.png'
}
const post = [
  {
    id: 4,
    title: 'Making a design system from scratch',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    date: '12 Feb 2020',
    short_description: 'Design, Pattern',
  },
  {
    id: 5,
    title: 'Creating pixel perfect icons in Figma',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    date: '12 Feb 2020',
    short_description: 'Figma, Icon Design',
  },
];
const work = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dat-nguyen/image/upload/v1654915203/img/Rectangle_30_nhypnv.jpg',
    name: 'Designing Dashboards',
    date: '2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    short_description: 'Dashboard',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dat-nguyen/image/upload/v1654915203/img/Rectangle_32_alrsrm.jpg',
    name: 'Vibrant Portraits of 2020',
    date: '2018',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    short_description: 'Illustration',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dat-nguyen/image/upload/v1654915204/img/Rectangle_34_sv9cth.jpg',
    name: '36 Days of Malayalam type',
    date: '2018',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    short_description: 'Typography',
  },
];
function users(user) {
  let result = `<div class="user__info md:basis-3/6">
      <h2 class="font-bold text-[44px] text-[#21243D]  text-center md:text-left md:m-0 ">${user.name}</h2>
      <h2 class="font-bold text-[44px] text-[#21243D] text-center md:text-left">${user.job}</h2>
      <p class="font-normal text-base text-[#21243D] leading-6 my-8 text-center md:text-left">${user.description}</p>
      <div class="justify-center flex md:inline-block">
      <button class="border font-normal text-[20px] text-white rounded px-4 py-2 mb-8 bg-[#FF6464] leading-[29px]  md:ml-0">Download Resume</button>
      </div>
      </div>
      <div class="user__img flex justify-center">
     <img src="${user.image}" alt="" class="w-[243px] h-[243px]">
      </div>`

  return result;

};

function listPost(post) {
  if (!Array.isArray(post) || post.length == 0) return false
  let result = '';
  for (let i = 0; i < post.length; i++) {
    const posts = post[i];
    result += `<div class="basis-3/6 bg-white my-6 mx-2 py-8">
         <h3 class="font-bold text-[22px] md:text-[32px] leading:[30px] md:leading-[38px] mx-6"><a href="#">${posts.title}</a></h3>
         <span class="mx-4 md:mx-5 my-5 inline-block  text-base md:text-lg font-normal relative after:content-[''] after:border-solid after:w-[1px] after:h-[24px] 
        after:bg-black after:block after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-19px] md:after:right-[-25px]  ">${posts.date}</span>
         <span class="mx-4 md:mx-5 my-5 inline-block text-base md:text-lg font-normal">${posts.short_description}</span>
         <p class="mx-6 font-normal text-base leading-[23.5px]  text-left">${posts.description}</p>
         </div>`
  };
  return result;
};
function listWork(work) {
  if (!Array.isArray(work) || work.length == 0) return false
  let result = '';
  for (let i = 0; i < work.length; i++) {
    const works = work[i];
    result += `
      <div class=" border-b border-[#E0E0E0]">
      <div class="md:flex  mb-4 py-4 mt-4 items-center ">
      <img src="${works.image}" alt="" class="mr-4 w-full md:w-[248px]" >
      <div class="">
      <div>
        <h3 class="font-bold text-3xl my-2"><a href="./work-two.html?id=${works.id}">${works.name}</a></h3>
      </div>
      <div class="my-6">
        <span class="inline-block mx-1 px-4 text-lg font-black  rounded-[26px] text-white bg-[#142850] ">${works.date}</span>
        <span class="inline-block mx-1 px-4 text-xl font-normal  rounded-[26px] text-[#8695A4] ">${works.short_description}</span>
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
render('user', users(user));
render('post', listPost(post));
render('work', listWork(work));

const menu = document.getElementById('menu');
const navmenu = document.getElementById('navmenu');

navmenu.addEventListener('click', function () {
  menu.classList.toggle("hidden");
});

