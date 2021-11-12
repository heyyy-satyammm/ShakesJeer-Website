import React from "react";
import { StreamData } from "./StreamData";
import { Link } from "react-router-dom";

export const Stream = () => {
  return (
    <div className="main clearfix">
      <div className="page-container">
        <section id="book_list">
          <div className="grid-shuffle">
            <ul id="grid" className="column">
              {StreamData.map((stream) => {
                return (
                  <li
                    className="book-item small-12 medium-6 columns"
                    key={stream.id}
                    // data-color="#370d59"
                  >
                    <div className="bk-img">
                      <div className="bk-wrapper">
                        <div className="bk-book bk-bookdefault">
                          <div className="bk-front">
                            <div
                              className="bk-cover"
                              style={{ backgroundColor: `${stream.color}` }}
                            ></div>
                          </div>
                          <div
                            className="bk-left"
                            style={{ backgroundColor: `${stream.color}` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="item-details">
                      <h3 className="book-item_title">{stream.course}</h3>
                      <div className="button ">Details</div>
                    </div>

                    {/* OVERLAY */}
                    <div className="main-overlay" style={{ display: "block" }}>
                      <div className="overlay-details">
                        <a href="#" className="close-overlay-btn">
                          Close
                        </a>
                        <div className="overlay-desc activated">
                          <div className="container">
                            <div className="button-effect">
                              <h2>Choose Your Semester!</h2>
                              <a
                                className="effect effect-1 "
                                href={stream.link1}
                                title="Sem-1"
                              >
                                1
                              </a>
                              <a
                                className="effect effect-1"
                                href="#"
                                title="Sem-2"
                              >
                                2
                              </a>
                              <a
                                className="effect effect-1"
                                href="#"
                                title="Sem-3"
                              >
                                3
                              </a>
                              <a
                                className="effect effect-1"
                                href="#"
                                title="Sem-4"
                              >
                                4
                              </a>
                              <a
                                className="effect effect-1"
                                href="#"
                                title="Sem-5"
                              >
                                5
                              </a>
                              <a
                                className="effect effect-1"
                                href="#"
                                title="Sem-6"
                              >
                                6
                              </a>
                              <a
                                className="effect effect-1"
                                href="#"
                                title="Sem-7"
                              >
                                7
                              </a>
                              <a
                                className="effect effect-1"
                                href="#"
                                title="Sem-8"
                              >
                                8
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
