
const translations = {
  en: {
    title: "Your Package, Moving Across The World.",
    register: "Customer Delivery Registration",
    submit: "Submit Delivery Information"
  },
  es: {
    title: "Tu paquete viaja por todo el mundo.",
    register: "Registro de entrega",
    submit: "Enviar información de entrega"
  },
  fr: {
    title: "Votre colis voyage dans le monde entier.",
    register: "Inscription de livraison",
    submit: "Envoyer les informations"
  },
  pt: {
    title: "Sua encomenda viaja pelo mundo.",
    register: "Cadastro de entrega",
    submit: "Enviar informações"
  },
  de: {
    title: "Ihr Paket reist um die ganze Welt.",
    register: "Lieferregistrierung",
    submit: "Informationen senden"
  },
  ar: {
    title: "طردك يسافر حول العالم.",
    register: "تسجيل التوصيل",
    submit: "إرسال المعلومات"
  }
};

// Change website language
function changeLanguage() {
  const language = document.getElementById("lang").value;
  const selected = translations[language] || translations.en;

  document.querySelector(".hero h1").textContent = selected.title;
  document.querySelector(".form-section h2").textContent = selected.register;

  const submitButton = document.querySelector("#deliveryForm button");
  if (submitButton) {
    submitButton.textContent = selected.submit;
  }

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}

// Connect language selector
const languageSelector = document.getElementById("lang");

if (languageSelector) {
  languageSelector.addEventListener("change", changeLanguage);
}

// Automatically display current year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Delivery form submission
const deliveryForm = document.getElementById("deliveryForm");

if (deliveryForm) {
  deliveryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!deliveryForm.checkValidity()) {
      deliveryForm.reportValidity();
      return;
    }

    const formData = new FormData(deliveryForm);

    const details = [
      "NEW DELIVERY REQUEST",
      "",
      "SENDER DETAILS",
      `Full Name: ${formData.get("fullName") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Phone: ${formData.get("phone") || ""}`,
      `Country: ${formData.get("country") || ""}`,
      `City: ${formData.get("city") || ""}`,
      `Postal Code: ${formData.get("postal") || ""}`,
      `Address: ${formData.get("address") || ""}`,
      "",
      "RECIPIENT DETAILS",
      `Recipient Name: ${formData.get("recipient") || ""}`,
      `Recipient Phone: ${formData.get("recipientPhone") || ""}`,
      `Destination Country: ${formData.get("destination") || ""}`,
      `Destination City: ${formData.get("destinationCity") || ""}`,
      `Destination Address: ${formData.get("destinationAddress") || ""}`,
      "",
      `Parcel Description: ${formData.get("parcel") || ""}`,
      "Displayed Delivery Fee: $600 USD"
    ];

    const message = encodeURIComponent(details.join("\n"));

    const whatsappNumber = "2349040071415";
    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  });
}

// Set initial language
changeLanguage();
