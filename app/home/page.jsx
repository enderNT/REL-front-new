import { HOME_PAGE_STRUCTURES } from "../../utils/constants"
import './HomePage-styles.css'

export default function HomePage () {
    // const img = https://loremipsum.io/assets/images/lorem-ipsum-generator-cicero-engraving.png
    return (
        <>
            <div id="layout-content-row1-div">
                <h2 className="content__SearchAppartmentsTyp">{HOME_PAGE_STRUCTURES.BROWSER_APPARTMENTS_ROW.H3}</h2>
                <img
                    id='layout-content-row1-div-img'
                    src={HOME_PAGE_STRUCTURES.BROWSER_APPARTMENTS_ROW.IMG.IMAGE} alt={HOME_PAGE_STRUCTURES.BROWSER_APPARTMENTS_ROW.IMG.TEXT}
                />
            </div>
            <div className="content__CategoriesContainer">
                <div className="categories__Text">
                    <h3>Categorías</h3>
                </div>
                <div className="categories__Cards">
                    {
                        HOME_PAGE_STRUCTURES.CATEGORIES_STRUCTURE_ROW.map((element, index) => {
                            return (
                                <div key={index} className='categories__CardCategory'>
                                    <p className="cardCategory__elementCategoryP">{element.CATEGORY}</p>
                                    <img className='cardCategory__Img' src={element.IMAGE} alt={element.CATEGORY} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="content__RecentPropsContainer">
                <div className="recentProps__h3"><h3>{HOME_PAGE_STRUCTURES.MOST_RECENT_PROPS_ROW.H3}</h3></div>
                <div className="recentProps__Cards">
                    {
                        HOME_PAGE_STRUCTURES.MOST_RECENT_PROPS_ROW.MOST_RECENT_PROPS_STRUCTURE_ROW_MOCK.map((element, index) => {
                            return (

                                <div className="recentProp__Card" key={index}>
                                    <div
                                        className="cardImg__Container">
                                        <img className="recentProp__CardImg" src={element.PROPERTY_IMG} alt={element.PROPERTY_NAME} />
                                    </div>
                                    <div className="cardText__Container">
                                        <h3>{element.PROPERTY_NAME}</h3>
                                        <h4>$ {element.PROPERTY_PRICE}</h4>
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
