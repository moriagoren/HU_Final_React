import Title from "../components/Title";

function About() {

    return (<>

        <Title mainText="B-BEAUTY POINT"
            subText="B-BEAUTY POINT An online shopping site for thousands of cosmetics and care products We at b beauty will help you group all businesses to organize beauty, fashion and styling from head to toe"
        />
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