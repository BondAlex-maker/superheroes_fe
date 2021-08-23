const ImageUpload = ({error, handleChange}) => {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12 m-auto">
                        <div className="card shadow">
                            {error.status === "successs" ? (
                                <div className="alert alert-success">
                                    {error.message}
                                </div>
                            ) : error.status === "failed" ? (
                                <div className="alert alert-danger">
                                    {error.message}
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="card-header">
                                <h4 className="card-title fw-bold">
                                    Upload Image in React Using Laravel 8 API
                                </h4>
                            </div>

                            <div className="card-body">
                                <div className="form-group py-2">
                                    <label htmlFor="images">Images</label>
                                    <input
                                        type="file"
                                        name="image"
                                        multiple
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    <span className="text-danger">
                                        {error.error}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    // }
}

export default ImageUpload;
