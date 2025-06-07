// JVS/BS3.js
document.addEventListener('DOMContentLoaded', () => {
    // --- I18N OBJECT CHO BS3.HTML ---
const i18n = {
  en: {
    name: "Dr. LE VAN LIEU",
    jt: "Endocrinologist",
    gt: "Step 1: General Checkup with Modern Equipment",
    gt1: "Includes vital signs, ultrasound, ECG, blood and urine tests.",
    gt2: "Collects baseline indicators for accurate specialist diagnosis.",
    gt3: "Supports early detection and comprehensive health overview.",
    kn: "Step 2: Cardiovascular Examination – Dr. Nguyễn Văn Tâm",
    kn1: "Analyzes ECG, blood pressure, and heart-related indicators.",
    kn2: [
      "Detects hypertension, coronary artery disease, and heart failure",
      "Provides dietary and lifestyle guidance for heart health",
      "Personalized monitoring and treatment recommendations",
      "Early prevention of cardiovascular risks",
      "In-depth consultation based on general test results",
      "Follow-up scheduling for high-risk patients",
    ],
    kng: "Step 3: Pediatric Examination – Dr. Trần Thị Xuân",
    kng1: "Comprehensive care for children’s physical and mental development.",
    kng2: "Monitors growth, nutrition, vaccines, respiratory and digestive issues.",
    kng3: "Provides parental guidance tailored to each age group.",
    da: "Step 4: Endocrine Examination – Dr. Lê Văn Liễu",
    da1: "Analyzes blood sugar and thyroid data from tests.",
    da2: "Diagnoses and treats diabetes, thyroid, and hormone disorders.",
    da3: "Offers lifestyle advice and long-term health management.",
  },
  vi: {
    name: "BS. LÊ VĂN LIỄU",
    jt: "Bác Sĩ Chuyên Khoa Nội Tiết",
    gt: "Bước 1: Khám tổng quát bằng máy móc hiện đại",
    gt1: "Bao gồm đo sinh hiệu, siêu âm, điện tim, xét nghiệm máu và nước tiểu.",
    gt2: "Thu thập các chỉ số nền để phục vụ chẩn đoán chuyên khoa chính xác.",
    gt3: "Giúp phát hiện sớm và đánh giá tổng quát tình trạng sức khỏe.",
    kn: "Bước 2: Khám Tim Mạch – BS. Nguyễn Văn Tâm",
    kn1: "Phân tích điện tim, huyết áp, các chỉ số liên quan đến tim mạch.",
    kn2: [
      "Phát hiện tăng huyết áp, bệnh mạch vành, suy tim",
      "Tư vấn chế độ ăn uống, sinh hoạt tốt cho tim",
      "Theo dõi và đề xuất phác đồ điều trị phù hợp",
      "Phòng ngừa sớm các nguy cơ tim mạch",
      "Tư vấn chuyên sâu dựa trên kết quả tổng quát",
      "Lên lịch tái khám cho trường hợp nguy cơ cao",
    ],
    kng: "Bước 3: Khám Nhi – BS. Trần Thị Xuân",
    kng1: "Chăm sóc toàn diện cho sự phát triển thể chất và tinh thần của trẻ.",
    kng2: "Theo dõi chiều cao, cân nặng, dinh dưỡng, tiêm chủng, bệnh hô hấp, tiêu hóa.",
    kng3: "Tư vấn cho phụ huynh theo từng độ tuổi của trẻ.",
    da: "Bước 4: Khám Nội Tiết – BS. Lê Văn Liễu",
    da1: "Phân tích chỉ số đường huyết, tuyến giáp từ kết quả xét nghiệm.",
    da2: "Chẩn đoán và điều trị bệnh đái tháo đường, rối loạn tuyến giáp, hormone.",
    da3: "Tư vấn điều chỉnh lối sống và hỗ trợ sức khỏe lâu dài.",
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