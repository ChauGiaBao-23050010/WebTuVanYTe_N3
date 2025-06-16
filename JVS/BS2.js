// JVS/BS2.js
document.addEventListener('DOMContentLoaded', () => {
    // --- I18N OBJECT CHO BS2.HTML ---
const i18n = {
  en: {
    name: "Dr. TRAN THI XUAN",
    jt: "Pediatric Specialist",
    gt: "About Me",
    gt1: "A trusted pediatrician devoted to comprehensive child health care, beloved by parents and young patients alike.",
    gt2: "Specialized in diagnosing and treating childhood illnesses with a gentle, modern, and parent-focused approach.",
    gt3: "Dr. Xuan is committed to ensuring every child grows up healthy and happy through expert and compassionate care.",
    kn: "Skills & Expertise",
    kn1: "Skilled in pediatric diagnosis, child development monitoring, and preventive health strategies.",
    kn2: [
      "General Pediatrics – Diagnosis and treatment of common childhood illnesses",
      "Vaccination Programs – Ensuring safe and timely immunization",
      "Nutrition & Growth – Guidance for proper diet and development",
      "Parent Counseling – Supporting families in child care and wellness",
      "Child Psychology – Early detection and support for emotional well-being",
      "Community Health – Promoting public awareness on children’s health",
    ],
    kng: "Professional Experience",
    kng1: "Over a decade of experience in pediatric care with a focus on holistic child development.",
    kng2: "Senior Pediatrician at Bình Dương Children's Hospital, managing both outpatient and inpatient care.",
    kng3: "Led parenting workshops and collaborated with schools on child health education programs.",
    da: "Achievements & Contributions",
    da1: "Engaged in numerous child health initiatives and early intervention programs.",
    da2: "Organized free pediatric check-ups benefiting thousands of children in underprivileged areas.",
    da3: "Published articles on childhood nutrition and preventive care in national pediatric journals.",
  },
  vi: {
    name: "BS. TRẦN THỊ XUÂN",
    jt: "Bác Sĩ Chuyên Khoa Nhi",
    gt: "Giới Thiệu Bản Thân",
    gt1: "Bác sĩ chuyên khoa Nhi tận tâm, được các bậc phụ huynh tin tưởng trong việc chăm sóc sức khỏe toàn diện cho trẻ em.",
    gt2: "Chuyên chẩn đoán và điều trị các bệnh lý nhi khoa với phương pháp hiện đại, nhẹ nhàng và gần gũi với trẻ nhỏ.",
    gt3: "Luôn đặt sự phát triển khỏe mạnh và hạnh phúc của trẻ lên hàng đầu, bác sĩ Xuân mang đến sự an tâm cho mọi gia đình.",
    kn: "Kỹ Năng & Chuyên Môn",
    kn1: "Giàu kinh nghiệm trong chăm sóc sức khỏe nhi khoa, theo dõi phát triển và tư vấn dinh dưỡng cho trẻ.",
    kn2: [
      "Nhi khoa tổng quát – Khám và điều trị bệnh thông thường ở trẻ",
      "Chương trình tiêm chủng – Đảm bảo an toàn và đúng lịch tiêm",
      "Dinh dưỡng & phát triển – Hướng dẫn ăn uống và theo dõi tăng trưởng",
      "Tư vấn phụ huynh – Hỗ trợ gia đình trong việc chăm sóc trẻ",
      "Tâm lý trẻ em – Phát hiện và hỗ trợ sớm các vấn đề tâm lý",
      "Y tế cộng đồng – Nâng cao nhận thức chăm sóc sức khỏe trẻ em",
    ],
    kng: "Kinh Nghiệm Làm Việc",
    kng1: "Hơn 10 năm kinh nghiệm trong lĩnh vực nhi khoa, đồng hành cùng sự phát triển toàn diện của trẻ.",
    kng2: "Bác sĩ chính tại Bệnh viện Nhi Bình Dương, phụ trách khám và điều trị bệnh nhân nhi nội trú và ngoại trú.",
    kng3: "Tổ chức các buổi chia sẻ kiến thức nuôi dạy trẻ và hợp tác với trường học trong công tác giáo dục sức khỏe.",
    da: "Thành Tựu & Đóng Góp",
    da1: "Tham gia tích cực vào các chương trình chăm sóc sức khỏe trẻ em và can thiệp sớm.",
    da2: "Tổ chức các buổi khám nhi miễn phí, hỗ trợ hàng ngàn trẻ em tại các khu vực khó khăn.",
    da3: "Công bố các bài viết về dinh dưỡng và chăm sóc trẻ trên các tạp chí y học nhi khoa trong nước.",
  },
};

    let currentLang = localStorage.getItem('lang') || 'vi';
    let currentTheme = localStorage.getItem('theme') || 'dark';

    const settingsContainer = document.getElementById('settingsContainer');
    const settingsButton = document.getElementById('settingsButton');
    const settingsOptions = document.getElementById('settingsOptions');
    const toggleThemeOptionButton = document.getElementById('toggleThemeOption');
    const settingsThemeIcon = document.getElementById('settingsThemeIcon');
    const toggleLanguageOptionButton = document.getElementById('toggleLanguageOption');
    const backButton = document.getElementById('backButton');

    // --- LANGUAGE FUNCTIONALITY ---
    function applyTranslations(lang) {
        const texts = i18n[lang];
        if (!texts) return;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (texts[key]) {
                if (element.id === 'kn2' && Array.isArray(texts[key])) { // Xử lý danh sách kỹ năng
                    element.innerHTML = texts[key].map(item => `<li>${item}</li>`).join('');
                } else {
                    element.textContent = texts[key];
                }
            }
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
             if (texts[key]) element.setAttribute('aria-label', texts[key]);
        });
        const pageTitleElement = document.querySelector('title');
        const pageTitleKey = pageTitleElement ? pageTitleElement.getAttribute('data-i18n') : null;
        if (pageTitleKey && texts[pageTitleKey]) {
            document.title = texts[pageTitleKey];
        }
        document.documentElement.lang = lang;
    }

    function changeLanguage(lang) {
        currentLang = lang;
        applyTranslations(currentLang);
        localStorage.setItem('lang', currentLang);
        updateSettingsThemeButtonText(); // Cập nhật text nút theme trong settings
    }

    // --- THEME FUNCTIONALITY ---
    function applyTheme(theme) {
        currentTheme = theme;
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        // Cập nhật class cho các thành phần cụ thể nếu cần (ví dụ: .left-column, .right-column, .section-link)
        // Điều này có thể không cần thiết nếu bạn style dark-mode dựa trên body.dark-mode ...
        document.querySelector(".left-column")?.classList.toggle("dark-mode", currentTheme === "dark");
        document.querySelector(".right-column")?.classList.toggle("dark-mode", currentTheme === "dark");
        document.querySelectorAll(".section-link").forEach(link => link.classList.toggle("dark-mode", currentTheme === "dark"));


        if (settingsThemeIcon) {
            settingsThemeIcon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
        localStorage.setItem('theme', currentTheme);
        updateSettingsThemeButtonText();
    }
    
    function updateSettingsThemeButtonText() {
        const themeButtonTextSpan = toggleThemeOptionButton?.querySelector('span');
        if(themeButtonTextSpan) {
            const key = themeButtonTextSpan.getAttribute('data-i18n'); // 'settingsChangeTheme'
            if (key && i18n[currentLang] && i18n[currentLang][key]) {
                 themeButtonTextSpan.textContent = i18n[currentLang][key];
            }
        }
    }

    // --- SETTINGS MENU ---
    if (settingsButton && settingsOptions && settingsContainer) {
        settingsButton.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsContainer.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (settingsContainer.classList.contains('active') && !settingsContainer.contains(e.target)) {
                settingsContainer.classList.remove('active');
            }
        });
    }
    if (toggleThemeOptionButton) {
        toggleThemeOptionButton.addEventListener('click', () => {
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
             if(settingsContainer) settingsContainer.classList.remove('active');
        });
    }
    if (toggleLanguageOptionButton) {
        toggleLanguageOptionButton.addEventListener('click', () => {
            changeLanguage(currentLang === 'vi' ? 'en' : 'vi');
            if(settingsContainer) settingsContainer.classList.remove('active');
        });
    }

    // --- BACK BUTTON ---
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Luôn quay về index.html
      });
    }

    // --- TOGGLE SECTION (Accordion functionality) ---
    window.toggleSection = function(id) { // Gán vào window để HTML inline onclick có thể gọi
      var sectionDetail = document.getElementById(id); // Đây là div.detail
      if (!sectionDetail) return;

      document.querySelectorAll(".detail").forEach(function (detail) {
        if (detail.id !== id && detail.style.display === "block") {
          detail.style.display = "none";
          detail.classList.remove("show");
        }
      });

      if (sectionDetail.style.display === "block") {
        sectionDetail.style.display = "none";
        sectionDetail.classList.remove("show");
      } else {
        sectionDetail.style.display = "block";
        setTimeout(function () {
          sectionDetail.classList.add("show");
        }, 10);
      }
    }

    // --- INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ---
    const fadeEls = document.querySelectorAll('.fade-in');
    const animations = ['fadeInMoveUp', 'slideInLeft', 'slideInRight', 'scaleUp', 'rotateIn'];
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const anim = animations[Math.floor(Math.random() * animations.length)];
            entry.target.style.animationName = anim;
            observerInstance.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      fadeEls.forEach(el => observer.observe(el));
    }

    // --- INITIAL LOAD ---
    applyTheme(currentTheme);
    changeLanguage(currentLang); // Sẽ gọi applyTranslations
});