import BaseLayout from "../components/layout/BaseLayout";
import { Container, Button } from "reactstrap";

const Home = () => {
    return (
        <BaseLayout>
            <Container>
                <Button color='danger'>Danger</Button>
            </Container>
        </BaseLayout>
    );
};

export default Home;
