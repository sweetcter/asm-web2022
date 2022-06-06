const blog = [
    {

        title: 'UI Interactions of the week',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        date: '12 Feb 2019',
        short_description: 'Express, Handlebars',
    },
    {

        title: 'UI Interactions of the week',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        date: '12 Feb 2019',
        short_description: 'Express, Handlebars',
    },
    {

        title: 'UI Interactions of the week',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        date: '12 Feb 2019',
        short_description: 'Express, Handlebars',
    },
    {

        title: 'UI Interactions of the week',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        date: '12 Feb 2019',
        short_description: 'Express, Handlebars',
    },
];
    function listBlog (blog) {
        if(!Array.isArray(blog) || blog.length==0) return false
            let result='';
        for(let i =0; i<blog.length;i++) {
            const blogs = blog[i];
            result += `
            <div class=" border-b border-[#E0E0E0] flex mt-8">
            <div class=" bg-white ">
         <h3 class="font-bold text-[32px] leading-[38px ">${blogs.title}</h3>
         <span class=" my-2 mr-2 inline-block text-lg font-normal relative after:content-[''] after:border-solid after:w-[1px] after:h-[24px] 
        after:bg-black after:block after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[-18px] md:after:right-[-25px]  ">${blogs.date}</span>
         <span class=" my-2 mx-5 md:mx-9 inline-block  text-lg font-normal text-[#8695A4]">${blogs.short_description}</span>
         <p class=" font-normal text-base mb-8 text-left">${blogs.description}</p>
         </div>
         </div>`
        }
        return result;
     }
     function render (elementId, content ) {
         const element = document.getElementById(elementId);
         if(element){
             element.innerHTML=content;
         }
     }
     render('blog', listBlog(blog));
    