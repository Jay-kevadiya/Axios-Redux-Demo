import { connect } from 'react-redux';
import Header from '../components/header';


const mapStateToProps = state => ({
    data: state.cartItems
})

const mapDishpatchToProps = dispatch => ({
});

export default connect(mapStateToProps,mapDishpatchToProps)(Header);



// export default Home;