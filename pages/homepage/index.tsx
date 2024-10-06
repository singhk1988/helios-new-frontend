import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Footer from "../../components/footer";
import Header from "../../components/header";
import KnowMoreComp from "../../components/KnowMoreComp";
import Map from "../../components/map";
import MapHover from "../../components/mapHover";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "../../styles/homepage.module.css";
//Enabled when theme toggle is required
// import useWindowSize, { windowSizeType } from '../../utils/useWindowSize'
// import { useTheme } from 'next-themes';
import Link from "next/link";
import { routes } from "../../routes/routes";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { getAllNews } from "../../services/news";
import { getAllArticles } from "../../services/articles";
import dynamic from "next/dynamic";
import NewsTicker from "../../components/newsTicker";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface HomepageProps {
  data: {
    news: any;
    articles: any;
  };
}

export const getStaticProps = async () => {
  const newsRes = await getAllNews();
  const newsData = JSON.stringify(newsRes.data);
  const articleRes = await getAllArticles();
  const articleData = JSON.stringify(articleRes.data);
  return {
    props: {
      data: { news: JSON.parse(newsData), articles: JSON.parse(articleData) },
    },
    revalidate: 120,
  };
};

const Homepage = ({ data }: HomepageProps) => {
  const [content, setContent] = useState<JSX.Element>(<></>);
  //Enabled when theme toggle is required
  // const size: windowSizeType = useWindowSize();
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(false);
  };
  //Enabled when theme toggle is required
  // const { theme } = useTheme();
  // const isMobile: boolean = size.width < 992

  const twitterPlaceholder = (
    <>
      <div className="w-[90vw] mx-auto md:w-[650px] h-[560px] md:h-[742px] flex justify-center items-center bg-black rounded-lg">
        <img src="/twitterLogo.png.png" className="twitter-loading"></img>
      </div>
    </>
  );

  return (
    <div>
      <section className={styles.heloandHeader}>
        <Header tabname="Home" />
        <div className={styles.hero}>
          <ReactPlayer
            url="videos/2018_05_31_08_43_38_video_May_31_2018.mp4"
            loop={true}
            controls={false}
            playing={true}
            volume={0}
            width={"100%"}
            height="fit-content"
          />
        </div>
        {/* <div className="bg-hero bg-cover bg-center h-[600px]">
          <div className="flex justify-center items-center p-4 bg-bgOpacity w-full h-full">
            <p className="text-white md:text-4xl font-bold text-center">
              <span className="text-[40px]">Welcome to</span>
              <br />
              <span className="text-primaryColor text-[60px]">
                D2 Lithium Corporation
              </span>
            </p>
          </div>
        </div> */}
      </section>
      <section className="h-0">
        <NewsTicker />
      </section>
      <section>
        <div className={styles.homeAbout}>
          <div className={styles.homeAboutInner}>
            <div>
              <p className={styles.homeAboutTitle}>
                D2 <span className=" text-white">Lithium</span>
              </p>
              <p className="text-white text-[18px] md:text-[26px] font-semibold">
                TSX.v: <span className="text-primaryColor"><Link  href="https://finance.yahoo.com/quote/DTWO.V/" target="_blank" passHref>DTWO</Link> </span>| OTCQB:{" "}
                <span className="text-primaryColor"><Link href="https://finance.yahoo.com/quote/DTWOF/" target="_blank" passHref>DTWOF</Link> </span>| Germany:{" "}
                <span className="text-primaryColor"><Link href="https://finance.yahoo.com/quote/C2U.DU" target="_blank" passHref>C2U0</Link></span>
              </p>
            </div>
            <p className={styles.homeAboutSubTitle}>
              A Lithium Brine (Battery Metal) Exploration Company
            </p>
            <p className={styles.homeAboutDesc}>
              D2 Lithium is an industry leading, integrated Lithium exploration
              company, and one of the few international investment opportunities
              with approximately 250,000 gross acres diversified across two
              highly prospective regions: in Jujuy province in Argentina ~
              230,000 acres and in Nevada USA ~ 17,000 acres.
            </p>
            <p className={styles.homeAboutDesc}>
              Our assets are subjected to rigorous technical evaluation using
              proprietary, geological modelling and brine production simulation
              by a team with decades of international experience. This de-risks
              our assets, optimizes capital deployment and ensures a clear
              line-of-sight to commercialization.
            </p>
            <p className={styles.homeAboutDesc}>
              Through our work with global Direct Lithium Extraction (DLE)
              leaders, we will conduct Front End Engineering Design (FEED)
              studies, followed by demonstration facilities and commercial,
              scalable operations.
            </p>
            <p className={styles.homeAboutDesc}>
              The benefits of deploying DLE technologies are: the elimination of
              evaporation ponds, a significant reduction in land disturbance,
              much lower water consumption and expediting the extraction process
              from years to days. This reduces costs, increases profitability
              and ensures long-term social license.
            </p>
            {/* <p className={styles.homeAboutLastDesc}>
            Our management team has a long track record executing resource
            projects that meet the highest ESG standards and ensure equitable
            Indigenous participation.
          </p> */}
          </div>
          <img src="bgAbout.svg" className={styles.homeaboutBackground} />
        </div>
      </section>
      <section className="py-10 px-10 md:px-20 bg-darkTheme">
        <p className="text-[32px] md:text-[40px] text-center font-bold font-sans text-white">
          Learn <span className={styles.wwhTitleEndText}>More</span>
        </p>
        <div className={styles.wwhGroup}>
          <Link href="/investores/investor-information">
            <div className={`${styles.wwhCard} flex`}>
              <div className="hover:border-b-8 top-10 md:top-0 border-primaryColor h-[180px] md:h-[296px] mb-10 md:mb-0">
                <img src="investor.jpg" className={styles.wwhCardImage} />
              </div>
              <p className={styles.wwhCardTitle}>Investors</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className={`${styles.wwhCard} flex`}>
              <div className="hover:border-b-8 top-10 md:top-0 border-primaryColor h-[180px] md:h-[296px] w-fit mb-10 md:mb-0">
                <img src="projects.jpg" className={styles.wwhCardImage} />
              </div>
              <p className={styles.wwhCardTitle}>Projects</p>
            </div>
          </Link>
          <Link href="/lithium/the-lithium-market">
            <div
              className={`${styles.wwhCard} ${
                show ? "hidden md:flex" : "flex"
              }`}
            >
              <div className="flex justify-center hover:border-b-8 top-10 md:top-0 border-primaryColor h-[180px] md:h-[296px] w-full mb-10 md:mb-0">
                <img src="lithium.jpg" className={`${styles.wwhCardImage}`} />
              </div>
              <p className={styles.wwhCardTitle}>Lithium</p>
            </div>
          </Link>
          {show ? (
            <div className="flex justify-center md:hidden">
              <p
                className="text-primaryColor border-b-2 border-primaryColor font-medium text-xl"
                onClick={showMore}
              >
                SHOW MORE
              </p>
            </div>
          ) : null}
        </div>
      </section>

      {/* <section className={styles.kum}>
        <div className={styles.kumGroup}>
          <KnowMoreComp
            articleData={data.articles}
            heading="Articles"
            viewMore={routes.investorLithiumArticles}
            route={`/pdf-viewer/articles`}
          /> */}
      {/* <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: "auto",
                spaceBetween: 60,
              },
            }}
            modules={[Navigation]}
          > */}
      {/* <SwiperSlide className="swiper-slide mx-auto md:ml-[60px]">
              <KnowMoreComp
                articleData={data.news}
                heading="News Releases"
                viewMore={routes.latestNewReleases}
                route={`/pdf-viewer/news`}
              />
            </SwiperSlide> */}
      {/* <SwiperSlide className="swiper-slide mx-auto md:ml-0">
              <KnowMoreComp
                articleData={data.articles}
                heading="Articles"
                viewMore={routes.investorLithiumArticles}
                route={`/pdf-viewer/articles`}
              />
            </SwiperSlide> */}
      {/* <SwiperSlide className="swiper-slide mx-auto md:ml-4">
              <div className="w-[90vw] mx-auto md:w-[650px] h-[560px] md:h-[742px] bg-black rounded-lg">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="Heliosx_lithium"
                  autoHeight={true}
                  theme="dark"
                  noScrollbar={true}
                  placeholder={twitterPlaceholder}
                />
              </div>
            </SwiperSlide> */}
      {/* </Swiper> */}
      {/* </div>
      </section> */}

      <section className="bg-[#25272A]">
        <div className={styles.mapBackground}>
          <p className="text-[32px] md:text-[40px] text-center font-bold font-sans text-white py-10">
            Our <span className={styles.mapLastPartTitle}>Project</span>
          </p>
          <div className={styles.mapContainer}>
            <Map setContent={setContent} />
          </div>
        </div>
      </section>
      <ReactTooltip className="tooltip-override">
        {content && <MapHover img={content} />}
      </ReactTooltip>
      <Footer />
    </div>
  );
};

export default Homepage;
