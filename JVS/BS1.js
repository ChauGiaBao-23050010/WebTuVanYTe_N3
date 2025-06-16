// JVS/BS1.js
document.addEventListener('DOMContentLoaded', () => {
    // --- I18N OBJECT CHO BS1.HTML ---
    const i18n = {
        en: {
            pageTitleBS1: "Doctor Tam's Profile", // Title trang
            settingsAriaLabel: "Settings",
            settingsChangeTheme: "Toggle Theme",
            settingsChangeLanguage: "Switch Language",
            settingsHelp: "Help",
            // Dịch cho các ID trong BS1.html
            name: "Dr. NGUYEN VAN TAM",
            jt: "Cardiologist",
            bookAppointmentButton: "Book Appointment", // Nút đặt lịch
            gt: "About Me",
            gt1: "A dedicated cardiologist with over 15 years of experience in heart health care and patient-centered treatment.",
            gt2: "Specialized in diagnosing and treating cardiovascular diseases with a commitment to modern and ethical medicine.",
            gt3: "Trusted by thousands of patients, Dr. Tam believes in compassion, precision, and continuous medical advancement.",
            kn: "Skills & Expertise",
            kn1: "Experienced in advanced cardiovascular care, diagnostics, and personalized treatment plans.",
            kn2: [
              "Echocardiography & Electrocardiogram (ECG) – Accurate heart diagnostics",
              "Hypertension & Heart Failure Management – Long-term care for chronic conditions",
              "Interventional Procedures – Minimally invasive cardiac treatments",
            ],
            kng: "Professional Experience",
            kng1: "An expert in cardiology, with a track record of improving patient outcomes through evidence-based practices.",
            kng2: "Senior Cardiologist at Bình Dương General Hospital, managing outpatient and inpatient cardiovascular care.",
            kng3: "Led multiple health education campaigns and trained medical staff in modern treatment protocols.",
            da: "Achievements & Contributions",
            da1: "Actively involved in community health initiatives and professional medical training.",
            da2: "Organized free heart screening events, benefiting over 5,000 patients in rural areas.",
            da3: "Published research on hypertension treatment strategies in national medical journals.",
            backButtonText: "Back"
        },
        vi: {
            pageTitleBS1: "Thông Tin BS. Nguyễn Văn Tâm",
            settingsAriaLabel: "Cài đặt",
            settingsChangeTheme: "Đổi Chế độ",
            settingsChangeLanguage: "Đổi Ngôn ngữ",
            settingsHelp: "Trợ giúp",
            name: "BS. NGUYỄN VĂN TÂM",
            jt: "Bác Sĩ Chuyên Khoa Tim Mạch",
            bookAppointmentButton: "Đặt lịch",
            gt: "Giới Thiệu Bản Thân",
            gt1: "Bác sĩ chuyên khoa Tim Mạch với hơn 15 năm kinh nghiệm, tận tâm chăm sóc sức khỏe tim mạch cho cộng đồng.",
            gt2: "Chuyên điều trị các bệnh lý về tim mạch, luôn đặt y đức và sự chính xác lên hàng đầu trong khám chữa bệnh.",
            gt3: "Được hàng ngàn bệnh nhân tin tưởng, bác sĩ Tâm luôn nỗ lực cập nhật kiến thức và công nghệ y khoa tiên tiến.",
            kn: "Kỹ Năng & Chuyên Môn",
            kn1: "Dày dạn kinh nghiệm trong chẩn đoán, điều trị và tư vấn bệnh lý tim mạch.",
            kn2: [
              "Siêu âm tim và Điện tâm đồ – Chẩn đoán chính xác tình trạng tim",
              "Quản lý Tăng huyết áp & Suy tim – Điều trị hiệu quả lâu dài",
              "Thủ thuật can thiệp – Điều trị tim mạch ít xâm lấn",
            ],
            kng: "Kinh Nghiệm Làm Việc",
            kng1: "Chuyên gia tim mạch với nhiều năm công tác tại các bệnh viện lớn và tham gia các chương trình y tế cộng đồng.",
            kng2: "Bác sĩ chính tại Bệnh viện Đa Khoa Bình Dương, phụ trách khám và điều trị bệnh nhân tim mạch nội trú và ngoại trú.",
            kng3: "Tổ chức các buổi truyền thông sức khỏe, hướng dẫn đội ngũ y bác sĩ về các phương pháp điều trị mới.",
            da: "Thành Tựu & Đóng Góp",
            da1: "Tích cực tham gia các hoạt động cộng đồng và công tác đào tạo y tế.",
            da2: "Tổ chức chương trình khám tim miễn phí, hỗ trợ hơn 5.000 bệnh nhân tại các vùng nông thôn.",
            da3: "Công bố nhiều bài nghiên cứu về phương pháp điều trị tăng huyết áp trên các tạp chí y học trong nước.",
            backButtonText: "Quay lại"
        }
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