const blog = [
    {

        title: 'UI Interactions of the week',
        description: 'This is my blog about technology news and games you can check it out according to the information below.',
        date: '12 Feb 2019',
        short_description: 'GTG360',
    },
    {

        title: 'UI Interactions of the week',
        description: 'This is my blog about technology news and games you can check it out according to the information below.',
        date: '12 Feb 2019',
        short_description: 'GTG360',
    },
    {

        title: 'UI Interactions of the week',
        description: 'This is my blog about technology news and games you can check it out according to the information below',
        date: '12 Feb 2019',
        short_description: 'GTG360',
    },
    {

        title: 'UI Interactions of the week',
        description: 'This is my blog about technology news and games you can check it out according to the information below',
        date: '12 Feb 2019',
        short_description: 'GTG360',
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
         <a href="http://hackerlord.id.vn/" class=" my-2 mx-5 md:mx-9 inline-block  text-lg font-normal text-[#8695A4]">${blogs.short_description}</a>
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
     const menu = document.getElementById('menu');
     const navmenu = document.getElementById('navmenu');
     
     navmenu.addEventListener('click', function() {
       menu.classList.toggle("hidden");
     });
