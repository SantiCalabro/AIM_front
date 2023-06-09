import React, { useRef } from "react";
import ContactPic from "../assets/Contacto.jpg";
import C from "../styles/Contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "../components/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";
export default function Contact() {
  const mapsKey = import.meta.env.VITE_REACT_APP_MAPS_KEY;
  const lang = useSelector(state => state.language);
  const ESP = lang === "ESP";
  const ENG = lang === "ENG";
  const { isLoaded } = useJsApiLoader({
    id: mapsKey,
    googleMapsApiKey: mapsKey,
  });

  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [msg, setMsg] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const errorSetting = e => {
    setError(
      handleValidate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleValidate = input => {
    const errors = {};
    const regexEmail = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
    if (!input.user_name) {
      errors.user_name = "*A name is required";
    }
    if (!input.user_email) {
      errors.user_email = "*An email is required";
    } else if (!regexEmail.test(input.user_email)) {
      errors.user_email = "*Please give us a valid email";
    }
    if (!input.message) {
      errors.message = "*A message is required";
    }

    if (
      !error.user_name &&
      !error.user_email &&
      !error.message &&
      input.message.length > 0 &&
      input.user_name.length > 0 &&
      input.user_email.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    return errors;
  };
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    setMsg(true);

    setInput({ user_name: "", user_email: "", message: "" });
    setDisable(true);
  };
  return (
    <div className={C.container}>
      <div className={C.msgContainer}>
        <div className={msg ? C.msg : C.hiddenMsg}>
          <h3>
            {ESP
              ? "Mensaje enviado!"
              : ENG
              ? "Message sent!"
              : "Mensagem enviada!"}
          </h3>
          <p className={C.paragraph}>
            {ESP
              ? "¡Muchas gracias! Recibirás una respuesta a la brevedad."
              : ENG
              ? "Thank you! You will receive a reply as soon as possible."
              : "Obrigado! Receberá uma resposta em breve."}
          </p>
          <div className={C.btnCont}>
            <button onClick={() => setMsg(false)}>Ok!</button>
          </div>
        </div>
      </div>
      <div className={msg && C.background}></div>

      <h1 className={C.headerTitle}>
        {ESP ? "Contactanos" : ENG ? "Contact us" : "Contactar"}
      </h1>
      <div className={C.headerContainer}>
        <img src={ContactPic} alt="" />
      </div>
      <div className={C.contactContainer}>
        <h2>
          {ESP
            ? "No dudes en contactarnos"
            : ENG
            ? "Don't hesitate to contact us"
            : "Não hesite em contactar-nos"}
        </h2>
        <p>
          {ESP
            ? "Haz click en el número telefónico para escribirnos vía WhatsApp"
            : ENG
            ? "Click on the phone number below to write us via WhatsApp."
            : "Clique no número de telefone para nos escrever via WhatsApp"}
        </p>
        <div className={C.contact}>
          <div className={C.region}>
            <h3>Misiones</h3>
            <p>Lorem ipsum dolor - </p> <p className={C.phone}>123 XXX XXX</p>
          </div>
          <div className={C.region}>
            <h3>Salta</h3>
            <p>Lorem ipsum dolor - </p> <p className={C.phone}>123 XXX XXX</p>
          </div>
          <div className={C.region}>
            <h3>Brasil</h3>
            <p>Lorem ipsum dolor - </p> <p className={C.phone}>123 XXX XXX</p>
          </div>
        </div>
      </div>
      <div className={C.infoContainer}>
        <div className={C.mapContainer}>
          <Map isLoaded={isLoaded} />
        </div>
        <div className={C.formContainer}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={C.form}>
              <div className={C.name}>
                <label htmlFor="">
                  {ESP ? "Nombre" : ENG ? "Name" : "Nome"}
                </label>
                <span className={C.error}>
                  {error.user_name && error.user_name}
                </span>
                <input
                  value={input.user_name || ""}
                  type="text"
                  name="user_name"
                  onChange={e => {
                    handleChange(e);
                    errorSetting(e);
                  }}
                  onBlur={e => errorSetting(e)}
                />
              </div>
              <div className={C.mail}>
                <label htmlFor="">
                  {ESP
                    ? "Correo electrónico"
                    : ENG
                    ? "Email"
                    : "Correio electrónico"}
                </label>
                <span className={C.error}>
                  {error.user_email && error.user_email}
                </span>
                <input
                  value={input.user_email || ""}
                  type="text"
                  name="user_email"
                  onChange={e => {
                    handleChange(e);
                    errorSetting(e);
                  }}
                  onBlur={e => errorSetting(e)}
                />
              </div>
              <div className={C.message}>
                <label htmlFor="">
                  {ESP ? "Mensaje" : ENG ? "Message" : "Mensagem"}
                </label>
                <span className={C.error}>
                  {error.message && error.message}
                </span>
                <textarea
                  value={input.message}
                  name="message"
                  onChange={e => {
                    handleChange(e);
                    errorSetting(e);
                  }}
                  onBlur={e => errorSetting(e)}
                />
              </div>
              <button
                className={disable ? C.disabled : C.active}
                type="submit"
                value="Send"
                onClick={e => {
                  disable && e.preventDefault();
                }}
              >
                {ESP ? "Enviar" : ENG ? "Send" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
