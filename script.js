<script>
    // 1. ለስላሳ ሽግግር (Smooth Scrolling)
    // በማውጫው (Menu) ላይ ያሉትን ሊንኮች ስትጫን ገጹ በዝግታ እንዲንሸራተት ያደርጋል
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // 2. በንክኪ የሚገለጡ ክፍሎች (Scroll Reveal Animation)
    // ተጠቃሚው ገጹን ወደ ታች ሲያወርድ ክፍሎቹ በውብ ሁኔታ እንዲገለጡ ያደርጋል
    const observerOptions = {
        threshold: 0.15 // ክፍሉ 15% ሲታይ አኒሜሽኑ ይጀምራል
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // አንዴ ከተገለጠ በኋላ ደጋግሞ እንዳይሰራ
            }
        });
    }, observerOptions);

    // አኒሜሽን እንዲኖራቸው የምንፈልጋቸውን ክፍሎች መምረጥ
    const animatedElements = document.querySelectorAll('.gov-card, .dept-box, .task-item, .book-card, .statement-box');
    
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        revealOnScroll.observe(el);
    });

    // 3. የማውጫው ቀለም መቀየር (Sticky Header Dynamic Background)
    // ገጹን ወደ ታች ስታወርድ የላይኛው ማውጫ (Header) ትንሽ ጠቆር እንዲል ያደርገዋል
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = "rgba(15, 0, 30, 0.98)"; // ወደ ሐምራዊ ያደላ ጠቆር ያለ ቀለም
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
        } else {
            header.style.background = "rgba(26, 0, 51, 0.96)"; // የቀድሞው ቀለም
            header.style.boxShadow = "none";
        }
    });

    // 4. ቀላል የንክኪ ውጤት (Hover Effect Enhancer)
    // አዝራሮች (Buttons) ላይ ስታርፍ ትንሽ የብርሃን ንዝረት እንዲሰማቸው ያደርጋል
    const buttons = document.querySelectorAll('.btn, .btn-sm');
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.filter = "brightness(1.2)";
        });
        btn.addEventListener('mouseout', () => {
            btn.style.filter = "brightness(1)";
        });
    });
</script>