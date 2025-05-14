import React from "react";
import { Link } from "react-router-dom";
import Article1 from "../assets/6557e9a8066ae.webp";
import Article2 from "../assets/rjb104-the-canadian-press-3.webp";
import Article3 from "../assets/yan-ots-VPGbPVMcBXg-unsplash.jpg";
import Article4 from "../assets/Untitled-design-2.webp";
import Article5 from "../assets/2014-01-16T120000Z_2115329838_GM1EA1H03B301_RTRMADP_3_USA-FIRE-CALIFORNIA.jpeg";
import Article6 from "../assets/Space junk.jpeg";
import Article7 from "../assets/Canadian-electricity-grid-scaled.webp";
import Article8 from "../assets/NewsDecoder_climate.jpg";
import Article9 from "../assets/Walrus.jpg";
import "./Writing.css";

const Writing = () => {
  return (
    <div className="reporting-wrapper">
      <section className="reporting-header-section">
        <h1>REPORTING</h1>
        <h2>Explore my bylines.</h2>
      </section>
      <section className="card-section">
        <article className="card">
          <Link
            to="https://thewalrus.ca/faced-with-sky-high-ivf-costs-couples-look-abroad-to-start-families/"
            target="_blank"
          >
            <figure>
              <img src={Article9} alt="Babies, pills and suitcases" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">THE WALRUS | April 18, 2025</p>
              <h3 className="card-title">
                Faced with Sky-High IVF Costs, Couples Look Abroad to Start
                Families
              </h3>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://news-decoder.com/extreme-weather-makes-climate-change-a-reality-now/"
            target="_blank"
          >
            <figure>
              <img
                src={Article8}
                alt="Man paddling a rubberboat dow the fludded street"
              />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">NEWS DECODER | Oct. 7, 2024</p>
              <h3 className="card-title">
                Extreme weather makes climate change a reality now
              </h3>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://www.canadianaffairs.news/2024/04/30/how-consumers-would-benefit-from-a-pan-canadian-electricity-grid/"
            target="_blank"
          >
            <figure>
              <img src={Article7} alt="An electricity grid" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">
                CANADIAN AFFAIRS | April 30, 2024
              </p>
              <h3 className="card-title">
                How consumers would benefit from a pan-Canadian electricity grid
              </h3>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://news-decoder.com/what-happens-when-space-junk-falls-to-earth/"
            target="_blank"
          >
            <figure>
              <img src={Article6} alt="A satelite over South America" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">NEWS DECODER | March 25, 2024</p>
              <h3 className="card-title">
                What happens when space junk falls to earth?
              </h3>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://www.thinkglobalhealth.org/article/talk-action-rethinking-language-climate-change"
            target="_blank"
          >
            <figure>
              <img src={Article5} alt="A car driving away from a forest fire" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">
                THINK GLOBAL HEALTH | March 18, 2024
              </p>
              <h3 className="card-title">
                From Talk to Action: Rethinking the Language of Climate Change
              </h3>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://news-decoder.com/in-icelandic-history-a-womans-place-might-be-at-sea/"
            target="_blank"
          >
            <figure>
              <img src={Article4} alt="A painted woman in fishing gear" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">NEWS DECODER | March 7, 2024</p>
              <h3 className="card-title">
                In Icelandic history, a woman’s place might be at sea
              </h3>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://theconversation.com/mining-the-depths-norways-deep-sea-exploitation-could-put-it-in-environmental-and-legal-murky-waters-220909"
            target="_blank"
          >
            <figure>
              <img src={Article3} alt="ice floe" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">
                THE CONVERSATION | Feb. 1, 2024
              </p>
              <h3 className="card-title">
                Mining the depths: Norway’s deep-sea exploitation could put it
                in environmental and legal murky waters
              </h3>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://nationalpost.com/pmn/news-pmn/canada-news-pmn/volunteers-a-key-part-of-the-magic-at-annual-toronto-santa-claus-parade"
            target="_blank"
          >
            <figure>
              <img
                src={Article2}
                alt="Santa hailing the audience at the Santa Claus Parade"
              />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">
                THE CANADIAN PRESS | Nov. 25, 2023
              </p>
              <h3 className="card-title">
                Volunteers a key part of the magic at annual Toronto Santa Claus
                Parade
              </h3>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://www.thestar.com/news/world/europe-is-becoming-a-hot-spot-for-air-conditioning-can-the-energy-grid-keep-up/article_450b9c84-abe0-58f8-9ae3-ed37728d4d58.html"
            target="_blank"
          >
            <figure>
              <img src={Article1} alt="Man walking with a parasol" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">
                THE TORONTO STAR | Nov. 19, 2023
              </p>
              <h3 className="card-title">
                Europe is becoming a hot spot for air conditioning. Can the
                energy grid keep up?
              </h3>
            </div>
          </Link>
        </article>
      </section>
    </div>
  );
};

export default Writing;
