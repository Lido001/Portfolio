import { readmore } from "../components/AboutComponents/aboutData";
const Readmore = () => {
  return (
    <div>
        {readmore.map((ReadMore, index) => (
            <div key={index} className="read_more">
            <a className="read-more" href="#">
              <span className="font-medium font-montserrat tracking-wider">
                {ReadMore.span}
              </span>
            </a>
          </div>
        ))}
    </div>
  )
}

export default Readmore
