const testimonialData = [
    {
        author: "John",
        quote: "Sangat memuaskan",
        image: "/images/rating5.jpg",
        rating: 5,

    },
    {
        author: "Brian",
        quote: "Semua fitur befungsi dengan baik!",
        image: "/images/rating4.jpg",
        rating: 4,
    },
    {
        author: "Julia",
        quote: "Masih ada Bug yang belum selesai",
        image: "/images/rating3.jpg",
        rating: 3,
    },
    
];

function allTestimonial() {
    let testimonialHTML = "";
  
    testimonialData.forEach(function (item) {
      testimonialHTML += `
              <div class="testimonial">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  
  allTestimonial();
  
  // filtered testimonial
  function filterTestimonial(rating) {
    let testimonialHTML = "";
  
    const testimonialFiltered = testimonialData.filter(function (item) {
      return item.rating === rating;
    });
  
    //   console.log(testimonialFiltered);
  
    if (testimonialFiltered.length === 0) {
      testimonialHTML += `<h1> Data not found! </h1>`;
    } else {
      testimonialFiltered.forEach(function (item) {
        testimonialHTML += `
              <div class="testimonial">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
      });
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }