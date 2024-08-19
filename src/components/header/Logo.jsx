import LogoImg from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div>
      <a href="/">
        <img className="h-9" src={LogoImg} alt="Weather App" />
      </a>
    </div>
  );
}
