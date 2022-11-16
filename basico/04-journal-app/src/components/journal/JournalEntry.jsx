export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div className='journal__entry-picture' style={{
        backgroundSize: 'cover',
        backgroundImage: 'url(https://thumbs.dreamstime.com/b/signo-del-logotipo-lobo-dorado-una-ilustraci%C3%B3n-vectorial-189078997.jpg)'
      }}>
      </div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>New Day</p>
        <p className='journal__entry-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt exercitationem sint rem adipisci veniam, perspiciatis molestias cupiditate ad? Quo numquam nam possimus, aut ad sit voluptates repellendus. Nesciunt, culpa beatae?</p>
      </div>

      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
