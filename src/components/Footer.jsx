function Footer() {

  return (
    <footer
      className="
        bg-gray-50
        dark:bg-[#121A15]
        border-t
        border-gray-100
        dark:border-gray-900
        py-8
        px-6
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
        "
      >

        <p
          className="
            text-gray-600
            dark:text-gray-200
            text-sm
          "
        >
          © 2026 Minh Anh Nguyen
        </p>


        <p
          className="
            text-gray-500
            dark:text-gray-200
            text-sm
          "
        >
          Built with{" "}
          <span className="text-blue-500 font-medium">
            React
          </span>
          {" + "}
          <span className="text-purple-500 font-medium">
            Tailwind
          </span>
        </p>


      </div>

    </footer>
  );
}


export default Footer;