const HomePage = () => { 

return (<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nexus - Buy &amp; Sell Digital Assets In The Nexus</title>
  {/* 
    - favicon
  */}
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
  {/* 
    - custom css link
  */}
  <link rel="stylesheet" href="./style.css" />
  {/* 
    - google font link
  */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  {/* 
    - #HEADER
  */}
  <header className="header" data-header="">
    <div className="container">
      {/* <a href="#" className="logo">
        <img
          src="/images/logo.svg"
          width={32}
          height={32}
          alt="Nexus logo"
        />
        Nexus
      </a> */}

      {/* <nav className="navbar" data-navbar="">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#" className="navbar-link active" data-nav-link="">
              Homepage
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              Buy Crypto
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="http://localhost:5173/Cryptos"
              className="navbar-link"
              data-nav-link=""
            >
              Markets
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              Sell Crypto
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              Blog
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link="">
              BITUSDT
            </a>
          </li>
        </ul>
      </nav> */}
      {/* <button
        className="nav-toggle-btn"
        aria-label="Toggle menu"
        data-nav-toggler=""
      >
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </button>
      <a href="#" className="btn btn-outline">
        Wallet
      </a> */}
    </div>
  </header>
  <main>
    <article>
      {/* 
  - #HERO
*/}
      <section className="section hero" aria-label="hero" data-section="">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              Buy &amp; Sell Digital Assets In The Nexus
            </h1>
            <p className="hero-text">
              Coin Nexus is the easiest, safest, and fastest way to buy &amp;
              sell crypto asset exchange.
            </p>
            <a href="#" className="btn btn-primary">
              Get started now
            </a>
          </div>
          <figure className="hero-banner">
            <img
              src="/images/hero-banner.png"
              width={570}
              height={448}
              alt="hero banner"
              className="w-100"
            />
          </figure>
        </div>
      </section>
      {/* 
  - #TREND
*/}
      <section
        className="section trend"
        aria-label="crypto trend"
        data-section=""
      >
        <div className="container">
          <div className="trend-tab">
          <ul className="tab-nav flex flex-wrap gap-2">
  <li>
    <button className="tab-btn active bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Crypto
    </button>
  </li>
  <li>
    <button className="tab-btn bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
      DeFi
    </button>
  </li>
  <li>
    <button className="tab-btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      BSC
    </button>
  </li>
  <li>
    <button className="tab-btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
      NFT
    </button>
  </li>
  <li>
    <button className="tab-btn bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
      Metaverse
    </button>
  </li>
  <li>
    <button className="tab-btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      Polkadot
    </button>
  </li>
  <li>
    <button className="tab-btn bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
      Solana
    </button>
  </li>
  <li>
    <button className="tab-btn bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
      Opensea
    </button>
  </li>
  <li>
    <button className="tab-btn bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
      Makersplace
    </button>
  </li>
</ul>


            <ul className="tab-content">
              <li>
                <div className="trend-card">
                  <div className="card-title-wrapper">
                    <img
                      src="/images/coin-1.svg"
                      width={24}
                      height={24}
                      alt="bitcoin logo"
                    />
                    <a href="#" className="card-title">
                      Bitcoin <span className="span">BTC/USD</span>
                    </a>
                  </div>
                  <data className="card-value" value="46168.95">
                    USD 46,168.95
                  </data>
                  <div className="card-analytics">
                    <data className="current-price" value="36641.20">
                      36,641.20
                    </data>
                    <div className="badge red">-0.79%</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="trend-card active">
                  <div className="card-title-wrapper">
                    <img
                      src="/images/coin-2.svg"
                      width={24}
                      height={24}
                      alt="ethereum logo"
                    />
                    <a href="#" className="card-title">
                      Ethereum <span className="span">ETH/USD</span>
                    </a>
                  </div>
                  <data className="card-value" value="3480.04">
                    USD 3,480.04
                  </data>
                  <div className="card-analytics">
                    <data className="current-price" value="36641.20">
                      36,641.20
                    </data>
                    <div className="badge green">+10.55%</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="trend-card">
                  <div className="card-title-wrapper">
                    <img
                      src="/images/coin-3.svg"
                      width={24}
                      height={24}
                      alt="tether logo"
                    />
                    <a href="#" className="card-title">
                      Tether <span className="span">USDT/USD</span>
                    </a>
                  </div>
                  <data className="card-value" value={1.0}>
                    USD 1.00
                  </data>
                  <div className="card-analytics">
                    <data className="current-price" value="36641.20">
                      36,641.20
                    </data>
                    <div className="badge red">-0.01%</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="trend-card">
                  <div className="card-title-wrapper">
                    <img
                      src="/images/coin-4.svg"
                      width={24}
                      height={24}
                      alt="bnb logo"
                    />
                    <a href="#" className="card-title">
                      BNB <span className="span">BNB/USD</span>
                    </a>
                  </div>
                  <data className="card-value" value="443.56">
                    USD 443.56
                  </data>
                  <div className="card-analytics">
                    <data className="current-price" value="36641.20">
                      36,641.20
                    </data>
                    <div className="badge red">-1.24%</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 
  - #MARKET
*/}
      <section
        className="section market"
        aria-label="market update"
        data-section=""
      >
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 section-title">Market Update</h2>
            <a href="#" className="btn-link">
              See All Coins
            </a>
          </div>
          <div className="market-tab">
            <ul className="tab-nav">
              <li>
                <button className="tab-btn active">View All</button>
              </li>
              <li>
                <button className="tab-btn">Metaverse</button>
              </li>
              <li>
                <button className="tab-btn">Entertainment</button>
              </li>
              <li>
                <button className="tab-btn">Energy</button>
              </li>
              <li>
                <button className="tab-btn">NFT</button>
              </li>
              <li>
                <button className="tab-btn">Gaming</button>
              </li>
              <li>
                <button className="tab-btn">Music</button>
              </li>
            </ul>
            <table className="market-table">
              <thead className="table-head">
                <tr className="table-row table-title">
                  <th className="table-heading" />
                  <th className="table-heading" scope="col">
                    #
                  </th>
                  <th className="table-heading" scope="col">
                    Name
                  </th>
                  <th className="table-heading" scope="col">
                    Last Price
                  </th>
                  <th className="table-heading" scope="col">
                    24h %
                  </th>
                  <th className="table-heading" scope="col">
                    Market Cap
                  </th>
                  <th className="table-heading" scope="col">
                    Last 7 Days
                  </th>
                  <th className="table-heading" />
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                        className="icon-outline"
                      />
                      <ion-icon
                        name="star"
                        aria-hidden="true"
                        className="icon-fill"
                      />
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    1
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src="/images/coin-1.svg"
                        width={20}
                        height={20}
                        alt="Bitcoin logo"
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          Bitcoin <span className="span">BTC</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">$56,623.54</td>
                  <td className="table-data last-update green">+1.45%</td>
                  <td className="table-data market-cap">$880,423,640,582</td>
                  <td className="table-data">
                    <img
                      src="/images/chart-1.svg"
                      width={100}
                      height={40}
                      alt="profit chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                        className="icon-outline"
                      />
                      <ion-icon
                        name="star"
                        aria-hidden="true"
                        className="icon-fill"
                      />
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    2
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src="/images/coin-2.svg"
                        width={20}
                        height={20}
                        alt="Ethereum logo"
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          Ethereum <span className="span">ETH</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">$56,623.54</td>
                  <td className="table-data last-update red">-5.12%</td>
                  <td className="table-data market-cap">$880,423,640,582</td>
                  <td className="table-data">
                    <img
                      src="/images/chart-2.svg"
                      width={100}
                      height={40}
                      alt="loss chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                        className="icon-outline"
                      />
                      <ion-icon
                        name="star"
                        aria-hidden="true"
                        className="icon-fill"
                      />
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    3
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src="/images/coin-3.svg"
                        width={20}
                        height={20}
                        alt="Tether logo"
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          Tether <span className="span">USDT/USD</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">$56,623.54</td>
                  <td className="table-data last-update green">+1.45%</td>
                  <td className="table-data market-cap">$880,423,640,582</td>
                  <td className="table-data">
                    <img
                      src="/images/chart-1.svg"
                      width={100}
                      height={40}
                      alt="profit chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                        className="icon-outline"
                      />
                      <ion-icon
                        name="star"
                        aria-hidden="true"
                        className="icon-fill"
                      />
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    4
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src="/images/coin-4.svg"
                        width={20}
                        height={20}
                        alt="BNB logo"
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          BNB <span className="span">BNB/USD</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">$56,623.54</td>
                  <td className="table-data last-update red">-3.75%%</td>
                  <td className="table-data market-cap">$880,423,640,582</td>
                  <td className="table-data">
                    <img
                      src="/images/chart-2.svg"
                      width={100}
                      height={40}
                      alt="loss chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                        className="icon-outline"
                      />
                      <ion-icon
                        name="star"
                        aria-hidden="true"
                        className="icon-fill"
                      />
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    5
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src="/images/coin-5.svg"
                        width={20}
                        height={20}
                        alt="Solana logo"
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          Solana <span className="span">SOL</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">$56,623.54</td>
                  <td className="table-data last-update green">+1.45%</td>
                  <td className="table-data market-cap">$880,423,640,582</td>
                  <td className="table-data">
                    <img
                      src="/images/chart-1.svg"
                      width={100}
                      height={40}
                      alt="profit chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                        className="icon-outline"
                      />
                      <ion-icon
                        name="star"
                        aria-hidden="true"
                        className="icon-fill"
                      />
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    6
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src="/images/coin-6.svg"
                        width={20}
                        height={20}
                        alt="XRP logo"
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          XRP <span className="span">XRP</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">$56,623.54</td>
                  <td className="table-data last-update red">-2.22%</td>
                  <td className="table-data market-cap">$880,423,640,582</td>
                  <td className="table-data">
                    <img
                      src="/images/chart-2.svg"
                      width={100}
                      height={40}
                      alt="loss chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                        className="icon-outline"
                      />
                      <ion-icon
                        name="star"
                        aria-hidden="true"
                        className="icon-fill"
                      />
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    7
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src="/images/coin-7.svg"
                        width={20}
                        height={20}
                        alt="Cardano logo"
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          Cardano <span className="span">ADA</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">$56,623.54</td>
                  <td className="table-data last-update green">+0.8%</td>
                  <td className="table-data market-cap">$880,423,640,582</td>
                  <td className="table-data">
                    <img
                      src="/images/chart-1.svg"
                      width={100}
                      height={40}
                      alt="profit chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-data">
                    <button
                      className="add-to-fav"
                      aria-label="Add to favourite"
                      data-add-to-fav=""
                    >
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                        className="icon-outline"
                      />
                      <ion-icon
                        name="star"
                        aria-hidden="true"
                        className="icon-fill"
                      />
                    </button>
                  </td>
                  <th className="table-data rank" scope="row">
                    8
                  </th>
                  <td className="table-data">
                    <div className="wrapper">
                      <img
                        src="/images/coin-8.svg"
                        width={20}
                        height={20}
                        alt="Avalanche logo"
                        className="img"
                      />
                      <h3>
                        <a href="#" className="coin-name">
                          Avalanche <span className="span">AVAX</span>
                        </a>
                      </h3>
                    </div>
                  </td>
                  <td className="table-data last-price">$56,623.54</td>
                  <td className="table-data last-update green">+1.41%</td>
                  <td className="table-data market-cap">$880,423,640,582</td>
                  <td className="table-data">
                    <img
                      src="/images/chart-1.svg"
                      width={100}
                      height={40}
                      alt="profit chart"
                      className="chart"
                    />
                  </td>
                  <td className="table-data">
                    <button className="btn btn-outline">Trade</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* 
  - #INSTRUCTION
*/}
      <section
        className="section instruction"
        aria-label="instruction"
        data-section=""
      >
        <div className="container">
          <h2 className="h2 section-title">Our Features</h2>
          <p className="section-text">
          Our platform is designed with your mental health and risk management in mind.
           Whether you're a seasoned trader or just starting out, we've got you covered.
          </p>
          <ul className="instruction-list">
            <li>
              <div className="instruction-card">
                <figure className="card-banner">
                  <img
                    src="/images/instruction-1.png"
                    width={96}
                    height={96}
                    loading="lazy"
                    alt="Step 1"
                    className="img"
                  />
                </figure>
                <p className="card-subtitle">1</p>
                <h3 className="h3 card-title">Emotional Monitoring</h3>
                <p className="card-text">
                Track your mood levels and assess stress with trade metrics.
                </p>
              </div>
            </li>
            <li>
              <div className="instruction-card">
                <figure className="card-banner">
                  <img
                    src="/images/instruction-2.png"
                    width={96}
                    height={96}
                    loading="lazy"
                    alt="Step 2"
                    className="img"
                  />
                </figure>
                <p className="card-subtitle">2</p>
                <h3 className="h3 card-title">Educational Support</h3>
                <p className="card-text">
                Analyze your trades and receive personalized and actionable insights.
                </p>
              </div>
            </li>
            <li>
              <div className="instruction-card">
                <figure className="card-banner">
                  <img
                    src="/images/instruction-3.png"
                    width={96}
                    height={96}
                    loading="lazy"
                    alt="Step 3"
                    className="img"
                  />
                </figure>
                <p className="card-subtitle">3</p>
                <h3 className="h3 card-title">Risk Management</h3>
                <p className="card-text">
                Utilize AI-based solutions to set staggered thresholds for trading.
                </p>
              </div>
            </li>
            <li>
              <div className="instruction-card">
                <figure className="card-banner">
                  <img
                    src="/images/instruction-4.png"
                    width={96}
                    height={96}
                    loading="lazy"
                    alt="Step 4"
                    className="img"
                  />
                </figure>
                <p className="card-subtitle">4</p>
                <h3 className="h3 card-title">AI Assistant</h3>
                <p className="card-text">
                A Mental Health Counselor specialized in supporting cryptocurrency traders.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #ABOUT
*/}
      <section className="section about" aria-label="about" data-section="">
        <div className="container">
          <figure className="about-banner">
            <img
              src="/images/about-banner.png"
              width={748}
              height={436}
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </figure>
          <div className="about-content">
            <h2 className="h2 section-title">About Nexus</h2>
            <p className="section-text">
            Our crypto trading platform provides a user-friendly interface for traders of all levels.
            With advanced features like emotional monitoring and risk management, we prioritize the well-being of our users.
            </p>
            <ul className="section-list">
              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true" />
                  <h3 className="h3 list-title">
                    View real-time cryptocurrency prices
                  </h3>
                </div>
                <p className="item-text">
                  Experience a safe and healthy trading on Nexus Crypto Webapp. You can use
                  various types of features like Spot Trade, Personalized Insights, 
                  Asking AI Assistance for Mental Well Being.
                </p>
              </li>
              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true" />
                  <h3 className="h3 list-title">
                    Buy and sell BTC, ETH, XRP, SHIB, DOGE, etc.
                  </h3>
                </div>
                <p className="item-text">
                Emotional Monitoring: Track mood levels and assess stress with trade metrics.
Intervention and Safeguards: Suggest breaks, lock-outs for stress, and address gambling addictions.
                </p>
              </li>
            </ul>
            <a href="#" className="btn btn-primary">
              Explore More
            </a>
          </div>
        </div>
      </section>
      {/* 
  - #APP
*/}
      <section className="section app" aria-label="app" data-section="">
        <div className="container">
          <div className="app-content">
            <h2 className="h2 section-title">
              Free Your Money &amp; Invest With Confidence
            </h2>
            <p className="section-text">
              With our webapp, you can be sure your trading skills are
              matched.
            </p>
            <ul className="section-list">
              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true" />
                  <h3 className="h3 item-title">
                    Buy, Sell, And Trade On The Go
                  </h3>
                </div>
                <p className="item-text">
                  Manage Your Holdings From Your Mobile Device
                </p>
              </li>
              <li className="section-item">
                <div className="title-wrapper">
                  <ion-icon name="checkmark-circle" aria-hidden="true" />
                  <h3 className="h3 item-title">Take Control Of Your Wealth</h3>
                </div>
                <p className="item-text">
                  Rest Assured You (And Only You) Have Access To Your Funds
                </p>
              </li>
            </ul>
            <div className="app-wrapper">
              <a href="#">
                <img
                  src="/images/googleplay.png"
                  width={135}
                  height={40}
                  loading="lazy"
                  alt="get it on google play"
                />
              </a>
              <a href="#">
                <img
                  src="/images/appstore.png"
                  width={120}
                  height={40}
                  loading="lazy"
                  alt="download on the app store"
                />
              </a>
            </div>
          </div>
          <div className="app-banner">
            <img
              src="/images/app-banner.png"
              width={618}
              height={526}
              loading="lazy"
              alt="app banner"
              className="w-100"
            />
            <span className="span">Scan To Download</span>
          </div>
        </div>
      </section>
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
  <footer className="footer">
    <div className="footer-top" data-section="">
      <div className="container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img
              src="/images/logo.svg"
              width={50}
              height={50}
              alt="Nexus logo"
            />
            Nexus
          </a>
          <h2 className="footer-title">Contact us 📞</h2>
          <a href="tel:+123456789101" className="footer-contact-link">
            +91 7728963752
          </a>
          <a href="contact.nexus05@gmail.com" className="footer-contact-link">
            contact.nexus05@gmail.com
          </a>
          <address className="footer-contact-link">
            IIIT Dharwad, Dharwad, Karnataka - 580009.
          </address>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Products</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Spot
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Inverse Perpetual
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              USDT Perpetual
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Exchange
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Launchpad
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Binance Pay
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Services</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Buy Crypto
            </a>
          </li>
          <li>
            <a href="http://localhost:5173/" className="footer-link">
              Markets
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Tranding Fee
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Referral Program
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              API
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Support</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              Bybit Learn
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              User Feedback
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Submit a request
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              API Documentation
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Trading Rules
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">About Us</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              About Bybit
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Authenticity Check
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Business Contacts
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          © 2024 Nexus All Rights Reserved by{" "}
          <a href="#" className="copyright-link">
            Nexus
          </a>
        </p>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <script src="./script.js" defer />
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
  
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
</>);
};
export default HomePage;