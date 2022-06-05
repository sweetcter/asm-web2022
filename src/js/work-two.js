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


];
const found = work.find(function (elenment) {
  return elenment.id == id;
});
document.getElementById('work-second').innerHTML=`<div class="">
<div class=" mb-4 py-4 mt-4 ">
<h3 class="font-bold text-3xl w-3/6 text-[#21243D]"><a href="#" >${found.name}</a></h3>
<span class="inline-block mx-1 px-4 my-7 text-lg font-black  rounded-[26px] text-white bg-[#FF7C7C] ">${found.date}</span>
  <span class="inline-block mx-1 px-4 my-7 text-xl font-normal  rounded-[26px] text-[#21243D] ">${found.short_description}</span>
  <p class="font-normal leading-6 ">${found.description}</p>
  <a href="#" class="mr-4"><img src="${found.image}" alt="" class="w-full" ></a>
</div>
</div>`

const found_2 = work_second.find(function (elenment) {
  return elenment.id == id;
});
document.getElementById('work-seconds').innerHTML=` <div class="">
<a href="#" class="mr-4"><img src="${found_2.image}" alt="" class="w-full" ></a>
</div>`




const work_second = [
  {
    id: 3,
    image: './src/img/Rectangle 6.png'

  },
];
const work_3rd = [
  {
    id: 2,
    image: './src/img/Rectangle 5.png',
    name: 'Heading 1',
    date: 'Heading 2',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',

  },
];
function listWork(work) {
  if (!Array.isArray(work) || work.length == 0) return false
  let result = '';
  for (let i = 0; i < work.length; i++) {
    const works = work[i];
    result += `
      <div class="">
      <div class=" mb-4 py-4 mt-4 ">
      <h3 class="font-bold text-3xl w-3/6 text-[#21243D]"><a href="#" >${works.name}</a></h3>
      <span class="inline-block mx-1 px-4 my-7 text-lg font-black  rounded-[26px] text-white bg-[#FF7C7C] ">${found.date}</span>
        <span class="inline-block mx-1 px-4 my-7 text-xl font-normal  rounded-[26px] text-[#21243D] ">${found.short_description}</span>
        <p class="font-normal leading-6 ">${works.description}</p>
        <a href="#" class="mr-4"><img src="${works.image}" alt="" class="w-full" ></a>
      </div>
      </div>
      `
  };
  return result;
};
function listWorks(work_second) {
  if (!Array.isArray(work_second) || work_second.length == 0) return false
  let result = '';
  for (let i = 0; i < work_second.length; i++) {
    const work_seconds = work_second[i];
    result += `
      <div class="">
        <a href="#" class="mr-4"><img src="${work_seconds.image}" alt="" class="w-full" ></a>
    </div>
    
      `
  };
  return result;
};
function listWork_3rd(work_3rd) {
  if (!Array.isArray(work_3rd) || work_3rd.length == 0) return false
  let result = '';
  for (let i = 0; i < work_3rd.length; i++) {
    const works_3rd = work_3rd[i];
    result += `
      <div class="">
      <div class=" mb-4 py-4 mt-4 ">
      <h3 class=" text-3xl   font-medium text-[#21243D]"><a href="#" >${works_3rd.name}</a></h3>
      <span class="inline-block  my-7 text-2xl font-medium rounded-[26px] text-#21243D;  ">${works_3rd.date}</span>
        <p class="font-normal leading-6">${works_3rd.description}</p>
        <a href="#" class="mr-4"><img src="${works_3rd.image}" alt="" class="w-full" ></a>
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
render('work-second', listWork(work));
render('work-seconds', listWorks(work_second));
render('work-3rd', listWork_3rd(work_3rd));


