import { FrontPage } from "../FrontPage/FrontPage"
import { Foot } from "../Foot/Foot"
import { Benefits } from "../Benefits/Benefits"
import { WhoWeAre } from "../WhoWeAre/WoWeAre"
import { SomeProducts } from "../SomeProducts/SomeProducts"
import { Photos } from "../PhotoFrame/Photos"

const Landing = () => {
    return(
        <div>
            <FrontPage/>
            <SomeProducts/>
            <WhoWeAre/>
            <Benefits/>
            <Photos/>
            <Foot/>
        </div>
    )
}

export { Landing }