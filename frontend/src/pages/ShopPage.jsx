import React from 'react'
import './styles/ShopPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import tripadvisor from '../components/assets/tripadvisor.png'
import sunset_surf from '../components/assets/sunset_surf.MP4'
import peniche_wave from '../components/assets/peniche_wave.MP4'

const ShopPage = () => {
  return (
    <div className="shop">
      <div className="banner">
        <a href="https://www.tripadvisor.com/ ">
          <img src={tripadvisor} alt="TripAdvisor" />
        </a>
        <h1>5 STARS <br/> SURF RENTALS</h1>
        <h3>Book a board here <br/> and get it hand-delivered by a former surf champion <br/> and his dog!</h3>
        <button className="btn btn-warning p-2 mt-3">Book a board</button>
        <video autoPlay muted loop>
          <source src={sunset_surf} type="video/mp4" />
        </video>
      </div>

      <div className="about bg-info rounded">
        <div className="left">
          <h3>Surf Rentals in Portugal</h3>
          <p>Run by a Wipe Out Champion, <b>Surf Rentals</b> is the <b>best surfboard rentals service</b> around Lisbon. It's more than self praise - surfers reviews from all over the world and <b>TripAdvisors 2021 Travellers Choice Award</b> make the case for us.</p>
          <button className="btn btn-light">Book a board</button>
        </div>
        <div className="right">
          <p>We deliver <b>high-quality problem-free surfboard rentals throughout Lisbon area - in Carcavelos, Ericeira, Guincho, Costa da Caparica or wherever you want a board</b>. And we can go as far as Peniche, Nazaré or even Algarve, if it works both for you and us - please email us with details before booking though.</p>
          <button className="btn btn-light">Get in touch</button>
        </div>
      </div>

      <div className="whyus bg-">
        <div className="">
          <h5>Champions surf knowledge</h5>
          <p>Our founder, Zezinho, is a chilled out former surf champion. <b>Ask him anything before or after renting the board</b> (+351 123 456 789). If it's surf related, he will gladly help. No problem!</p>
        </div>

        <div>
          <h5>High quality surfboards</h5>
          <p><b>Premium surfboards in perfect shape and at fair rates!</b> Regardless of your surfing level, preferred type of surfboard or budget, <b>we have a board to help you boost your surfing experience in Portugal.</b></p>
        </div>

        <div>
          <h5>We'll meet you anywhere</h5>
          <p>Choose a surfboard and tell us where and when you want it. <b>At the airport? At your hotel? At a surf spot? Anywhere.</b> Zézinho will personally meet you there carrying the board and precious local surf tips.</p>
        </div>

        <div>
          <h5>Approved by hundreds</h5>
          <p><b>We're relaxed… but 100% professional.</b> Our customer service is unriveled. Don't take our word for it - please <b>check the reviews from surfers all around the world about Surf Rentals.</b></p>
        </div>
      </div>

      <div className="popular">
        Popular Surfboards go heeere
      </div>

      <div className="surf-video">
        <div className="video-left">
          <video autoPlay muted loop>
            <source src={peniche_wave} type="video/mp4" />
          </video>
        </div>
        <div className="video-right">
          <h3>Surfing in Portugal</h3>
          <p>Portugal is a <b>surfing paradise</b>. The country has <b>over 800 km of coastline</b> and <b>more than 300 days of surfable waves</b> per year. The best surf spots are in the Lisbon area, Ericeira, Peniche, Nazaré and Algarve. <b>Surf Rentals</b> can deliver a board to any of these places.</p>
          <button>Book a board</button>
        </div>
      </div>



    </div>
  )
}

export default ShopPage
