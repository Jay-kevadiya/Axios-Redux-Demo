import { connect } from 'react-redux';
import Home from '../components/home';
import {addToCart, RemoveToCart} from '../services/actions/actions';


const mapStateToProps = state => ({
    data: state.cartItems
})

const mapDishpatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(RemoveToCart(data))
});

export default connect(mapStateToProps,mapDishpatchToProps)(Home);
