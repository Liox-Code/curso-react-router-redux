import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const Home = (props) => {
    const { myList, trends, originals } = props;
    return(
        <React.Fragment>
            <Search/>
            {myList.length > 0 &&
                (<Categories title='Lista'>
                    <Carousel>
                        {myList.map( item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item}
                                isList
                            />
                        )}
                    </Carousel>
                </Categories    >
                )
            }
            <Categories title='Tendencias'>
                <Carousel>
                    {trends.map( item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
            <Categories title='Originales de Platzi Video'>
                <Carousel>
                    {originals.map( item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    }
}

export default connect(mapStateToProps, null)(Home);