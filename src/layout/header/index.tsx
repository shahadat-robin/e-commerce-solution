import InfoBar from "./info-bar";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <>
      <InfoBar />
      <header className="sticky top-0">
        <div className="container">
          <div>
            Ad tempora ullam ipsam quae dolorem laborum voluptatibus temporibus, at asperiores
            facilis quam molestias perspiciatis adipisci aperiam quasi praesentium corrupti
            blanditiis libero.
          </div>
        </div>
      </header>
      <NavBar />
    </>
  );
}
