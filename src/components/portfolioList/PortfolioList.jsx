import './PortfolioList.scss'

function PortfolioList({id,title,active,setSelected}) {
  return (
    <li onClick={()=>setSelected(id)} className={`portfolioList ${active ? 'active' : ''}`}>{title}</li>
  )
}

export default PortfolioList