import React from "react";
import "./Advertising.css";

function homeAdvertising() {
  return (
    <>
      <section>
        <div className="advertising">
          <div className="container">
            <div className="advertising_content">
              <div className="advertising_content-title">
                <h2>
                  Наша цель - создать фантастический <br /> сервис для всех
                  потребителей
                </h2>
                <div className="block">
                  <div className="box">
                    <h1 className="box_content">5</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc
                      a pharetra viverra enim nunc.{" "}
                    </p>
                  </div>
                  <div className=" convallis">
                    <div className="volutpat">
                      <h1 className="volutpat_content">30</h1>
                      <p>
                        {" "}
                        Gravida vel convallis id aliquet volutpat nullam
                        dignissim. Amet parturient elementum lectus rhoncus at.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="elementum ">
                    <div className="aliquet">
                      <h1 className="aliquet_content">300</h1>
                      <p>
                        Sed varius ut venenatis id amet et consectetur
                        pellentesque. Vitae urna ornare vel suspendisse
                        tincidunt.
                      </p>
                    </div>
                  </div>
                  <div className="sed">
                    <div className=" velit">
                      <h1 className="velit_content">8</h1>
                      <p>
                        Id enim ornare lacus duis. Ac fermentum auctor cras
                        adipiscing feugiat quis convallis velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default homeAdvertising;
