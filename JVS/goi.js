// JVS/goi.js
document.addEventListener('DOMContentLoaded', () => {

    const servicePackageData = {
        id: "goi_kham_tong_quat", // Phải khớp với serviceId trong datlich.js
        imagePath: "Hinh/goi_tongquat.jpg", // Đường dẫn ảnh đại diện cho gói
        name: {
            en: "General Health Check-up Package",
            vi: "Gói Khám Sức Khỏe Tổng Quát"
        },
        shortDescription: {
            en: "Our General Health Check-up Package offers a comprehensive examination designed for early detection of potential health risks and proactive management of your well-being. This package includes a series of vital tests and consultations to provide a holistic view of your current health status.",
            vi: "Gói Khám Sức Khỏe Tổng Quát của chúng tôi cung cấp một quy trình kiểm tra toàn diện, được thiết kế để phát hiện sớm các rủi ro sức khỏe tiềm ẩn và chủ động quản lý sức khỏe của bạn. Gói này bao gồm một loạt các xét nghiệm và tư vấn quan trọng nhằm mang lại cái nhìn tổng thể về tình trạng sức khỏe hiện tại của bạn."
        },
        details: {
            title: { en: "Package Details", vi: "Chi Tiết Gói" },
            intro: { en: "Detailed information about the examination items in the package.", vi: "Thông tin chi tiết về các hạng mục khám trong gói." },
            items: {
                en: [
                    "Complete physical examination",
                    "Blood tests (CBC, Glucose, Lipid Profile, Liver & Kidney function)",
                    "Urine analysis",
                    "Chest X-ray",
                    "Abdominal ultrasound",
                    "Electrocardiogram (ECG)",
                    "Consultation with a specialist"
                ],
                vi: [
                    "Khám lâm sàng tổng quát",
                    "Xét nghiệm máu (Công thức máu, Đường huyết, Mỡ máu, Chức năng gan & thận)",
                    "Phân tích nước tiểu",
                    "Chụp X-quang ngực",
                    "Siêu âm ổ bụng tổng quát",
                    "Điện tâm đồ (ECG)",
                    "Tư vấn với bác sĩ chuyên khoa"
                ]
            }
        },
        benefits: {
            title: { en: "Benefits of the Package", vi: "Lợi Ích Gói Khám" },
            intro: { en: "The benefits you receive when choosing this service package.", vi: "Những lợi ích bạn nhận được khi chọn gói dịch vụ này." },
            items: {
                en: [
                    "Early detection of potential health problems.",
                    "Comprehensive assessment of overall health.",
                    "Personalized health advice and recommendations.",
                    "Peace of mind regarding your health status."
                ],
                vi: [
                    "Phát hiện sớm các vấn đề sức khỏe tiềm ẩn.",
                    "Đánh giá toàn diện tình trạng sức khỏe tổng thể.",
                    "Nhận lời khuyên và khuyến nghị sức khỏe cá nhân hóa.",
                    "An tâm về tình trạng sức khỏe của bạn."
                ]
            }
        },
        audience: {
            title: { en: "Suitable Audience", vi: "Đối Tượng Phù Hợp" },
            intro: { en: "Who is this service package suitable for?", vi: "Gói dịch vụ này phù hợp với những ai?" },
            content: {
                en: "Individuals who want a comprehensive health check-up annually, people with a family history of chronic diseases, or those who want to proactively manage their health.",
                vi: "Cá nhân muốn kiểm tra sức khỏe tổng quát định kỳ hàng năm, người có tiền sử gia đình mắc các bệnh mãn tính, hoặc những người muốn chủ động quản lý sức khỏe của mình."
            }
        },
        price: {
            title: { en: "Reference Cost", vi: "Chi Phí Tham Khảo" },
            intro: { en: "Information about the cost of the service package.", vi: "Thông tin về chi phí của gói dịch vụ." },
            content: {
                en: "Please contact us for the most up-to-date pricing information.",
                vi: "Vui lòng liên hệ với chúng tôi để có thông tin giá cập nhật nhất."
            },
            note: {
                en: "Note: Price may vary depending on specific additional tests if required.",
                vi: "Lưu ý: Giá có thể thay đổi tùy thuộc vào các xét nghiệm bổ sung cụ thể nếu được yêu cầu."
            }
        }
    };

    // --- I18N OBJECT (Cho các phần tử cố định và settings) ---
    const i18n = {
        en: {
            pageTitleServicePackage: servicePackageData.name.en + " Details",
            settingsAriaLabel: "Settings",
            settingsChangeTheme: "Toggle Theme",
            settingsChangeLanguage: "Switch Language",
            settingsHelp: "Help",
            bookServiceButton: "Book This Package",
            backButtonText: "Back",
            // Thêm các key cho title, intro của các section từ servicePackageData
            serviceName: servicePackageData.name.en,
            serviceShortDescription: servicePackageData.shortDescription.en,
            packageDetailsTitle: servicePackageData.details.title.en,
            packageDetailsIntro: servicePackageData.details.intro.en,
            packageBenefitsTitle: servicePackageData.benefits.title.en,
            packageBenefitsIntro: servicePackageData.benefits.intro.en,
            packageAudienceTitle: servicePackageData.audience.title.en,
            packageAudienceIntro: servicePackageData.audience.intro.en,
            packagePriceTitle: servicePackageData.price.title.en,
            packagePriceIntro: servicePackageData.price.intro.en,
            // Các key cho nội dung động
            packageItems: servicePackageData.details.items.en,
            benefitsItems: servicePackageData.benefits.items.en,
            audienceContent: servicePackageData.audience.content.en,
            priceContent: servicePackageData.price.content.en,
            priceNote: servicePackageData.price.note.en,
        },
        vi: {
            pageTitleServicePackage: servicePackageData.name.vi,
            settingsAriaLabel: "Cài đặt",
            settingsChangeTheme: "Đổi Chế độ",
            settingsChangeLanguage: "Đổi Ngôn ngữ",
            settingsHelp: "Trợ giúp",
            bookServiceButton: "Đặt Gói Này",
            backButtonText: "Quay lại",
            serviceName: servicePackageData.name.vi,
            serviceShortDescription: servicePackageData.shortDescription.vi,
            packageDetailsTitle: servicePackageData.details.title.vi,
            packageDetailsIntro: servicePackageData.details.intro.vi,
            packageBenefitsTitle: servicePackageData.benefits.title.vi,
            packageBenefitsIntro: servicePackageData.benefits.intro.vi,
            packageAudienceTitle: servicePackageData.audience.title.vi,
            packageAudienceIntro: servicePackageData.audience.intro.vi,
            packagePriceTitle: servicePackageData.price.title.vi,
            packagePriceIntro: servicePackageData.price.intro.vi,
            packageItems: servicePackageData.details.items.vi,
            benefitsItems: servicePackageData.benefits.items.vi,
            audienceContent: servicePackageData.audience.content.vi,
            priceContent: servicePackageData.price.content.vi,
            priceNote: servicePackageData.price.note.vi,
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
    const serviceImageEl = document.getElementById('serviceImage');

    // --- LOAD SERVICE IMAGE ---
    if (serviceImageEl && servicePackageData.imagePath) {
        serviceImageEl.src = servicePackageData.imagePath;
        serviceImageEl.alt = currentLang === 'vi' ? servicePackageData.name.vi : servicePackageData.name.en;
    }

    // --- LANGUAGE FUNCTIONALITY ---
    function applyTranslations(lang) {
        const texts = i18n[lang];
        if (!texts) return;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (texts[key]) {
                if (key === 'packageItems' || key === 'benefitsItems') { // Xử lý danh sách ul
                    if(Array.isArray(texts[key])) {
                        element.innerHTML = texts[key].map(item => `<li>${item}</li>`).join('');
                    }
                } else {
                    element.textContent = texts[key];
                }
            }
        });
        // ... (phần còn lại của applyTranslations cho aria, title giữ nguyên như BS1.js)
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
         if (serviceImageEl) { // Cập nhật alt ảnh khi đổi ngôn ngữ
            serviceImageEl.alt = texts.serviceName || servicePackageData.name[lang] || "Service Package Image";
        }
    }

    function changeLanguage(lang) {
        currentLang = lang;
        // Cập nhật lại đối tượng i18n dựa trên servicePackageData và lang mới
        // Điều này cần thiết nếu cấu trúc dữ liệu gói phức tạp và được nhúng vào i18n
        // (Như cách làm ở trên, i18n đã được xây dựng với dữ liệu gói rồi)
        applyTranslations(currentLang);
        localStorage.setItem('lang', currentLang);
        updateSettingsThemeButtonText();
    }

    // --- THEME FUNCTIONALITY (Giống BS1.js) ---
    function applyTheme(theme) {
        currentTheme = theme;
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        // Cập nhật class cho các thành phần cụ thể nếu CSS không dựa hoàn toàn vào body.dark-mode
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
            const key = themeButtonTextSpan.getAttribute('data-i18n');
            if (key && i18n[currentLang] && i18n[currentLang][key]) { // Đảm bảo currentLang đã được xác định
                 themeButtonTextSpan.textContent = i18n[currentLang][key];
            }
        }
    }


    // --- SETTINGS MENU (Giống BS1.js) ---
    if (settingsButton && settingsOptions && settingsContainer) { /* ... */ }
    if (toggleThemeOptionButton) { /* ... */ }
    if (toggleLanguageOptionButton) { /* ... */ }
    // Sao chép toàn bộ logic của Settings Menu từ JVS/BS1.js vào đây

    // --- BACK BUTTON (Giống BS1.js) ---
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Hoặc trang danh sách các gói nếu có
      });
    }

    // --- TOGGLE SECTION (Giống BS1.js) ---
    window.toggleSection = function(id) { /* ... */ }
    // Sao chép toàn bộ logic của toggleSection từ JVS/BS1.js vào đây

    // --- INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS (Giống BS1.js) ---
    const fadeEls = document.querySelectorAll('.fade-in');
    // ... (toàn bộ logic IntersectionObserver)

    // --- INITIAL LOAD ---
    applyTheme(currentTheme);
    changeLanguage(currentLang); // Sẽ gọi applyTranslations và cập nhật ảnh alt

    // SAO CHÉP PHẦN LOGIC CHUNG TỪ BS1.JS VÀO ĐÂY
    // (Settings Menu, Theme, Language, Back Button, Toggle Section, Intersection Observer)
    // Đảm bảo rằng các hàm này được định nghĩa và gọi đúng cách.
    // Ví dụ:
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
    window.toggleSection = function(id) {
      var sectionDetail = document.getElementById(id);
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
        setTimeout(function () { sectionDetail.classList.add("show");}, 10);
      }
    };
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
});