const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Bulgaria</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Number</h2>
            <p>+380689296521 / +359878392507</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>@Shinei_Wallenstein</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">
                ivantripanecwork@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
