import React from "react";
import { Link } from "react-router-dom";
import Article1 from "../assets/6557e9a8066ae.webp";
import Article2 from "../assets/rjb104-the-canadian-press-3.webp";
import Article3 from "../assets/yan-ots-VPGbPVMcBXg-unsplash.jpg";
import Article4 from "../assets/Untitled-design-2.webp";
import Article5 from "../assets/2014-01-16T120000Z_2115329838_GM1EA1H03B301_RTRMADP_3_USA-FIRE-CALIFORNIA.jpeg";
import Article7 from "../assets/Canadian-electricity-grid-scaled.webp";

import "./Writing.css";

const Writing = () => {
  return (
    <div className="reporting-wrapper">
      <section className="reporting-header-section">
        <h1>REPORTING</h1>
        <h2>Explore the stories I've written.</h2>
      </section>
      <section className="card-section">
        <article className="card">
          <Link
            to="https://www.canadianaffairs.news/2024/04/30/how-consumers-would-benefit-from-a-pan-canadian-electricity-grid/"
            target="_blank"
          >
            <figure>
              <img src={Article7} alt="Man walking with a parasol" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">
                CANADIAN AFFAIRS | april 30, 2024
              </p>
              <h3 className="card-title">
                How consumers would benefit from a pan-Canadian electricity grid
              </h3>
              <p className="card-summary">
                A better connected electricity grid could mean ‘billions of
                dollars back to households’. But to get there, provinces must
                learn to share
              </p>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://news-decoder.com/what-happens-when-space-junk-falls-to-earth/"
            target="_blank"
          >
            <figure>
              <img src={Article3} alt="Man walking with a parasol" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">NEWS DECODER | March 25, 2024</p>
              <h3 className="card-title">
                What happens when space junk falls to earth?
              </h3>
              <p className="card-summary">
                Way up over our heads satellites and rocket parts orbit the
                Earth. Sometimes pieces of metal fall towards us. Most burn up
                in the atmosphere, but not all.
              </p>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://www.thinkglobalhealth.org/article/talk-action-rethinking-language-climate-change"
            target="_blank"
          >
            <figure>
              <img src={Article5} alt="Man walking with a parasol" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">
                THINK GLOBAL HEALTH | March 18, 2024
              </p>
              <h3 className="card-title">
                From Talk to Action: Rethinking the Language of Climate Change
              </h3>
              <p className="card-summary">
                How climate change is talked about in society affects how people
                think and, ultimately, how people respond. What is the best way
                to talk about climate change in a way that inspires broad
                climate action?
              </p>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://news-decoder.com/in-icelandic-history-a-womans-place-might-be-at-sea/"
            target="_blank"
          >
            <figure>
              <img src={Article4} alt="Man walking with a parasol" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">NEWS DECODER | March 7, 2024</p>
              <h3 className="card-title">
                In Icelandic history, a woman’s place might be at sea
              </h3>
              <p className="card-summary">
                There isn’t much of a gender gap in Iceland, except in its
                maritime industry. But go back in time, and you’ll find women
                pulling in nets and steering the helm.
              </p>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://theconversation.com/mining-the-depths-norways-deep-sea-exploitation-could-put-it-in-environmental-and-legal-murky-waters-220909"
            target="_blank"
          >
            <figure>
              <img src={Article3} alt="Man walking with a parasol" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">THE CONVERSATION | FEB 1, 2024</p>
              <h3 className="card-title">
                Mining the depths: Norway’s deep-sea exploitation could put it
                in environmental and legal murky waters
              </h3>
              <p className="card-summary">
                In January, Norway became the first nation to open its
                continental shelf to commercial deep-sea mineral exploration.
                What does this mean for Norway’s environmental
              </p>
            </div>
          </Link>
        </article>
        <article className="card">
          <Link
            to="https://nationalpost.com/pmn/news-pmn/canada-news-pmn/volunteers-a-key-part-of-the-magic-at-annual-toronto-santa-claus-parade"
            target="_blank"
          >
            <figure>
              <img src={Article2} alt="Man walking with a parasol" />
            </figure>
            <div className="information-wrapper">
              <p className="publication-date">
                THE CANADIAN PRESS | Nov 25, 2023
              </p>
              <h3 className="card-title">
                Volunteers a key part of the magic at annual Toronto Santa Claus
                Parade
              </h3>
              <p className="card-summary">
                The volunteers — a crucial part of the machinery that brings the
                parade to life — can sometimes fly under the radar, but those
                who give their time and effort say there’s much to gain.
              </p>
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
                THE TORONTO STAR | Nov 19, 2023
              </p>
              <h3 className="card-title">
                Europe is becoming a hot spot for air conditioning. Can the
                energy grid keep up?
              </h3>
              <p className="card-summary">
                Cooling is a blind spot in energy policy, says the International
                Energy Agency (IEA) and is a looming threat to Europe’s energy
                grid as it adapts to the new reality.
              </p>
            </div>
          </Link>
        </article>
      </section>
    </div>
  );
};

export default Writing;
