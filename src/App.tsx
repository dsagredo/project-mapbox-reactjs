import {FC} from "react";
import {
	Container,
} from "reactstrap";
import Header from "./components/Header";
import MapView from "./components/Map";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <MapView />
      </Container>
    </div>
  );
}

export default App;
