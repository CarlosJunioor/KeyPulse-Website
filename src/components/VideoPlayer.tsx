export const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <div>
      <video controls loop muted autoPlay>
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};
