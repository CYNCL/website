import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./banner.scss";
const Banner = () => {
  const PurchaseModalOpen = () => {
    window.$("#exampleModal").modal("show");
  };

  const PurchaseModalclose = () => {
    window.$("#exampleModal").modal("hide");
  };

  useEffect(() => {
    PurchaseModalOpen();
  }, []);

  const owl_option = {
    nav: true,
    dots: false,
    dotsEach: false,
    loop: true,
    autoplay: false,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      361: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 1,
        margin: 15,
      },
      700: {
        items: 3,
        margin: 40,
      },
      1000: {
        items: 4,
        margin: 40,
      },
      1200: {
        items: 4,
        margin: 40,
      },
    },
  };
  return (
    <>
      <section className="main_Section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-12 m-auto">
              <div className="row">
                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <h1 className="ghghg">
                    Collect your <br /> favourite <br /> Chronicles
                  </h1>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui <br /> blanditiis praesentium voluptatum deleniti atque
                    corrupti quos quidem <br /> rerum facilis est et expedita
                    distinctio libero tempore, cum soluta nobis <br /> est.
                  </p>
                  <div className="two_items">
                    <button>How to Buy</button>
                    <div className="">
                      <h6>View on opensea</h6>
                      <span>
                        <img
                          src="./assestmeta/Crynical/bannerimg1.svg"
                          alt="img"
                          className="image-fluid"
                        />
                      </span>
                    </div>
                  </div>
                </div> */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                  <div className="banner_img">
                    <img
                      src="./assestmeta/Crynical/CYNC Project landing page new.png"
                      alt="img"
                      className="img-fluid s"
                    />
                  </div>
                  <div className="logo_img">
                    <a href="https://twitter.com/CYNCProject" target="_blank">
                      <div className="img">
                        <span>
                          <i class="fab fa-twitter"></i>
                        </span>
                      </div>
                    </a>

                    <a href="https://facebook.com/CYNCProject" target="_blank">
                      <div className="img">
                        <span>
                          <i class="fab fa-facebook"></i>
                        </span>
                      </div>
                    </a>
                    <a href=" https://opensea.io/CYN-C" target="_blank">
                      <div className="img">
                        <img
                          src="./assestmeta/Crynical/opensea.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </a>
                    <a href="https://medium.com/@cyn-c" target="_blank">
                      <div className="img">
                        <img
                          src="./assestmeta/Crynical/M.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </a>

                    <a href="https://t.me/CYNCommunity" target="_blank">
                      <div className="img">
                        <img
                          src="./assestmeta/Crynical/messagevector.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </a>

                    <a href="https://discord.gg/BpHbpDdt7w" target="_blank">
                      <div className="img">
                        <img
                          src="./assestmeta/Crynical/vector.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </a>

                    <a
                      href="https://www.redditinc.com//BpHbpDdt7w"
                      target="_blank"
                    >
                      <div className="img">
                        <img
                          src="./assestmeta/Crynical/discord.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww">
          <img
            src="./assestmeta/Crynical/s1.png"
            alt="img"
            className="image-fluid"
          />
        </div>
      </section>
      <section className="who_we_are">
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="about_us" id="aboutus_page">
                    <div className="banner_imgncsjcn">
                      <img src="./assestmeta/Crynical/about1.svg" alt="img" />
                    </div>
                    <h5>Who We Are</h5>
                    <h4>
                      Cyn-C Is a multi-layered blockchain project designed to progressively build a comic-based<br />
                      NFT universe, featuring a fully fleshed out game and coin reward experience for the <br />
                      Cyn-Community.<br /><br />
                    </h4>
                    <p>
                      The project combines the use of collectible NFTs in the form of trading
                      cards, <br /> PVP battle cards, comics, limited edition artwork and memberships. <br /> <br />
                        
                      The aim of the Cyn-C is to build central utility around our very own currency, <br />
                      Cyn-Coin ($CYNC), in all facets of the project.
                    </p>
                    <h3>
                      At vero eos et accusamus et iusto odio dignissimos <br />{" "}
                      ducimus qui blanditiis praesentium voluptatum deleniti{" "}
                      <br /> atque.
                    </h3>
                    <button>
                      {" "}
                      <a
                        href="./assestmeta/Crynical/Whitepaper.pdf"
                        target="_blank"
                      >
                        {" "}
                        Read Our WhitePaper
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="about_img">
                    <img
                      src="./assestmeta/Crynical/aboutus.png"
                      alt="img"
                      className="image-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our_nft" id="ournft_page">
        <div className="shadoww7">
          <img
            src="./assestmeta/Crynical/s7.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-10 col-12 m-auto">
              <div className="text">
                <div className="banner_imgncsjcn">
                  <img src="./assestmeta/Crynical/some1.svg" alt="img" />
                </div>
                <h1 className="ghghg">Characters of the Cynverse</h1>
                <p>
                  Click on each character to view their respective OpenSea <br /> 
                  page with all available NFTs.
                </p>
              </div>
              <div class="owl_option">
                <OwlCarousel className="owl-theme" {...owl_option}>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our1.png" alt="img" />
                    <h4>Dystain #001</h4>
                  </div>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our2.png" alt="img" />
                    <h4>Z-1A #001</h4>
                  </div>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our3.png" alt="img" />
                    <h4>Niancia #001</h4>
                  </div>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our4.png" alt="img" />
                    <h4>Z-Merc #001</h4>
                  </div>
                  <div class="item">
                    <img src="./assestmeta/Crynical/our1.png" alt="img" />
                    <h4>Dystain #001</h4>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww8">
          <img
            src="./assestmeta/Crynical/s8.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>

      <section className="about_token" id="cyncoin_page">
        <div className="shadoww5">
          <img
            src="./assestmeta/Crynical/s5.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="about_img">
                    <img src="./assestmeta/Crynical/token2.svg" alt="img" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="about_us">
                    <div className="banner_imgncsjcn">
                      <img src="./assestmeta/Crynical/token1.svg" alt="img" />
                    </div>
                    <h5>ABOUT THE TOKEN</h5>
                    <h4>
                      <b>TAXATION</b>
                    </h4>
                    <p>
                      <b>2% Reflection</b> <br />
                      2% of ALL transactions for buying and selling will<br />
                      be reflected back to all holders of CYN-Coin.<br /> <br />
                        
                      <b> 1% Community Fund </b> <br />
                      1% of all transactions will be sent to a gnosis safe wallet, funds will<br />
                      be used to add incentive for new investors and reward existing CYN-Coin holders. <br /><br />
                        
                      <b>1% Project Fund</b><br />
                      1% of all transactions will be sent to a gnosis safe wallet, funds will<br />
                      be used to develop the project.<br /> <br />

                    </p>
                    <h3>
                      Contract Address - 0xa5522d6137Ece774e8084BBf9c34398192cCdCa5 <br />{" "}
                    </h3>
                    <button>
                      {" "}
                      <a href="/Coming"> BUY ON CYNSWAP</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww6">
          <img
            src="./assestmeta/Crynical/s6.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>

      <section className="outer">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-10 col-lg-11 col-md-12 col-12 m-auto">
              <div className="hdhdhd">
                <div className="inner">
                  <p>TOKEN SYMBOL</p>
                  <h6>$CYNC</h6>
                </div>
                <span>|</span>
                <div className="inner">
                  <p>TOTAL SUPPLY</p>
                  <h6>100 billion </h6>
                </div>
                <span>|</span>
                <div className="inner">
                  <p>Current Price</p>
                  <h6>$0.00001821 </h6>
                </div>
                <span>|</span>
                <div className="inner">
                  <p>Market Cap</p>
                  <h6>$1,812,740.49</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="howtobuy" id="howtobuy_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-11 col-12 m-auto">
              <div className="text">
                <div className="banner_imgncsjcn">
                  <img src="./assestmeta/Crynical/buy.svg" alt="img" />
                </div>
                <h1 className="ghghg">how to buy</h1>

              </div>
              <div className="main">
                <div className="left">
                  <img src="./assestmeta/Crynical/buy1.svg" alt="img" />
                </div>
                <div className="right">
                  <h4>Step-01</h4>
                  <p>
                  Create a MetaMask Wallet $CYNC token is available on the {" "} <br />
                  Ethereum blockchain. MetaMask is a third party ERC20 (Ethereum)  {" "}<br />
                  browser wallet, and the very best at that! On Google Chrome, visit metamask.io  {" "} <br />
                  to download the extension and, set up a wallet. On mobile? {" "}<br />
                  Get the MetaMask app for iPhone or Android.
                  </p>
                </div>
              </div>
              <div className="img_hold">
                <img src="./assestmeta/Crynical/buy5.svg" alt="img" />
              </div>
              <div className="main">
                <div className="right hdfbndjfj">
                  <h4>Step-02</h4>
                  <p>
                    Send $ETH to MetaMask Acquire Ethereum through MetaMask <br />{" "}
                    itself or transfer it to your MetaMask wallet address from {" "} <br />
                    another wallet (e.g. Coinbase or Binance).
                  </p>
                </div>
                <div className="left">
                  <img src="./assestmeta/Crynical/buy2.svg" alt="img" />
                </div>
              </div>
              <div className="img_hold">
                <img src="./assestmeta/Crynical/buy4.svg" alt="img" />
              </div>
              <div className="main">
                <div className="left">
                  <img src="./assestmeta/Crynical/buy3.svg" alt="img" />
                </div>
                <div className="right">
                  <h4>Step-03</h4>
                  <p>
                  Swap $ETH for $CYNC Add $CYNC Contract Address to MetaMask <br />{" "}
                  Custom Token - 0xa5522d6137Ece774e8084BBf9c34398192cCdCa5 {" "} <br />
                  Enter the amount of $ETH you would like to swap for $CYNC. {" "} <br />
                  Click Connect Wallet then Swap! You are now a $CYNC Holder!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww9">
          <img
            src="./assestmeta/Crynical/s9.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>
      <section className="learn_us">
        <div className="shadoww">
          <img
            src="./assestmeta/Crynical/s2.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        {/* <div className="banner_imgncsjcn">
          <img src="./assestmeta/Crynical/learn1.svg" alt="img" />
        </div> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-10 col-12 m-auto">
              <div className="col_items">
                {/* <div className="text">
                  <h1 className="ghghg">learn about us</h1>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium <br /> voluptatum deleniti atque
                    corrupti quos quidem rerum facilis est et expedita.
                  </p>
                </div> */}
                <div className="learnus_img">
                  {/* <img src="./assestmeta/Crynical/picture.png" alt="img" /> */}
                  <video
                    className="video-player"
                    muted="muted"
                    playsinline="playsinline"
                    autoPlay
                    loop
                    width="100%"
                    class="supervideo zjcbsjbc"
                  >
                    <source
                      src="/assestmeta/Crynical/how_to_buy.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww3">
          <img
            src="./assestmeta/Crynical/s3.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="shadoww4">
          <img
            src="./assestmeta/Crynical/s4.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>

      <section className="meet_our" id="meetour_page">
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="text">
                <div className="banner_imgncsjcn">
                  <img src="./assestmeta/Crynical/meet1.svg" alt="img" />
                </div>
                <h2>Meet Our Team</h2>
              </div>
              <div className="main_card">
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card1.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>KD6</h6>
                  <p>Project Manager</p>
                  {/* <div className="icon">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div> */}
                </div>
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card1.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>Stemr0ach</h6>
                  <p> Project Manager</p>
                  {/* <div className="icon">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div> */}
                </div>
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card1.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>LSboi</h6>
                  <p>Coding Dev</p>
                  {/* <div className="icon">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div> */}
                </div>
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card2.svg"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>Hatter</h6>
                  <p>Outreach</p>
                  {/* <div className="icons">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div> */}
                </div>
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card3.svg"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>Majik </h6>
                  <p>Head of Artwork</p>
                  {/* <div className="icons">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div> */}
                </div>
                <div className="card">
                  <img
                    src="./assestmeta/Crynical/card2.svg"
                    alt="img"
                    className="img-fluid"
                  />
                  <h6>??????</h6>
                  <p>Chinese Liaison</p>
                  {/* <div className="icons">
                    <img
                      src="./assestmeta/Crynical/icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join_our" id="joinour_page">
        <div className="shadoww10">
          <img
            src="./assestmeta/Crynical/s10.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="bg">
                <div className="text">
                  <div className="banner_imgncsjcn">
                    <img src="./assestmeta/Crynical/join1.svg" alt="img" />
                  </div>
                  <h1 className="ghghg">join our community</h1>
                  <p>
                    Please join our community to learn more about our project <br />
                    and meet our community members! 
                  </p>
                </div>
                <div className="logo_img">
                  <a href="https://twitter.com/CYNCProject" target="_blank">
                    <div className="img">
                      <span>
                        <i class="fab fa-twitter"></i>
                      </span>
                    </div>
                  </a>

                  <a href="https://facebook.com/CYNCProject" target="_blank">
                    <div className="img">
                      <span>
                        <i class="fab fa-facebook"></i>
                      </span>
                    </div>
                  </a>
                  <a href=" https://opensea.io/CYN-C" target="_blank">
                    <div className="img">
                      <img
                        src="./assestmeta/Crynical/opensea.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <a href="https://medium.com/@cyn-c" target="_blank">
                    <div className="img">
                      <img
                        src="./assestmeta/Crynical/M.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </a>

                  <a href="https://t.me/CYNCommunity" target="_blank">
                    <div className="img">
                      <img
                        src="./assestmeta/Crynical/messagevector.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </a>

                  <a href=" https://discord.gg/BpHbpDdt7w" target="_blank">
                    <div className="img">
                      <img
                        src="./assestmeta/Crynical/vector.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </a>

                  <a
                    href="https://www.redditinc.com//BpHbpDdt7w"
                    target="_blank"
                  >
                    <div className="img">
                      <img
                        src="./assestmeta/Crynical/discord.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadoww11">
          <img
            src="./assestmeta/Crynical/s11.png"
            alt="img"
            className="img-fluid"
          />
        </div>
      </section>
      <section className="contact_us" id="contactus_page">
        <div className="shadoww12">
          <img
            src="./assestmeta/Crynical/s12.png"
            alt="img"
            className="img-fluid"
          />
        </div>
        <div className="container_fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="bg">
                <div className="text">
                  <div className="banner_imgncsjcn">
                    <img src="./assestmeta/Crynical/contact1.svg" alt="img" />
                  </div>
                  <h1 className="ghghg">contact us</h1>
                  <p>
                  </p>
                </div>
                <div className="under_btn">
                  <div className="main">
                    <div className="left">
                      <div className="ouremail">
                        <label>Contact Us</label>
                        <h5>website@cyn-c.io</h5>
                      </div>
                      <input type="text" placeholder="Full Name" />
                      <input type="text" placeholder="Email Address" />
                      <input type="text" placeholder="Subject" />
                    </div>
                    <div className="right">
                      <textarea type="text" placeholder="Message" />
                    </div>
                    <div className="btn">
                      <button>Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shadoww13">
          <img
            src="./assestmeta/Crynical/s13.png"
            alt="img"
            className="img-fluid"
          />
        </div> */}
      </section>

      <button
        type="button"
        class="btn btn-primary sbjdfbsj"
        onClick={PurchaseModalOpen}
      >
        Launch demo modal
      </button>
      <div
        class="modal fade modal-main"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={PurchaseModalclose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {/* </div> */}
            <div class="modal-body">
              <div className="main_text">
                <h1 className="bhvchvh">CYN-C PROJECT</h1>
                <p>
                  Join our Discord today and receive a free Cyn-Champion playing
                  card to battle with in The Cynoseum, our P2E Mini-Game!
                </p>
                <hr />
              </div>
              <div className="links_icon">
                <span>
                  <i class="fab fa-discord"></i>
                </span>{" "}
                <a href=" https://discord.gg/BpHbpDdt7w" target="_blank">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
