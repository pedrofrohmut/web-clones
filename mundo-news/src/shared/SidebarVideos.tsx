import "/src/shared/sidebar-videos.css"

const sidebarVideos = [
  {
    date: "20/07/2026",
    title: "Sem ordines sit eu gradum ac rem non ad SEM: v rem modo error?",
    author: "Successum",
  },
  {
    date: "19/07/2026",
    title: "O auctoritate ea QUAS eros regnorum w christi antiguo",
    author: "Ripensi eu Neque w Hac Multas",
  },
  {
    date: "18/07/2026",
    title: "M acerba nihil: Evidenter ex Aocessu ea Urna ac Saepe 6026",
    author: "Modernum Assumpsit",
  }
]

const SidebarVideos = () => {
  return (
    <div className="sidebar-videos">

      <div className="sidebar-videos__header-title">Vídeos</div>
      <div className="sidebar-videos__header-subtitle">Mais vídeos para você curtir</div>

      <div className="sidebar-videos__videos">
        {sidebarVideos.map(video => (
          <div className="sidebar-video" key={video.title}>
            <div className="sidebar-video__img">Video img</div>
            <div className="sidebar-video__date">{video.date}</div>
            <div className="sidebar-video__title">{video.title}</div>
            <div className="sidebar-video__author">{video.author}</div>
          </div>
        ))}
      </div>

      <button className="sidebar-videos__more-btn">
        Ver todos <i className="fa-solid fa-chevron-right"></i>
      </button>

    </div>
  )
}

export default SidebarVideos
