import { NewsCard } from "../components/NewsCard";
import { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.png";

interface INews {
  Id: string;
  Title: string;
  Post: string;
  Photo: string;
}

export const News = () => {
  const [newsData, setNewsData] = useState<Array<{ 
    id: string;
    title: string;
    post: string;
    photo: string;
  }>>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `https://personal-e2jusrpr.outsystemscloud.com/KeyPulse_API/rest/keypulseget/GetPostList`,
          {
            headers: {
              'xclientsecret': 'teste-keypulse',
            },
          }
        );
        const data = await response.json();

        if (data.Error && !data.Error.IsSuccess) {
          console.error(data.Error.ErrorMessage);
          return;
        }

        const transformedNews = data.Posts.map((news: INews) => ({
          id: news.Id,
          title: news.Title,
          post: news.Post,
          photo: news.Photo? `data:image/png;base64,${news.Photo}`:Logo
        }));
        setNewsData(transformedNews);
      } catch (error) {
        console.error("Failed to fetch news data:", error);
      }
    };
    fetchMatches();
  }, []);

  return (
    <main className="min-h-screen pt-40 relative">
      <div className="flex justify-center">
      </div>
      <div className="flex flex-wrap justify-center pt-20 gap-6 z-10">
      {newsData.map((news) => (

          <NewsCard
            key={news.id}
            id = {news.id}
            title = {news.title}
            post = {news.post}
            photo = {news.photo}
          />
        ))}
      </div>
    </main>
  );

};