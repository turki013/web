document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // فحص بيانات الفورم (بشكل مبسط)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
  
    if (!name || !email || !message) {
      alert('عبي كل الحقول يا حبيبنا');
      return;
    }
  
    alert('تم الإرسال بنجاح!');
    form.reset();
  });
  
  // ممكن تضيف مودال أو لايت بوكس لمشاريعك
  // ... إلخ
  