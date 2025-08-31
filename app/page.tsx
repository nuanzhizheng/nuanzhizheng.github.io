"use client";
import { Starburst } from "../components/Starburst";
import { About } from "../components/About";
import { useTina } from "tinacms/dist/react";
import client from "../tina/__generated__/client";
import { useEffect, useState } from "react";

interface PageData {
  page: {
    title: string;
    description: string;
    aboutContent: any;
    profileImage: string;
  };
}

interface InitialProps {
  data: PageData;
  query: string;
  variables: any;
}

export default function HomePage() {
  const [initialProps, setInitialProps] = useState<InitialProps | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchInitialData = async () => {
      let data: PageData;
      let query = "";
      const variables = { relativePath: "home.md" };

      try {
        const res = await client.queries.page(variables);
        query = res.query;
        data = res.data as PageData;
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback data
        data = {
          page: {
            title: "Home",
            description: "About",
            aboutContent: null,
            profileImage: "/assets/nuanzhi-zheng.jpg",
          },
        };
      }

      if (isMounted) {
        setInitialProps({
          data,
          query,
          variables,
        });
      }
    };

    fetchInitialData();

    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array - only run once

  // Don't render useTina until we have initial data
  if (!initialProps) {
    return <div>Loading...</div>;
  }

  return <HomePageContent initialProps={initialProps} />;
}

function HomePageContent({ initialProps }: { initialProps: InitialProps }) {
  const { data } = useTina(initialProps) as { data: PageData };

  return (
    <div className="page-container">
      <div className="sidebar">
        <div style={{ position: "relative", width: "fit-content" }}>
          <div
            style={{
              position: "absolute",
              zIndex: 0,
              top: "50%",
              left: "28%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Starburst size={80} color="white" />
          </div>

          <h1 style={{ position: "relative", zIndex: 1, margin: 0 }}>
            Nuanzhi Zheng
            <br />
            郑暖之
          </h1>
        </div>
      </div>
      <About data={data.page} />
      <div className="right-space" />
    </div>
  );
}
