// const sectionNewsletter = document.getElementById('section-newsletter');
// const sectionBtn = document.getElementById('btn-newsletter');

// sectionBtn.addEventListener('click', function(){
//     console.log('works');
//     fetch('newsletter.html')
//     .then(response => response.text())
//     .then(data => {
//         sectionNewsletter.insertAdjacentHTML('beforeend', data);

//     })
//     .catch(error => console.error('Download error ', error));
// });


// The error message indicates that the fetch request has been blocked due to the Cross-Origin Resource Sharing (CORS) policy. CORS is a security feature implemented by web browsers to prevent web pages from making requests to a different origin (domain, protocol, or port) than the one from which it was served.

// In your case, the origin of the request is 'null', which typically occurs when loading files directly from the local file system (file:///). Browsers apply strict security policies for file:// origins to prevent access to local resources from web pages served from different origins. This is done to mitigate security risks associated with accessing local files.

// To resolve this issue, you need to serve your HTML and JavaScript files from a local web server instead of directly from the file system. Setting up a local web server is relatively straightforward and can be done using tools like Node.js with Express, Python with the http.server module, or dedicated web server applications like Apache or Nginx.

// Once you have a local web server set up, you can access your files via http://localhost (or another local address you've configured) instead of file:///. This will ensure that your files are served from a proper origin, allowing fetch requests to succeed without CORS errors.

const sectionNewsletter = document.getElementById('section-newsletter');
const sectionBtn = document.getElementById('btn-newsletter');

sectionBtn.addEventListener('click', function(){
   sectionNewsletter.style.display = 'flex';
   sectionNewsletter.scrollIntoView({ behavior: 'smooth' });
});


