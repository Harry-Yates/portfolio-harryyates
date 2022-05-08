import BaseLayout from "../components/layout/BaseLayout";
import { Container, Button } from "reactstrap";

const Home = () => {
    return (
        <BaseLayout>
            <Container>
                <Button color='danger'>Danger</Button>

                <div className='parent-class siblin-class'>
                    <h1>Harry YAtes</h1>
                    <h2>Hello</h2>
                    <h3>Hello</h3>
                    <div className='child-class'>Hello World</div>
                </div>
            </Container>
        </BaseLayout>
    );
};

export default Home;
