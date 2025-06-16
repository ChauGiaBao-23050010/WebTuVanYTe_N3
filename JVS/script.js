const menubarBtn = document.querySelector('.header-top i');
menubarBtn.addEventListener("click", function() {
    document.querySelector('.header-top').classList.toggle('active');

});

// Lấy nút
const scrollToTopButton = document.getElementById("scroll-to-top");

// Khi cuộn trang xuống, hiển thị nút
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Khi nhấn nút, cuộn lên đầu trang
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-effect');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

const doctors = [
    { name: "Nguyễn Văn Tâm", link: "BS1.html", image: "Hinh/bs1.png" },
    { name: "Trần Thị Xuân", link: "BS2.html", image: "Hinh/bs2.png" },
    { name: "Lê Văn Liễu", link: "BS3.html", image: "Hinh/bs3.png" },
    { name: "Gói Khám Sức Khỏe Tổng Quát", link: "goi.html", image: "Hinh/goi.jpg" },
];

function searchFunction() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let results = document.getElementById("searchResults");
    results.innerHTML = "";

    if (input === "") return;

    doctors.forEach(function(doctor) {
        if (doctor.name.toLowerCase().includes(input)) {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
                <a href="${doctor.link}">
                    <img src="${doctor.image}" alt="${doctor.name}">
                    <span>${doctor.name}</span>
                </a>
            `;
            results.appendChild(listItem);
        }
    });
}


// Toggle tìm kiếm
const toggleBtn = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchContainer");

toggleBtn.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  if (searchBox.classList.contains("active")) {
    searchBox.style.display = "block"; // Hiển thị thanh tìm kiếm
  } else {
    searchBox.style.display = "none";  // Ẩn thanh tìm kiếm khi không active
  }
});

// Kéo di chuyển search-container và icon
let isDragging = false;
let offsetX, offsetY;

const searchContainer = document.getElementById("searchContainer");
const searchIcon = document.getElementById("searchToggle");

searchIcon.addEventListener("mousedown", function (e) {
  isDragging = true;
  offsetX = e.clientX - searchIcon.offsetLeft;
  offsetY = e.clientY - searchIcon.offsetTop;
  searchIcon.style.cursor = "move";
  searchContainer.style.cursor = "move"; // Đảm bảo di chuyển cả thanh tìm kiếm
});

document.addEventListener("mousemove", function (e) {
  if (isDragging) {
    // Di chuyển cả icon và thanh tìm kiếm cùng nhau
    searchIcon.style.left = `${e.clientX - offsetX}px`;
    searchIcon.style.top = `${e.clientY - offsetY}px`;
    searchContainer.style.left = `${e.clientX - offsetX + 40}px`; // Thanh tìm kiếm sẽ luôn cách icon 30px
    searchContainer.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", function () {
  isDragging = false;
  searchIcon.style.cursor = "default";
  searchContainer.style.cursor = "default";
});

  // Khi cuộn trang, kiểm tra các phần tử để thêm class 'visible' cho các phần tử khi chúng xuất hiện trong viewport
window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('visible');
      }
    });
  });


//-------------------------------------------------------
    let index = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(i) {
      const carousel = document.getElementById('reviewCarousel');
      index = (i + totalSlides) % totalSlides;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    showSlide(index); // Khởi tạo slide đầu tiên


  function handleContact() {
    const name = document.getElementById("contact-name").value.trim();
    const address = document.getElementById("contact-address").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const message = document.getElementById("contact-message").value.trim();
  
    if (!name || !address || !email || !phone || !message) {
      alert("Vui lòng nhập đầy đủ thông tin.");
    } else if (!email.includes("@")) {
      alert("Email không hợp lệ..");
    } else if (!/^\d{10}$/.test(phone)) {
      alert("Số điện thoại không hợp lệ.");
    } else {
      alert("Gửi liên hệ thành công!");
    }
  }
  
  

  

  function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    
    modal.style.display = "block";
    modalImage.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

  
document.getElementById("toggle-theme").addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("light-mode");

  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  if (body.classList.contains("light-mode")) {
    themeIcon.src = "Hinh/mattroi.jpg";
    themeText.textContent = "Chế Độ Sáng";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.src = "Hinh/mattrang.jpg";
    themeText.textContent = "Chế Độ Tối";
    localStorage.setItem("theme", "dark");
  }
});

// Tự động áp dụng giao diện khi tải trang
window.addEventListener("DOMContentLoaded", function () {
let savedTheme = localStorage.getItem("theme");
if (!savedTheme) {
  savedTheme = "light";
  localStorage.setItem("theme", "light");
}

  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeIcon.src = "Hinh/mattroi.jpg";
    themeText.textContent = "Chế Độ Sáng";
  } else {
    body.classList.remove("light-mode");
    themeIcon.src = "Hinh/mattrang.jpg";
    themeText.textContent = "Chế Độ Tối";
  }
});
document.getElementById("toggle-theme").addEventListener("click", function () {
    const container = document.querySelector(".container");
  
    if (container) {
      container.classList.toggle("light-mode");
      container.classList.toggle("dark-mode");
      document.querySelectorAll(".review-item").forEach(function (item) {
        item.classList.toggle("light-mode");
        item.classList.toggle("dark-mode");
      });
  
      // Lưu trạng thái vào localStorage
      localStorage.setItem(
        "theme",
        container.classList.contains("light-mode") ? "light" : "dark"
      );
    }
  });
  
  // Kiểm tra và đặt lại chế độ khi tải trang
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
let savedTheme = localStorage.getItem("theme");
if (!savedTheme) {
  savedTheme = "light";
  localStorage.setItem("theme", "light");
}

  
    if (savedTheme === "light") {
      container.classList.add("light-mode");
      container.classList.remove("dark-mode");
    } else {
      container.classList.add("dark-mode");
      container.classList.remove("light-mode");
    }
  });

  // Hiệu ứng
const fadeEls = document.querySelectorAll('.fade-in');

const animations = [
  'fadeInMoveUp',
  'slideInLeft',
  'slideInRight',
  'scaleUp',
  'rotateIn'
];

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const anim = animations[Math.floor(Math.random() * animations.length)];
      entry.target.style.animationName = anim;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

  


  
  // Dịch
  const translations = {
    vi: {
      highlighted_places: "Bác sĩ Nổi bật",
      doctor_tam: "Bác Sĩ. Nguyễn Văn Tâm",
      doctor_xuan: "Bác Sĩ. Trần Thị Xuân",
      doctor_lieu: "Bác Sĩ. Lê Văn Liễu",
      goi: "Gói Khám Sức Khỏe Tổng Quát",
      about_us: "Về Phòng Khám",
      tour: "Dịch vụ Khám Bệnh",
      feedback: "Bệnh nhân Nói về Chúng tôi",
      contact: "Liên hệ Tư vấn",
      dark_mode: "Chế Độ Tối",
      destination_title: "Sức Khỏe Của Bạn, Ưu Tiên Của Chúng Tôi",
      backpack_and_go: "Đặt lịch hẹn và chăm sóc sức khỏe ngay!",
      where_to_go: "Bạn cần tư vấn vấn đề sức khỏe nào?",
      destination: "Chuyên khoa",
      number_of_people: "Số lượng bệnh nhân (nếu đi cùng)",
      departure_date: "Ngày khám mong muốn",
      back: "⬅ Quay lại",
  
      // about section
      about_title: "Thông tin về Phòng Khám ABC",
      why_choose_us: "Tại sao chọn Phòng Khám ABC?",
      about_desc: "Phòng Khám Đa Khoa ABC tự hào là địa chỉ tin cậy chăm sóc sức khỏe cho bạn và gia đình. Với đội ngũ y bác sĩ giàu kinh nghiệm, tận tâm và trang thiết bị y tế hiện đại, chúng tôi cam kết mang đến dịch vụ chẩn đoán chính xác, điều trị hiệu quả và trải nghiệm thăm khám chu đáo. Từ khám tổng quát, chuyên khoa đến các dịch vụ tư vấn sức khỏe, Phòng Khám ABC luôn nỗ lực đa dạng hóa dịch vụ, phù hợp với mọi nhu cầu chăm sóc sức khỏe. Hãy để Phòng Khám ABC đồng hành cùng bạn trên hành trình bảo vệ và nâng cao sức khỏe!",
      service_booking: "Đặt Lịch Hẹn",
      service_247: "Hỗ trợ 24/7",
      service_guidebook: "Cẩm nang Sức khỏe",
  
      // nice-place section (sẽ hiển thị thông tin bác sĩ)
      tour_title: "Các Nhân Viên và Gói Dịch vụ Y tế 2025", // Giữ key tour_title cho section "Dịch vụ Khám Bệnh"
      halong_desc: "BS. Nguyễn Văn Tâm - Chuyên khoa Tim Mạch, với hơn 15 năm kinh nghiệm, tận tâm vì sức khỏe tim mạch của bạn.", // Mô tả cho bác sĩ/dịch vụ 1
      hue_desc: "BS. Trần Thị Xuân - Chuyên khoa Nhi, được các bậc phụ huynh tin tưởng, chăm sóc sức khỏe toàn diện cho trẻ.", // Mô tả cho bác sĩ/dịch vụ 2
      phongnha_desc: "BS. Lê Văn Liễu - Chuyên khoa Nội Tiết, chẩn đoán và điều trị các bệnh lý đái tháo đường, tuyến giáp hiệu quả.", // Mô tả cho bác sĩ/dịch vụ 3
      sapa_desc: "Gói Khám Sức Khỏe Tổng Quát - Phát hiện sớm các vấn đề sức khỏe, bảo vệ bạn toàn diện. Bao gồm xét nghiệm và tư vấn chuyên sâu.", // Mô tả cho bác sĩ/dịch vụ 4 (có thể là gói khám)
      
      book_tour: "Đặt Lịch Hẹn", 
      learn_more: "Xem Chi Tiết",
  

      send_button: "Gửi",
      contact_title: "Liên Hệ Tư Vấn Y Tế",
  
      other_info_title: "Thông Tin Phòng Khám",
      headquarters_address: "Địa chỉ Phòng khám: 123 Đường Sức Khỏe, Phường An Khang, Quận Bình Tâm, TP.HCM.",
      support_hours: "Giờ làm việc: 7:30 - 17:00 (Thứ 2 - Thứ 7). Chủ Nhật nghỉ.",
      contact_email: "Liên hệ tư vấn qua email: tuvan@phongkhamabc.vn để được hỗ trợ nhanh chóng.",
  
      ad_popup_title: "Ưu Đãi Khám Sức Khỏe!",
      ad_popup_desc: "Giảm giá 25% khi Đặt Lịch trực tuyến trong tháng này."
    },
    en: {
      highlighted_places: "Featured Doctors",
      doctor_tam: "Dr. Nguyen Van Tam",
      doctor_xuan: "Dr. Tran Thi Xuan",
      doctor_lieu: "Dr. Le Van Lieu",
      goi: "General Health Check Package",
      about_us: "About Our Clinic",
      tour: "Medical Services",
      feedback: "Patient Testimonials",
      contact: "Contact for Consultation",
      dark_mode: "Dark Mode",
      destination_title: "Your Health, Our Priority",
      backpack_and_go: "Book an appointment and take care of your health now!",
      where_to_go: "What health issue do you need advice on?",
      destination: "Specialty",
      number_of_people: "Number of patients (if accompanied)",
      departure_date: "Preferred consultation date",
      back: "⬅ Back",
  
      // about section
      about_title: "About ABC Clinic",
      why_choose_us: "Why Choose ABC Clinic?",
      about_desc: "ABC General Clinic is proud to be a trusted healthcare provider for you and your family. With a team of experienced, dedicated doctors and modern medical equipment, we are committed to providing accurate diagnoses, effective treatments, and a thoughtful examination experience. From general check-ups and specialized care to health counseling services, ABC Clinic always strives to diversify its services to meet all healthcare needs. Let ABC Clinic accompany you on your journey to protect and improve your health!",
      service_booking: "Book Appointment",
      service_247: "24/7 Support",
      service_guidebook: "Health Handbook",
  
      // nice-place section (will display doctor information)
      tour_title: "Medical Service Packages 2025", // Keep tour_title key for "Medical Services" section
      halong_desc: "Dr. Nguyen Van Tam - Cardiologist, with over 15 years of experience, dedicated to your heart health.", // Description for doctor/service 1
      hue_desc: "Dr. Tran Thi Xuan - Pediatrician, trusted by parents, providing comprehensive healthcare for children.", // Description for doctor/service 2
      phongnha_desc: "Dr. Le Van Lieu - Endocrinologist, effectively diagnosing and treating diabetes and thyroid disorders.", // Description for doctor/service 3
      sapa_desc: "General Health Check-up Package - Early detection of health issues, comprehensive protection. Includes tests and in-depth consultation.", // Description for doctor/service 4 (can be a package)
      
      book_tour: "Book Appointment", 
      learn_more: "Learn More",
  

      send_button: "Send",
      contact_title: "Contact for Medical Advice",
  
      other_info_title: "Clinic Information",
      headquarters_address: "Clinic Address: 123 Health Street, An Khang Ward, Binh Tam District, HCM City.",
      support_hours: "Working Hours: 7:30 AM - 5:00 PM (Monday - Saturday). Sunday closed.",
      contact_email: "Contact for consultation via email: consult@abcclinic.vn for prompt support.",
  
      ad_popup_title: "Health Check-up Offer!",
      ad_popup_desc: "25% off when booking online this month."
    }
  };
  
  function changeLanguage(lang) {
    if (!translations[lang]) return console.error(`❌ Ngôn ngữ "${lang}" không tồn tại!`);
  
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.innerHTML = translations[lang][key] || element.innerHTML;
    });
  
    // Cập nhật giao diện nút ngôn ngữ (icon + text)
    const langIcon = document.getElementById("language-icon");
    const langText = document.getElementById("language-text");
  
    if (lang === "vi") {
      langIcon.src = "Hinh/vn.jpg";
      langText.textContent = "Tiếng Việt";
    } else {
      langIcon.src = "Hinh/eng.jpg";
      langText.textContent = "English";
    }
  }

  
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "vi";
    changeLanguage(savedLang);
  
    document.getElementById("toggle-language").addEventListener("click", () => {
      const currentLang = localStorage.getItem("lang") || "vi";
      const newLang = currentLang === "vi" ? "en" : "vi";
      changeLanguage(newLang);
    });
  });
  
  
  
  function showAd() {
    // Hiển thị quảng cáo khi nhấn vào video hoặc icon quảng cáo
    document.getElementById("promo-ad").style.display = "flex";
  }
  
  function closeAd() {
    // Đóng quảng cáo khi nhấn vào nút "Đóng"
    document.getElementById("promo-ad").style.display = "none";
  }
// Hàm hiển thị cửa sổ quảng cáo
document.querySelector(".ad-icon").addEventListener("click", function () {
  document.getElementById("ad-popup").style.display = "block";
});

// Hàm đóng cửa sổ quảng cáo khi nhấn vào chữ X
function closeAdPopup() {
  document.getElementById("ad-popup").style.display = "none";
}

// Ẩn icon khi nhấn X
document.getElementById("closeAdIcon").addEventListener("click", function (e) {
  e.stopPropagation(); // Ngăn sự kiện lan ra icon cha
  document.getElementById("adIcon").style.display = "none";
});

// Kéo icon quảng cáo
const adIcon = document.getElementById('adIcon');
let isDraggingAd = false;
let offsetAdX, offsetAdY;

adIcon.addEventListener('mousedown', startDragAd);
adIcon.addEventListener('touchstart', startDragAd, { passive: false });

function startDragAd(e) {
  const event = e.touches ? e.touches[0] : e;
  if (e.target.classList.contains('ad-close')) return; // Không kéo khi bấm nút X

  isDraggingAd = true;
  offsetAdX = event.clientX - adIcon.offsetLeft;
  offsetAdY = event.clientY - adIcon.offsetTop;
  adIcon.style.cursor = 'grabbing';
  e.preventDefault();
}

document.addEventListener('mousemove', moveAd);
document.addEventListener('touchmove', moveAd, { passive: false });

function moveAd(e) {
  if (isDraggingAd) {
    const event = e.touches ? e.touches[0] : e;
    adIcon.style.left = `${event.clientX - offsetAdX}px`;
    adIcon.style.top = `${event.clientY - offsetAdY}px`;
  }
}

document.addEventListener('mouseup', stopDragAd);
document.addEventListener('touchend', stopDragAd);

function stopDragAd() {
  isDraggingAd = false;
  adIcon.style.cursor = 'move';
}





// JVS/script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- GLOBAL VARIABLES AND SETUP ---
    let currentLang = localStorage.getItem("lang") || "vi";
    let currentTheme = localStorage.getItem("theme") || "dark"; // Default to dark as per previous settings

    // Main translations object (ensure all used keys are defined here)
    // This should ideally be the single source of truth for translations.
    const translations = {
        vi: {
            pageTitleIndex: "Trang Chủ - Phòng Khám Y Khoa",
            settingsAriaLabel: "Cài đặt",
            settingsChangeTheme: "Đổi Chế độ",
            settingsChangeLanguage: "Đổi Ngôn ngữ",
            settingsHelp: "Trợ giúp",
            symptomCheckerTogglerAriaLabel: "Mở AI Chẩn Đoán Bệnh",
            symptomCheckerTooltip: "AI Chẩn Đoán",
            symptom_checker_title: "AI Chẩn Đoán Bệnh",
            closeButtonAriaLabel: "Đóng",
            symptom_checker_initial_question: "Hãy mô tả triệu chứng chính của bạn...",
            symptom_checker_i_guess: "Dự đoán",
            symptom_checker_is_it_correct: "Thông tin này có vẻ phù hợp với bạn không?",
            yes: "Phù hợp",
            no: "Chưa chắc / Không đúng",
            back_button: "Câu trước",
            symptom_checker_disclaimer: "Lưu ý: Công cụ này chỉ đưa ra gợi ý dựa trên thông tin hạn chế, không thay thế chẩn đoán y tế chuyên nghiệp. Luôn tham khảo ý kiến bác sĩ.",
            akinator_error_generic: "Đã có lỗi xảy ra, vui lòng thử lại.",
            // ... (Other general keys for index page like highlighted_doctors, about_us, etc.)
            // Keys from akinatorTree.i18n_questions will be merged or accessed via akinatorTree
        },
        en: {
            pageTitleIndex: "Homepage - Medical Clinic",
            settingsAriaLabel: "Settings",
            settingsChangeTheme: "Toggle Theme",
            settingsChangeLanguage: "Switch Language",
            settingsHelp: "Help",
            symptomCheckerTogglerAriaLabel: "Open Symptom Checker AI",
            symptomCheckerTooltip: "Symptom AI",
            symptom_checker_title: "Symptom Checker AI",
            closeButtonAriaLabel: "Close",
            symptom_checker_initial_question: "Describe your main symptom...",
            symptom_checker_i_guess: "Prediction",
            symptom_checker_is_it_correct: "Does this seem appropriate?",
            yes: "Yes, it does",
            no: "Not sure / Incorrect",
            back_button: "Previous Question",
            symptom_checker_disclaimer: "Note: This tool provides suggestions based on limited information and does not replace professional medical diagnosis. Always consult a doctor.",
            akinator_error_generic: "An error occurred, please try again.",
            // ... (Other general keys)
        }
    };

    // --- DOM Elements for Settings Menu ---
    const settingsContainer = document.getElementById('settingsContainer');
    const settingsButton = document.getElementById('settingsButton');
    const settingsOptions = document.getElementById('settingsOptions');
    const toggleThemeOptionButton = document.getElementById('toggleThemeOption');
    const settingsThemeIcon = document.getElementById('settingsThemeIcon'); // Icon sun/moon in settings
    const toggleLanguageOptionButton = document.getElementById('toggleLanguageOption');

    // --- DOM Elements for Symptom Checker AI ---
    const symptomCheckerToggler = document.getElementById("symptomCheckerToggler");
    const symptomCheckerWidget = document.getElementById("symptomCheckerWidget");
    const closeSymptomCheckerBtn = document.getElementById("closeSymptomCheckerBtn");
    const symptomCheckerTitle = document.getElementById("symptomCheckerTitle");
    const symptomCheckerQuestionText = document.getElementById("symptomCheckerQuestionText");
    const symptomCheckerOptionsContainer = document.getElementById("symptomCheckerOptionsContainer");
    const symptomCheckerResultContainer = document.getElementById("symptomCheckerResultContainer");
    const symptomCheckerGuess = document.getElementById("symptomCheckerGuess");
    const symptomCheckerPredictedDisease = document.getElementById("symptomCheckerPredictedDisease");
    const symptomCheckerGuessYes = document.getElementById("symptomCheckerGuessYes");
    const symptomCheckerGuessNo = document.getElementById("symptomCheckerGuessNo");
    const symptomCheckerBackButton = document.getElementById("symptomCheckerBackButton");
    const symptomCheckerProgressBarFill = document.getElementById("symptomCheckerProgressBarFill");


    // --- Akinator Decision Tree Data for 3 Common Illnesses ---
    const akinatorTree = {
        start: "q1_main_group",
        max_questions_before_forced_guess: 7, // Adjusted for a more focused tree
        questions: {
            "q1_main_group": { question_key: "q1_main_group_text", options: [ { text_key: "group_respiratory", next_node: "q2_resp_fever" }, { text_key: "group_fever_aches", next_node: "q2_flu_onset" }, { text_key: "group_digestive", next_node: "q2_digest_nausea_vomit" } ] },
            "q2_resp_fever": { question_key: "q_fever_level_text", options: [ { text_key: "fever_high", next_node: "q2_flu_onset" }, { text_key: "fever_mild_or_no", next_node: "q3_resp_sore_throat" } ] },
            "q3_resp_sore_throat": { question_key: "q_sore_throat_main_text", options: [ { text_key: "yes_sore_throat_main", next_node: "q4_resp_cold_fatigue" }, { text_key: "no_sore_throat_not_main", next_node: "q4_resp_cold_runny_nose" } ] },
            "q4_resp_cold_fatigue": { question_key: "q_fatigue_cold_level_text", options: [ { text_key: "yes_mild_fatigue", next_node: "result_common_cold" }, { text_key: "no_significant_fatigue", next_node: "result_common_cold" } ] },
            "q4_resp_cold_runny_nose": { question_key: "q_runny_stuffy_nose_text", options: [ { text_key: "yes_prominent_nasal", next_node: "result_common_cold" }, { text_key: "no_not_prominent_nasal", next_node: "result_consult_doctor_default" } ] },
            "q2_flu_onset": { question_key: "q_flu_sudden_onset_text", options: [ { text_key: "yes_sudden", next_node: "q3_flu_fatigue_aches" }, { text_key: "no_gradual", next_node: "q3_resp_sore_throat" } ] },
            "q3_flu_fatigue_aches": { question_key: "q_flu_severe_fatigue_aches_text", options: [ { text_key: "yes_both_severe", next_node: "q4_flu_cough_check" }, { text_key: "no_one_or_mild", next_node: "result_common_cold" } ] },
            "q4_flu_cough_check": { question_key: "q_cough_dry_persistent_text", options: [ { text_key: "yes_dry_cough", next_node: "result_flu" }, { text_key: "no_or_mild_cough", next_node: "result_flu" } ] },
            "q2_digest_nausea_vomit": { question_key: "q_digest_nausea_vomiting_text", options: [ { text_key: "yes_nausea_vomit", next_node: "q3_digest_diarrhea" }, { text_key: "no_just_abdominal_pain", next_node: "q3_digest_pain_only_type" } ] },
            "q3_digest_diarrhea": { question_key: "q_digest_diarrhea_present_text", options: [ { text_key: "yes_diarrhea", next_node: "q4_digest_fever_check" }, { text_key: "no_diarrhea_just_nausea_vomit", next_node: "result_consult_doctor_default" } ] },
            "q4_digest_fever_check": { question_key: "q_fever_mild_gastro_text", options: [ { text_key: "yes_fever_or_cramps", next_node: "result_gastroenteritis" }, { text_key: "no_neither_symptom", next_node: "result_gastroenteritis" } ] },
            "q3_digest_pain_only_type": { question_key: "q_abdominal_pain_character_text", options: [ { text_key: "yes_severe_cramping", next_node: "result_consult_doctor_default"}, { text_key: "no_mild_dull_pain", next_node: "result_consult_doctor_default"} ] }
        },
        results: {
            "result_common_cold": { disease_key: "disease_common_cold", advice_key: "advice_common_cold_care" },
            "result_flu": { disease_key: "disease_flu", advice_key: "advice_flu_care" },
            "result_gastroenteritis": { disease_key: "disease_gastroenteritis", advice_key: "advice_gastroenteritis_care" },
            "result_consult_doctor_default": { disease_key: "disease_consult_doctor_general", advice_key: "advice_consult_doctor_general_detailed"}
        },
        i18n_questions: { // These keys should be unique and present in the main `translations` object
            en: {
                q1_main_group_text: "What is your main group of symptoms today?", group_respiratory: "Mainly respiratory (runny/stuffy nose, sore throat, cough)", group_fever_aches: "Mainly high fever, body aches, significant fatigue", group_digestive: "Mainly digestive (nausea, vomiting, diarrhea, stomach pain)", q_fever_level_text: "Do you have a fever? If so, how high?", fever_high: "High (e.g., >38.5°C / 101.3°F)", fever_mild_or_no: "No fever or mild fever (e.g., <38.5°C / 101.3°F)", q_sore_throat_main_text: "Is sore throat your most prominent symptom?", yes_sore_throat_main: "Yes, sore throat is very noticeable", no_sore_throat_not_main: "No, other symptoms are more significant", q_fatigue_cold_level_text: "Are you feeling tired (not severely exhausted)?", yes_mild_fatigue: "Yes, mildly tired", no_significant_fatigue: "No, not significantly tired", q_runny_stuffy_nose_text: "Do you have a significant runny or stuffy nose?", yes_prominent_nasal: "Yes, very runny/stuffy", no_not_prominent_nasal: "No, not very much", q_flu_sudden_onset_text: "Did your symptoms (fever, aches) start suddenly (within a few hours)?", yes_sudden: "Yes, very suddenly", no_gradual: "No, they developed gradually", q_flu_severe_fatigue_aches_text: "Are you feeling EXTREMELY tired AND have significant body aches?", yes_both_severe: "Yes, both are severe", no_one_or_mild: "No, one or both are mild/absent", q_cough_dry_persistent_text: "Do you have a dry, persistent cough?", yes_dry_cough: "Yes, a dry cough", no_or_mild_cough: "No, or just a mild/occasional cough", q_digest_nausea_vomiting_text: "Are you experiencing nausea or have you been vomiting?", yes_nausea_vomit: "Yes, nausea and/or vomiting", no_just_abdominal_pain: "No, mainly abdominal pain/discomfort", q_digest_diarrhea_present_text: "Are you also experiencing diarrhea?", yes_diarrhea: "Yes, I have diarrhea", no_diarrhea_just_nausea_vomit: "No diarrhea, just nausea/vomiting", q_fever_mild_gastro_text: "Do you also have a mild fever or abdominal cramping?", yes_fever_or_cramps: "Yes, mild fever and/or cramps", no_neither_symptom: "No, neither of those", q_abdominal_pain_character_text: "Is your abdominal pain cramping or persistent?", yes_severe_cramping: "Yes, severe or cramping pain", no_mild_dull_pain: "No, it's more of a mild/dull discomfort",
                disease_common_cold: "Common Cold", disease_flu: "Influenza (Flu)", disease_gastroenteritis: "Viral Gastroenteritis (Stomach Flu)", disease_consult_doctor_general: "Symptoms Undetermined / Consultation Recommended",
                advice_common_cold_care: "Rest, drink plenty of fluids, use saline nasal spray for congestion. Symptoms usually improve within a week. Monitor for worsening.", advice_flu_care: "Rest is crucial. Drink plenty of fluids. Over-the-counter pain relievers for fever and aches. Consult a doctor if symptoms are severe, you have difficulty breathing, or are in a high-risk group.", advice_gastroenteritis_care: "Focus on hydration with clear fluids (water, oral rehydration solution). Gradually reintroduce bland foods (BRAT diet). See a doctor if you can't keep fluids down, have severe pain, bloody stools, or high fever.", advice_consult_doctor_general_detailed: "Your symptoms are not clearly pointing to a single common ailment or may require further investigation. It's best to consult a doctor for an accurate diagnosis and advice.",
                akinator_feedback_correct_intro: "Great! I'm glad I guessed correctly about", akinator_feedback_incorrect_intro: "Oops, it seems I was mistaken about", akinator_feedback_incorrect_advice: "Sometimes symptoms can be complex. Consulting a doctor is important.", akinator_general_advice_prefix: "Advice:", akinator_reminder_doctor: "Important: This is a prediction. Consult a doctor for accurate advice.", akinator_thanks_playing: "Thanks for playing!"
            },
            vi: { /* ... (COPY ĐẦY ĐỦ BẢN DỊCH TIẾNG VIỆT TỪ PHẢN HỒI TRƯỚC VÀO ĐÂY) ... */
                q1_main_group_text: "Nhóm triệu chứng chính của bạn hôm nay là gì?", group_respiratory: "Chủ yếu về hô hấp (sổ mũi, nghẹt mũi, đau họng, ho)", group_fever_aches: "Chủ yếu là sốt cao, đau nhức người, mệt mỏi nhiều", group_digestive: "Chủ yếu về tiêu hóa (buồn nôn, nôn, tiêu chảy, đau bụng)", q_fever_level_text: "Bạn có bị sốt không? Nếu có, nhiệt độ khoảng bao nhiêu?", fever_high: "Sốt cao (VD: trên 38.5°C)", fever_mild_or_no: "Không sốt hoặc sốt nhẹ (VD: dưới 38.5°C)", q_sore_throat_main_text: "Đau họng có phải là triệu chứng nổi bật nhất của bạn không?", yes_sore_throat_main: "Có, đau họng rất rõ rệt", no_sore_throat_not_main: "Không, các triệu chứng khác nổi bật hơn", q_fatigue_cold_level_text: "Bạn có cảm thấy mệt mỏi không (không phải kiệt sức)?", yes_mild_fatigue: "Có, hơi mệt", no_significant_fatigue: "Không, không mệt mỏi đáng kể", q_runny_stuffy_nose_text: "Bạn có bị sổ mũi hoặc nghẹt mũi nhiều không?", yes_prominent_nasal: "Có, sổ/nghẹt mũi nhiều", no_not_prominent_nasal: "Không, không nhiều lắm", q_flu_sudden_onset_text: "Các triệu chứng (sốt, đau người) của bạn có khởi phát đột ngột (trong vài giờ) không?", yes_sudden: "Có, rất đột ngột", no_gradual: "Không, chúng xuất hiện từ từ", q_flu_severe_fatigue_aches_text: "Bạn có cảm thấy RẤT mệt mỏi VÀ đau nhức cơ thể nhiều không?", yes_both_severe: "Có, cả hai đều nặng", no_one_or_mild: "Không, một trong hai hoặc cả hai đều nhẹ/không có", q_cough_dry_persistent_text: "Bạn có bị ho khan và dai dẳng không?", yes_dry_cough: "Có, ho khan", no_or_mild_cough: "Không, hoặc chỉ ho nhẹ/thỉnh thoảng", q_digest_nausea_vomiting_text: "Bạn có bị buồn nôn hoặc đã nôn không?", yes_nausea_vomit: "Có, buồn nôn và/hoặc nôn", no_just_abdominal_pain: "Không, chủ yếu là đau bụng/khó chịu ở bụng", q_digest_diarrhea_present_text: "Bạn có bị tiêu chảy kèm theo không?", yes_diarrhea: "Có, tôi bị tiêu chảy", no_diarrhea_just_nausea_vomit: "Không tiêu chảy, chỉ buồn nôn/nôn", q_fever_mild_gastro_text: "Bạn có kèm theo sốt nhẹ hoặc đau quặn bụng không?", yes_fever_or_cramps: "Có, sốt nhẹ và/hoặc đau quặn bụng", no_neither_symptom: "Không, không có cả hai triệu chứng đó", q_abdominal_pain_character_text: "Cơn đau bụng của bạn có quằn quại hoặc liên tục không?", yes_severe_cramping: "Có, đau dữ dội hoặc quặn thắt", no_mild_dull_pain: "Không, chỉ đau âm ỉ/nhẹ nhàng",
                disease_common_cold: "Cảm Lạnh Thông Thường", disease_flu: "Cảm Cúm", disease_gastroenteritis: "Viêm Dạ Dày - Ruột do Virus (Cúm Dạ Dày)", disease_consult_doctor_general: "Triệu Chứng Không Xác Định / Nên Tư Vấn Bác Sĩ",
                advice_common_cold_care: "Nghỉ ngơi, uống nhiều nước, dùng nước muối sinh lý xịt mũi nếu nghẹt. Triệu chứng thường cải thiện trong vòng một tuần. Theo dõi nếu có diễn biến xấu.", advice_flu_care: "Nghỉ ngơi là rất quan trọng. Uống nhiều nước. Dùng thuốc giảm đau, hạ sốt không kê đơn. Gặp bác sĩ nếu triệu chứng nặng, khó thở, hoặc bạn thuộc nhóm nguy cơ cao.", advice_gastroenteritis_care: "Tập trung bù nước bằng dung dịch điện giải hoặc nước lọc. Ăn thức ăn nhạt, dễ tiêu (cháo, chuối). Đến gặp bác sĩ nếu không giữ được nước, đau bụng dữ dội, phân có máu, hoặc sốt cao.", advice_consult_doctor_general_detailed: "Các triệu chứng của bạn chưa rõ ràng chỉ điểm một bệnh cụ thể hoặc có thể cần đánh giá sâu hơn. Tốt nhất bạn nên tham khảo ý kiến bác sĩ để có chẩn đoán và lời khuyên chính xác.",
                akinator_feedback_correct_intro: "Tuyệt vời! Tôi rất vui vì đã đoán đúng về", akinator_feedback_incorrect_intro: "Rất tiếc, có vẻ như tôi đã chưa đoán đúng về", akinator_feedback_incorrect_advice: "Đôi khi các triệu chứng có thể phức tạp. Việc tham khảo ý kiến bác sĩ vẫn là quan trọng nhất.", akinator_general_advice_prefix: "Lời khuyên:", akinator_reminder_doctor: "Lưu ý: Đây chỉ là dự đoán. Luôn tham khảo ý kiến bác sĩ.", akinator_thanks_playing: "Cảm ơn bạn đã chơi!"
            }
        }
    };

    let akinatorCurrentNodeId = null;
    let akinatorHistory = [];

    function getAkinatorTranslation(key) {
        // Ưu tiên lấy từ akinatorTree.i18n_questions trước, sau đó mới đến translations chung
        if (akinatorTree.i18n_questions[currentLang] && akinatorTree.i18n_questions[currentLang][key]) {
            return akinatorTree.i18n_questions[currentLang][key];
        }
        if (translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        // Fallback nếu không tìm thấy key trong ngôn ngữ hiện tại, thử tiếng Anh
        if (akinatorTree.i18n_questions.en && akinatorTree.i18n_questions.en[key]) {
            return akinatorTree.i18n_questions.en[key];
        }
        if (translations.en && translations.en[key]) {
            return translations.en[key];
        }
        return key; // Trả về key nếu không tìm thấy bản dịch nào
    }


    function startAkinator() {
        akinatorHistory = [];
        akinatorCurrentNodeId = akinatorTree.start;

        if(symptomCheckerQuestionText) symptomCheckerQuestionText.style.display = "block";
        if(symptomCheckerOptionsContainer) symptomCheckerOptionsContainer.style.display = "flex";
        if(symptomCheckerResultContainer) symptomCheckerResultContainer.style.display = "none";
        
        const resultFeedbackDiv = document.getElementById('symptomCheckerResultFeedback');
        if(resultFeedbackDiv) {
            resultFeedbackDiv.innerHTML = '';
            resultFeedbackDiv.style.display = 'none';
        }
        if (symptomCheckerPredictedDisease) symptomCheckerPredictedDisease.textContent = "";
        
        const iGuessElement = document.getElementById('symptomCheckerGuess');
        const isItCorrectP = symptomCheckerResultContainer ? symptomCheckerResultContainer.querySelector('p[data-i18n="symptom_checker_is_it_correct"]') : null;
        if (iGuessElement) iGuessElement.style.display = 'block';
        if (isItCorrectP) isItCorrectP.style.display = 'block';
        if (symptomCheckerGuessYes) symptomCheckerGuessYes.style.display = 'inline-block';
        if (symptomCheckerGuessNo) symptomCheckerGuessNo.style.display = 'inline-block';

        if(symptomCheckerBackButton) symptomCheckerBackButton.style.display = "none";
        if(symptomCheckerTitle) symptomCheckerTitle.textContent = getAkinatorTranslation("symptom_checker_title");
        if(symptomCheckerProgressBarFill) symptomCheckerProgressBarFill.style.width = "0%";

        updateProgressBar();
        showAkinatorQuestion(akinatorCurrentNodeId);
    }

    function showAkinatorQuestion(nodeId) {
        const node = akinatorTree.questions[nodeId];

        if (!node || !symptomCheckerQuestionText || !symptomCheckerOptionsContainer) {
            console.error("Akinator showQuestion Error: Node or DOM elements missing for nodeId:", nodeId);
            showAkinatorResult("result_consult_doctor_default");
            return;
        }

        symptomCheckerQuestionText.textContent = getAkinatorTranslation(node.question_key);
        symptomCheckerOptionsContainer.innerHTML = "";

        node.options.forEach(option => {
            const button = document.createElement("button");
            button.className = "symptom-checker-option-btn";
            button.textContent = getAkinatorTranslation(option.text_key);
            button.onclick = () => handleAkinatorAnswer(option.next_node);
            symptomCheckerOptionsContainer.appendChild(button);
        });

        symptomCheckerBackButton.style.display = akinatorHistory.length > 0 ? "inline-block" : "none";
        // Dịch nút back nếu nó có data-i18n
        if(symptomCheckerBackButton && symptomCheckerBackButton.getAttribute('data-i18n')){
            symptomCheckerBackButton.textContent = getAkinatorTranslation(symptomCheckerBackButton.getAttribute('data-i18n'));
        }
    }

    function handleAkinatorAnswer(nextNodeId) {
        akinatorHistory.push(akinatorCurrentNodeId);
        akinatorCurrentNodeId = nextNodeId;
        updateProgressBar();

        if (akinatorHistory.length >= akinatorTree.max_questions_before_forced_guess &&
            !akinatorTree.results[nextNodeId] &&
            !akinatorTree.questions[nextNodeId]) {
            showAkinatorResult("result_consult_doctor_default");
        } else if (akinatorTree.questions[nextNodeId]) {
            showAkinatorQuestion(nextNodeId);
        } else if (akinatorTree.results[nextNodeId]) {
            showAkinatorResult(nextNodeId);
        } else {
            console.warn("Akinator node not found or invalid:", nextNodeId, ". Defaulting.");
            showAkinatorResult("result_consult_doctor_default");
        }
    }

    function showAkinatorResult(resultId) {
        const resultNode = akinatorTree.results[resultId];

        if (!resultNode || !symptomCheckerResultContainer || !symptomCheckerOptionsContainer ||
            !symptomCheckerPredictedDisease || !symptomCheckerQuestionText || !symptomCheckerTitle ||
            !symptomCheckerGuessYes || !symptomCheckerGuessNo) {
            console.error("Akinator showResult Error: Missing DOM elements or resultNode for resultId:", resultId);
            if (symptomCheckerQuestionText) {
                symptomCheckerQuestionText.textContent = getAkinatorTranslation("akinator_error_generic");
                symptomCheckerQuestionText.style.display = "block";
            }
            if (symptomCheckerOptionsContainer) symptomCheckerOptionsContainer.innerHTML = "";
            if (symptomCheckerResultContainer) symptomCheckerResultContainer.style.display = "none";
            return;
        }

        symptomCheckerQuestionText.style.display = "none";
        symptomCheckerOptionsContainer.style.display = "none";
        if (symptomCheckerBackButton) symptomCheckerBackButton.style.display = "none";
        if (symptomCheckerProgressBarFill) symptomCheckerProgressBarFill.style.width = "100%";

        const diseaseNameKey = resultNode.disease_key;
        const adviceKey = resultNode.advice_key;
        const diseaseName = getAkinatorTranslation(diseaseNameKey);
        const advice = getAkinatorTranslation(adviceKey);

        symptomCheckerPredictedDisease.textContent = diseaseName;

        const iGuessElement = document.getElementById('symptomCheckerGuess');
        const isItCorrectP = symptomCheckerResultContainer.querySelector('p[data-i18n="symptom_checker_is_it_correct"]');

        if (iGuessElement) {
            iGuessElement.style.display = 'block';
            const iGuessTextKey = "symptom_checker_i_guess";
            const textNode = Array.from(iGuessElement.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
            if (textNode) textNode.nodeValue = getAkinatorTranslation(iGuessTextKey) + " ";
        }
        if (isItCorrectP) {
            isItCorrectP.style.display = 'block';
            isItCorrectP.textContent = getAkinatorTranslation(isItCorrectP.getAttribute('data-i18n'));
        }
        symptomCheckerGuessYes.style.display = 'inline-block';
        symptomCheckerGuessYes.textContent = getAkinatorTranslation(symptomCheckerGuessYes.getAttribute('data-i18n'));
        symptomCheckerGuessNo.style.display = 'inline-block';
        symptomCheckerGuessNo.textContent = getAkinatorTranslation(symptomCheckerGuessNo.getAttribute('data-i18n'));


        const resultFeedbackDiv = document.getElementById('symptomCheckerResultFeedback');
        if (resultFeedbackDiv) {
            resultFeedbackDiv.innerHTML = '';
            resultFeedbackDiv.style.display = 'none';
        }

        symptomCheckerResultContainer.style.display = "block";

        symptomCheckerGuessYes.onclick = () => handleAkinatorGuessResponse(true, diseaseName, advice);
        symptomCheckerGuessNo.onclick = () => handleAkinatorGuessResponse(false, diseaseName, advice);
    }

    function handleAkinatorGuessResponse(isCorrect, diseaseName, advice) {
        const feedbackContainer = symptomCheckerResultContainer;
        const lang = currentLang;

        if (feedbackContainer && akinatorTree.i18n_questions[lang]) {
            let message = "";
            const i18nSpecific = akinatorTree.i18n_questions[lang];

            if (isCorrect) {
                message = `${getAkinatorTranslation("akinator_feedback_correct_intro")} "<strong>${diseaseName}</strong>".<br><br>`;
                message += `<strong>${getAkinatorTranslation("akinator_general_advice_prefix")}</strong> ${advice}<br><br>`;
                message += `<em>${getAkinatorTranslation("akinator_reminder_doctor")}</em>`;
            } else {
                message = `${getAkinatorTranslation("akinator_feedback_incorrect_intro")} "<strong>${diseaseName}</strong>".<br><br>`;
                message += `${getAkinatorTranslation("akinator_feedback_incorrect_advice")}<br><br>`;
                message += `<em>${getAkinatorTranslation("akinator_reminder_doctor")}</em>`;
            }

            let resultFeedbackDiv = document.getElementById('symptomCheckerResultFeedback');
            if (resultFeedbackDiv) {
                resultFeedbackDiv.innerHTML = message;
                resultFeedbackDiv.style.display = 'block';
            }

            const guessElementsToHide = ['symptomCheckerGuessYes', 'symptomCheckerGuessNo'];
            guessElementsToHide.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = 'none';
            });
            const isItCorrectP = feedbackContainer.querySelector('p[data-i18n="symptom_checker_is_it_correct"]');
            if (isItCorrectP) isItCorrectP.style.display = 'none';
            const iGuessElement = document.getElementById('symptomCheckerGuess');
            if (iGuessElement) iGuessElement.style.display = 'none';
        } else {
            console.error("Cannot handle guess response: feedbackContainer or i18n_questions missing for lang:", lang);
        }
    }

    function goBackAkinator() {
        if (akinatorHistory.length > 0) {
            akinatorCurrentNodeId = akinatorHistory.pop();
            updateProgressBar();
            if (symptomCheckerResultContainer) symptomCheckerResultContainer.style.display = "none";
            if (symptomCheckerOptionsContainer) symptomCheckerOptionsContainer.style.display = "flex";
            const resultFeedbackDiv = document.getElementById('symptomCheckerResultFeedback');
            if (resultFeedbackDiv) resultFeedbackDiv.style.display = 'none';
            showAkinatorQuestion(akinatorCurrentNodeId);
        }
    }
    if (symptomCheckerBackButton) symptomCheckerBackButton.addEventListener('click', goBackAkinator);

    function updateProgressBar() {
        if (symptomCheckerProgressBarFill && akinatorTree.max_questions_before_forced_guess > 0) {
            const progress = Math.min(100, (akinatorHistory.length / akinatorTree.max_questions_before_forced_guess) * 100);
            symptomCheckerProgressBarFill.style.width = `${progress}%`;
        }
    }

    // --- Logic Mở/Đóng Chatbox ---
    function openSymptomChecker() {
        if (symptomCheckerWidget) {
            symptomCheckerWidget.style.display = "flex";
            startAkinator();
        }
    }

    function closeSymptomChecker() {
        if (symptomCheckerWidget) {
            symptomCheckerWidget.style.display = "none";
        }
    }

    if (symptomCheckerToggler) {
        symptomCheckerToggler.addEventListener("click", openSymptomChecker);
    }

    if (closeSymptomCheckerBtn) {
        closeSymptomCheckerBtn.addEventListener("click", closeSymptomChecker);
    }

    // --- Settings Menu Logic (Sao chép từ phiên bản trước) ---
    // ... (Đảm bảo bạn có các hàm applyTheme, updateSettingsThemeButtonText, và logic cho các nút trong settings menu)
    // Ví dụ:
    function applyTheme(theme) {
        currentTheme = theme;
        document.body.classList.toggle("dark-mode", currentTheme === "dark");
        localStorage.setItem("theme", currentTheme);
        const settingsThemeIcon = document.getElementById("settingsThemeIcon"); // Cần ID này trong HTML
        if (settingsThemeIcon) {
            settingsThemeIcon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
        updateSettingsThemeButtonText();
    }

    function applyTranslationsToPage(lang) { // Đổi tên để phân biệt với hàm applyTranslations của Akinator
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem("lang", currentLang);
        document.documentElement.lang = currentLang;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            // Chỉ cập nhật nếu key đó tồn tại trong translations[lang] chính
            // và không phải là một phần của akinatorTree.i18n_questions (vì đã xử lý riêng)
            if (translations[currentLang][key] && !key.startsWith("q_") && !key.startsWith("disease_") && !key.startsWith("advice_") && !key.startsWith("symptom_") && !key.startsWith("group_") && !key.startsWith("feeling_") && !key.startsWith("akinator_feedback_") && !key.startsWith("duration_") && !key.startsWith("pain_") && !key.startsWith("headache_") && !key.startsWith("cough_") ) {
                element.innerHTML = translations[currentLang][key];
            }
        });
         document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            if (translations[currentLang][key]) element.setAttribute('aria-label', translations[currentLang][key]);
        });
        const pageTitleElement = document.querySelector('title');
        const pageTitleKey = pageTitleElement ? pageTitleElement.getAttribute('data-i18n') : null;
        if (pageTitleKey && translations[currentLang][pageTitleKey]) {
            document.title = translations[currentLang][pageTitleKey];
        }
        updateSettingsThemeButtonText(); // Cập nhật text nút theme trong settings
        // Nếu đang mở Akinator, cập nhật lại câu hỏi/lựa chọn hiện tại
        if (symptomCheckerWidget && symptomCheckerWidget.style.display === 'flex' && akinatorCurrentNodeId) {
            if (akinatorTree.questions[akinatorCurrentNodeId]) {
                showAkinatorQuestion(akinatorCurrentNodeId);
            } else if (akinatorTree.results[akinatorCurrentNodeId]) {
                showAkinatorResult(akinatorCurrentNodeId); // Hiển thị lại kết quả với ngôn ngữ mới
            }
        }
    }
    
    function updateSettingsThemeButtonText() {
        const themeButtonTextSpan = document.querySelector('#toggleThemeOption span');
        if (themeButtonTextSpan && translations[currentLang]) {
            const key = themeButtonTextSpan.getAttribute('data-i18n');
            if (key && translations[currentLang][key]) {
                themeButtonTextSpan.textContent = translations[currentLang][key];
            }
        }
         const langButtonTextSpan = document.querySelector('#toggleLanguageOption span');
        if (langButtonTextSpan && translations[currentLang]) {
            const key = langButtonTextSpan.getAttribute('data-i18n');
             if (key && translations[currentLang][key]) {
                langButtonTextSpan.textContent = translations[currentLang][key];
            }
        }
    }

    if (settingsButton && settingsOptions && settingsContainer) {
        settingsButton.addEventListener('click', (e) => { e.stopPropagation(); settingsContainer.classList.toggle('active'); });
        document.addEventListener('click', (e) => { if (settingsContainer.classList.contains('active') && !settingsContainer.contains(e.target)) { settingsContainer.classList.remove('active'); }});
    }
    if (toggleThemeOptionButton) {
        toggleThemeOptionButton.addEventListener('click', () => { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); if(settingsContainer) settingsContainer.classList.remove('active'); });
    }
    if (toggleLanguageOptionButton) {
        toggleLanguageOptionButton.addEventListener('click', () => { applyTranslationsToPage(currentLang === 'vi' ? 'en' : 'vi'); if(settingsContainer) settingsContainer.classList.remove('active'); });
    }


    // --- INITIAL LOAD ---
    applyTheme(currentTheme);
    applyTranslationsToPage(currentLang); // Áp dụng ngôn ngữ cho toàn trang

}); // Kết thúc DOMContentLoaded