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
          existentialism, race, class and queer theory. She lives in Tāmaki
          Makaurau and is a Shanghai gal in her bones.{" "}
        </p>
        <p>
          A graduate of Elam (BFA (First Class Hons)), Nuanzhi has shown at Gus
          Fisher Gallery and UXBRIDGE Arts & Culture. Her most recent plays
          include Evening! with Jimmy Applause (2021), Yang/Young/杨 (co-written
          with Sherry Zhang, 2021) and Chick Habit (2023). Chick Habit was
          selected for Playmarket Asian Ink Award 2022. Evening! with Jimmy
          Applause was selected for Auckland Fringe Sharu Loves Hats Producer
          Mentorship Award 2021. Yang/Young/杨 was shortlisted in Playmarket
          Playwrights b4 25 Awards 2019.
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
            href="mailto: dzhe97@gmail.com"
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
