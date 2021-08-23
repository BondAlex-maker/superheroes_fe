import {useState, useEffect} from "react";
import axios from "axios";

const Images = ({superhero}) => {
    console.log(superhero)
    const [images, setImages] = useState(superhero.image);
        return (
            <div className="container pt-4">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12 m-auto">
                        <div className="card shadow">
                            <div className="card-header">
                                <h4 className="card-title fw-bold"> Images List </h4>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                    {
                                        images.length > 0 ? (
                                            images.map((image) => (<>
                                                <div style={{cursor: "pointer"}} onClick={async function (){
                                                    await axios.delete(`http://localhost:8000/api/images/${image.id}`)
                                                }}>x</div>
                                                <div className="col-xl-6 col-lg-8 col-sm-12 col-12 mt-3" key={image.id}>
                                                    <img src={ "http://localhost:8000/uploads/" + image.image_name } className="img-fluid img-bordered" width="200px"
                                                    />
                                                </div>
                                                </>
                                            ))
                                        ) : (
                                            <h6 className="text-danger text-center">No Image Found </h6>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default Images;