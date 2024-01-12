// content.js

document.addEventListener("DOMContentLoaded", function () {
    const blogPostsData = [
      {
        category: "Category",
        date: "01-01-2024",
        title: "Title",
        description: "Coming soon",
        imgSrc: "./assets/images/shape.png",
      },

      // {
      //   category: "Category 2",
      //   date: "2022-02-23",
      //   title: "Title 2",
      //   description: "Description 2",
      //   imgSrc: "./assets/images/shape.png",
      // },
      // Add more blog post data as needed
    ];
  
    const blogPostsList = document.querySelector(".blog-posts-list");
  
    function createBlogPostItem(data) {
      const blogPostItem = document.createElement("li");
      blogPostItem.classList.add("blog-post-item");
  
      blogPostItem.innerHTML = `
        <a href="#">
          <figure class="blog-banner-box">
            <img src="${data.imgSrc}" alt="${data.title}" loading="lazy">
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${data.category}</p>
              <span class="dot"></span>
              <time datetime="${data.date}">${formatDate(data.date)}</time>
            </div>
            <h3 class="h3 blog-item-title">${data.title}</h3>
            <p class="blog-text">${data.description}</p>
          </div>
        </a>
      `;
  
      return blogPostItem;
    }
  
    function renderBlogPosts() {
      blogPostsData.forEach((postData) => {
        const blogPostItem = createBlogPostItem(postData);
        blogPostsList.appendChild(blogPostItem);
      });
    }
  
    function formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }
  
    renderBlogPosts();
  });
  