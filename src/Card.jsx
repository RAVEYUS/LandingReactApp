


function Card(){
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/debayan-dey-18715b289/', '_blank');
      };
      const handleInstaClick = () => {
        window.open('https://www.instagram.com/debayannnnnn___/', '_blank');
      };
      const handleSpotifyClick = () => {
        window.open('https://open.spotify.com/user/316jahhxkuwyx4fo67cjakwmscbm?si=8c4de257e91d4358', '_blank');
      };
      const handleGithubClick = () => {
        window.open('https://github.com/RAVEYUS', '_blank');
      };
      const handleYoutubeClick = () => {
        window.open('https://www.youtube.com/channel/UCIEh5Fh5FPNJernKykArrxQ', '_blank');
      };
    return(
        
        <div className="w-screen h-screen flex justify-center items-center my-[100px]">
            <div className= "shadow-violet-600 shadow-lg border-2 border-violet-500 rounded-lg p-4 m-4 backdrop-blur-[20px]">
            <div className="flex justify-center">
            <img src={"./night_pfp.png"} height={125} width={125} alt="profile picture" style={{ borderRadius: '50%', boxShadow: '0 2px 20px #7c3aed' }}/>
            </div>
            <div className="m-10 flex justify-center">
            <h2 className="font-pressSt text-3xl opacity-100">RAVEYUS</h2>
            </div>
            <p className="font-micro text-2xl m-2.5 max-w-[300px] overflow-hidden overflow-ellipsis break-words">Hi, I am currently learning React and want to become a frontend dev in future click on these links to know more about me.</p>
            <div className="flex flex-col justify-center">
            <button className="mb-2 hover:text-violet-600 hover:bg-slate-200 hover:border-violet-600" onClick={handleLinkedInClick}><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
            <button className="mb-2 hover:text-violet-600 hover:bg-slate-200 hover:border-violet-600" onClick={handleInstaClick}><i class="fa-brands fa-instagram"></i> Instagram</button>
            <button className="mb-2 hover:text-violet-600 hover:bg-slate-200 hover:border-violet-600" onClick={handleYoutubeClick}><i class="fa-brands fa-youtube"></i> Youtube</button>
            <button className="mb-2 hover:text-violet-600 hover:bg-slate-200 hover:border-violet-600" onClick={handleSpotifyClick}><i class="fa-brands fa-spotify"></i> Spotify</button>
            <button className="mb-2 hover:text-violet-600 hover:bg-slate-200 hover:border-violet-600" onClick={handleGithubClick}><i class="fa-brands fa-github"></i> Github</button>
            </div> 
            </div>
        </div>
        
    )
}
export default Card