import { Hero} from "../../components";
import { useDocumentTitle } from "../../hooks";
import "./Home.css"
export function Home() {
    useDocumentTitle("Doctor Finder")
    return (
        <div>
            <Hero />
        </div>
    )
};
