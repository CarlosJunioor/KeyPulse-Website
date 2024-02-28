interface NewsData {
    id: string;
    title: string;
    post: string;
    photo: string;
  }
  export const NewsCard: React.FC<NewsData> = ({
      title,
      post,
      photo
  }) => {
    return (
      <div className="news-card">
          <h2 className="news-title">{title}</h2>
          <p className="news-post">{post}</p>
          <img src={photo} alt="Post" className="news-photo" />
      </div>        
    );
  };