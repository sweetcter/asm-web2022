const user = [
  {
    id: 1,
    name: 'Hi, I am John,',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    age: '',
    job: 'Creative Technologist',
    address: '',
    image: './src/img/Ellipse 1.png',

  },

];
const post = [
  {
    id: 1,
    title: 'Making a design system from scratch',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    date: '12 Feb 2020',
    short_description: 'Design, Pattern',
  },
  {
    id: 2,
    title: 'Creating pixel perfect icons in Figma',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    date: '12 Feb 2020',
    short_description: 'Figma, Icon Design',
  },
];
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
];
function listUser(user) {
  if (!Array.isArray(user) || user.length == 0) return false

  let result = '';
  for (let i = 0; i < user.length; i++) {
    const users = user[i];
    result += `<div class="user__info basis-3/6">
      <h2 class="font-bold text-[44px] text-[#21243D]">${users.name}</h2>
      <h2 class="font-bold text-[44px] text-[#21243D]">${users.job}</h2>
      <p class="font-normal text-base text-[#21243D] leading-6 my-8">${users.description}</p>
      <button class="border font-normal text-[20px] text-white rounded px-4 py-2 mb-8 bg-[#FF6464] leading-[29px]">Download Resume</button>
      </div>
      <div class="user__img flex justify-end">
     <img src="${users.image}" alt="" class="w-[243px] h-[243px]">
      </div>`
  }
  return result;
};
function listPost(post) {
  if (!Array.isArray(post) || post.length == 0) return false
  let result = '';
  for (let i = 0; i < post.length; i++) {
    const posts = post[i];
    result += `<div class="basis-3/6 bg-white my-6 mx-2">
         <h3 class="font-bold text-[32px] leading-[38px mx-6">${posts.title}</h3>
         <span class="mx-6 my-6 inline-block text-lg font-normal relative after:content-[''] after:border-solid after:w-[1px] after:h-[24px] 
        after:bg-black after:block after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-25px]  ">${posts.date}</span>
         <span class="mx-6 my-6 inline-block text-lg font-normal">${posts.short_description}</span>
         <p class="mx-6 font-normal text-base mb-8 text-left">${posts.description}</p>
         </div>`
  }
  return result;
}
  function listWork (work) {
    if(!Array.isArray(work) || work.length==0) return false
    let result='';
    for(let i =0;i<work.length;i++) {
      const works = work[i];
      result+= `
      <div class=" border-b border-[#E0E0E0]">
      <div class="flex mb-4 py-4 mt-4 ">
      <a href="#" class="mr-4"><img src="${works.image}" alt="" ></a>
      <div class="">
      <div>
        <h3 class="font-bold text-3xl"><a href="./work-two.html?id=${works.id}" >${works.name}</a></h3>
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
render('user', listUser(user));
render('post', listPost(post));
render('work', listWork(work));

