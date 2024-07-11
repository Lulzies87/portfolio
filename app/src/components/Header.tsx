export default function Header() {
  return (
    <div className="green">
      <div className="content header">
        <div>Lilach Elayza</div>
        <div className="linksContainer">
          <button
            onClick={() => {
              const element = document.getElementById("cover");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("skills");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Skills
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("experience");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Experience
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("portfolio");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Portfolio
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
