function Btn() {
    return ( <>
    
     <div className="m-4 d-flex justify-content-center">
                <button className="me-2 col-3 btn btn-outline-danger">cancel</button>
                <button  className="me-2 col-3 btn btn-outline-primary"> <i className="bi bi-arrow-repeat"></i></button>

            </div>
            <div className="d-flex justify-content-center ">
                <button className="col-6 btn btn-primary">
                    submit
                </button>
            </div> 
    
    </> );
}

export default  Btn;