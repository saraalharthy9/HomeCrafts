document.addEventListener('DOMContentLoaded', () =>
    {
        const sections = document.querySelectorAll('section');
        const navbar = document.getElementById('navbar');

    //  navigation menu 
    sections.forEach(section =>
        {
            const li = document.createElement('li');
            li.textContent = section.id.charAt(0).toUpperCase() + section.id.slice(1);
            li.addEventListener('click', () =>
                {
                    section.scrollIntoView({ behavior: 'smooth' });
                });
                navbar.appendChild(li);
        });

    // scroll event listener
    window.addEventListener('scroll', () =>
        {
            let current = '';
            sections.forEach(section =>
                {
                    const sectionTop = section.offsetTop - 60;
                    const sectionHeight = section.clientHeight;
                    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight)
                        {
                            current = section.getAttribute('id');
                        }
                });
                
                const navItems = navbar.querySelectorAll('li');
                navItems.forEach(item =>
                    {
                        item.classList.remove('active');
                        if (item.textContent.toLowerCase() === current)
                            {
                                item.classList.add('active');
                            }
                    });
        });
    });
