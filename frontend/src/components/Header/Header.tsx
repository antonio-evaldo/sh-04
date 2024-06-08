import backgroundImage from "../../assets/img/background-header.png";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { HeaderTitle } from "./HeaderTitle";

export function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="w-auto bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <HeaderTitle />
        <div className="pb-28 pt-40">
          <p className="mb-2 text-7xl font-bold text-evergreen">
            Encontre livros que <br /> sejam a sua cara!
          </p>
          <p className="mb-11 text-xl text-gray-500">
            Lorem Ipsum dolor sit amet
          </p>
          <Button text="Pesquisar livros" />
        </div>
      </Container>
    </header>
  );
}
