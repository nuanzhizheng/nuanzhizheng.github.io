import Image from "next/image";
import profileImage from "./assets/nuanzhi-zheng.jpg";
import { Starburst } from "./Starburst";

export function About() {
  return (
    <div className="main-content">
      <div className="content-text">
        <h2>About</h2>
        <p>
          Nuanzhi Zheng 郑暖之 is an interdisciplinary artist specialising in
          writing, moving image, and illustration. This occupies space in
          theatre and contemporary art, actualising in discussions of feminism,
          existentialism, race, class and queer theory. They live in Tāmaki
          Makaurau and is a Shanghai gal in their bones.{" "}
        </p>
        <p>
          Nuanzhi participated in the premiere production of the live theatre 
          documentary OTHER [chinese] in 2017. Their collaboration with Sherry 
          Zhang, Yang/Young/杨, premiered as part of Auckland Theatre Company’s 
          Here and Now Festival in 2021, and was published in Traces, an anthology 
          of four Asian plays in Aotearoa (Playmarket, 2025). Their other plays 
          include Chick Habit (2023) and Evening! with Jimmy Applause (2021). 
          Nuanzhi was part of Auckland Theatre Company’s Emerging Writers Table
          in 2024 and has participated in various iterations of The Rawdog Gaysian 
          Playwright Challenge. In 2025, they collaborated with Evangelina 
          Telfar, writing Best Laid Plans for the one-act anthology play Compromise. 
          Nuanzhi undertook a residency with Robert Lord Writers Cottage Trust in 
          2026 to develop a multimedia theatre piece, Best Head Girl (working title).
        </p>
        <p>
          In their practice outside theatre, Nuanzhi exhibited video installation 
          work Like an addiction I wept for the place I could not access with Gus 
          Fisher Gallery in 2020 and exhibited as part of the Estuary Art Award in 
          2021. Their collaboration with FANG magazine won Judge’s Wildcard for Best 
          Overall Zine at Auckland Zinefest 2026. Their other work has been published 
          by The Pantograph Punch, Going Down Swinging, bad apple, Rat World and Eel Mag.
        </p>
        <p>
          Nuanzhi on the web:
        </p>
        <p>
          <a
          href="https://nuanzhi.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          >
            Substack{" "}
          </a>
          <br />
            <a
            href="https://www.aucklandzinefest.com/2026-zinemakers/nuanzhi-zheng-kim-namun"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Auckland Zinefest 2026{" "}
          </a>
          <br />
          <a
            href="https://accessmedia.nz/player?EID=8a1fabdd-f1bf-4c6c-a274-8eec058e7e13&audioOnlyMode=true"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Interview with OAR: Write Spot with Dunedin UNESCO City of Literature{" "}
          </a>
           <br />
            <a
            href="https://open.spotify.com/episode/175t0Qd8mBHj6EnfvPXL4A?si=3c043306968d4fb7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Interview on local loser (podcast){" "}
          </a>
          <br />
            <a
            href="https://www.cringe.nz/p/issue-no35-dance-your-cares-away"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Guest Editorial for Cringe{" "}
          </a>
          <br />
            <a
            href="https://badapple.gay/author/nuanzhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
           writing on badapple.gay{" "}
          </a>
          <br />
            <a
            href="https://gusfishergallery.auckland.ac.nz/zheng-nuanzhi-like-an-addiction-i-wept-for-the-place-i-could-not-access-2020/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
           Like an addiction I wept for the place I could not access, Gus Fisher Gallery, 2020{" "}
          </a>
        </p>
          Get in touch:
        </p>
        <p>
            <a
            href="https://www.instagram.com/breakfast.express/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Instagram{" "}
          </a>
          <br />
          <a
            href="mailto: nuanzhi@proton.me"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Email
          </a>
        </p>
      </div>

      <div className="content-image">
        <div style={{ position: "relative", width: "fit-content" }}>
          <div className="about-starburst">
            <Starburst size={80} />
          </div>
          <Image
            src={profileImage}
            alt="Profile photo of Nuanzhi Zheng"
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
