import './Destinations.scss';

export default function Destinations(props) {
  return (
    <div className='destinations'>
      <div className="img-container">
        <img src={ props.img } alt="" />
      </div>
      <div className="content">
        <span className='country'>{ props.country }</span>
        <span className='map'><a href={ props.map } target="_blank" rel='noreferrer'>View on Google Maps</a></span>
        <h2 className="title">{ props.destination }</h2>
        <div className="dates">{ props.dates }</div>
        <p className="description">{ props.description }</p>
      </div>
    </div>
  )
}