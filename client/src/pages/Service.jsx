import React from 'react'
import design from "../assets/images/design.png";
import { useAuth } from '../store/auth';

export const Service = () => {

  const { services } = useAuth()
  return (
    <section className='section-services'>
      <div className="container">
        <h1 className='main-heading'>Service</h1>
      </div>

      <div className="container grid grid-three-cols">
        {/* {services.map((currElem, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={design} alt="our services" />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{currElem.provider}</p>
                    <p>{currElem.price}</p>
                  </div>
                  <h2>{currElem.service}</h2>
                  <p>{currElem.description}</p>
                </div>
              </div>
            )
          })} */}
        {
          services.map((currElem, index) => {
            const { provider, price, service, description } = currElem;
            return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={design} alt="our services" width="200" />
              </div>
              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
            );
          })
        }

      </div>
    </section>
  )
}
