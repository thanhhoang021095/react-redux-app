import { connect } from "react-redux";
import ProductList from "components/ProductList";
import { addNewProduct, fetchData } from "reducer/product"
const mapStateToProps = (state) => ({
    products: state.product.products
})

const mapActionToProps = {
    addNewProduct,
    fetchData
}
export default connect(mapStateToProps, mapActionToProps)(ProductList)