// Portfólio técnico — João Marcelo
// Script compartilhado por todas as páginas.
// No momento, a única interação que precisa de JS é o visualizador
// interno de PDF na página de Certificados.

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".pdf-viewer-overlay");
  if (!overlay) return; // esta página não tem o visualizador de certificados

  const dialog = overlay.querySelector(".pdf-viewer-dialog");
  const eyebrow = overlay.querySelector("[data-pdf-eyebrow]");
  const title = overlay.querySelector("[data-pdf-title]");
  const desc = overlay.querySelector("[data-pdf-desc]");
  const openLink = overlay.querySelector("[data-pdf-open]");
  const iframe = overlay.querySelector("[data-pdf-frame]");
  const closeBtn = overlay.querySelector(".pdf-viewer-close");

  function openViewer(card) {
    const { pdfId, pdfTitle, pdfIssuer, pdfDetail, pdfHref } = card.dataset;
    eyebrow.textContent = `Arquivo ${pdfId} · Visualização interna`;
    title.textContent = pdfTitle;
    desc.textContent = `${pdfIssuer} · ${pdfDetail}`;
    openLink.href = pdfHref;
    iframe.src = pdfHref;
    iframe.title = `Visualização do certificado ${pdfTitle}`;
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeViewer() {
    overlay.classList.remove("is-open");
    iframe.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".certificate-card").forEach((card) => {
    card.addEventListener("click", () => openViewer(card));
  });

  closeBtn.addEventListener("click", closeViewer);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeViewer();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) closeViewer();
  });
});
