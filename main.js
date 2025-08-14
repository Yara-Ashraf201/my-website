document.addEventListener("DOMContentLoaded", () => {
  const yearSelect = document.getElementById("yearSelect");
  const learningStyle = document.getElementById("learningStyle");
  const saveBtn = document.getElementById("saveBtn");
  const successMsg = document.getElementById("successMsg");

  function toggleSaveButton() {
    saveBtn.disabled = !(yearSelect.value && learningStyle.value);
  }

  yearSelect.addEventListener("change", toggleSaveButton);
  learningStyle.addEventListener("change", toggleSaveButton);

  saveBtn.addEventListener("click", () => {
    localStorage.setItem("eduMindYear", yearSelect.value);
    localStorage.setItem("eduMindStyle", learningStyle.value);

    successMsg.classList.remove("hidden");

    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 2500);
  });

  // Load saved preferences on page load
  const savedYear = localStorage.getItem("eduMindYear");
  const savedStyle = localStorage.getItem("eduMindStyle");

  if (savedYear) yearSelect.value = savedYear;
  if (savedStyle) learningStyle.value = savedStyle;

  toggleSaveButton();

  // Tabs logic - إصلاح تفعيل التبويبات
  const tabs = document.querySelectorAll(".tab");
  const homeTab = document.getElementById("homeTab");
  const sectionsTab = document.getElementById("sectionsTab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      if (tab.dataset.tab === "home") {
        homeTab.classList.remove("hidden");
        sectionsTab.classList.add("hidden");
      } else if (tab.dataset.tab === "sections") {
        sectionsTab.classList.remove("hidden");
        homeTab.classList.add("hidden");
      }
    });
  });
});
