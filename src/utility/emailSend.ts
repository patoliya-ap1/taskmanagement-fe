import emailjs from "@emailjs/browser";

export const sendEmail = async (form: HTMLFormElement) => {
  return emailjs
    .sendForm("service_9q3a3sj", "template_7bl7kje", form, "1FqNoM-FHq_fEPAcb")
    .then((result) => {
      console.log("Email successfully sent!", result.text);
    })
    .catch((error) => {
      console.log("Failed to send...", error.text || error);
    });
};
