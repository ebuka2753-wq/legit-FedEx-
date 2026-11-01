
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
    submit: "Lieferinformationen senden"
  },
  ar: {
    title: "طردك يسافر حول العالم.",
    register: "تسجيل التوصيل",
    submit: "إرسال معلومات التوصيل"
  }
};

const language = document.getElementById("lang");

function changeLanguage(code) {
  const t = translations[code] || translations.en;

  document.querySelector(".hero h1").textContent = t.title;
  document.querySelector(".form-section h2").textContent = t.register;
  document.querySelector("form button").textContent = t.submit;

  document.documentElement.dir =
    code === "ar" ? "rtl" : "ltr";
}

language.addEventListener("change", function() {
  changeLanguage(this.value);
});

const preferred = (navigator.language || "en").slice(0, 2);

language.value = translations[preferred] ? preferred : "en";
changeLanguage(language.value);

document.getElementById("deliveryForm")
.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!this.reportValidity()) return;

  const data = new FormData(this);

  const message = `
NEW DELIVERY REQUEST

Sender Name: ${data.get("fullName")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}

Sender Country: ${data.get("country")}
Sender City: ${data.get("city")}
Postal Code: ${data.get("postal")}
Sender Address: ${data.get("address")}

Receiver Name: ${data.get("recipient")}
Receiver Phone: ${data.get("recipientPhone")}

Destination Country: ${data.get("destination")}
Destination City: ${data.get("destinationCity")}
Delivery Address: ${data.get("destinationAddress")}

Parcel Description: ${data.get("parcel")}

Delivery Fee: $600 USD
`;

  const whatsapp =
    "https://wa.me/2349040071415?text=" +
    encodeURIComponent(message);

  window.open(whatsapp, "_blank");
});
