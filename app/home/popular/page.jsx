import { HOME_PAGE_STRUCTURES } from "../../../utils/constants";

export default function Popular() {
    return (
        <>
            <div className="content__PopularContainer">
                <div className="content__PopularTxt"><h3>Propiedades mas populares</h3></div>
                <div className="popularContainer__Cards">
                    {
                        HOME_PAGE_STRUCTURES.POPULAR_PROPS_ROW.POPULAR_PROPS_STRUCTURE_ROW_MOCK.map((element, index) => {
                            return (
                                <div className="popularProp__Card">
                                    <div><img src={element.PROPERTY_IMG} alt={element.PROPERTY_NAME} /></div>
                                    <div>
                                        <h3>{element.PROPERTY_NAME}</h3>
                                        <h2>{element.PROPERTY_PRICE}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
