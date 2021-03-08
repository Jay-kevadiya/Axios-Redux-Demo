import { connect } from 'react-redux';
import Home from '../components/home';
import {addToCart} from '../services/actions/actions';

const mapStateToProps = state => ({

})

const mapDishpatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDishpatchToProps)(Home)


// export default Home;