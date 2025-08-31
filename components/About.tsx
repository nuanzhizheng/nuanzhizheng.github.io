import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Starburst } from "./Starburst";
import Image from "next/image";

interface AboutProps {
  data: {
    title?: string;
    description?: string;
    aboutContent?: any;
    profileImage?: string;
  };
}

export function About({ data }: AboutProps) {
  // Add safety checks
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-content">
      <div className="content-text">
        {data.aboutContent && <TinaMarkdown content={data.aboutContent} />}
      </div>

      <div className="content-image">
        <div style={{ position: "relative", width: "fit-content" }}>
          <div className="about-starburst">
            <Starburst size={80} />
          </div>
          {data.profileImage && (
            <Image
              src={data.profileImage}
              alt="Profile photo of Nuanzhi Zheng"
              priority
              width={400}
              height={400}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
