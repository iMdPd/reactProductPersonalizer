import { Products } from "./components/Container/Products/Products";
import { Header } from "./components/Container/Header/Header";
import { Container } from "./components/Container/Container";

export const App = () => {
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  );
};
