import { Card, CardGroup } from "react-bootstrap";
import Title from "../components/Title";

function About() {

    return (<>

        <Title mainText="B-BEAUTY POINT"
            subText="B-BEAUTY POINT An online shopping site for thousands of cosmetics and care products We at b beauty will help you group all businesses to organize beauty, fashion and styling from head to toe"
        />
        <div className="d-flex justify-content-center mt-5">
            <CardGroup className="w-75">
                <Card className=" ">
                    <Card.Img className="rounded-circle w-75" variant="top" src="https://cdn.pixabay.com/photo/2023/11/25/16/56/dragon-8412130_1280.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="">
                    <Card.Img className="rounded-circle w-75  position-absolute top-50 start-50 translate-middle" variant="top" src="https://cdn.pixabay.com/photo/2023/11/25/16/56/dragon-8412130_1280.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className="rounded-circle w-75" variant="top" src="https://cdn.pixabay.com/photo/2023/11/25/16/56/dragon-8412130_1280.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>



        <div className="main-wrap" style={{ width: "22rem", height: "350px" }}>
            <div className="border border-success p-3 mb-2 bg-success-subtle text-emphasis-success">
                <h5><span>hair care</span></h5>
                <div>A case for caring for dry and damaged hair that has gone smooth</div>
            </div>
            <div className="border border-danger p-3 mb-2 bg-danger-subtle text-emphasis-danger">
                <h5><span>Makeup</span></h5>
                <div>Makeup products in a wide variety of quality products</div>
            </div>
            <div className="border border-warning p-3 mb-2 bg-warning-subtle text-emphasis-warning">
                <h5><span>fashion brands</span></h5>
                <div>A wide variety of clothing details from luxury brands</div>
            </div>
            <div className="border border-info p-3 mb-2 bg-info-subtle text-emphasis-info">
                <h5><span>Treatment and care of the nail</span></h5>
                <div>A variety of nail care preparations for pedicures, manicures and nail polishes</div>
            </div>
            <div className="border border-primary-subtle p-3 mb-2 bg-primary-subtle text-emphasis-primary">
                <h5><span>Perfume and atmosphere</span></h5>
                <div>A selection of perfumes for women, men and home</div>
            </div >
            <div className="border border-secondary p-3 mb-2 bg-dark-subtle text-emphasis-dark">
                <h5><span>Hair appliances</span></h5>
                <div>Hair appliances from the best and most talented</div>
            </div >
        </div >

    </>
    );
}

export default About;