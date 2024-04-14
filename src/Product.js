export default function Product({ product, onAddToCart }) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <table>
                <tbody>
                    <tr>
                        <td><strong>标题</strong></td>
                        <td>{product.title}</td>
                        <td><strong>供应商</strong></td>
                        <td>{product.company}</td>
                        <td><strong>类别</strong></td>
                        <td>{product.category}</td>
                        <td><strong>编号</strong></td>
                        <td>{product.code}</td>
                        <td><strong>价格</strong></td>
                        <td>${product.price}</td>
                        <td><strong>库存</strong></td>
                        <td>{product.stock}</td>
                        <button style={{ marginTop: '10px' }} onClick={() => onAddToCart(product)}>
                加入购物车
            </button>
                    </tr>
                </tbody>
            </table>
           
        </div>
    );
}
