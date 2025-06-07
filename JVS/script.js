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
    { name: "Nguyễn Văn Tâm", link: "bs1.html", image: "Hinh/bs1.png" },
    { name: "Trần Thị Xuân", link: "bs2.html", image: "Hinh/bs2.png" },
    { name: "Lê Văn Liễu", link: "bs3.html", image: "Hinh/bs3.png" },
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





