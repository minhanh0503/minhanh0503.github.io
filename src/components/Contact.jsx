import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const contactLinks = {
    Email: "mailto:nguyenminhanh290503@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/minh-anh-0503-nguyen/",
    GitHub: "https://github.com/minhanh0503",
  };

  const contacts = t.contact.contacts.map((contact) => ({
    ...contact,
    link: contactLinks[contact.name],
  }));

  return (
    <section
      id="contact"
      className="
        py-24
        px-6
        bg-[#f6cde2]
        dark:bg-[#101827]
      "
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <p
          className="text-[#9B7EDC]
    dark:text-[#A3C9A8] font-semibold"
        >
          {t.contact.label}
        </p>
        <h2
          className="
            mt-2
            text-4xl
            font-bold
            text-[#25212B]
dark:text-[#E5E7EB]
          "
        >
          {t.contact.title}
        </h2>

        <p
          className="
            mt-5
            text-[#6B6575]
          dark:text-[#B8C1D1]
            text-lg
            max-w-2xl
            mx-auto
          "
        >
          {t.contact.description}
        </p>

        {/* Contact Cards */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-6
            mt-12
          "
        >
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              className="
              bg-white
              dark:bg-[#182235]
              rounded-2xl
              p-6
              shadow-sm
              dark:shadow-black/20
              hover:shadow-md
              transition
            "
            >
              <h3
                className="
                  text-[#9B7EDC]
                dark:text-[#A3C9A8]
                  font-semibold
                "
              >
                {contact.name}
              </h3>

              <p
                className="
                  mt-3
                  text-[#4B4655]
                dark:text-[#D1D9E6]
                  break-words
                "
              >
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        {/* <a
          href="/MinhAnh_Nguyen_Resume.pdf"
          download
          className="
            inline-block
            mt-10
            px-8
            py-3
            bg-blue-600
            text-white
            rounded-lg
            font-medium
            hover:bg-blue-700
            transition
          "
        >
          Download Resume
        </a> */}
      </div>
    </section>
  );
}

export default Contact;
