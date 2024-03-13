import React from 'react'
import './styles/ShopPage.css'
import tripadvisor from '../components/assets/tripadvisor.png'
import sunset_surf from '../components/assets/sunset_surf.MP4'

const ShopPage = () => {
  return (
    <div className="shop">
      <div className="banner">
        <a href="https://www.tripadvisor.com/ ">
          <img src={tripadvisor} alt="TripAdvisor" />
        </a>
        <h1>5 STARS <br/> SURF RENTALS</h1>
        <h3>Book a board here <br/> and get it hand-delivered by a former surf champion <br/> and his dog!</h3>
        <button>Book a board</button>
        <video autoPlay muted loop>
          <source src={sunset_surf} type="video/mp4" />
        </video>
      </div>

      <div className="about">
        <div className="left">
          <h3>Surf Rentals in Portugal</h3>
          <p>Run by a Wipe Out Champion, <b>Surf Rentals</b> is the <b>best surfboard rentals service</b> around Lisbon. It's more than self praise - surfers reviews from all over the world and <b>TripAdvisors 2021 Travellers Choice Award</b> make the case for us.</p>
          <button>Book a board</button>
        </div>
        <div className="right">
          <p>We deliver <b>high-quality problem-free surfboard rentals throughout Lisbon area - in Carcavelos, Ericeira, Guincho, Costa da Caparica or wherever you want a board</b>. And we can go as far as Peniche, Nazaré or even Algarve, if it works both for you and us - please email us with details before booking though.</p>
          <button>Get in touch</button>
        </div>
      </div>

      <div className="whyus">
        <div>
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

      <div className="john-video">
        <iframe
          width="1540"
          height="810"
          src="https://www.youtube.com/embed/dexWs7urJtk?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  )
}

export default ShopPage
