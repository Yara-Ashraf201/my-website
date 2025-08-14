document.addEventListener("DOMContentLoaded", () => {
  const summaryContent = document.getElementById("summaryContent");
  const year = localStorage.getItem("eduMindYear") || "first";
  const summaries = summariesData[year] || [];

  summaryContent.innerHTML = "";

  if (summaries.length === 0) {
    summaryContent.textContent = "No summaries available for this year.";
    return;
  }

  summaries.forEach(item => {
    const container = document.createElement("div");
    container.classList.add("summary-item");

    const title = document.createElement("h3");
    title.textContent = item.title;
    container.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = item.description;
    container.appendChild(desc);

    if (item.youtube) {
      const iframe = document.createElement("iframe");
      iframe.width = "100%";
      iframe.height = "215";
      iframe.src = item.youtube.replace("watch?v=", "embed/");
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      container.appendChild(iframe);
    }

    summaryContent.appendChild(container);
  });
});
