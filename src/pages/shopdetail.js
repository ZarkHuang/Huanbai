import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


import cupd1 from "../img/shop/cupd1.jpg";
import cupd2 from "../img/shop/cupd2.jpg";
import cupd3 from "../img/shop/cupd3.jpg";
import cupd4 from "../img/shop/cupd4.webp";

function Shopdetail() {

    const [mainImg, setMainImg] = useState(cupd4);

    function handleSmallImgClick(event) {
        const { src } = event.target;
        setMainImg(src);
    }

    const prevImg = mainImg === cupd1 ? cupd4 : mainImg === cupd2 ? cupd1 : mainImg === cupd3 ? cupd2 : cupd3;
    const nextImg = mainImg === cupd1 ? cupd2 : mainImg === cupd2 ? cupd3 : mainImg === cupd3 ? cupd4 : cupd1;

    return (
        <div className="shopcontainer">

            <div id="toCart">

                <div className="background-button">
                    <span>
                        <Link to={`/cart`} className="linkToShop">
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </Link>
                    </span>
                </div>
            </div>

            <section id="prodetails" className="section-p1">

                <div className="single-pro-image">


                    <div className="qqqq">



                        <div className="carousel-controls">
                            <button className="carousel-prev" onClick={() => setMainImg(prevImg)}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>

                            <button className="carousel-next" onClick={() => setMainImg(nextImg)}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>

                        <img src={mainImg} width="60%" id="MainImg" />



                    </div>



                    <div className="small-img-group">

                        <div className="small-img-col">
                            <img
                                className="small-img"
                                src={cupd4}
                                width="100%"
                                onClick={handleSmallImgClick}
                            />
                        </div>

                        <div className="small-img-col">
                            <img
                                className="small-img"
                                src={cupd1}
                                width="100%"
                                onClick={handleSmallImgClick}
                            />
                        </div>

                        <div className="small-img-col">
                            <img
                                className="small-img"
                                src={cupd2}
                                width="100%"
                                onClick={handleSmallImgClick}
                            />
                        </div>

                        <div className="small-img-col">
                            <img
                                className="small-img"
                                src={cupd3}
                                width="100%"
                                onClick={handleSmallImgClick}
                            />
                        </div>

                    </div>
                </div>


                <div className="single-pro-details">
                    <h6><b><Link to={`/shop`} ><span>????????????</span>/</Link></b>??????</h6>
                    <h4>???????????????350ml</h4>
                    <h2>?????? : NTD 150???</h2>
                    <select>
                        <option>????????????</option>
                        <option>??????</option>
                        <option>??????</option>
                        <option>??????</option>
                    </select>
                    <input type="number" value="1" />
                    <button className="normal">???????????????</button>
                    <h4>????????????</h4>
                    <ul>
                        <li>?????? : ????????????</li>
                        <li>?????? : 350mL</li>
                        <br></br>
                        <br></br>
                        <br></br>
                    </ul>
                </div>
            </section>


        </div>

    );
}



export default Shopdetail;