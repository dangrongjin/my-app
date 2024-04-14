// 文件路径：src/CartItems.js

import React from 'react';

function CartItems({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4>
          <p>价格: ${item.price}</p>
          <p>数量: 1</p> {/* 简化处理，假设每次加入都是1个数量 */}
        </div>
      ))}
    </div>
  );
}

export default CartItems;
