import { readmore } from "../components/AboutComponents/aboutData";
interface ReadmoreProps {
  link: string;
}
const Readmore: React.FC<ReadmoreProps> = ({ link }) => {
  return (
    <div>
      {readmore.map((ReadMore, index) => (
        <div key={index} className="read_more">
          <a
            className="read-more"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            <span className="font-medium font-montserrat tracking-wider">
              {ReadMore.span}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Readmore;
